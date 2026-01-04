<template>
	<section class="relative hero-section font-neo-sans scroll-mt-20 lg:scroll-mt-24">
		<video 
			ref="videoPlayer" 
			muted 
			autoplay 
			loop 
			playsinline 
			preload="metadata"
			class="relative h-[50vh] w-full object-cover lg:h-[70vh] lg:object-cover"
			@error="handleVideoError"
		>
			<source src="/videos/hero.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>

		<SectionsTemplatesOverlay classColor="bg-indigo-800 dark:bg-gray-900" classOpacity="bg-opacity-10 dark:bg-opacity-30" />
	</section>
</template>

<script>
export default {
	methods: {
		handleVideoError() {
			// Silently handle video loading errors
			// Video is decorative, so failure is not critical
		},
	},
}
</script>

