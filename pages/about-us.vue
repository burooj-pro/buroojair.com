<template>
  <div id="aboutUsPage" class="overflow-hidden">
    <Header />
    <!-- Service Hero SECTION -->
    <SectionsAboutHero />

    <!-- Intention SECTION -->
    <SectionsIntention />

    <!-- SETTING STANDARD SECTION -->
    <SectionsServicesSettingStandard />

    <!-- Future Development -->
    <SectionsDevelopment />

    <SectionsContact/>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "ABOUT_US",
  head() {
    return {
      title: this.$t("ABOUT_US"),
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
