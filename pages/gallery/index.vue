<template>
  <div class="wrapper">
    <Header />
    <!-- Banner Start -->
    <section class="banner mt-5 pt-4">
      <div class="overlay"></div>
    </section>
    <!-- Banner End -->
    <!-- GALLERY SEC -->
    <section class="gallery-main">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 order-lg-1 order-2">
            <div class="inner">
              <h3 class="mb-4">{{ $t("IMAGES") }}</h3>
              <ul class="gallery-container" id="animated-thumbnails-gallery">
                <li
                  class="large gallery-item"
                  data-lg-size="1600-1067"
                  data-src="~assets/images/BuroojAir_1.jpg"
                >
                  <a>
                    <img
                      alt="layers of blue."
                      class="img-fluid"
                      src="~assets/images/BuroojAir_1.jpg"
                    />
                  </a>
                </li>
                <li
                  class="small gallery-item"
                  data-lg-size="1600-2400"
                  data-pinterest-text="Pin it2"
                  data-tweet-text="lightGallery slide  2"
                  data-src="~assets/images/BuroojAir_2.jpg"
                >
                  <a>
                    <img
                      class="img-fluid"
                      src="~assets/images/BuroojAir_2.jpg"
                    />
                  </a>
                </li>
                <li
                  class="small gallery-item"
                  data-lg-size="1600-2400"
                  data-pinterest-text="Pin it3"
                  data-tweet-text="lightGallery slide  4"
                  data-src="~assets/images/BuroojAir_3.jpg"
                >
                  <a>
                    <img
                      class="img-fluid"
                      src="~assets/images/BuroojAir_3.jpg"
                    />
                  </a>
                </li>
                <li
                  class="medium gallery-item"
                  data-lg-size="1600-2398"
                  data-pinterest-text="Pin it3"
                  data-tweet-text="lightGallery slide  4"
                  data-src="~assets/images/BuroojAir_4.jpg"
                >
                  <a>
                    <img
                      class="img-fluid"
                      src="~assets/images/BuroojAir_4.jpg"
                    />
                  </a>
                </li>
                <li
                  class="small gallery-item"
                  data-lg-size="1600-2400"
                  data-pinterest-text="Pin it3"
                  data-tweet-text="lightGallery slide  4"
                  data-src="~assets/images/BuroojAir_3.jpg"
                >
                  <a>
                    <img
                      class="img-fluid"
                      src="~assets/images/BuroojAir_3.jpg"
                    />
                  </a>
                </li>
                <li
                  class="large gallery-item"
                  data-lg-size="1600-1067"
                  data-src="~assets/images/BuroojAir_1.jpg"
                >
                  <a>
                    <img
                      alt="layers of blue."
                      class="img-fluid"
                      src="~assets/images/BuroojAir_1.jpg"
                    />
                  </a>
                </li>
                <li
                  class="small gallery-item"
                  data-lg-size="1600-2400"
                  data-pinterest-text="Pin it2"
                  data-tweet-text="lightGallery slide  2"
                  data-src="~assets/images/BuroojAir_2.jpg"
                >
                  <a>
                    <img
                      class="img-fluid"
                      src="~assets/images/BuroojAir_2.jpg"
                    />
                  </a>
                </li>
                <li
                  class="small gallery-item"
                  data-lg-size="1600-2400"
                  data-pinterest-text="Pin it3"
                  data-tweet-text="lightGallery slide  4"
                  data-src="~assets/images/BuroojAir_3.jpg"
                >
                  <a>
                    <img
                      class="img-fluid"
                      src="~assets/images/BuroojAir_3.jpg"
                    />
                  </a>
                </li>
                <li
                  class="medium gallery-item"
                  data-lg-size="1600-2398"
                  data-pinterest-text="Pin it3"
                  data-tweet-text="lightGallery slide  4"
                  data-src="~assets/images/BuroojAir_4.jpg"
                >
                  <a>
                    <img
                      class="img-fluid"
                      src="~assets/images/BuroojAir_4.jpg"
                    />
                  </a>
                </li>
                <li
                  class="small gallery-item"
                  data-lg-size="1600-2400"
                  data-pinterest-text="Pin it3"
                  data-tweet-text="lightGallery slide  4"
                  data-src="~assets/images/BuroojAir_3.jpg"
                >
                  <a>
                    <img
                      class="img-fluid"
                      src="~assets/images/BuroojAir_3.jpg"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-7 order-lg-2 order-1">
            <div class="video-wrapper">
              <div class="text-end">
                <h3 class="mb-4">{{ $t("VIDEOS") }}</h3>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="ratio ratio-16x9">
                    <video
                      autoplay
                      muted
                      loop
                      playsinline
                      preload="auto"
                      class="elementor-background-video-embed d-none d-md-block"
                    >
                      <source :src="videoSrc1" type="video/mp4" />
                    </video>
                  </div>
                  <div class="ratio ratio-16x9">
                    <video
                      autoplay
                      muted
                      loop
                      playsinline
                      class="elementor-background-video-embed d-none d-md-block"
                    >
                      <source :src="videoSrc2" type="video/mp4" />
                    </video>
                    <!-- <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe> -->
                  </div>
                  <div class="ratio ratio-16x9">
                    <video
                      autoplay
                      muted
                      loop
                      playsinline
                      class="elementor-background-video-embed d-none d-md-block"
                    >
                      <source :src="videoSrc3" type="video/mp4" />
                    </video>
                    <!-- <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe> -->
                  </div>
                  <!-- <div class="ratio ratio-16x9">


                             <video autoplay muted loop playsinline  class="elementor-background-video-embed d-none d-md-block"
     >
      <source :src="videoSrc4" type="video/mp4">

    </video>
                  </div> -->
                  <div class="ratio ratio-16x9">
                    <video
                      autoplay
                      muted
                      loop
                      playsinline
                      class="elementor-background-video-embed d-none d-md-block"
                    >
                      <source :src="videoSrc5" type="video/mp4" />
                    </video>
                    <!-- <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe> -->
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="ratio ratio-16x9">
                    <video
                      autoplay
                      muted
                      loop
                      playsinline
                      class="elementor-background-video-embed d-none d-md-block"
                    >
                      <source :src="videoSrc6" type="video/mp4" />
                    </video>
                    <!-- <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe> -->
                  </div>
                  <!-- <div class="ratio ratio-16x9">
                    <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe>
                  </div> -->
                  <!-- <div class="ratio ratio-16x9">
                    <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe>
                  </div> -->
                  <!-- <div class="ratio ratio-16x9">
                    <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe>
                  </div> -->
                  <!-- <div class="ratio ratio-16x9">
                    <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe>
                  </div> -->
                  <!-- <div class="ratio ratio-16x9">
                    <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe>
                  </div> -->
                </div>
                <div class="col-sm-6">
                  <!-- <div class="ratio ratio-16x9">
                    <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe>
                  </div> -->
                  <!-- <div class="ratio ratio-16x9"> -->
                  <!-- <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe> -->
                  <!-- </div>
                  <div class="ratio ratio-16x9"> -->
                  <!-- <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe> -->
                  <!-- </div>
                  <div class="ratio ratio-16x9"> -->
                  <!-- <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe> -->
                  <!-- </div>
                  <div class="ratio ratio-16x9"> -->
                  <!-- <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe> -->
                  <!-- </div>
                  <div class="ratio ratio-16x9"> -->
                  <!-- <iframe
                      src="https://player.vimeo.com/video/799371838?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                      title="YouTube video"
                      allowfullscreen
                    ></iframe> -->
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoSrc1: "/videos/C9844_1.mp4",
      videoSrc2: "/videos/C9844_3.mp4",
      videoSrc3: "/videos/C9844_4.mp4",
      videoSrc4: "/videos/C9844_5.mp4",
      videoSrc5: "/videos/C9844_6.mp4",
      videoSrc6: "/videos/C9844_7.mp4",
    };
  },

  name: "Gallery",
  head() {
    return {
      title: `Burooj Air | ${this.$t("GALLERY")}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We aim to contribute to a safer work day for people who work at great heights with lifts, scaffolding and for facade climbers.",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
h3 {
  color: $mainly_blue;
  font-size: $font62;
  text-transform: uppercase;
  line-height: 68px;
  @include NeoSans(900);
}

p {
  font-size: $font16;
  line-height: 24px;
  @include NeoSans(400);
  color: $charcoal;
}

.btn-secondary {
  background-color: $orange;
  padding: 0;
  border: 1px solid $orange;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: $white;
  text-transform: uppercase;
  @include NeoSans(900);
  @include border_radius(4px);
  height: 54px;
  padding: 0 29px;
  span {
    display: block;
    margin-right: 10px;
    svg {
      width: 20px;
      height: 20px;
      display: block;
    }
  }
}

.btn-white {
  background-color: $white;
  color: $black;
}

.banner {
  background-image: url(~assets/images/burooj_air_drone.jpg);
  background-position: 50%;
  background-repeat: no-repeat;
  min-width: 100%;
  min-height: 100%;
  background-size: cover;
  .overlay {
    background-color: rgba($overlay, 0.35);
    height: 330px;
  }
}

.gallery-main {
  background-color: $gray10;
  padding: 100px 0;

  .inner {
    background: $whiteSecondary;
    padding: 20px;
    height: 100%;
  }

  h3 {
    text-transform: uppercase;
    font-size: $font42;
    font-weight: 400;
  }

  .gallery-container {
    display: block;
    margin: 0 -5px;

    li {
      float: left;
      padding: 2.5px 5px;

      &.large {
        width: 70%;
      }

      &.small {
        width: 30%;

        img {
          height: 90px;
          object-fit: cover;
        }
      }

      &.medium {
        width: 70%;

        img {
          height: 90px;
          object-fit: cover;
          width: 100%;
        }
      }
    }
  }

  a {
    display: block;
  }
}

.video-wrapper {
  background: #fff;
  padding: 20px;
  height: 100%;

  .ratio {
    margin-bottom: 15px;
  }
}

// responsive

</style>
