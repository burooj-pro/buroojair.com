<template>
  <div id="galleryPage" class="overflow-hidden font-neo-sans">
    <Header />

    <SectionsHeadingSection :title="$t('GALLERY')" image="~assets/images/burooj_air_drone.jpg" />

    <!-- GALLERY SECTION -->
    <SectionsGallerySection :videos="videos" :images="images" />
    
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      videos: [
        "/videos/C9844_1.mp4",
        "/videos/C9844_3.mp4",
        "/videos/C9844_4.mp4",
        "/videos/C9844_5.mp4",
        "/videos/C9844_6.mp4",
        "/videos/C9844_7.mp4",
      ],
      images:[
        "/images/gallery/BuroojAir_1.jpg",
        "/images/gallery/BuroojAir_2.jpg",
        "/images/gallery/BuroojAir_3.jpg",
        "/images/gallery/BuroojAir_4.jpg",
    ]
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