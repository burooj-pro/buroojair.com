<template>
	<div id="partnerPage">
		<Header disableSpacer="true" />
		<!-- Hero -->

		<SectionsWorkStand />
		<!-- ADVANTAGE SECTION -->
		<SectionsBenefits />
		<!-- Advantages SECTION -->
		<Footer />
	</div>
</template>

<script>
export default {
	name: "BECOME_A_PARTNER",
	head() {
		return {
			title: this.$t("BECOME_A_PARTNER"),
			meta: [
				{
					hid: "description",
					name: "description",
					content: "We aim to contribute to a safer work day for people who work at great heights with lifts, scaffolding and for facade climbers.",
				},
			],
		};
	},
};
</script>
