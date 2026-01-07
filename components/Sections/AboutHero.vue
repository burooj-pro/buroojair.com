<template>
	<section class="relative hero-section font-neo-sans scroll-mt-20 lg:scroll-mt-24">
		<video 
			ref="videoPlayer" 
			muted 
			autoplay 
			loop 
			playsinline 
			preload="auto"
			class="relative h-[50vh] w-full object-cover lg:h-[70vh] lg:object-cover"
			@error="handleVideoError"
			@loadeddata="handleVideoLoaded"
			@canplay="handleVideoCanPlay"
			@loadedmetadata="handleVideoMetadataLoaded"
		>
			<source src="https://hel1.your-objectstorage.com/burooj-prod/videos/heronew.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>

		<SectionsTemplatesOverlay classColor="bg-indigo-800 dark:bg-gray-900" classOpacity="bg-opacity-10 dark:bg-opacity-30" />
	</section>
</template>

<script>
export default {
	mounted() {
		if (process.client) {
			this.initVideo()
		}
	},
	methods: {
		initVideo() {
			this.$nextTick(() => {
				const video = this.$refs.videoPlayer
				if (video) {
					video.muted = true
					video.volume = 0
					video.playsInline = true
					video.autoplay = true
					video.loop = true
					video.preload = 'auto'
					
					// Ensure video is visible
					video.style.display = 'block'
					video.style.opacity = '1'
					video.style.visibility = 'visible'
					
					// Try to play
					const tryPlay = () => {
						if (video.readyState >= 2 && video.paused) {
							video.muted = true
							video.play().catch(() => {
								// Autoplay might be prevented, which is fine
							})
						}
					}
					
					video.addEventListener('loadedmetadata', tryPlay, { once: true })
					video.addEventListener('canplay', tryPlay, { once: true })
					video.addEventListener('canplaythrough', tryPlay, { once: true })
					
					// Try immediately if already ready
					if (video.readyState >= 2) {
						tryPlay()
					}
				}
			})
		},
		handleVideoError(e) {
			// Handle video error gracefully
			if (process.env.NODE_ENV === 'development') {
				console.warn('About hero video error:', e.target?.error)
			}
			// Video is decorative, so failure is not critical
		},
		handleVideoLoaded() {
			// Video loaded successfully, try to play
			if (this.$refs.videoPlayer) {
				this.$refs.videoPlayer.muted = true
				this.$refs.videoPlayer.play().catch(() => {
					// Autoplay was prevented, which is fine
				})
			}
		},
		handleVideoCanPlay() {
			// Video can play, ensure it's playing
			if (this.$refs.videoPlayer && this.$refs.videoPlayer.paused) {
				this.$refs.videoPlayer.muted = true
				this.$refs.videoPlayer.play().catch(() => {
					// Autoplay was prevented, which is fine
				})
			}
		},
		handleVideoMetadataLoaded() {
			// Metadata loaded, try to play
			if (this.$refs.videoPlayer && this.$refs.videoPlayer.readyState >= 2) {
				this.$refs.videoPlayer.muted = true
				this.$refs.videoPlayer.play().catch(() => {
					// Autoplay was prevented, which is fine
				})
			}
		},
	},
}
</script>

