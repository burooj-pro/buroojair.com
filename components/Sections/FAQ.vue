<template>
	<section class="bg-[#EBF5FF] py-16 font-neo-sans dark:bg-[#04061C] lg:py-24">
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Section Header -->
			<div ref="header" class="mb-8 text-center lg:mb-16">
				<span ref="badge" class="mb-4 pb-4 text-sm font-semibold uppercase tracking-wide text-brand-second lg:text-base">
					{{ $t('FREQUENTLY_ASKED_QUESTIONS') }}
				</span>
				<h2 ref="title" class="mb-4 mt-8 text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white lg:text-5xl">
					{{ $t('FAQ_TITLE') }}
				</h2>
				<p ref="description" class="mx-auto max-w-3xl text-base font-light text-gray-600 dark:text-gray-300 lg:text-xl">
					{{ $t('FAQ_DESC') }}
				</p>
			</div>

			<!-- FAQ Accordion -->
			<div class="mx-auto max-w-4xl">
				<div
					v-for="(faq, index) in faqs"
					:key="index"
					:ref="`faqItem${index}`"
					class="faq-item mb-8 overflow-hidden rounded-lg border border-gray-300 transition-all dark:border-gray-600 lg:mb-10"
				>
					<button
						@click="toggleFAQ(index)"
						class="flex w-full min-h-[60px] items-center justify-between px-4 py-4 text-start rtl:text-end lg:px-6 lg:py-6"
						:aria-expanded="activeIndex === index"
					>
						<span class="flex-1 pr-4 text-left text-lg font-semibold text-gray-900 dark:text-white rtl:text-right rtl:pl-4 rtl:pr-0 lg:text-xl">{{ faq.question }}</span>
						<svg
							class="h-6 w-6 flex-shrink-0 text-brand-second transition-transform"
							:class="{ 'rotate-180': activeIndex === index }"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					<div
						:ref="`faqAnswer${index}`"
						class="faq-answer px-4 pb-6 pt-0 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:px-6 lg:text-lg"
						v-html="faq.answer"
					></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: null,
			answerAnimations: {}, // Store GSAP animations for answers
		}
	},
	computed: {
		faqs() {
			return [
				{
					question: this.$t('FAQ_Q1'),
					answer: this.$t('FAQ_A1'),
				},
				{
					question: this.$t('FAQ_Q2'),
					answer: this.$t('FAQ_A2'),
				},
				{
					question: this.$t('FAQ_Q3'),
					answer: this.$t('FAQ_A3'),
				},
				{
					question: this.$t('FAQ_Q4'),
					answer: this.$t('FAQ_A4'),
				},
				{
					question: this.$t('FAQ_Q5'),
					answer: this.$t('FAQ_A5'),
				},
			]
		},
	},
	mounted() {
		if (process.client) {
			this.initGSAP()
		}
	},
	watch: {
		'$route'(to, from) {
			// Re-initialize GSAP animations when route changes
			if (process.client && to.path !== from.path) {
				this.$nextTick(() => {
					setTimeout(() => {
						this.initGSAP()
					}, 300)
				})
			}
		},
	},
	methods: {
		async initGSAP() {
			if (!process.client) return

			const { gsap } = await import('gsap')
			const { ScrollTrigger } = await import('gsap/ScrollTrigger')
			gsap.registerPlugin(ScrollTrigger)

			this.$nextTick(() => {
				// Animate header elements
				if (this.$refs.header) {
					const badge = this.$refs.badge
					const title = this.$refs.title
					const description = this.$refs.description

					if (badge && title && description) {
						gsap.set([badge, title, description], { opacity: 0, y: 30 })

						const tl = gsap.timeline({
							scrollTrigger: {
								trigger: this.$refs.header,
								start: 'top 80%',
								toggleActions: 'play none none reverse',
							},
						})

						tl.to(badge, {
							opacity: 1,
							y: 0,
							duration: 0.6,
							ease: 'power2.out',
						})
							.to(
								title,
								{
									opacity: 1,
									y: 0,
									duration: 0.7,
									ease: 'power3.out',
								},
								'-=0.4'
							)
							.to(
								description,
								{
									opacity: 1,
									y: 0,
									duration: 0.6,
									ease: 'power2.out',
								},
								'-=0.5'
							)
					}
				}

				// Initialize all answer heights to 0 (closed state)
				this.faqs.forEach((_, index) => {
					const answerEl = this.$refs[`faqAnswer${index}`]
					if (answerEl && answerEl[0]) {
						gsap.set(answerEl[0], { height: 0, opacity: 0 })
					}
				})

				// Animate FAQ items with stagger
				const faqItems = gsap.utils.toArray('.faq-item')

				if (faqItems.length > 0) {
					gsap.set(faqItems, { opacity: 0, y: 40, scale: 0.95 })

					ScrollTrigger.batch(faqItems, {
						interval: 0.1,
						batchMax: 3,
						onEnter: (batch) =>
							gsap.to(batch, {
								opacity: 1,
								y: 0,
								scale: 1,
								stagger: 0.1,
								duration: 0.6,
								ease: 'power2.out',
								overwrite: true,
							}),
						onLeave: (batch) =>
							gsap.to(batch, {
								opacity: 0.3,
								y: 20,
								scale: 0.98,
								stagger: 0.05,
								duration: 0.4,
								ease: 'power2.in',
								overwrite: true,
							}),
						onEnterBack: (batch) =>
							gsap.to(batch, {
								opacity: 1,
								y: 0,
								scale: 1,
								stagger: 0.1,
								duration: 0.6,
								ease: 'power2.out',
								overwrite: true,
							}),
						onLeaveBack: (batch) =>
							gsap.to(batch, {
								opacity: 0.3,
								y: 20,
								scale: 0.98,
								stagger: 0.05,
								duration: 0.4,
								ease: 'power2.in',
								overwrite: true,
							}),
						start: 'top 85%',
						end: 'bottom 15%',
					})
				}

				// Clean up on component destroy
				this.$once('hook:beforeDestroy', () => {
					ScrollTrigger.getAll().forEach((trigger) => {
						if (trigger.vars && trigger.vars.trigger === this.$el) {
							trigger.kill()
						}
					})
					// Kill all answer animations
					Object.values(this.answerAnimations).forEach((anim) => {
						if (anim && anim.kill) anim.kill()
					})
				})
			})
		},
		async toggleFAQ(index) {
			if (!process.client) {
				this.activeIndex = this.activeIndex === index ? null : index
				return
			}

			const { gsap } = await import('gsap')

			// If clicking the same FAQ, close it
			if (this.activeIndex === index) {
				const answerEl = this.$refs[`faqAnswer${index}`]
				if (answerEl && answerEl[0]) {
					const answer = answerEl[0]

					// Kill any existing animation
					if (this.answerAnimations[index]) {
						this.answerAnimations[index].kill()
					}

					// Animate closing
					const anim = gsap.to(answer, {
						height: 0,
						opacity: 0,
						duration: 0.3,
						ease: 'power2.in',
						onComplete: () => {
							this.activeIndex = null
						},
					})

					this.answerAnimations[index] = anim
				} else {
					this.activeIndex = null
				}
				return
			}

			// Close previously open FAQ if any
			if (this.activeIndex !== null) {
				const prevAnswerEl = this.$refs[`faqAnswer${this.activeIndex}`]
				if (prevAnswerEl && prevAnswerEl[0]) {
					// Kill any existing animation
					if (this.answerAnimations[this.activeIndex]) {
						this.answerAnimations[this.activeIndex].kill()
					}

					gsap.to(prevAnswerEl[0], {
						height: 0,
						opacity: 0,
						duration: 0.3,
						ease: 'power2.in',
					})
				}
			}

			// Open the new FAQ
			this.activeIndex = index

			// Animate opening
			this.$nextTick(() => {
				const answerEl = this.$refs[`faqAnswer${index}`]
				if (!answerEl || !answerEl[0]) return

				const answer = answerEl[0]

				// Kill any existing animation
				if (this.answerAnimations[index]) {
					this.answerAnimations[index].kill()
				}

				// Get natural height
				gsap.set(answer, { height: 'auto', opacity: 0 })
				const height = answer.offsetHeight
				gsap.set(answer, { height: 0, opacity: 0 })

				// Animate to full height
				const anim = gsap.to(answer, {
					height: height,
					opacity: 1,
					duration: 0.4,
					ease: 'power2.out',
				})

				this.answerAnimations[index] = anim
			})
		},
	},
}
</script>

<style scoped>
.faq-answer {
	overflow: hidden;
}
</style>

