<template>
	<div id="galleryPage" class="overflow-hidden font-neo-sans">
		<Header />

		<SectionsHeading :title="$t('GALLERY')" image="~assets/images/Burooj-Air-Photos-18.jpg" />

		<!-- GALLERY SECTION -->
		<SectionsGallery :videos="videos" :images="images" />

		<Footer />
	</div>
</template>
<script>
export default {
	data() {
		return {
			videos: ['/videos/burooj_air_-_al_qossaib (2160p).mp4','/videos/burooj_air_-_al_fozan_cleaning (1080p).mp4' ],
			images: ['/images/gallery/Burooj-Air-Photos-18.jpg', '/images/gallery/Burooj-Air-Photos-19.jpg', '/images/gallery/Burooj-Air-Photos-2.jpg', '/images/gallery/Burooj-Air-Photos-6.jpg'],
		}
	},

	name: 'Gallery',
	head() {
		return {
			title: this.$t('GALLERY') + ' - Burooj Air | Drone Cleaning Services Gallery',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.$t('Explore Burooj Air gallery featuring drone cleaning services, showcasing innovative solutions for building maintenance and high-risk tasks.'),
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'drone cleaning gallery, Burooj Air photos, drone cleaning videos, building maintenance drones, facade cleaning drones, high-rise cleaning solutions',
				},
				{
					name: 'robots',
					content: 'index, follow',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Burooj Air Gallery | Innovative Drone Cleaning Solutions',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.$t('Discover the gallery of Burooj Air, showcasing drone cleaning services for safer and more efficient building maintenance.'),
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: '/images/gallery/Burooj-Air-Photos-18.jpg',
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: 'https://buroojair.com/gallery',
				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image',
				},
			],
		}
	},
}
</script>
