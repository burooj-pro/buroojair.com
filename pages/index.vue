<template>
	<div id="indexPage" class="overflow-hidden">
		<Header />

		<!-- Hero SECTION -->
		<SectionsHeroSection />

		<!-- SERVICES SECTION -->
		<SectionsServicesSection />

		<!-- VACANT PILOT SECTION -->
		<SectionsVacantPilotPositionSection />

		<!-- ARRIVED DRONE SECTION -->
		<SectionsArrivedDroneSection />

		<!-- ADVANTAGE SECTION -->
		<SectionsAdvantageSection />

		<!-- SOLAR CELL SECTION -->
		<SectionsSolarCellsSection />

		<!-- LET TALK SECTION -->
		<SectionsLetsTalkSection />
		
		<!-- INTENTION SECTION -->
		<SectionsIntentionSection />

		<!-- ABOUT US SECTION -->
		<SectionsAboutUsSection />
		
		<!-- ESTIMATED FUTURE SECTION -->
    <SectionsEstimatedFutureSection />
		
		<!-- GLOBAL REACH SECTION -->
		<SectionsGlobalReachSection />

		<!-- WORKING GROWTH SECTION -->
		<SectionsWorkingGrowthSection />
		

		<!-- SAFETY STATEMENT SECTION -->
		<SectionsSafetyStatementSection />

		<!-- POPULATED SECTION -->
    <SectionsPopulatedSection />
		
		<!-- WORK STAND SECTION -->
    <SectionsWorkStandSection />
		
		<!-- DEVELOPMENT SECTION -->
		<SectionsDevelopmentSection />

		<!-- Contact Section -->
		<SectionsContactSection />

		<Footer />
	</div>
</template>

<script>
export default {
	name: "HOME",
	head() {
		return {
			title: `Burooj Air`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: "We aim to contribute to a safer work day for people who work at great heights with lifts, scaffolding and for facade climbers.",
				},
			],
		};
	},
	computed: {
		dir() {
			return this.language === "ar" ? "rtl" : "ltr";
		},
	},
};
</script>
