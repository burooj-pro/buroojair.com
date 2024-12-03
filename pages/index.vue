<template>
	<div id="indexPage" class="overflow-hidden">
		<Header />

		<!-- Hero SECTION -->
		<SectionsHero />

		<!-- SERVICES SECTION -->
		<SectionsServices />
		

		<SectionsService />
		<!-- VACANT PILOT SECTION -->
		<!-- <SectionsVacantPilotPosition /> -->

				<!-- POPULATED SECTION -->
				<!-- <SectionsPopulated /> -->

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

			<!-- POPULATED SECTION -->
			<SectionsPopulated />
					<!-- TTA SECTION -->
					<SectionsTTA />

		<!-- GLOBAL REACH SECTION -->
		<!-- <SectionsGlobalReach /> -->

		<!-- ESTIMATED FUTURE SECTION -->
		<SectionsEstimatedFuture />



		<!-- WORKING GROWTH SECTION -->
		<SectionsWorkingGrowth />

		<!-- SAFETY STATEMENT SECTION -->
		<SectionsSafetyStatement />

	

		<!-- WORK STAND SECTION -->
		<!-- <SectionsWorkStand /> -->

		<!-- DEVELOPMENT SECTION -->
		<SectionsDevelopment />
		<!-- <SectionsFamily /> -->

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
