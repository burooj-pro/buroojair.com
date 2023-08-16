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
      title: this.$t("FRANCHISE"),
    };
  },
};
</script>