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
					content: 'Burooj Air is the first Saudi company licensed for drone cleaning services. Experience 10x faster, 95% safer, and 60% more cost-effective building maintenance with our innovative drone technology. Licensed by GACA.',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'drone cleaning, facade cleaning, window cleaning, Saudi Arabia, GACA licensed, building maintenance, drone services, commercial drones, high-rise cleaning, industrial drone solutions, UAV cleaning services',
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
					content: 'Burooj Air is the first Saudi company licensed for drone cleaning services. Experience 10x faster, 95% safer, and 60% more cost-effective building maintenance with our innovative drone technology.',
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
					content: 'Burooj Air is the first Saudi company licensed for drone cleaning services. Experience 10x faster, 95% safer, and 60% more cost-effective building maintenance.',
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: 'https://buroojair.com/images/buroojair-og.png',
				},
			],
		}
	},
}
</script>
