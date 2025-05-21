<template>
	<div :dir="$i18n.localeProperties.dir" class="relative">
		<!-- Google Tag Manager (noscript) -->
		<noscript>
			<iframe
				src="https://www.googletagmanager.com/ns.html?id=GTM-55SGMJF5"
				height="0"
				width="0"
				style="display:none;visibility:hidden"
			></iframe>
		</noscript>
		<!-- End Google Tag Manager (noscript) -->

		<Nuxt />
	</div>
</template>

<script>
import { initCollapses } from 'flowbite'

export default {
	mounted() {
		initCollapses()
	},

	head() {
		let i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
		return {
			titleTemplate: '%s | Burooj Air',
			htmlAttrs: {
				lang: 'en',
				...i18nHead.htmlAttrs,
			},
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'We aim to contribute to a safer work day for people who work at great heights with lifts, scaffolding and for facade climbers.',
				},
			],
		}
	},
}
</script>
