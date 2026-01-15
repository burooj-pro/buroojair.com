<template>
	<div>
		<!-- Progress Bar - Always Visible -->
		<div class="fixed top-0 left-0 rtl:right-0 z-[60] h-1 w-full bg-gray-200 dark:bg-gray-800">
			<div 
				class="h-full bg-brand-second transition-all duration-150 ease-out"
				:style="{ width: scrollProgress + '%' }"
			></div>
		</div>

		<header 
			:class="[
				'fixed top-0 left-0 rtl:right-0 w-full z-50 py-3 sm:py-4 lg:py-4 xl:py-6 transition-transform duration-300 ease-in-out',
				isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
			]"
		>
			<div class="container mx-auto px-4 lg:px-4 xl:px-6">
				<nav class="mx-auto max-w-7xl rounded-2xl bg-gray-800/80 backdrop-blur-md border border-gray-700/50 shadow-lg">
					<div class="flex items-center justify-between p-3 sm:p-4 font-neo-sans text-lg lg:p-4">
					<!-- Logo and Navigation Links (Left Side) -->
					<div class="flex items-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
						<NuxtLink class="flex items-center flex-shrink-0" to="/">
							<img src="~assets/images/logo.png" alt="Burooj Air Logo" width="120" height="48" class="h-7 w-auto lg:h-10" />
						</NuxtLink>
						
						<!-- Desktop Navigation Links -->
						<div class="hidden lg:flex lg:items-center">
							<ul class="flex gap-0.5 lg:gap-1 space-x-0.5 lg:space-x-1 p-0 flex-wrap">
							<li>
								<NuxtLink 
									class="block min-h-[44px] rounded-lg px-2 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-semibold text-white no-underline transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 whitespace-nowrap"
									to="/about-us"
								>
									{{ $t('ABOUT_US') }}
								</NuxtLink>
							</li>
							<li>
								<NuxtLink 
									class="block min-h-[44px] rounded-lg px-2 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-semibold text-white no-underline transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 whitespace-nowrap"
									to="/#servicesSection"
									@click.native="smoothScroll('#servicesSection')"
								>
									{{ $t('SERVICES') }}
								</NuxtLink>
							</li>
							<li>
								<NuxtLink 
									class="block min-h-[44px] rounded-lg px-2 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-semibold text-white no-underline transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 whitespace-nowrap"
									to="/projects"
								>
									{{ $t('OUR_PROJECTS') || 'Projects' }}
								</NuxtLink>
							</li>
							<li>
								<NuxtLink 
									class="block min-h-[44px] rounded-lg px-2 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-semibold text-white no-underline transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 whitespace-nowrap"
									to="/franchise"
								>
									{{ $t('FRANCHISE') }}
								</NuxtLink>
							</li>
						</ul>
						</div>
					</div>
					
					<!-- Right Side - Desktop: Language Switcher, Theme Toggle and Contact Button -->
					<div class="hidden lg:flex items-center gap-2 xl:gap-3">
						<!-- Language Switcher -->
						<button
							@click="onChangeLanguage"
							class="min-h-[44px] rounded-lg px-2 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-semibold text-white no-underline transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 whitespace-nowrap"
							:aria-label="$i18n.locale === 'en' ? 'Switch to Arabic' : 'Switch to English'"
						>
							{{ $i18n.locale === 'en' ? 'العربية' : 'English' }}
						</button>
						<ThemeToggle />
						<NuxtLink 
							class="whitespace-nowrap rounded-lg bg-blue-600 px-4 lg:px-5 xl:px-6 py-2 lg:py-2.5 text-sm lg:text-base font-bold text-white no-underline min-h-[44px] flex items-center justify-center transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400" 
							to="/contact"
						>
							{{ $t('CONTACT_US') }}
						</NuxtLink>
					</div>
					
					<!-- Mobile: Theme Toggle and Menu Button -->
					<div class="flex items-center gap-3 lg:hidden">
						<ThemeToggle />
						<button 
							@click="toggleMenu"
							type="button" 
							class="inline-flex h-11 w-11 items-center justify-center rounded-lg p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all hover:bg-white/10" 
							aria-controls="navbar-default" 
							:aria-expanded="isMenuOpen"
						>
							<span class="sr-only">Open main menu</span>
							<svg v-if="!isMenuOpen" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
							<svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
				
				<!-- Mobile Navigation Menu -->
				<div 
					:class="isMenuOpen ? 'block' : 'hidden'" 
					class="w-full lg:hidden border-t border-gray-700/50" 
					id="navbar-default"
				>
					<ul class="flex flex-col gap-1 px-4 py-4">
						<li>
							<NuxtLink 
								@click.native="closeMenu"
								class="block min-h-[44px] rounded-lg px-4 py-3 text-base font-semibold text-white no-underline transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
								to="/about-us"
							>
								{{ $t('ABOUT_US') }}
							</NuxtLink>
						</li>
						<li>
							<NuxtLink 
								@click.native="handleServicesClick"
								class="block min-h-[44px] rounded-lg px-4 py-3 text-base font-semibold text-white no-underline transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
								to="/#servicesSection"
							>
								{{ $t('SERVICES') }}
							</NuxtLink>
						</li>
						<li>
							<NuxtLink 
								@click.native="closeMenu"
								class="block min-h-[44px] rounded-lg px-4 py-3 text-base font-semibold text-white no-underline transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
								to="/projects"
							>
								{{ $t('OUR_PROJECTS') || 'Projects' }}
							</NuxtLink>
						</li>
						<li>
							<NuxtLink 
								@click.native="closeMenu"
								class="block min-h-[44px] rounded-lg px-4 py-3 text-base font-semibold text-white no-underline transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
								to="/franchise"
							>
								{{ $t('FRANCHISE') }}
							</NuxtLink>
						</li>
						<!-- Contact Us Button - Mobile Only -->
						<li class="mt-2">
							<NuxtLink 
								@click.native="closeMenu"
								class="block w-full min-h-[44px] rounded-lg bg-blue-600 px-4 py-3 text-center text-base font-bold text-white no-underline transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
								to="/contact"
							>
								{{ $t('CONTACT_US') }}
							</NuxtLink>
						</li>
						<!-- Language Switcher - Mobile Only -->
						<li class="mt-2">
							<button
								@click="onChangeLanguage"
								class="block w-full min-h-[44px] rounded-lg px-4 py-3 text-center text-base font-semibold text-white no-underline transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
								:aria-label="$i18n.locale === 'en' ? 'Switch to Arabic' : 'Switch to English'"
							>
								{{ $i18n.locale === 'en' ? 'العربية' : 'English' }}
							</button>
						</li>
					</ul>
				</div>
				</nav>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	props: {
		disableSpacer: {
			type: Boolean,
			default: false,
		},
	},
		data() {
			return {
				isMenuOpen: false,
				scrollProgress: 0,
				isNavbarVisible: true,
				lastScrollY: 0,
			}
		},
	methods: {
		onChangeLanguage() {
			if (this.$i18n && process.client) {
				const currentLocale = this.$i18n.locale
				const newLocale = currentLocale === 'en' ? 'ar' : 'en'
				localStorage.setItem('language', newLocale)
				this.$i18n.setLocale(newLocale)
			}
		},
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen
		},
		closeMenu() {
			this.isMenuOpen = false
		},
		handleServicesClick() {
			this.closeMenu()
			if (this.$route.path === '/') {
				this.smoothScroll('#servicesSection')
			} else {
				this.$router.push('/#servicesSection')
			}
		},
		smoothScroll(target) {
			const element = document.querySelector(target)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' })
			}
		},
		handleScroll() {
			if (!process.client) return
			
			const currentScrollY = window.scrollY
			
			// Calculate scroll progress
			const windowHeight = window.innerHeight
			const documentHeight = document.documentElement.scrollHeight
			const scrollableHeight = documentHeight - windowHeight
			const progress = scrollableHeight > 0 ? (currentScrollY / scrollableHeight) * 100 : 0
			this.scrollProgress = Math.min(100, Math.max(0, progress))
			
			// Show navbar at top of page
			if (currentScrollY < 10) {
				this.isNavbarVisible = true
				this.lastScrollY = currentScrollY
				return
			}
			
			// Determine scroll direction
			const scrollDifference = currentScrollY - this.lastScrollY
			
			// Show navbar when scrolling up, hide when scrolling down
			if (scrollDifference < 0) {
				// Scrolling up
				this.isNavbarVisible = true
			} else if (scrollDifference > 0 && currentScrollY > 100) {
				// Scrolling down and past 100px
				this.isNavbarVisible = false
			}
			
			this.lastScrollY = currentScrollY
		},
	},
		mounted() {
			// Close menu when clicking outside
			if (process.client) {
				document.addEventListener('click', (e) => {
					if (!this.$el.contains(e.target)) {
						this.isMenuOpen = false
					}
				})
				
				// Scroll detection for progress bar
				window.addEventListener('scroll', this.handleScroll)
			}
		},
	beforeDestroy() {
		if (process.client) {
			window.removeEventListener('scroll', this.handleScroll)
		}
	},
}
</script>

<style scoped>
/* Navigation link styling - improved for better UX and clarity */
nav ul li a,
header a,
header button {
	text-transform: none;
	letter-spacing: 0.02em;
	line-height: 1.5;
	font-weight: 600 !important; /* Ensure navbar links are bold and clear */
	font-size: 1rem !important; /* Ensure base font size for clarity */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
