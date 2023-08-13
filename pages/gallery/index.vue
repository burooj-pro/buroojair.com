<template>
  <div id="galleryPage" class="overflow-hidden">
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