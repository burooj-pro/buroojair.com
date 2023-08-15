<template>
	<div id="indexPage" class="overflow-hidden">
		<Header />

		<!-- Hero SECTION -->
		<SectionsHero />

		<!-- SERVICES SECTION -->
		<SectionsServices />

		<!-- VACANT PILOT SECTION -->
		<SectionsVacantPilotPosition />

		<!-- ARRIVED DRONE SECTION -->
		<SectionsArrivedDrone />

		<!-- ADVANTAGE SECTION -->
		<SectionsAdvantage />

		<!-- SOLAR CELL SECTION -->
		<SectionsSolarCells />

		<!-- LET TALK SECTION -->
		<SectionsLetsTalk />

		<!-- INTENTION SECTION -->
		<SectionsIntention />
		
		<!-- ABOUT US SECTION -->
		<SectionsAboutUs />

		<!-- ESTIMATED FUTURE SECTION -->
		<SectionsEstimatedFuture />

		<!-- GLOBAL REACH SECTION -->
		<SectionsGlobalReach />

		<!-- WORKING GROWTH SECTION -->
		<SectionsWorkingGrowth />

		<!-- SAFETY STATEMENT SECTION -->
		<SectionsSafetyStatement />

		<!-- POPULATED SECTION -->
		<SectionsPopulated />

		<!-- WORK STAND SECTION -->
		<SectionsWorkStand />

		<!-- DEVELOPMENT SECTION -->
		<SectionsDevelopment />

		<!-- Contact Section -->
		<SectionsContact />

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
