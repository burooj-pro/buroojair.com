<template>
	<div id="sitemapPage" class="min-h-screen bg-[#EBF5FF] dark:bg-[#04061C] font-neo-sans">
		<Header />
		
		<div class="bg-[#EBF5FF] dark:bg-[#04061C] py-12 lg:py-20">
			<div class="container mx-auto px-4 lg:px-8">
				<h1 class="mb-4 text-4xl font-black uppercase tracking-tight text-gray-900 dark:text-white lg:text-5xl">
					{{ $t('SITEMAP') || 'Sitemap' }}
				</h1>
				<p class="mb-12 text-lg text-gray-600 dark:text-gray-300">
					{{ $t('FIND_ALL_PAGES_AND_SECTIONS') || 'Find all pages and sections of our website' }}
				</p>

				<div class="grid gap-8 lg:grid-cols-2 lg:gap-12">
					<!-- Main Pages -->
					<div>
						<h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{{ $t('MAIN_PAGES') || 'Main Pages' }}</h2>
						<ul class="space-y-3">
							<li>
								<NuxtLink to="/" class="text-blue-600 dark:text-blue-400 no-underline transition-colors hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
									{{ $t('HOME') }}
								</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/about-us" class="text-blue-600 dark:text-blue-400 no-underline transition-colors hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
									{{ $t('ABOUT_US') }}
								</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/#servicesSection" class="text-blue-600 dark:text-blue-400 no-underline transition-colors hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
									{{ $t('SERVICES') }}
								</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/projects" class="text-blue-600 dark:text-blue-400 no-underline transition-colors hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
									{{ $t('OUR_PROJECTS') || 'Our Projects' }}
								</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/contact" class="text-blue-600 dark:text-blue-400 no-underline transition-colors hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
									{{ $t('CONTACT') }}
								</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/franchise" class="text-blue-600 dark:text-blue-400 no-underline transition-colors hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
									{{ $t('BECOME_A_PARTNER') }}
								</NuxtLink>
							</li>
						</ul>
					</div>


					<!-- Business -->
					<div>
						<h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{{ $t('BUSINESS') || 'Business' }}</h2>
						<ul class="space-y-3">
							<li>
								<NuxtLink to="/franchise" class="text-blue-600 dark:text-blue-400 no-underline transition-colors hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
									{{ $t('FRANCHISE') }}
								</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/partner" class="text-blue-600 dark:text-blue-400 no-underline transition-colors hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
									{{ $t('PARTNER') || 'Partner' }}
								</NuxtLink>
							</li>
						</ul>
					</div>

					<!-- Legal & Info -->
					<div>
						<h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{{ $t('LEGAL') || 'Legal' }}</h2>
						<ul class="space-y-3">
							<li>
								<NuxtLink to="/privacy-policy" class="text-blue-600 dark:text-blue-400 no-underline transition-colors hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
									{{ $t('PRIVACY_POLICY') }}
								</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/sitemap" class="text-blue-600 dark:text-blue-400 no-underline transition-colors hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
									{{ $t('SITEMAP') || 'Sitemap' }}
								</NuxtLink>
							</li>
						</ul>
					</div>
				</div>

				<!-- Homepage Sections -->
				<div class="mt-16">
					<h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{{ $t('HOMEPAGE_SECTIONS') || 'Homepage Sections' }}</h2>
					<div class="grid gap-4 lg:grid-cols-3">
						<a href="/#servicesSection" class="block rounded-lg bg-white dark:bg-gray-800 p-4 shadow-md transition-shadow hover:shadow-lg">
							<h3 class="mb-2 font-semibold text-gray-900 dark:text-white">{{ $t('SERVICES') }}</h3>
							<p class="text-sm text-gray-600 dark:text-gray-300">{{ $t('OUR_DRONE_SERVICES') || 'Our drone services' }}</p>
						</a>
						<a href="/#missionSection" class="block rounded-lg bg-white dark:bg-gray-800 p-4 shadow-md transition-shadow hover:shadow-lg">
							<h3 class="mb-2 font-semibold text-gray-900 dark:text-white">{{ $t('MISSION') || 'Mission' }}</h3>
							<p class="text-sm text-gray-600 dark:text-gray-300">{{ $t('OUR_MISSION') || 'Our mission' }}</p>
						</a>
						<a href="/contact" class="block rounded-lg bg-white dark:bg-gray-800 p-4 shadow-md transition-shadow hover:shadow-lg">
							<h3 class="mb-2 font-semibold text-gray-900 dark:text-white">{{ $t('CONTACT') }}</h3>
							<p class="text-sm text-gray-600 dark:text-gray-300">{{ $t('GET_IN_TOUCH') || 'Get in touch' }}</p>
						</a>
					</div>
				</div>
			</div>
		</div>

		<Footer />
	</div>
</template>

<script>
export default {
	name: 'SITEMAP',
	head() {
		return {
			title: `${this.$t('SITEMAP') || 'Sitemap'} - Burooj Air`,
			link: [
				{ rel: 'canonical', href: 'https://buroojair.com/sitemap' },
			],
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Browse all pages and sections of the Burooj Air website. Find information about our drone cleaning services, projects, franchise opportunities, and more.',
				},
				{
					name: 'robots',
					content: 'noindex, follow',
				},
			],
		}
	},
}
</script>

