<template>
	<div id="windowCleaningPage" class="overflow-hidden">
		<Header />
		<!-- Banner Start -->
		<SectionsHeading :title="$t('WINDOW_CLEANING')" image="~assets/images/burooj_air_drone.jpg" />

		<!-- Service Start -->
		<SectionsServicesWindowCleaning />

		<!-- ADVANTAGE SECTION -->
		<SectionsBenefits />

		<!-- Advantages SECTION -->
		<SectionsFacadeCleaningAdvantages />

		<!-- INQUIRY SECTION -->
		<SectionsInquiry />

		<!-- Contact Section -->
		<SectionsContact />

		<Footer />
	</div>
</template>
<script>
export default {
	head() {
		return {
			title: this.$t('WINDOW_CLEANING'),
		}
	},
}
</script>
