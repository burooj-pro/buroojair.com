<template>
	<div class="overflow-hidden">
		<Header />

        <SectionsEstimatedFuture />

        <SectionsPopulated />

        <SectionsWorkingGrowth />

        <SectionsFamily />

        <SectionsWorkStand />

        <SectionsServicesWindowCleaning />

		<!-- Contact Section -->
		<SectionsContact />

		<Footer />
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: `Debugging`,
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
