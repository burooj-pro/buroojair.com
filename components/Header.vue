<template>
	<header class="lg:fixed lg:top-0 lg:z-10 lg:w-full">
		<div class="h-3 bg-brand-second"></div>
		<div class="bg-gray-900 bg-opacity-90">
			<div class="container mx-auto p-6">
				<nav>
					<div class="mx-auto flex flex-wrap items-center justify-between font-neo-sans text-lg">
						<NuxtLink class="flex items-start" to="/"><img src="~assets/images/logo.png" alt="" class="mr-3 h-12 lg:h-20" /></NuxtLink>
						<button data-collapse-toggle="navbar-default" type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-white hover:bg-brand-first focus:bg-brand-first focus:outline-none lg:hidden" aria-controls="navbar-default" aria-expanded="false">
							<span class="sr-only">Open main menu</span>
							<svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
							</svg>
						</button>
						<div class="hidden w-full lg:block lg:w-auto" id="navbar-default">
							<ul class="mt-4 flex flex-col gap-5 p-4 text-center font-medium lg:mt-0 lg:flex-row lg:gap-3 lg:space-x-8 lg:p-0">
								<li>
									<NuxtLink aria-current="page" class="block text-white no-underline" to="/">{{ $t('HOME') }}</NuxtLink>
								</li>
								<li>
									<NuxtLink class="block text-white no-underline" to="/services">{{ $t('SERVICES') }}</NuxtLink>
								</li>
								<li>
									<NuxtLink class="block text-white no-underline" to="/gallery">{{ $t('GALLERY') }}</NuxtLink>
								</li>
								<li>
									<NuxtLink class="block text-white no-underline" to="/about-us">{{ $t('ABOUT_US') }}</NuxtLink>
								</li>
								<li>
									<NuxtLink class="block text-white no-underline" to="/contact">{{ $t('CONTACT') }}</NuxtLink>
								</li>
								<!-- <li @click="onChangeLanguage()">
									<span role="button" class="block text-white no-underline hover:text-violet-500">{{ $t('LANGUAGE') }}</span>
								</li> -->
								<li>
									<NuxtLink class="whitespace-nowrap rounded-lg bg-brand-second px-4 py-3 text-white no-underline hover:bg-brand-first" to="/franchise">{{ $t('BECOME_A_PARTNER') }}</NuxtLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>

		<div v-if="!disableSpacer" class="relative hidden w-full lg:block" :class="{}">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="block h-12 w-full translate-x-0">
				<path class="fill-gray-900 opacity-90" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" fill="#212121"></path>
			</svg>
		</div>
	</header>
</template>

<script>
export default {
	props: ['disableSpacer'],
	data() {
		return {
			language: this.$i18n.locale ?? 'ar',
		}
	},
	methods: {
		onChangeLanguage() {
			if (this.$i18n) {
				const lan = this.language === 'en' ? 'ar' : 'en'
				window.localStorage.setItem('language', lan)
				this.$i18n.setLocale(lan)
			}
		},
	},
}
</script>
