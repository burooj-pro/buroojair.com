<template>
  <div id="galleryPage" class="overflow-hidden">
    <Header />
    <!-- Banner Start -->
    <section class="banner mt-5 pt-4">
      <div class="overlay "></div>
    </section>

    <!-- GALLERY SECTION -->
    <SectionsGallerySection :videos="videos" />
    
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      videos: {
        videoSrc1: "/videos/C9844_1.mp4",
        videoSrc2: "/videos/C9844_3.mp4",
        videoSrc3: "/videos/C9844_4.mp4",
        videoSrc4: "/videos/C9844_5.mp4",
        videoSrc5: "/videos/C9844_6.mp4",
        videoSrc6: "/videos/C9844_7.mp4",
      }
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