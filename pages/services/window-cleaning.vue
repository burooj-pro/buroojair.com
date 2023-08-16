<template>
  <div id="windowCleaningPage" class="overflow-hidden">
    <Header />
    <!-- Banner Start -->
    <SectionsHeading :title="$t('WINDOW_CLEANING')" image="~assets/images/burooj_air_drone.jpg" />
    
    <!-- Service Start -->
    <SectionsWindowCleaningService/>

    <!-- ADVANTAGE SECTION -->
		<SectionsBenefits />

    <!-- Advantages SECTION -->
    <SectionsFacadeCleaningAdvantages/>
    
    <!-- INQUIRY SECTION -->
    <SectionsInquiry/>
    
    <!-- Contact Section -->
    <SectionsContact/>
    
    <Footer />
  </div>
</template>
