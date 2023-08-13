<template>
	<header class="fixed-top z-3" style="">
		<div class="mb-4 bg-info" style="height: 10px; --bs-bg-opacity: .1;"></div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-12">
					<div class="navigation">
						<nav class="navbar navbar-expand-md">
							<NuxtLink class="navbar-brand" to="/"><img src="~assets/images/logo.png" alt="" class="img-fluid" /></NuxtLink>
							<button
								class="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span></span>
								<span></span>
								<span></span>
							</button>
							<div class="collapse navbar-collapse" id="navbarSupportedContent">
								<ul class="navbar-nav" :style="`margin-${dir === 'ltr' ? 'left' : 'right'}: auto !important;`">
									<li class="nav-item">
										<NuxtLink class="nav-link active" to="/">{{ $t("HOME") }}</NuxtLink>
									</li>
									<li class="nav-item">
										<NuxtLink class="nav-link" to="/services">{{ $t("SERVICES") }}</NuxtLink>
									</li>
									<!-- <li class="nav-item">
                    <NuxtLink class="nav-link" to="/location">{{
                      $t("LOCATIONS")
                    }}</NuxtLink>
                  </li> -->
									<li class="nav-item">
										<NuxtLink class="nav-link" to="/gallery">{{ $t("GALLERY") }}</NuxtLink>
									</li>
									<!-- <li class="nav-item">
                    <NuxtLink class="nav-link" to="/news">{{
                      $t("NEWS")
                    }}</NuxtLink>
                  </li> -->
									<li class="nav-item">
										<NuxtLink class="nav-link" to="/about-us">{{ $t("ABOUT_US") }}</NuxtLink>
									</li>
									<li class="nav-item">
										<NuxtLink class="nav-link" to="/contact">{{ $t("CONTACT") }}</NuxtLink>
									</li>
									<li class="nav-item" @click="onChangeLanguage()">
										<p class="nav-link link">
											{{ $t("LANGUAGE") }}
										</p>
									</li>
									<li class="nav-item">
										<NuxtLink class="nav-link pertner-btn" to="/franchise">{{ $t("BECOME_A_PARTNER") }}</NuxtLink>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<div class="header-shape z-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
				<path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" fill="#212121"></path>
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
