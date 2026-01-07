<template>
	<div id="partnerPage" class="bg-[#EBF5FF] dark:bg-[#04061C]">
		<Header disableSpacer="true" />
		<!-- Hero -->

		<SectionsWorkStand />
		<!-- Advantages SECTION -->
		<Footer />
	</div>
</template>

<script>
export default {
	name: 'BECOME_A_PARTNER',
	head() {
		return {
			title: this.$t('BECOME_A_PARTNER') + ' - Burooj Air',
			link: [
				{ rel: 'canonical', href: 'https://buroojair.com/partner' },
			],
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Partner with Burooj Air and contribute to safer workplace practices. We replace dangerous traditional methods (lifts, scaffolding, facade climbers) with advanced, licensed drone technology. Join us in revolutionizing building maintenance.',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'Burooj Air partnership, drone cleaning partner, business partnership opportunity, drone services partnership, industrial drone partner, commercial drone partner, strategic partnership, technology partnership, safety partnership, building maintenance partnership, drone technology partner',
				},
				{
					name: 'robots',
					content: 'index, follow',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Become a Partner - Burooj Air',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: 'Partner with Burooj Air and contribute to a safer work day for people who work at great heights. We replace traditional methods with advanced drone technology.',
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
					content: 'https://buroojair.com/partner',
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
					content: 'Become a Partner - Burooj Air',
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: 'Partner with Burooj Air and contribute to a safer work day for people who work at great heights. We replace traditional methods with advanced drone technology.',
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
