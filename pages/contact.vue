<template>
	<div id="contactPage" class="overflow-hidden">
		<Header disableSpacer="true" />

		<!-- Contact Map -->
		<section class="contactMap lg:mt-36">
			<iframe
				class="w-full h-96"
				loading="lazy"
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d265.8312530146434!2d50.22431416573115!3d26.307557957450317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e72624c069cf%3A0x476e625d6d9bfa10!2zUHJvbW90aW9uIEVmZmljaWVuY3kgQWR2ZXJ0aXNpbmcgfCDZg9mB2KfYodipINin2YTYudix2LYg2YTZhNiv2LnYp9mK2Kkg2YjYp9mE2KXYudmE2KfZhg!5e0!3m2!1sen!2ssa!4v1690806487768!5m2!1sen!2ssa"
				title="Prince Turki St. - Khobar - Saudi Arabia"
				aria-label="Prince Turki St. - Khobar - Saudi Arabia"></iframe>
		</section>

		<!-- Contact Location SECTION -->
		<section class="py-12 lg:py-24">
			<div class="container mx-auto">
				<div class="p-8 space-y-6">
					<h3 class="text-xl lg:text-3xl font-bold">{{ $t("BUROOJ_AIR_HEADQUARTERS") }}</h3>
					<p>{{ $t("KHOBAR_SAUDI_ARABIA") }}</p>
					<p>
						<strong>{{ $t("GENERAL_INQUIRY") }}:</strong><br />contact@buroojair.com
					</p>
					<p>
						<strong>{{ $t("OFFICE_HOURS") }}:</strong><br />{{ $t("SUNDAY_TO_THURSDAY_08_00_AM_TO_5_00_PM") }}
					</p>
					<p>
						<strong>{{ $t("ADDRESS") }}:</strong>
						<br />
						<strong>{{ $t("BUROOJ_AIR") }}</strong>
						<br />
						{{ $t("KHOBAR_SAUDI_ARABIA") }}
					</p>
					<p>
						<strong>{{ $t("PHONE") }}:</strong>
						<br />
						+966566639994
					</p>
				</div>
			</div>
		</section>

		<SectionsContact />
		<Footer />
	</div>
</template>

<script>
export default {
	name: "CONTACT",
	head() {
		return {
			title: this.$t("CONTACT"),
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
