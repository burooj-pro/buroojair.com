<template>
	<div id="aboutUsPage" class="overflow-hidden">
		<Header />

		<!-- Intention SECTION -->
		<SectionsPrivacyPolicy class="pt-20" />

		<SectionsContact />
		<Footer />
	</div>
</template>

<script>
export default {
	name: 'PRIVACY_POLICY',
	head() {
		return {
			title: this.$t('PRIVACY_POLICY'),
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'We aim to contribute to a safer work day for people who work at great heights with lifts, scaffolding and for facade climbers.',
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
