<template>
	<div id="aboutUsPage" class="overflow-hidden bg-[#EBF5FF] dark:bg-[#04061C]">
		<Header />

		<!-- Hero Section -->
		<SectionsAboutHero />

		<!-- About Section - Matching Home Page Style -->
		<section class="bg-[#EBF5FF] py-16 font-neo-sans dark:bg-[#04061C] lg:py-24">
			<div class="container mx-auto px-4 lg:px-8">
				<!-- Text Content -->
				<div class="max-w-6xl">
					<p class="text-start rtl:text-end font-light text-gray-900 dark:text-white leading-tight text-2xl md:text-2xl lg:text-4xl">
						{{ aboutDescription }}
					</p>
				</div>
			</div>
		</section>

		<!-- Mission Section - Company Mission & Values (from home page) -->
		<SectionsMission />

		<!-- Setting Standards Section -->
		<SectionsServicesSettingStandard />

		<!-- Team Section -->
		<SectionsGeneralWorkingteams />

		<!-- Our Clients Section - Trust Signal -->
		<SectionsOurClients />

		<BackToTop />
		<Footer />
	</div>
</template>

<script>
export default {
	name: 'ABOUT_US',
	data() {
		return {}
	},
	computed: {
		aboutDescription() {
			return this.$t('ABOUT_US_HERO_DESC') || 'Burooj Air is a pioneering drone company based in the Kingdom of Saudi Arabia, leading the way in cutting-edge UAV (Unmanned Aerial Vehicle) solutions for diverse industrial and commercial applications. As the official GCC agent for TT Aviation, we bring the most advanced drone technology to the region, redefining traditional operations with innovation and precision.'
		},
	},
	head() {
		return {
			title: this.$t('ABOUT_US') + ' - Burooj Air | Drone Cleaning & Industrial Solutions',
			link: [
				{ rel: 'canonical', href: 'https://buroojair.com/about-us' },
			],
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Learn about Burooj Air, the first licensed drone cleaning company in Saudi Arabia. Discover our innovative UAV solutions for building maintenance, industrial cleaning, and commercial services. Licensed by GACA.',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'about Burooj Air, drone company Saudi Arabia, first licensed drone cleaning, GACA licensed drone services, UAV company Khobar, drone services history, Burooj Air team, drone cleaning pioneers, Saudi drone innovation, licensed drone operators, commercial drone services, industrial drone solutions, drone technology Saudi Arabia',
				},
				{
					name: 'robots',
					content: 'index, follow',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'About Burooj Air | Pioneering Drone Solutions in Saudi Arabia',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.$t('Discover Burooj Air, the first licensed drone team in Saudi Arabia offering cutting-edge solutions for industrial and commercial applications.') || 'Discover Burooj Air, the first licensed drone team in Saudi Arabia offering cutting-edge solutions for industrial and commercial applications.',
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: 'https://buroojair.com/images/buroojair-og.png',
				},
				{
					hid: 'og:image:width',
					property: 'og:image:width',
					content: '1200',
				},
				{
					hid: 'og:image:height',
					property: 'og:image:height',
					content: '630',
				},
				{
					hid: 'og:image:type',
					property: 'og:image:type',
					content: 'image/png',
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: 'https://buroojair.com/about-us',
				},
				{
					hid: 'og:type',
					property: 'og:type',
					content: 'website',
				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image',
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: 'About Burooj Air | Pioneering Drone Solutions in Saudi Arabia',
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.$t('Discover Burooj Air, the first licensed drone team in Saudi Arabia offering cutting-edge solutions for industrial and commercial applications.') || 'Discover Burooj Air, the first licensed drone team in Saudi Arabia offering cutting-edge solutions for industrial and commercial applications.',
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: 'https://buroojair.com/images/buroojair-og.png',
				},
			],
			script: [
				{
					type: 'application/ld+json',
					json: {
						'@context': 'https://schema.org',
						'@type': 'AboutPage',
						'name': 'About Burooj Air',
						'description': 'Learn about Burooj Air, the first licensed drone cleaning company in Saudi Arabia.',
						'url': 'https://buroojair.com/about-us',
						'mainEntity': {
							'@type': 'Organization',
							'name': 'Burooj Air',
							'foundingDate': '2020',
							'founder': {
								'@type': 'Person',
								'name': 'Burooj Air Team'
							}
						}
					}
				}
			],
		}
	},
}
</script>
