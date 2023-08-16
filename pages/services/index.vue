<template>
	<div id="servicesPage" class="overflow-hidden font-neo-sans">
		<Header disableSpacer="true" />

		<!-- Service Hero SECTION -->
		<SectionsServicesHero />
		
		<!-- ADVANTAGE SECTION -->
		<SectionsBenefits />

		<!-- METHOD SECTION -->
		<SectionsServicesMethod />
	
		<!-- Solar Panel Sec  -->
		<SectionsServicesSolarCells />

		<!-- SETTING STANDARD SECTION -->
		<SectionsServicesSettingStandard />
		
		<!-- SAFETY SECTION -->
		<SectionsServicesSafety />

		<SectionsContact/>

		<Footer />
	</div>
</template>

<script>
export default {
	name: "SERVICES",
	head() {
		return {
			title: `${this.$t("SERVICES")}`,
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
