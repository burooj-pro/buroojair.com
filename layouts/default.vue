<template>
	<div :dir="$i18n.localeProperties.dir" class="relative">
		<!-- Loading Screen -->
		<LoadingScreen />
		
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

		<transition
			name="page"
			@enter="onEnter"
			@leave="onLeave"
			@after-enter="onAfterEnter"
		>
			<Nuxt :key="$route.path" />
		</transition>

		<!-- Back to Top Button - Available on All Pages -->
		<BackToTop />
	</div>
</template>

<script>
import { initCollapses } from 'flowbite'

export default {
	mounted() {
		initCollapses()
		// Initialize theme on mount
		if (process.client && this.$theme) {
			this.$theme.init()
		}
	},
	methods: {
		async onEnter(el, done) {
			if (!process.client) {
				done()
				return
			}

			const { gsap } = await import('gsap')

			// Set initial state
			gsap.set(el, {
				opacity: 0,
				y: 20,
			})

			// Animate in
			gsap.to(el, {
				opacity: 1,
				y: 0,
				duration: 0.5,
				ease: 'power2.out',
				onComplete: done,
			})
		},
		async onLeave(el, done) {
			if (!process.client) {
				done()
				return
			}

			const { gsap } = await import('gsap')

			// Animate out
			gsap.to(el, {
				opacity: 0,
				y: -20,
				duration: 0.4,
				ease: 'power2.in',
				onComplete: done,
			})
		},
		onAfterEnter() {
			// Scroll to top after page transition
			if (process.client) {
				window.scrollTo({ top: 0, behavior: 'smooth' })
			}
		},
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

<style>
/* GSAP handles all page transitions */
</style>
