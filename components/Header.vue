<template>
  <header class="fixed-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="navigation">
            <nav class="navbar navbar-expand-md">
              <NuxtLink class="navbar-brand" to="/"
                ><img src="~assets/images/logo.png" alt="" class="img-fluid"
              /></NuxtLink>
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
                <ul
                  class="navbar-nav"
                  :style="`margin-${
                    dir === 'ltr' ? 'left' : 'right'
                  }: auto !important;`"
                >
                  <li class="nav-item">
                    <NuxtLink class="nav-link active" to="/">{{
                      $t("HOME")
                    }}</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink class="nav-link" to="/services">{{
                      $t("SERVICES")
                    }}</NuxtLink>
                  </li>
                  <!-- <li class="nav-item">
                    <NuxtLink class="nav-link" to="/location">{{
                      $t("LOCATIONS")
                    }}</NuxtLink>
                  </li> -->
                  <li class="nav-item">
                    <NuxtLink class="nav-link" to="/gallery">{{
                      $t("GALLERY")
                    }}</NuxtLink>
                  </li>
                  <!-- <li class="nav-item">
                    <NuxtLink class="nav-link" to="/news">{{
                      $t("NEWS")
                    }}</NuxtLink>
                  </li> -->
                  <li class="nav-item">
                    <NuxtLink class="nav-link" to="/about-us">{{
                      $t("ABOUT_US")
                    }}</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink class="nav-link" to="/contact">{{
                      $t("CONTACT")
                    }}</NuxtLink>
                  </li>
                  <li class="nav-item" @click="onChangeLanguage()">
                    <p class="nav-link link">{{ $t("LANGUAGE") }}</p>
                  </li>
                  <li class="nav-item">
                    <NuxtLink class="nav-link pertner-btn" to="/franchise/franchise">{{
                      $t("BECOME_A_PARTNER")
                    }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="header-shape">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          class="elementor-shape-fill"
          d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
          fill="#212121"
        ></path>
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

<style lang="scss" scoped>
.fixed-header {
  position: fixed;
  // top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
header {
  background-color: $primary;
  // padding: 21px 0;
  padding-top: 21px;
  padding-bottom: 0;

  // position: relative;
  // z-index: 999;
  .navigation {
    max-width: 1230px;
    width: 100%;
    margin: 0 auto;
    .navbar {
      padding: 0;
      padding-left: 10px;
      padding-right: 10px;
      width: 100%;
      .navbar-brand {
        padding: 0;
        margin: 0;
        img {
          height: 74px;
        }
      }
      .navbar-nav {
        .nav-item {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 10px;
          .nav-link {
            color: $white;
            text-transform: uppercase;
            font-size: $font16;
            @include NeoSans(400);
            padding: 0 15px;
            &.pertner-btn {
              @include border_radius(8px);
              height: 44px;
              width: 194px;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0;
              background-color: $orange;
              @include NeoSans(600);
            }
          }
          &:last-child {
            margin-left: 21px;
          }
        }
      }
    }
  }
}

.link {
  cursor: pointer;
}

.header-shape {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: -49px;
  z-index: 100;
  svg {
    height: 49px;
    transform: translateX(0) rotateY(183deg);
    width: calc(100% + 1.3px);
    display: block;
  }
}

// responsive

@import "~assets/scss/pages.scss/responsive.scss";
</style>
