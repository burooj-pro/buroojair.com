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
		>
			<source src="/videos/hero.mp4?v=2" type="video/mp4" />
			Your browser does not support the video tag.
		</video>

		<SectionsTemplatesOverlay classColor="bg-indigo-800 dark:bg-gray-900" classOpacity="bg-opacity-10 dark:bg-opacity-30" />
	</section>
</template>

<script>
export default {
	methods: {
		handleVideoError(e) {
			// Log error for debugging
			console.warn('About hero video error:', e.target?.error)
			// Video is decorative, so failure is not critical
		},
		handleVideoLoaded() {
			// Video loaded successfully, try to play
			if (this.$refs.videoPlayer) {
				this.$refs.videoPlayer.play().catch(() => {
					// Autoplay was prevented, which is fine
				})
			}
		},
	},
}
</script>

