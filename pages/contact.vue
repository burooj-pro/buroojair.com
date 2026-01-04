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
					content: 'Contact Burooj Air for drone cleaning services, franchise opportunities, or general inquiries. Get in touch with the first licensed drone cleaning company in Saudi Arabia. Located in Khobar, Saudi Arabia.',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'contact Burooj Air, drone cleaning contact, Saudi Arabia drone services, Burooj Air phone, Burooj Air email, drone cleaning inquiry, franchise inquiry, contact drone company',
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
					content: 'Contact Burooj Air for drone cleaning services, franchise opportunities, or general inquiries. Get in touch with the first licensed drone cleaning company in Saudi Arabia.',
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
					content: 'Contact Burooj Air for drone cleaning services, franchise opportunities, or general inquiries. Get in touch with the first licensed drone cleaning company in Saudi Arabia.',
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

