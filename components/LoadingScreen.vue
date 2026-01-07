<template>
	<div
		v-if="isLoading"
		ref="loadingScreen"
		class="fixed inset-0 z-[100] flex items-center justify-center bg-[#04061C]"
	>
		<div class="relative">
			<!-- Logo Container with Fill Effect -->
			<div ref="logoContainer" class="relative">
				<!-- Base Logo (Transparent) -->
				<img
					ref="baseLogo"
					src="~assets/images/loading.png"
					alt="Burooj Air Logo"
					width="128"
					height="128"
					class="h-24 w-auto lg:h-32"
					:style="{ opacity: baseOpacity }"
				/>
				
				<!-- Filled Logo (Solid) - Revealed from bottom to top -->
				<div
					ref="filledLogo"
					class="absolute inset-0 overflow-hidden"
					:style="{ 
						clipPath: `inset(${100 - fillProgress}% 0 0 0)`,
						transition: 'clip-path 0.1s linear'
					}"
				>
					<img
						src="~assets/images/loading.png"
						alt="Burooj Air Logo"
						width="128"
						height="128"
						class="h-24 w-auto opacity-100 lg:h-32"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LoadingScreen',
	data() {
		return {
			isLoading: true,
			fillProgress: 0,
			baseOpacity: 0.3,
		}
	},
		mounted() {
		if (process.client) {
			const startTime = Date.now()
			const minDisplayTime = 100 // Minimum 0.1 seconds (very fast)
			const maxDisplayTime = 1500 // Maximum 1.5 seconds (fallback - critical!)
			
			// CRITICAL: Fallback timeout - always hide after max time
			const fallbackTimeout = setTimeout(() => {
				if (process.env.NODE_ENV === 'development') {
					console.warn('[LoadingScreen] Fallback timeout - forcing hide')
				}
				this.isLoading = false // Force hide immediately - no animation
			}, maxDisplayTime)
			
			// Function to hide loading screen
			const hideAfterAnimation = () => {
				clearTimeout(fallbackTimeout)
				// Try GSAP animation, but with timeout
				const animationTimeout = setTimeout(() => {
					// If animation takes too long, force hide
					this.isLoading = false
				}, 1000)
				
				this.initLoadingAnimation(() => {
					clearTimeout(animationTimeout)
					const elapsed = Date.now() - startTime
					const remaining = Math.max(0, minDisplayTime - elapsed)
					setTimeout(() => {
						this.hideLoadingScreen()
					}, remaining)
				}).catch(() => {
					clearTimeout(animationTimeout)
					// If animation fails, hide immediately
					this.isLoading = false
				})
			}
			
			// Immediate check - if page is already ready, hide quickly
			if (document.readyState === 'complete' || document.readyState === 'interactive') {
				this.$nextTick(() => {
					hideAfterAnimation()
				})
			} else {
				// Wait for DOMContentLoaded (faster than load event)
				document.addEventListener('DOMContentLoaded', () => {
					this.$nextTick(() => {
						hideAfterAnimation()
					})
				}, { once: true })
				
				// Also listen for load event as backup
				window.addEventListener('load', () => {
					this.$nextTick(() => {
						hideAfterAnimation()
					})
				}, { once: true })
			}
		}
	},
	methods: {
		async initLoadingAnimation(onComplete) {
			try {
				const { gsap } = await import('gsap')
				
				// Animate fill from bottom to top (0% to 100%)
				const timeline = gsap.timeline({
					onComplete,
				})
				
				timeline.to(this, {
					fillProgress: 100,
					duration: 0.8, // Faster animation
					ease: 'power2.out',
				})
			} catch (error) {
				// If GSAP fails to load, just complete immediately
				if (process.env.NODE_ENV === 'development') {
					console.warn('[LoadingScreen] GSAP failed to load, skipping animation:', error)
				}
				if (onComplete) {
					onComplete()
				}
			}
			// Return promise for error handling
			return Promise.resolve()
		},
		async hideLoadingScreen() {
			try {
				const { gsap } = await import('gsap')
				
				// Fade out base logo and then the entire screen
				const timeline = gsap.timeline()
				
				timeline
					.to(
						this,
						{
							baseOpacity: 0,
							duration: 0.3,
							ease: 'power2.in',
						},
						0
					)
					.to(
						this.$refs.loadingScreen,
						{
							opacity: 0,
							duration: 0.4,
							ease: 'power2.in',
							onComplete: () => {
								this.isLoading = false
							},
						},
						'-=0.2'
					)
			} catch (error) {
				// If GSAP fails, just hide immediately
				if (process.env.NODE_ENV === 'development') {
					console.warn('[LoadingScreen] GSAP failed during hide, hiding immediately:', error)
				}
				this.isLoading = false
			}
		},
	},
}
</script>

<style scoped>
/* Smooth clip-path transitions */
div[ref="filledLogo"] {
	will-change: clip-path;
}
</style>

