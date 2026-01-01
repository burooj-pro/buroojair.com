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
					content: 'Partner with Burooj Air and contribute to a safer work day for people who work at great heights. We replace traditional methods like lifts, scaffolding, and facade climbers with advanced drone technology.',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'Burooj Air partner, drone cleaning partner, business partnership, drone services partnership, industrial drone partner, commercial drone partner, partnership opportunity',
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
