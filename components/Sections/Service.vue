<template>
	<section
		id="servicesSection"
		class="scroll-mt-20 bg-[#EBF5FF] py-16 font-neo-sans text-gray-800 dark:bg-[#04061C] dark:text-gray-200 lg:py-32 lg:scroll-mt-24"
	>
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Two Column Layout -->
			<div class="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
				<!-- Left Side - Title and Subtitle (Sticky with GSAP) -->
				<div ref="leftSide" class="mb-8 lg:mb-0 lg:h-fit lg:self-start">
					<h2 class="mb-4 text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl lg:text-5xl">
						{{ $t('OUR_SERVICES') }}
					</h2>
					<p class="text-base font-light text-gray-700 dark:text-gray-300 lg:text-lg lg:text-xl" style="font-weight: 100;">
						{{ $t('TRANSFORMING_INDUSTRIES_WITH_DRONE_SOLUTIONS') }}
					</p>
				</div>

				<!-- Right Side - Services List (Scrollable) -->
				<div ref="rightSide" class="services-scroll-container space-y-6 lg:space-y-8 lg:pe-4 rtl:lg:ps-4">

					<!-- Service 01 -->
					<div
						ref="service1"
						data-service="1"
						class="service-item"
					>
						<h3 class="service-title mb-2 text-lg font-bold text-gray-900 dark:text-white lg:text-xl lg:text-2xl">
							{{ $t('BUILDING_ASSET_CLEANING') }}
						</h3>
						<p class="service-desc text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base lg:text-lg">
							{{ $t('BUILDING_ASSET_CLEANING_DESC') }}
						</p>
					</div>

					<!-- Service 02 -->
					<div
						ref="service2"
						data-service="2"
						class="service-item"
					>
						<h3 class="service-title mb-2 text-lg font-bold text-gray-900 dark:text-white lg:text-xl lg:text-2xl">
							{{ $t('WEIGHTLIFTING_TRANSPORT') }}
						</h3>
						<p class="service-desc text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base lg:text-lg">
							{{ $t('WEIGHTLIFTING_TRANSPORT_DESC') }}
						</p>
					</div>

					<!-- Service 03 -->
					<div
						ref="service3"
						data-service="3"
						class="service-item"
					>
						<h3 class="service-title mb-2 text-lg font-bold text-gray-900 dark:text-white lg:text-xl lg:text-2xl">
							{{ $t('HEAT_MEASUREMENT_FIREFIGHTING') }}
						</h3>
						<p class="service-desc text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base lg:text-lg">
							{{ $t('HEAT_MEASUREMENT_FIREFIGHTING_DESC') }}
						</p>
					</div>

					<!-- Service 04 -->
					<div
						ref="service4"
						data-service="4"
						class="service-item"
					>
						<h3 class="service-title mb-2 text-lg font-bold text-gray-900 dark:text-white lg:text-xl lg:text-2xl">
							{{ $t('AERIAL_FILMING') }}
						</h3>
						<p class="service-desc text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base lg:text-lg">
							{{ $t('AERIAL_FILMING_DESC') }}
						</p>
					</div>

					<!-- Service 05 -->
					<div
						ref="service5"
						data-service="5"
						class="service-item"
					>
						<h3 class="service-title mb-2 text-lg font-bold text-gray-900 dark:text-white lg:text-xl lg:text-2xl">
							{{ $t('INDUSTRIAL_STRUCTURE') }}
						</h3>
						<p class="service-desc text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base lg:text-lg">
							{{ $t('INDUSTRIAL_STRUCTURE_DESC') }}
						</p>
					</div>

					<!-- Service 06 -->
					<div
						ref="service6"
						data-service="6"
						class="service-item"
					>
						<h3 class="service-title mb-2 text-lg font-bold text-gray-900 dark:text-white lg:text-xl lg:text-2xl">
							{{ $t('SURFACE_CLENNING') }}
						</h3>
						<p class="service-desc text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base lg:text-lg">
							{{ $t('SURFACE_CLENNING_DESC') }}
						</p>
					</div>

				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			visibleServices: [],
		}
	},
	mounted() {
		if (process.client) {
			this.initGSAP()
			this.observeServices()
		}
	},
	methods: {
		async initGSAP() {
			if (!process.client) return

			// Import GSAP and ScrollTrigger
			const { gsap } = await import('gsap')
			const { ScrollTrigger } = await import('gsap/ScrollTrigger')
			gsap.registerPlugin(ScrollTrigger)

			this.$nextTick(() => {
				const leftSide = this.$refs.leftSide
				const rightSide = this.$refs.rightSide
				const section = this.$el

				if (!leftSide || !rightSide || !section) return

				// Only apply on desktop (lg and above)
				if (window.innerWidth >= 1024) {
					// Pin the left side while scrolling
					ScrollTrigger.create({
						trigger: section,
						start: 'top top',
						end: () => `+=${rightSide.scrollHeight}`,
						pin: leftSide,
						pinSpacing: true,
						anticipatePin: 1,
					})

					// Keep all services fully visible with normal colors (no hover/scroll effects)
					for (let i = 1; i <= 6; i++) {
						const serviceRef = this.$refs[`service${i}`]
						if (serviceRef) {
							const titleEl = serviceRef.querySelector('.service-title')
							const descEl = serviceRef.querySelector('.service-desc')
							
							// Set all services to full opacity and normal colors
							gsap.set(serviceRef, { 
								opacity: 1,
								clearProps: 'all'
							})
							if (titleEl) {
								gsap.set(titleEl, {
									color: '',
									clearProps: 'all'
								})
							}
							if (descEl) {
								gsap.set(descEl, {
									color: '',
									clearProps: 'all'
								})
							}
						}
					}
				}

				// Ensure mobile services are fully visible with normal colors
				if (window.innerWidth < 1024) {
					for (let i = 1; i <= 6; i++) {
						const serviceRef = this.$refs[`service${i}`]
						if (serviceRef) {
							const titleEl = serviceRef.querySelector('.service-title')
							const descEl = serviceRef.querySelector('.service-desc')
							
							// Set mobile services to full opacity and normal colors
							gsap.set(serviceRef, { 
								opacity: 1,
								clearProps: 'all'
							})
							if (titleEl) {
								gsap.set(titleEl, {
									color: '',
									clearProps: 'all'
								})
							}
							if (descEl) {
								gsap.set(descEl, {
									color: '',
									clearProps: 'all'
								})
							}
						}
					}
				}

				// Handle window resize
				const handleResize = () => {
					ScrollTrigger.refresh()
					// Re-apply mobile styles if resized to mobile
					if (window.innerWidth < 1024) {
						for (let i = 1; i <= 6; i++) {
							const serviceRef = this.$refs[`service${i}`]
							if (serviceRef) {
								const titleEl = serviceRef.querySelector('.service-title')
								const descEl = serviceRef.querySelector('.service-desc')
								
								gsap.set(serviceRef, { 
									opacity: 1,
									clearProps: 'all'
								})
								if (titleEl) {
									gsap.set(titleEl, {
										color: '',
										clearProps: 'all'
									})
								}
								if (descEl) {
									gsap.set(descEl, {
										color: '',
										clearProps: 'all'
									})
								}
							}
						}
					}
				}
				window.addEventListener('resize', handleResize)
				
				// Clean up on component destroy
				this.$once('hook:beforeDestroy', () => {
					window.removeEventListener('resize', handleResize)
					// Kill all ScrollTrigger instances for this component
					ScrollTrigger.getAll().forEach((trigger) => {
						trigger.kill()
					})
				})
			})
		},
		observeServices() {
			if (!process.client) return

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const serviceNumber = parseInt(entry.target.getAttribute('data-service'))
							if (!this.visibleServices.includes(serviceNumber)) {
								this.visibleServices.push(serviceNumber)
							}
						}
					})
				},
				{
					threshold: 0.3,
					rootMargin: '0px 0px -50px 0px',
				}
			)

			this.$nextTick(() => {
				for (let i = 1; i <= 6; i++) {
					const serviceRef = this.$refs[`service${i}`]
					if (serviceRef) observer.observe(serviceRef)
				}
			})
		},
	},
}
</script>

<style scoped>
/* GSAP will control all opacity and colors on desktop only */

/* Mobile: Ensure services are fully visible */
@media (max-width: 1023px) {
	.service-item {
		opacity: 1 !important;
	}
	
	.service-title {
		color: inherit !important;
	}
	
	.service-desc {
		color: inherit !important;
	}
}

/* Custom scrollbar */
.services-scroll-container::-webkit-scrollbar {
	width: 6px;
}
.services-scroll-container::-webkit-scrollbar-track {
	background: transparent;
	border-radius: 10px;
}
.services-scroll-container::-webkit-scrollbar-thumb {
	background: rgba(156, 163, 175, 0.5);
	border-radius: 10px;
}
.services-scroll-container::-webkit-scrollbar-thumb:hover {
	background: rgba(156, 163, 175, 0.7);
}
.dark .services-scroll-container::-webkit-scrollbar-thumb {
	background: rgba(75, 85, 99, 0.5);
}
.dark .services-scroll-container::-webkit-scrollbar-thumb:hover {
	background: rgba(75, 85, 99, 0.7);
}

@media (min-width: 1024px) {
	.services-scroll-container {
		max-height: calc(100vh - 6rem);
		overflow-y: auto;
		padding-right: 1rem;
	}
}
</style>
