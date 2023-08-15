<template>
	<header class="md:fixed md:top-0 md:w-full md:z-50">
		<div class="bg-brand-second h-3"></div>
		<div class="bg-opacity-90 bg-gray-900">
			<div class="container mx-auto py-4 md:py-0">
			<nav class="">
				<div class="flex flex-wrap items-center justify-between mx-auto font-neo-sans text-lg">
					<NuxtLink class="flex items-start" to="/"><img src="~assets/images/logo.png" alt="" class="h-12 md:h-20 mr-3" /></NuxtLink>
					<button data-collapse-toggle="navbar-default" type="button" class="
					inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:bg-violet-400 hover:bg-violet-400 focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
						<span class="sr-only">Open main menu</span>
						<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
						</svg>
					</button>
					<div class="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul class="font-medium text-center flex flex-col gap-1 md:gap-3  p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
							<li>
								<NuxtLink aria-current="page" class="block no-underline  text-white " to="/">{{ $t("HOME") }}</NuxtLink>
							</li>
							<li>
								<NuxtLink  class="block no-underline text-white " to="/services">{{ $t("SERVICES") }}</NuxtLink>
							</li>
							<li>
								<NuxtLink  class="block no-underline  text-white " to="/gallery">{{ $t("GALLERY") }}</NuxtLink>
							</li>
							<li>
								<NuxtLink class="block no-underline text-white " to="/about-us">{{ $t("ABOUT_US") }}</NuxtLink>
							</li>
							<li>
								<NuxtLink  class="block no-underline text-white " to="/contact">{{ $t("CONTACT") }}</NuxtLink>
							</li>
							<li @click="onChangeLanguage()">
								<span role="button" class="block no-underline  text-white hover:text-violet-500">{{ $t("LANGUAGE") }}</span>
							</li>
							<li>
								<NuxtLink class="whitespace-nowrap py-3 px-4 bg-brand-second rounded-lg hover:bg-brand-first text-white no-underline" to="/franchise/franchise">{{ $t("BECOME_A_PARTNER") }}</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		</div>
		
		<div class="relative w-full hidden md:block" :class="{ 'flip-horizontal': language === 'ar' }">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="h-12 block translate-x-0 w-full">
				<path class="fill-gray-900 opacity-90" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" fill="#212121"></path>
			</svg>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			language: this.$i18n.locale ?? "ar",
		};
	},
	mounted() {
		if (this.$i18n && this.$i18n.locale) {
			this.language = this.$i18n.locale;
		}
	},
	methods: {
		onChangeLanguage() {
			if (this.$i18n) {
				const lan = this.language === "en" ? "ar" : "en";
				this.language = lan;
				window.localStorage.setItem("language", lan);
				this.$i18n.setLocale(lan);
			}
		},
	},
	computed: {
		dir() {
			return this.language === "ar" ? "rtl" : "ltr";
		},
	},
};
</script>
