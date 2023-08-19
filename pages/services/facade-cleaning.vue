<template>
	<div id="windowCleaningPage" class="overflow-hidden">
		<Header />
		<!-- Banner Start -->
		<SectionsHeading :title="$t('HIGH_RISE_FACADE_CLEANING')" image="~assets/images/burooj_air_drone.jpg" />

		<!-- Service Start -->
		<SectionsServicesFacadeCleaning />

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
			title: this.$t('HIGH_RISE_FACADE_CLEANING'),
		}
	},
}
</script>
