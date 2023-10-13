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
		<SectionsBenefits />

		<!-- SOLAR CELL SECTION -->
		<SectionsSolarCells />

		<!-- LET TALK SECTION -->
		<SectionsLetsTalk />

		<!-- INTENTION SECTION -->
		<SectionsIntention />

		<!-- ABOUT US SECTION -->
		<SectionsAboutUs />

		<!-- GLOBAL REACH SECTION -->
		<SectionsGlobalReach />

		<!-- ESTIMATED FUTURE SECTION -->
		<SectionsEstimatedFuture />

			<!-- TTA SECTION -->
		<SectionsTTA />

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
	name: 'HOME',
	head() {
		return {
			title: `Home`,
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
