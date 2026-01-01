<template>
	<section
		id="settingStandardSection"
		class="scroll-mt-20 bg-[#EBF5FF] py-16 font-neo-sans dark:bg-[#04061C] lg:py-32 lg:scroll-mt-24"
	>
		<div class="container mx-auto px-4 lg:px-8">
			<div class="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
				<!-- Left Side - Heading (Centered) -->
				<div ref="leftSide" class="mb-8 lg:mb-0">
					<h2 class="mb-4 text-3xl font-black leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-5xl xl:text-6xl">
						<template v-if="$t('SETTING_THE_STANDARD_FOR_WORKING_DRONES').includes('for')">
							<span class="block">{{ $t('SETTING_THE_STANDARD_FOR_WORKING_DRONES').split(' for ')[0] }}</span>
							<span class="block">for {{ $t('SETTING_THE_STANDARD_FOR_WORKING_DRONES').split(' for ')[1] }}</span>
						</template>
						<template v-else>
							{{ $t('SETTING_THE_STANDARD_FOR_WORKING_DRONES') }}
						</template>
					</h2>
				</div>

				<!-- Right Side - Content (Scrollable) -->
				<div ref="rightSide" class="content-scroll-container space-y-6 lg:space-y-8 lg:pe-4 rtl:lg:ps-4">
					<!-- Paragraph 1 -->
					<div
						ref="paragraph1"
						data-paragraph="1"
						class="paragraph-item"
					>
						<p class="paragraph-text text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
							<strong class="paragraph-strong font-semibold text-gray-900 dark:text-white">{{ $t('BUROOJ_AIR_WORKING_DRONE_EVOLVED') }}</strong>
						</p>
					</div>

					<!-- Paragraph 2 -->
					<div
						ref="paragraph2"
						data-paragraph="2"
						class="paragraph-item"
					>
						<p class="paragraph-text text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
							{{ $t('BUROOJ_AIR_WORKING_DRONE_ORIGINATED') }}
						</p>
					</div>

					<!-- Paragraph 3 -->
					<div
						ref="paragraph3"
						data-paragraph="3"
						class="paragraph-item"
					>
						<p class="paragraph-text text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
							{{ $t('THE_DRONE_HAS_BEEN_EXTENSIVELY_TESTED') }}
						</p>
					</div>

					<!-- Paragraph 4 -->
					<div
						ref="paragraph4"
						data-paragraph="4"
						class="paragraph-item"
					>
						<p class="paragraph-text text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
							{{ $t('BUROOJ_AIR_WORKING_DRONE_WAS_READY_AND_THE_COMMERCIALISING') }}
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
			scrollTriggers: [],
		}
	},
	mounted() {
		if (process.client) {
			this.initGSAP()
		}
	},
	beforeDestroy() {
		// Clean up all ScrollTrigger instances
		if (process.client) {
			if (this.scrollTriggers && this.scrollTriggers.length > 0) {
				const { ScrollTrigger } = require('gsap/ScrollTrigger')
				this.scrollTriggers.forEach((trigger) => {
					if (trigger && trigger.kill) {
						trigger.kill()
					}
				})
				this.scrollTriggers = []
				ScrollTrigger.refresh()
			}
			// Remove resize listener
			if (this._resizeHandler) {
				window.removeEventListener('resize', this._resizeHandler)
			}
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
					// Title is centered, no pinning needed
					// Animate each paragraph to stand out as it scrolls into view
					for (let i = 1; i <= 4; i++) {
						const paragraphRef = this.$refs[`paragraph${i}`]
						if (paragraphRef) {
							const textEl = paragraphRef.querySelector('.paragraph-text')
							const strongEl = paragraphRef.querySelector('.paragraph-strong')
							
							// Check if dark mode is active
							const isDark = document.documentElement.classList.contains('dark')
							const activeColor = isDark ? '#ffffff' : '#101827'
							const inactiveColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(16, 24, 39, 0.4)'
							const inactiveStrongColor = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(16, 24, 39, 0.5)'

							// Set initial state to reduced opacity
							gsap.set(paragraphRef, { 
								opacity: 0.4,
								clearProps: 'all'
							})
							if (textEl) {
								gsap.set(textEl, {
									color: inactiveColor,
									clearProps: 'all'
								})
							}
							if (strongEl) {
								gsap.set(strongEl, {
									color: inactiveStrongColor,
									clearProps: 'all'
								})
							}

							const paragraphTrigger = ScrollTrigger.create({
								trigger: paragraphRef,
								start: 'top center',
								end: 'bottom center',
								onEnter: () => {
									const isDarkNow = document.documentElement.classList.contains('dark')
									const activeColorNow = isDarkNow ? '#ffffff' : '#101827'
									
									gsap.to(paragraphRef, {
										opacity: 1,
										duration: 0.5,
										force3D: true,
									})
									if (textEl) {
										gsap.to(textEl, {
											color: activeColorNow,
											duration: 0.5,
											force3D: true,
										})
										textEl.style.setProperty('color', activeColorNow, 'important')
									}
									if (strongEl) {
										gsap.to(strongEl, {
											color: activeColorNow,
											duration: 0.5,
											force3D: true,
										})
										strongEl.style.setProperty('color', activeColorNow, 'important')
									}
									paragraphRef.style.setProperty('opacity', '1', 'important')
								},
								onLeave: () => {
									const isDarkNow = document.documentElement.classList.contains('dark')
									const inactiveColorNow = isDarkNow ? 'rgba(255, 255, 255, 0.4)' : 'rgba(16, 24, 39, 0.4)'
									const inactiveStrongColorNow = isDarkNow ? 'rgba(255, 255, 255, 0.5)' : 'rgba(16, 24, 39, 0.5)'
									
									gsap.to(paragraphRef, {
										opacity: 0.4,
										duration: 0.5,
										force3D: true,
									})
									if (textEl) {
										gsap.to(textEl, {
											color: inactiveColorNow,
											duration: 0.5,
											force3D: true,
										})
									}
									if (strongEl) {
										gsap.to(strongEl, {
											color: inactiveStrongColorNow,
											duration: 0.5,
											force3D: true,
										})
									}
								},
								onEnterBack: () => {
									const isDarkNow = document.documentElement.classList.contains('dark')
									const activeColorNow = isDarkNow ? '#ffffff' : '#101827'
									
									gsap.to(paragraphRef, {
										opacity: 1,
										duration: 0.5,
										force3D: true,
									})
									if (textEl) {
										gsap.to(textEl, {
											color: activeColorNow,
											duration: 0.5,
											force3D: true,
										})
										textEl.style.setProperty('color', activeColorNow, 'important')
									}
									if (strongEl) {
										gsap.to(strongEl, {
											color: activeColorNow,
											duration: 0.5,
											force3D: true,
										})
										strongEl.style.setProperty('color', activeColorNow, 'important')
									}
									paragraphRef.style.setProperty('opacity', '1', 'important')
								},
								onLeaveBack: () => {
									const isDarkNow = document.documentElement.classList.contains('dark')
									const inactiveColorNow = isDarkNow ? 'rgba(255, 255, 255, 0.4)' : 'rgba(16, 24, 39, 0.4)'
									const inactiveStrongColorNow = isDarkNow ? 'rgba(255, 255, 255, 0.5)' : 'rgba(16, 24, 39, 0.5)'
									
									gsap.to(paragraphRef, {
										opacity: 0.4,
										duration: 0.5,
										force3D: true,
									})
									if (textEl) {
										gsap.to(textEl, {
											color: inactiveColorNow,
											duration: 0.5,
											force3D: true,
										})
									}
									if (strongEl) {
										gsap.to(strongEl, {
											color: inactiveStrongColorNow,
											duration: 0.5,
											force3D: true,
										})
									}
								},
							})
							this.scrollTriggers.push(paragraphTrigger)
						}
					}
				}

				// Ensure mobile paragraphs are fully visible with normal colors
				if (window.innerWidth < 1024) {
					for (let i = 1; i <= 4; i++) {
						const paragraphRef = this.$refs[`paragraph${i}`]
						if (paragraphRef) {
							const textEl = paragraphRef.querySelector('.paragraph-text')
							const strongEl = paragraphRef.querySelector('.paragraph-strong')
							
							// Set mobile paragraphs to full opacity and normal colors
							gsap.set(paragraphRef, { 
								opacity: 1,
								clearProps: 'all'
							})
							if (textEl) {
								gsap.set(textEl, {
									color: '',
									clearProps: 'all'
								})
							}
							if (strongEl) {
								gsap.set(strongEl, {
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
						for (let i = 1; i <= 4; i++) {
							const paragraphRef = this.$refs[`paragraph${i}`]
							if (paragraphRef) {
								const textEl = paragraphRef.querySelector('.paragraph-text')
								const strongEl = paragraphRef.querySelector('.paragraph-strong')
								
								gsap.set(paragraphRef, { 
									opacity: 1,
									clearProps: 'all'
								})
								if (textEl) {
									gsap.set(textEl, {
										color: '',
										clearProps: 'all'
									})
								}
								if (strongEl) {
									gsap.set(strongEl, {
										color: '',
										clearProps: 'all'
									})
								}
							}
						}
					}
				}
				window.addEventListener('resize', handleResize)
				
				// Store resize handler for cleanup
				this._resizeHandler = handleResize
			})
		},
	},
}
</script>

<style scoped>
.paragraph-item {
	transition: opacity 0.5s ease;
}


@media (max-width: 1023px) {
	.paragraph-item {
		opacity: 1 !important;
	}
	
	.paragraph-text,
	.paragraph-strong {
		color: inherit !important;
	}
}
</style>
