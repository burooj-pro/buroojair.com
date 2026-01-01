<template>
	<section id="missionSection" class="relative scroll-mt-20 overflow-hidden bg-[#EBF5FF] py-12 font-neo-sans text-gray-900 dark:bg-[#04061C] dark:text-white lg:py-40 lg:scroll-mt-24">
		<div class="container relative mx-auto px-4 lg:px-8">
			<!-- Main Content Grid - 6 Cards with Individual Sizes -->
			<div class="grid gap-4 lg:gap-6 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto]">
				<!-- Card 1: Large Video (Left, spans 5 cols, tall, spans 2 rows) -->
				<div ref="card1" class="lg:col-span-5 lg:row-span-2">
					<div class="relative group h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] rounded-xl lg:rounded-2xl overflow-hidden bg-gray-200">
						<!-- Video - Autoplay like project videos -->
						<video
							ref="missionVideo"
							:src="missionVideo"
							class="absolute inset-0 h-full w-full object-cover z-0"
							autoplay
							muted
							loop
							playsinline
							preload="metadata"
							@error="handleVideoError"
						>
							<source :src="missionVideo" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
						<!-- Linear Gradient Overlay for text visibility -->
						<div class="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
						<!-- Caption -->
						<div class="absolute top-4 left-4 rtl:right-4 z-20">
							<p class="text-sm font-medium text-white drop-shadow-lg">
								{{ $t('MISSION_IMAGE_CAPTION') || 'Precision drone cleaning in action' }}
							</p>
						</div>
					</div>
				</div>

				<!-- Card 2: Quote/Statement (Right, top, spans 4 cols) -->
				<div ref="card2" class="lg:col-span-4 lg:col-start-6 lg:row-start-1">
					<div class="card-wrapper is-glass is-climate-card h-full min-h-[250px] lg:min-h-[350px]">
						<div class="mb-4">
							<svg class="h-10 w-10" style="color: #26DF9A;" fill="currentColor" viewBox="0 0 24 24">
								<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
							</svg>
						</div>
						<p class="mb-6 text-base font-normal leading-relaxed text-gray-900 dark:text-white lg:text-xl">
							{{ $t('MISSION_QUOTE') || 'We replace high-risk manual cleaning with advanced drone technology to deliver safer, faster, and more efficient operations.' }}
						</p>
						<div class="text-sm lg:text-base">
							<p class="font-semibold text-gray-900 dark:text-white lg:text-lg">
								{{ $t('BUROOJ_AIR') || 'Burooj Air' }}
							</p>
							<p class="text-gray-700 dark:text-white/80 lg:text-base">
								{{ $t('DRONE_CLEANING_SERVICES') || 'Drone Cleaning Services' }}
							</p>
						</div>
					</div>
				</div>

				<!-- Card 3: Recognition/Credibility (Right, next to quote, spans 3 cols) -->
				<div ref="card3" class="lg:col-span-3 lg:col-start-10 lg:row-start-1">
					<div
						class="flex flex-col rounded-xl lg:rounded-2xl p-6 lg:p-8 text-white h-full min-h-[200px] lg:min-h-auto bg-cover bg-center relative overflow-hidden"
						:style="{ backgroundImage: `url(${backgroundImage})` }"
					>
						<!-- Blue overlay to match CTA card - more transparent -->
						<div class="absolute inset-0 bg-blue-600/30 z-0"></div>
						<div class="relative z-10 flex flex-col h-full">
							<p class="mb-3 text-lg font-semibold text-white lg:text-2xl">
								{{ $t('FIRST_IN_KSA_GCC') || 'First in KSA & GCC' }}
							</p>
							<p class="mb-4 text-base font-medium text-white/90 lg:text-xl">
								{{ $t('DRONE_CLEANING_SERVICES') || 'Drone Cleaning Services' }}
							</p>
							<p class="mt-auto text-sm leading-relaxed text-white/80 lg:text-lg">
								{{ $t('MISSION_RECOGNITION_DESC') || 'Pioneering drone-powered cleaning solutions across Saudi Arabia and the GCC.' }}
							</p>
						</div>
					</div>
				</div>

				<!-- Card 4: Performance Metric (Right, middle bottom, spans 4 cols) -->
				<div ref="card4" class="lg:col-span-4 lg:col-start-6 lg:row-start-2">
					<div class="card-wrapper is-glass is-climate-card h-full min-h-[250px] lg:min-h-[350px] flex flex-col">
						<div class="mb-4">
							<span class="text-4xl font-bold leading-none text-gray-900 dark:text-white lg:text-6xl">
								<template v-if="isVisible">
									<CountUp
										:start-val="0"
										:end-val="10"
										:duration="2"
										:options="{
											separator: '',
											decimal: '.',
										}"
									/>
								</template>
								<template v-else>10</template>
								<span>×</span>
							</span>
						</div>
						<p class="mb-3 text-base font-semibold lg:text-xl" style="color: #26DF9A;">
							{{ $t('FASTER_OPERATIONS') || 'Faster Operations' }}
						</p>
						<p class="mt-auto text-sm leading-relaxed text-gray-700 dark:text-white/80 lg:text-lg">
							{{ $t('FASTER_OPERATIONS_DESC') || 'Projects are completed up to ten times faster than traditional cleaning methods, reducing downtime and disruption.' }}
						</p>
					</div>
				</div>

				<!-- Card 6: CTA/Value Proposition (Right, next to Performance Metric, spans 3 cols) -->
				<div ref="card6" class="lg:col-span-3 lg:col-start-10 lg:row-start-2">
					<div class="flex flex-col rounded-xl lg:rounded-2xl bg-blue-600 p-6 lg:p-8 text-white h-full min-h-[200px] lg:min-h-auto">
						<p class="mb-6 text-base leading-relaxed text-white lg:text-xl">
							{{ $t('MISSION_CTA_DESC') || 'From inspection to execution, we deliver safe, efficient, and cost-effective drone cleaning solutions—without compromising quality.' }}
						</p>
						<!-- CTA Button -->
						<a href="https://api.whatsapp.com/send/?phone=%2B966566639994&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" class="mt-auto flex w-full min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-black transition-all hover:opacity-90 whitespace-nowrap" style="background-color: #27DF99;">
							<span>{{ $t('REQUEST_SITE_ASSESSMENT') || 'Request a Site Assessment' }}</span>
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import CountUp from 'vue-countup-v2'

