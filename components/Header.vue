<template>
	<header class="lg:fixed lg:top-0 lg:w-full lg:z-10">
		<div class="bg-brand-second h-3"></div>
		<div class="bg-opacity-90 bg-gray-900">
			<div class="container mx-auto p-6">
				<nav>
					<div class="flex flex-wrap items-center justify-between mx-auto font-neo-sans text-lg">
						<NuxtLink class="flex items-start" to="/"><img src="~assets/images/logo.png" alt="" class="h-12 lg:h-20 mr-3" /></NuxtLink>
						<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden focus:bg-brand-first hover:bg-brand-first focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
							<span class="sr-only">Open main menu</span>
							<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
							</svg>
						</button>
						<div class="hidden w-full lg:block lg:w-auto" id="navbar-default">
							<ul class="font-medium text-center flex flex-col gap-5 lg:gap-3 lg:flex-row lg:space-x-8 p-4 lg:p-0 mt-4 lg:mt-0">
								<li>
									<NuxtLink aria-current="page" class="block no-underline text-white" to="/">{{ $t('HOME') }}</NuxtLink>
								</li>
								<li>
									<NuxtLink class="block no-underline text-white" to="/services">{{ $t('SERVICES') }}</NuxtLink>
								</li>
								<li>
									<NuxtLink class="block no-underline text-white" to="/gallery">{{ $t('GALLERY') }}</NuxtLink>
								</li>
								<li>
									<NuxtLink class="block no-underline text-white" to="/about-us">{{ $t('ABOUT_US') }}</NuxtLink>
								</li>
								<li>
									<NuxtLink class="block no-underline text-white" to="/contact">{{ $t('CONTACT') }}</NuxtLink>
								</li>
								<li @click="onChangeLanguage()">
									<span role="button" class="block no-underline text-white hover:text-violet-500">{{ $t('LANGUAGE') }}</span>
								</li>
								<li>
									<NuxtLink class="whitespace-nowrap py-3 px-4 bg-brand-second rounded-lg hover:bg-brand-first text-white no-underline" to="/franchise">{{ $t('BECOME_A_PARTNER') }}</NuxtLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>

		<div v-if="!disableSpacer" class="relative w-full hidden lg:block" :class="{}">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="h-12 block translate-x-0 w-full">
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
