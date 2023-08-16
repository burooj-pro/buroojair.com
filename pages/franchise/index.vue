<template>
  <div id="franchisePage" class="overflow-hidden">
    <Header disableSpacer="true" />

    <!-- BANNER SECTION -->
    <SectionsFranchiseAbout />
    
    <!-- INTENTION SECTION -->
    <SectionsIntention />

    <!-- FRANCHISE OPPORTUNITY SECTION -->
    <SectionsFranchiseOpportunity />

    <!-- FRANCHISE FAMILY SECTION -->
    <SectionsFranchiseFamily />
    
    <!-- FRANCHISE JOIN US SECTION -->
    <SectionsFranchiseJoinUs />

    <!-- FOOTER SECTION -->
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Franchise",
  head() {
    return {
      title: `Burooj Air | ${this.$t("FRANCHISE")}`,
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