export default {
	components: {
		CountUp,
	},
		data() {
			return {
				isVisible: false,
				missionVideo: require('~/assets/videos/Story 6.mp4'),
				backgroundImage: require('~/assets/images/bg.png'),
			}
		},
	mounted() {
		if (process.client) {
			this.initGSAP()
			this.observeSection()
		}
	},
	beforeDestroy() {
		if (process.client && this.$ScrollTrigger) {
			// Clean up ScrollTrigger instances
			this.$ScrollTrigger?.getAll().forEach((trigger) => {
				trigger.kill()
			})
		}
	},
	methods: {
		handleVideoError() {
			// Silently handle video loading errors
			// Video is decorative, so failure is not critical
		},
		async initGSAP() {
			if (!process.client) return

			// Import GSAP and ScrollTrigger
			const { gsap } = await import('gsap')
			const { ScrollTrigger } = await import('gsap/ScrollTrigger')
			gsap.registerPlugin(ScrollTrigger)

			this.$nextTick(() => {
				const section = this.$el
				if (!section) return

				// Get all card refs
				const cards = [
					this.$refs.card1,
					this.$refs.card2,
					this.$refs.card3,
					this.$refs.card4,
					this.$refs.card6,
				].filter(Boolean)

				if (cards.length === 0) return

				// Set initial state for all cards
				gsap.set(cards, {
					opacity: 0,
					y: 50,
					scale: 0.95,
				})

				// Create ScrollTrigger for the section
				ScrollTrigger.create({
					trigger: section,
					start: 'top 80%',
					onEnter: () => {
						// Stagger animation for cards
						gsap.to(cards, {
							opacity: 1,
							y: 0,
							scale: 1,
							duration: 0.8,
							stagger: 0.15,
							ease: 'power3.out',
						})
					},
				})
			})
		},
		observeSection() {
			if (!process.client) return
			
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting && !this.isVisible) {
							this.isVisible = true
							observer.disconnect()
						}
					})
				},
				{
					threshold: 0.2,
					rootMargin: '0px 0px -100px 0px',
				}
			)

			this.$nextTick(() => {
				const section = this.$el?.querySelector('#missionSection') || this.$el
				if (section) {
					observer.observe(section)
				}
			})
		},
	},
}
</script>

<style scoped>
.card-wrapper.is-glass.is-climate-card {
	display: grid;
	grid-template-rows: auto auto 1fr;
	padding: 30px 25px 35px;
	min-height: 250px;
	width: 100%;
	background-color: rgba(200, 200, 200, 0.2);
	border: 1px solid rgba(255, 255, 255, 0.3);
	-webkit-backdrop-filter: blur(10px) saturate(180%);
	backdrop-filter: blur(10px) saturate(180%);
	border-radius: 16px;
	transition: all 0.3s ease;
	box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
}

/* Dark theme glassy effect */
.dark .card-wrapper.is-glass.is-climate-card {
	background-color: rgba(31, 41, 55, 0.3);
	border: 1px solid rgba(255, 255, 255, 0.2);
}

@media (min-width: 1024px) {
	.card-wrapper.is-glass.is-climate-card {
		padding: 50px 45px 55px;
		min-height: 350px;
		border-radius: 20px;
	}
}

.card-wrapper.is-glass.is-climate-card:hover {
	background-color: rgba(200, 200, 200, 0.3);
	border: 1px solid rgba(255, 255, 255, 0.4);
}

.dark .card-wrapper.is-glass.is-climate-card:hover {
	background-color: rgba(31, 41, 55, 0.4);
	border: 1px solid rgba(255, 255, 255, 0.3);
}

@media screen and (max-width: 1023px) {
	.card-wrapper.is-glass.is-climate-card {
		grid-template-columns: 5fr;
		padding: 30px 25px 35px;
		min-height: 250px;
	}
}

@media screen and (max-width: 767px) {
	.card-wrapper.is-glass.is-climate-card {
		grid-row-gap: 30px;
		grid-template-rows: auto auto auto auto;
		grid-template-columns: 5fr;
		padding: 24px 20px 28px;
		min-height: 220px;
	}
}
</style>
