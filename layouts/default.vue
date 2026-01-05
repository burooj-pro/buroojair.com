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
	watch: {
		'$route'(to, from) {
			// When route changes, refresh ScrollTrigger after a short delay
			if (process.client && to.path !== from.path) {
				this.$nextTick(() => {
					setTimeout(async () => {
						try {
							const { ScrollTrigger } = await import('gsap/ScrollTrigger')
							ScrollTrigger.refresh()
						} catch (error) {
							console.warn('ScrollTrigger refresh failed:', error)
						}
					}, 200)
				})
			}
		},
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
		async onAfterEnter() {
			// Scroll to top after page transition
			if (process.client) {
				// Use instant scroll to prevent any delay or smooth scroll issues
				window.scrollTo(0, 0)
				// Also set scroll position directly as a fallback
				document.documentElement.scrollTop = 0
				document.body.scrollTop = 0
				
				// Refresh ScrollTrigger after page transition
				// This ensures all scroll-triggered animations work correctly
				try {
					const { ScrollTrigger } = await import('gsap/ScrollTrigger')
					// Wait a bit for DOM to settle
					setTimeout(() => {
						ScrollTrigger.refresh()
						// Ensure we're still at top after ScrollTrigger refresh
						window.scrollTo(0, 0)
					}, 100)
				} catch (error) {
					console.warn('ScrollTrigger refresh failed:', error)
				}
				
				// Re-initialize Flowbite collapses
				this.$nextTick(() => {
					try {
						const { initCollapses } = require('flowbite')
						initCollapses()
					} catch (error) {
						console.warn('Flowbite init failed:', error)
					}
				})
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
