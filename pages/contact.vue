<template>
	<div id="contactPage" class="overflow-hidden bg-[#EBF5FF] dark:bg-[#04061C]">
		<Header />

		<!-- Contact Section -->
		<SectionsContact />

		<BackToTop />
		<Footer />
	</div>
</template>

<script>
export default {
	name: 'Contact',
	head() {
		return {
			title: this.$t('CONTACT_US') || 'Contact Us - Burooj Air',
			link: [
				{ rel: 'canonical', href: 'https://buroojair.com/contact' },
			],
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Contact Burooj Air for professional drone cleaning services in Saudi Arabia. Get a free quote for facade cleaning, window cleaning, or industrial maintenance. Located in Khobar. Licensed by GACA.',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'contact Burooj Air, drone cleaning quote, Saudi Arabia drone services contact, Burooj Air Khobar, drone cleaning inquiry, free quote drone cleaning, contact licensed drone company, drone services phone number, franchise inquiry, partnership inquiry, drone cleaning consultation',
				},
				{
					name: 'robots',
					content: 'index, follow',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Contact Us - Burooj Air | Drone Cleaning Services',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: 'Contact Burooj Air for drone cleaning services, franchise opportunities, or general inquiries. Get in touch with the first licensed drone cleaning team in Saudi Arabia.',
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
					content: 'https://buroojair.com/contact',
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
					content: 'Contact Us - Burooj Air | Drone Cleaning Services',
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: 'Contact Burooj Air for drone cleaning services, franchise opportunities, or general inquiries. Get in touch with the first licensed drone cleaning team in Saudi Arabia.',
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
						'@type': 'ContactPage',
						'name': 'Contact Burooj Air',
						'description': 'Contact Burooj Air for professional drone cleaning services in Saudi Arabia.',
						'url': 'https://buroojair.com/contact'
					}
				}
			],
		}
	},
}
</script>

<style scoped>
/* Adjust padding to avoid header overlap */
#contactPage {
	padding-top: 4rem;
}

@media (min-width: 1024px) {
	#contactPage {
		padding-top: 6rem;
	}
}
</style>

