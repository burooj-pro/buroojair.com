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
						<div class="flex space-x-4 mt-2">
							<a href="https://www.instagram.com/burooj_air?igsh=bnp3cDFlb2FncTgw" target="_blank" aria-label="Instagram" class="text-brand-second hover:text-brand-first">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
							</a>
							<a href="https://www.linkedin.com/company/buroojair" target="_blank" aria-label="LinkedIn" class="text-brand-second hover:text-brand-first">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
							</a>
							<a href="https://x.com/burooj_air?s=21" target="_blank" aria-label="Twitter" class="text-brand-second hover:text-brand-first">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
					
						</a>

						<a href="https://www.tiktok.com/@buroojair?_t=ZS-8stA3h37dnr&_r=1" target="_blank" aria-label="tiktok" class="text-brand-second hover:text-brand-first">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
						</a>
					</div>
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
