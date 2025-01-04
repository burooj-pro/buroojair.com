<template>
	<div id="aboutUsPage" class=" bg-purple-50 pt-40">
		<Header />

		<!-- Hero Section -->
		<SectionsAboutHero />

		<!-- Intention Section -->
		<!-- <section class="bg-white p-6 text-center">
			<h2 class="text-2xl font-bold mb-4">{{ $t('OUR_MISSION') }}</h2>
			<p class="text-lg">{{ $t('We strive to make high-risk tasks safer and more efficient through innovative drone technology.') }}</p>
		</section> -->

		<!-- Setting Standards Section -->
		<SectionsServicesSettingStandard />

		<!-- Future Development Section -->
		<!-- <section class="bg-gray-100 p-6">
			<h3 class="text-xl font-bold mb-4">{{ $t('FUTURE_DEVELOPMENT') }}</h3>
			<p>{{ $t('Our continued focus on R&D ensures that we remain at the forefront of drone technology, bringing new solutions to market that improve safety and efficiency.') }}</p>
		</section> -->

		<!-- Contact Section -->
		<SectionsContact />

		<Footer />
	</div>
</template>

<script>
export default {
	name: 'ABOUT_US',
	head() {
		return {
			title: this.$t('ABOUT_US') + ' - Burooj Air | Drone Cleaning & Industrial Solutions',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.$t('Burooj Air is a pioneering drone company in Saudi Arabia, providing innovative drone solutions for cleaning, weightlifting, firefighting, and filming.'),
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'drone cleaning, drone services Saudi Arabia, industrial drone solutions, facade cleaning drones, weightlifting drones, firefighting drones, drone filming services, Burooj Air',
				},
				{
					name: 'robots',
					content: 'index, follow',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Burooj Air | Pioneering Drone Solutions in Saudi Arabia',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.$t('Discover Burooj Air, the first licensed drone company in Saudi Arabia offering cutting-edge solutions for industrial and commercial applications.'),
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: '@/assets/images/BuroojAir_4.png',
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: 'https://buroojair.com/about-us',
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
