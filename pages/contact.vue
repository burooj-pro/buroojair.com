<template>
	<div id="contactPage" class="overflow-hidden">
		<Header disableSpacer="true" />

		<!-- Contact Map -->
		<section class="contactMap lg:mt-36">
			<iframe
				class="h-96 w-full"
				loading="lazy"
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d265.8312530146434!2d50.22431416573115!3d26.307557957450317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e72624c069cf%3A0x476e625d6d9bfa10!2zUHJvbW90aW9uIEVmZmljaWVuY3kgQWR2ZXJ0aXNpbmcgfCDZg9mB2KfYodipINin2YTYudix2LYg2YTZhNiv2LnYp9mK2Kkg2YjYp9mE2KXYudmE2KfZhg!5e0!3m2!1sen!2ssa!4v1690806487768!5m2!1sen!2ssa"
				title="Prince Turki St. - Khobar - Saudi Arabia"
				aria-label="Prince Turki St. - Khobar - Saudi Arabia"></iframe>
		</section>

		<!-- Contact Location SECTION -->
		<section class="py-12 lg:py-24">
			<div class="container mx-auto">
				<div class="space-y-6 p-8">
					<h3 class="text-xl font-bold lg:text-3xl">{{ $t('BUROOJ_AIR_HEADQUARTERS') }}</h3>
					<p>{{ $t('KHOBAR_SAUDI_ARABIA') }}</p>
					<p>
						<strong>{{ $t('GENERAL_INQUIRY') }}:</strong><br />
						<a href="mailto:contact@buroojair.com" class="text-brand-second hover:underline">contact@buroojair.com</a>
					</p>
					<p>
						<strong>{{ $t('OFFICE_HOURS') }}:</strong><br />{{ $t('SUNDAY_TO_THURSDAY_08_00_AM_TO_5_00_PM') }}
					</p>
					<p>
						<strong>{{ $t('ADDRESS') }}:</strong>
						<br />
						<strong>{{ $t('BUROOJ_AIR') }}</strong>
						<br />
						{{ $t('KHOBAR_SAUDI_ARABIA') }}
					</p>
					<p>
						<strong>{{ $t('PHONE') }}:</strong>
						<br />
						<a href="tel:+966566639994" class="text-brand-second hover:underline">+966 56 663 9994</a>
					</p>
					<p>
						<strong>{{ $t('SOCIAL') }}:</strong>
						<br />
						<a href="https://www.instagram.com/buroojair" target="_blank" class="text-brand-second hover:underline">Instagram</a>
						<br />
						<a href="https://www.linkedin.com/company/buroojair" target="_blank" class="text-brand-second hover:underline">LinkedIn</a>
						<br />
						<a href="https://twitter.com/buroojair" target="_blank" class="text-brand-second hover:underline">Twitter</a>
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
	name: 'CONTACT',
	head() {
		return {
			title: this.$t('CONTACT') + ' - Burooj Air | Drone Cleaning Services Contact',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Get in touch with Burooj Air for inquiries about drone cleaning services, building maintenance solutions, and high-risk task support in Khobar, Saudi Arabia.',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'Burooj Air contact, drone cleaning services contact, building maintenance support, high-risk task inquiries, contact Khobar drone services',
				},
				{
					name: 'robots',
					content: 'index, follow',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Contact Burooj Air | Drone Cleaning Services in Khobar',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: 'Reach out to Burooj Air for drone cleaning services, building maintenance, and innovative solutions in Khobar, Saudi Arabia.',
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: '/images/BuroojAir.png',
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: 'https://buroojair.com/contact',
				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image',
				},
			],
		}
	},
}
</script>
