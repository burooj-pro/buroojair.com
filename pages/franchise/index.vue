<template>
	<div id="franchisePage" class="overflow-hidden bg-[#EBF5FF] dark:bg-[#04061C]">
		<Header />

		<!-- Hero Section -->
		<section class="flex min-h-screen items-center bg-[#EBF5FF] font-neo-sans dark:bg-[#04061C]">
			<div class="container mx-auto px-4 text-left lg:px-8">
				<h1 class="mb-6 text-4xl font-black text-gray-900 dark:text-white lg:text-7xl">
					{{ $t('BECOME_A_BUROOJ_AIR_FRANCHISE_PARTNER') || 'Become a Burooj Air Franchise Partner' }}
				</h1>
				<p class="mb-8 max-w-3xl text-xl font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-2xl">
					{{ $t('JOIN_PIONEERING_DRONE_CLEANING_BRAND') || 'Join a pioneering drone cleaning brand and bring advanced, licensed UAV services to your market.' }}
				</p>
				<a
					href="#franchiseFormSection"
					class="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-base font-bold text-white no-underline transition-colors hover:bg-blue-700 lg:px-10 lg:py-4 lg:text-lg"
				>
					{{ $t('APPLY_FOR_FRANCHISE') || 'Apply for Franchise' }}
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		</section>

		<!-- Working Drone Growth Section -->
		<SectionsFranchiseWorkingGrowth />

		<!-- Join Us Section -->
		<SectionsFranchiseJoinUs />

		<BackToTop />
		<Footer />
	</div>
</template>

<script>
export default {
	name: 'Franchise',
	head() {
		return {
			title: this.$t('FRANCHISE') + ' - Burooj Air | Become a Franchise Partner',
			link: [
				{ rel: 'canonical', href: 'https://buroojair.com/franchise' },
			],
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Become a Burooj Air franchise partner and bring licensed drone cleaning services to your market. Join the first licensed drone cleaning company in Saudi Arabia and GCC. Exclusive franchise opportunities available.',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'Burooj Air franchise, drone cleaning franchise, franchise opportunity Saudi Arabia, drone services franchise, UAV franchise, business opportunity, franchise partner, drone cleaning business',
				},
				{
					name: 'robots',
					content: 'index, follow',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Franchise Opportunity - Burooj Air | Become a Franchise Partner',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: 'Become a Burooj Air franchise partner and bring licensed drone cleaning services to your market. Join the first licensed drone cleaning company in Saudi Arabia and GCC.',
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: 'https://buroojair.com/images/buroojair-og.png',
				},
				{
					hid: 'og:image:width',
					property: 'og:image:width',
					content: '1200',
				},
				{
					hid: 'og:image:height',
					property: 'og:image:height',
					content: '630',
				},
				{
					hid: 'og:image:type',
					property: 'og:image:type',
					content: 'image/png',
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: 'https://buroojair.com/franchise',
				},
				{
					hid: 'og:type',
					property: 'og:type',
					content: 'website',
				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image',
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: 'Franchise Opportunity - Burooj Air | Become a Franchise Partner',
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: 'Become a Burooj Air franchise partner and bring licensed drone cleaning services to your market. Join the first licensed drone cleaning company in Saudi Arabia and GCC.',
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: 'https://buroojair.com/images/buroojair-og.png',
				},
			],
		}
	},
}
</script>
