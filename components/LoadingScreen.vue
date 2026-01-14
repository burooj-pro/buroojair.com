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
			const minDisplayTime = 800 // Minimum time to show loading animation
			const maxDisplayTime = 15000 // Maximum 15 seconds - then force hide
			
			// CRITICAL: Fallback timeout - always hide after max time
			const fallbackTimeout = setTimeout(() => {
				if (process.env.NODE_ENV === 'development') {
					console.warn('[LoadingScreen] Max time reached, forcing hide')
				}
				this.isLoading = false // Force hide immediately
			}, maxDisplayTime)
			
			// Function to check if critical assets are loaded
			const checkAssetsReady = () => {
				return new Promise((resolve) => {
					// Find all critical videos: hero videos and project section videos
					const allVideos = document.querySelectorAll('video')
					const heroVideos = Array.from(allVideos).filter(v => 
						v.classList.contains('hero-video') || 
						v.classList.contains('hero-video-mobile') ||
						v.closest('#heroSection')
					)
					
					// Find project section videos (OurRecentWork section)
					const projectVideos = Array.from(allVideos).filter(v => {
						// Check if video is in OurRecentWork section
						const section = v.closest('section')
						return section && (
							section.id === 'ourRecentWork' ||
							section.querySelector('h2')?.textContent?.includes('Recent Work') ||
							section.querySelector('[class*="recent"]') ||
							// Check if video has data-src and is in a project-like container
							(v.hasAttribute('data-src') && v.closest('.grid'))
						)
					})
					
					// If no videos found yet, wait a bit more
					if (heroVideos.length === 0) {
						resolve(false)
						return
					}
					
					// Check if videos are ready (canplay or playing)
					const isVideoReady = (video) => {
						if (!video) return true // If video doesn't exist, consider it ready
						
						// For videos with data-src (lazy loaded), check if src is set and ready
						if (video.hasAttribute('data-src') && !video.src) {
							return false // Video hasn't started loading yet
						}
						
						// Video is ready if:
						// - readyState >= 3 (HAVE_FUTURE_DATA or HAVE_ENOUGH_DATA)
						// - OR video is playing
						// - OR video has loaded data and can play
						return video.readyState >= 3 || 
						       !video.paused || 
						       video.currentTime > 0 ||
						       (video.readyState >= 2 && video.buffered.length > 0)
					}
					
					// Check poster images are loaded
					const checkPosterImage = (posterSrc) => {
						if (!posterSrc || posterSrc === '') return Promise.resolve(true) // No poster, consider ready
						return new Promise((resolvePoster) => {
							const img = new Image()
							img.onload = () => resolvePoster(true)
							img.onerror = () => resolvePoster(true) // If poster fails, still continue
							img.src = posterSrc
							// Timeout after 1 second - don't wait too long for poster
							setTimeout(() => resolvePoster(true), 1000)
						})
					}
					
					// Check all hero videos (critical - must be ready)
					const heroVideosReady = heroVideos.every(video => isVideoReady(video))
					
					if (!heroVideosReady) {
						resolve(false)
						return
					}
					
					// Check project videos (also critical for homepage)
					// If project videos exist, they should also be ready
					const projectVideosReady = projectVideos.length === 0 || 
						projectVideos.every(video => isVideoReady(video))
					
					if (!projectVideosReady) {
						resolve(false)
						return
					}
					
					// Get poster images from all videos
					const allCriticalVideos = [...heroVideos, ...projectVideos]
					const posters = allCriticalVideos
						.map(v => v.getAttribute('poster') || '')
						.filter(p => p !== '')
					
					// Check posters (if any)
					if (posters.length === 0) {
						resolve(true) // No posters to check, all videos are ready
						return
					}
					
					Promise.all(posters.map(checkPosterImage)).then((postersReady) => {
						// All posters ready
						resolve(postersReady.every(r => r === true))
					})
				})
			}
			
			// Function to hide loading screen when assets are ready
			const hideWhenReady = async () => {
				clearTimeout(fallbackTimeout)
				
				// Wait for DOM to be ready
				await new Promise(resolve => {
					if (document.readyState === 'complete' || document.readyState === 'interactive') {
						resolve()
					} else {
						document.addEventListener('DOMContentLoaded', resolve, { once: true })
					}
				})
				
				// Give components time to mount and start loading
				await new Promise(resolve => setTimeout(resolve, 100))
				
				// Poll for assets to be ready
				const checkInterval = setInterval(async () => {
					const assetsReady = await checkAssetsReady()
					
					if (assetsReady) {
						clearInterval(checkInterval)
						
						const elapsed = Date.now() - startTime
						const remaining = Math.max(0, minDisplayTime - elapsed)
						
						// Wait minimum display time, then hide
						setTimeout(() => {
							this.initLoadingAnimation(() => {
								this.hideLoadingScreen()
							}).catch(() => {
								// If animation fails, just hide
								this.isLoading = false
							})
						}, remaining)
					}
				}, 100) // Check every 100ms
				
				// Also listen for video events directly on all videos
				const setupVideoListeners = () => {
					const allVideos = document.querySelectorAll('video')
					const heroVideos = Array.from(allVideos).filter(v => 
						v.classList.contains('hero-video') || 
						v.classList.contains('hero-video-mobile') ||
						v.closest('#heroSection')
					)
					
					// Find project section videos
					const projectVideos = Array.from(allVideos).filter(v => {
						const section = v.closest('section')
						return section && (
							section.id === 'ourRecentWork' ||
							section.querySelector('h2')?.textContent?.includes('Recent Work') ||
							section.querySelector('[class*="recent"]') ||
							(v.hasAttribute('data-src') && v.closest('.grid'))
						)
					})
					
					// Combine all critical videos
					const criticalVideos = [...heroVideos, ...projectVideos]
					
					criticalVideos.forEach(video => {
						const onVideoReady = () => {
							// Video is ready, check all assets again
							checkAssetsReady().then(ready => {
								if (ready) {
									clearInterval(checkInterval)
									const elapsed = Date.now() - startTime
									const remaining = Math.max(0, minDisplayTime - elapsed)
									setTimeout(() => {
										this.initLoadingAnimation(() => {
											this.hideLoadingScreen()
										}).catch(() => {
											this.isLoading = false
										})
									}, remaining)
								}
							})
						}
						
						// Listen for multiple events to catch when video is ready
						video.addEventListener('canplay', onVideoReady, { once: true })
						video.addEventListener('canplaythrough', onVideoReady, { once: true })
						video.addEventListener('playing', onVideoReady, { once: true })
						video.addEventListener('loadeddata', onVideoReady, { once: true })
					})
				}
				
				// Setup listeners immediately and also retry after a delay
				setupVideoListeners()
				setTimeout(setupVideoListeners, 500) // Retry after components mount
				setTimeout(setupVideoListeners, 1000) // Retry again
			}
			
			// Start checking when page loads
			hideWhenReady()
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

