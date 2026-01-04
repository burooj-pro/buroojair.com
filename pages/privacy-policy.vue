<template>
	<div id="aboutUsPage" class="overflow-hidden bg-[#EBF5FF] dark:bg-[#04061C]">
		<Header />

		<!-- Privacy Policy SECTION -->
		<section class="bg-[#EBF5FF] py-16 dark:bg-[#04061C] lg:py-24">
			<SectionsPrivacyPolicy />
		</section>

		<Footer />
	</div>
</template>

<script>
export default {
	name: 'PRIVACY_POLICY',
	head() {
		return {
			title: this.$t('PRIVACY_POLICY') + ' - Burooj Air',
			link: [
				{ rel: 'canonical', href: 'https://buroojair.com/privacy-policy' },
			],
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Burooj Air Privacy Policy. Learn how we collect, use, and protect your personal information. Last updated: January 1, 2026.',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'Burooj Air privacy policy, data protection, privacy statement, GDPR, data privacy',
				},
				{
					name: 'robots',
					content: 'noindex, follow',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Privacy Policy - Burooj Air',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: 'Burooj Air Privacy Policy. Learn how we collect, use, and protect your personal information.',
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
					content: 'https://buroojair.com/privacy-policy',
				},
				{
					hid: 'og:type',
					property: 'og:type',
					content: 'website',
				},
			],
		}
	},
}
</script>

<style>
/* Adjust padding to avoid header overlap */
#aboutUsPage {
	padding-top: 4rem; /* Adjust this value based on your header's height */
}

@media (min-width: 1024px) {
	#aboutUsPage {
		padding-top: 6rem; /* For larger screens if needed */
	}
}
</style>
