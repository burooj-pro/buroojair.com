<template>
	<footer class="bg-[#EBF5FF] py-12 font-neo-sans text-gray-900 dark:bg-[#04061C] dark:text-white lg:py-16">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
				<!-- Company Info -->
				<div class="sm:col-span-2 lg:col-span-1">
					<NuxtLink to="/" class="mb-6 inline-block">
						<img src="~assets/images/logo-dark.png" alt="Burooj Air Logo" width="120" height="48" class="h-10 w-auto lg:h-12 object-contain dark:hidden" />
						<img src="~assets/images/logo.png" alt="Burooj Air Logo" width="120" height="48" class="hidden h-10 w-auto lg:h-12 object-contain dark:inline-block" />
					</NuxtLink>
					<p class="mb-6 text-base font-bold leading-relaxed text-gray-600 dark:text-gray-400">
						{{ $t('FOR_INQUIRIES_PLEASE_USE_OUR_LISTED_CONTACT_INFO') || 'The first Saudi team licensed for drone cleaning services.' }}
					</p>
					<!-- Social Media Links -->
					<div class="flex flex-wrap gap-3">
						<a href="https://www.instagram.com/burooj_air?igsh=bnp3cDFlb2FncTgw" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="inline-flex items-center justify-center min-h-[44px] min-w-[44px] text-gray-600 transition-colors hover:text-brand-second dark:text-gray-400 dark:hover:text-brand-second focus:outline-none focus:ring-2 focus:ring-brand-second focus:ring-offset-2 rounded-lg">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
						</a>
						<a href="https://www.linkedin.com/company/buroojair" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="inline-flex items-center justify-center min-h-[44px] min-w-[44px] text-gray-600 transition-colors hover:text-brand-second dark:text-gray-400 dark:hover:text-brand-second focus:outline-none focus:ring-2 focus:ring-brand-second focus:ring-offset-2 rounded-lg">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
						</a>
						<a href="https://x.com/burooj_air?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="inline-flex items-center justify-center min-h-[44px] min-w-[44px] text-gray-600 transition-colors hover:text-brand-second dark:text-gray-400 dark:hover:text-brand-second focus:outline-none focus:ring-2 focus:ring-brand-second focus:ring-offset-2 rounded-lg">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
						</a>
						<a href="https://www.tiktok.com/@buroojair?_t=ZS-8stA3h37dnr&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="inline-flex items-center justify-center min-h-[44px] min-w-[44px] text-gray-600 transition-colors hover:text-brand-second dark:text-gray-400 dark:hover:text-brand-second focus:outline-none focus:ring-2 focus:ring-brand-second focus:ring-offset-2 rounded-lg">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
						</a>
					</div>
				</div>

				<!-- Quick Links -->
				<div>
					<h4 class="mb-6 text-lg font-bold text-gray-900 dark:text-white lg:text-xl">{{ $t('QUICK_LINKS') || 'Quick Links' }}</h4>
					<ul class="space-y-3">
						<li>
							<a @click.prevent="navigateToLink('/')" href="/" class="block min-h-[44px] py-2 text-base font-bold text-gray-600 no-underline transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white cursor-pointer">
								{{ $t('HOME') }}
							</a>
						</li>
						<li>
							<a @click.prevent="navigateToLink('/about-us')" href="/about-us" class="block min-h-[44px] py-2 text-base font-bold text-gray-600 no-underline transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white cursor-pointer">
								{{ $t('ABOUT_US') }}
							</a>
						</li>
						<li>
							<a @click.prevent="navigateToLink('/#servicesSection')" href="/#servicesSection" class="block min-h-[44px] py-2 text-base font-bold text-gray-600 no-underline transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white cursor-pointer">
								{{ $t('SERVICES') }}
							</a>
						</li>
						<li>
							<a @click.prevent="navigateToLink('/projects')" href="/projects" class="block min-h-[44px] py-2 text-base font-bold text-gray-600 no-underline transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white cursor-pointer">
								{{ $t('OUR_PROJECTS') }}
							</a>
						</li>
						<li>
							<a @click.prevent="navigateToLink('/contact')" href="/contact" class="block min-h-[44px] py-2 text-base font-bold text-gray-600 no-underline transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white cursor-pointer">
								{{ $t('CONTACT') }}
							</a>
						</li>
					</ul>
				</div>

				<!-- Legal -->
				<div>
					<h4 class="mb-6 text-lg font-bold text-gray-900 dark:text-white lg:text-xl">{{ $t('LEGAL') }}</h4>
					<ul class="space-y-3">
						<li>
							<NuxtLink to="/privacy-policy" class="block min-h-[44px] py-2 text-base font-bold text-gray-600 no-underline transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
								{{ $t('PRIVACY_POLICY') }}
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/franchise" class="block min-h-[44px] py-2 text-base font-bold text-gray-600 no-underline transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
								{{ $t('BECOME_A_PARTNER') }}
							</NuxtLink>
						</li>
					</ul>
				</div>

				<!-- Contact Info -->
				<div>
					<h4 class="mb-6 text-lg font-bold text-gray-900 dark:text-white lg:text-xl">{{ $t('CONTACT') }}</h4>
					<ul class="space-y-3 text-base font-bold text-gray-600 dark:text-gray-400">
						<li class="break-words">
							<a href="mailto:contact@buroojair.com" class="hover:text-gray-900 dark:hover:text-white transition-colors font-bold">
								contact@buroojair.com
							</a>
						</li>
						<li>
							<a href="tel:+966566639994" class="hover:text-gray-900 dark:hover:text-white transition-colors font-bold">
								+966 56 663 9994
							</a>
						</li>
						<li class="font-bold">
							{{ $t('KHOBAR_SAUDI_ARABIA') }}
						</li>
					</ul>
				</div>
			</div>

			<!-- Copyright -->
			<div class="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
				<p class="text-base font-bold text-gray-600 dark:text-gray-400">
					{{ $t('COPY_RIGHT') || '© 2025 Burooj Air. All rights reserved.' }}
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	methods: {
		navigateToLink(path) {
			if (!process.client) return
			
			// Check if path contains a hash (section anchor)
			if (path.includes('#')) {
				const [pagePath, sectionId] = path.split('#')
				
				// If we're not on the target page, navigate to it first
				if (this.$route.path !== pagePath) {
					this.$router.push(path).then(() => {
						this.$nextTick(() => {
							this.scrollToSection(sectionId)
						})
					})
				} else {
					// Already on the page, just scroll to section
					this.scrollToSection(sectionId)
				}
			} else {
				// Regular page navigation
				if (this.$route.path !== path) {
					this.$router.push(path)
				} else {
					// Already on the page, scroll to top
					window.scrollTo({ top: 0, behavior: 'smooth' })
				}
			}
		},
		scrollToSection(sectionId) {
			if (!process.client || !sectionId) return
			
			this.$nextTick(() => {
				const element = document.getElementById(sectionId)
				if (element) {
					const header = document.querySelector('header')
					const headerHeight = header ? header.offsetHeight : 100
					const elementPosition = element.getBoundingClientRect().top
					const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20
					
					window.scrollTo({
						top: offsetPosition,
						behavior: 'smooth'
					})
				}
			})
		},
	},
}
</script>

<style scoped>
/* Footer link styling - improved for better clarity and readability */
footer ul li a {
	text-transform: none;
	font-weight: 500 !important; /* Medium weight for better visibility */
	letter-spacing: 0.02em;
	line-height: 1.6;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

/* Footer headings */
footer h4 {
	font-weight: 700 !important; /* Bold for section headings */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
