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
			// Start animation immediately, but ensure minimum display time
			const startTime = Date.now()
			const minDisplayTime = 1500 // Minimum 1.5 seconds
			
			this.initLoadingAnimation(() => {
				const elapsed = Date.now() - startTime
				const remaining = Math.max(0, minDisplayTime - elapsed)
				
				setTimeout(() => {
					this.hideLoadingScreen()
				}, remaining)
			})
		}
	},
	methods: {
		async initLoadingAnimation(onComplete) {
			const { gsap } = await import('gsap')
			
			// Animate fill from bottom to top (0% to 100%)
			// Also gradually increase base logo opacity for smoother effect
			const timeline = gsap.timeline({
				onComplete,
			})
			
			timeline.to(this, {
				fillProgress: 100,
				duration: 1.8,
				ease: 'power2.out',
			})
		},
		async hideLoadingScreen() {
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
						duration: 0.5,
						ease: 'power2.in',
						onComplete: () => {
							this.isLoading = false
						},
					},
					'-=0.2'
				)
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

