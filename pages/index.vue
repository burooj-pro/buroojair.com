<template>
	<div id="indexPage" class="overflow-hidden bg-[#EBF5FF] dark:bg-[#04061C]">
		<Header />

		<!-- Hero SECTION - First Impression & Lead Generation -->
		<SectionsHero />

		<!-- SERVICES OVERVIEW - What We Do (Quick Intro) -->
		<SectionsServices />

		<!-- MISSION SECTION - Company Mission & Values -->
		<SectionsMission />
				<!-- DETAILED SERVICES - Numbered Service Cards (Deeper Dive) -->
				<SectionsService />

		<!-- Our Recent Work Section - Social Proof Early -->
		<SectionsOurRecentWork />

		<!-- Franchise Section -->
		<SectionsLetsTalk />

		<!-- TTA SECTION - Partnership & Credibility -->
		<SectionsTTA />

		<!-- FAQ - Addresses Objections -->
		<SectionsFAQ />

		<!-- Our Clients Section - Trust Signal -->
		<SectionsOurClients />

		<Footer />
	</div>
</template>

<script>
export default {
	name: 'HOME',
	head() {
		return {
			title: `Burooj Air - First Licensed Drone Cleaning Services in Saudi Arabia`,
			link: [
				{ rel: 'canonical', href: 'https://buroojair.com/' },
			],
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Burooj Air is the first Saudi team licensed for drone cleaning services. Experience 10x faster, 95% safer, and 60% more cost-effective building maintenance with our innovative drone technology. Licensed by GACA. Get a free quote today.',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'drone cleaning Saudi Arabia, facade cleaning drones, window cleaning drones, GACA licensed drone services, high-rise building cleaning, industrial drone solutions, commercial drone cleaning, UAV cleaning services, drone facade cleaning, building maintenance drones, Saudi Arabia drone company, licensed drone operators, drone cleaning services Khobar, eco-friendly building cleaning, precision drone cleaning, automated facade cleaning, drone window washing, commercial building cleaning, industrial facility cleaning, drone-powered cleaning solutions',
				},
				{
					name: 'robots',
					content: 'index, follow',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Burooj Air - First Licensed Drone Cleaning Services in Saudi Arabia',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: 'Burooj Air is the first Saudi team licensed for drone cleaning services. Experience 10x faster, 95% safer, and 60% more cost-effective building maintenance with our innovative drone technology.',
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
					content: 'https://buroojair.com/',
				},
				{
					hid: 'og:type',
					property: 'og:type',
					content: 'website',
				},
				{
					hid: 'og:site_name',
					property: 'og:site_name',
					content: 'Burooj Air',
				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image',
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: 'Burooj Air - First Licensed Drone Cleaning Services in Saudi Arabia',
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: 'Burooj Air is the first Saudi team licensed for drone cleaning services. Experience 10x faster, 95% safer, and 60% more cost-effective building maintenance.',
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
						'@type': 'Organization',
						'name': 'Burooj Air',
						'url': 'https://buroojair.com',
						'logo': 'https://buroojair.com/images/buroojair-og.png',
						'description': 'First Saudi team licensed for drone cleaning services. Providing innovative, safe, and cost-effective building maintenance solutions.',
						'address': {
							'@type': 'PostalAddress',
							'addressLocality': 'Khobar',
							'addressCountry': 'SA',
							'addressRegion': 'Eastern Province'
						},
						'contactPoint': {
							'@type': 'ContactPoint',
							'contactType': 'Customer Service',
							'areaServed': 'SA',
							'availableLanguage': ['en', 'ar']
						},
						'sameAs': []
					}
				},
				{
					type: 'application/ld+json',
					json: {
						'@context': 'https://schema.org',
						'@type': 'LocalBusiness',
						'name': 'Burooj Air',
						'image': 'https://buroojair.com/images/buroojair-og.png',
						'description': 'First licensed drone cleaning services in Saudi Arabia. Specializing in facade cleaning, window cleaning, and industrial maintenance using advanced UAV technology.',
						'address': {
							'@type': 'PostalAddress',
							'addressLocality': 'Khobar',
							'addressCountry': 'SA',
							'addressRegion': 'Eastern Province'
						},
						'geo': {
							'@type': 'GeoCoordinates',
							'latitude': '26.2172',
							'longitude': '50.1971'
						},
						'url': 'https://buroojair.com',
						'telephone': '',
						'priceRange': '$$',
						'openingHoursSpecification': {
							'@type': 'OpeningHoursSpecification',
							'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
							'opens': '08:00',
							'closes': '17:00'
						}
					}
				},
				{
					type: 'application/ld+json',
					json: {
						'@context': 'https://schema.org',
						'@type': 'Service',
						'serviceType': 'Drone Cleaning Services',
						'provider': {
							'@type': 'Organization',
							'name': 'Burooj Air'
						},
						'areaServed': {
							'@type': 'Country',
							'name': 'Saudi Arabia'
						},
						'description': 'Professional drone cleaning services for facades, windows, and industrial facilities. Licensed by GACA, providing safe and efficient building maintenance solutions.',
						'offers': {
							'@type': 'Offer',
							'description': 'Drone cleaning services for commercial and industrial buildings'
						}
					}
				}
			],
		}
	},
}
</script>
