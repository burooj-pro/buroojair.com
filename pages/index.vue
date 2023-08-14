<template>
	<div id="indexPage" class="overflow-hidden">
		<Header />

		<!-- Hero SEC -->
		<SectionsHeroSection />

		<!-- SERVICES SEC -->
		<SectionsServicesSection />

		<!-- VACANT PILOT SEC -->
		<SectionsVacantPilotPositionSection />

		<!-- ARRIVED DRONE SEC -->
		<SectionsArrivedDroneSection />

		<!-- ADVANTAGE SEC -->
		<SectionsAdvantageSection />

		<!-- SOLAR CELL SEC -->
		<SectionsSolarCellsSection />

		<!-- LET TALK SEC -->
		<SectionsLetsTalkSection />
		

		<!-- INTENTION SEC -->
		<SectionsIntentionSection />

		<!-- ABOUT US SEC -->
		<SectionsAboutUsSection />
		
		<!-- ESTIMATED FUTURE SEC -->
		<!-- <section class="estimated-future-section">
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-md-6">
            <div class="estimated-future-left">
              <p>
                {{
                  $t(
                    "THE_ESTIMATED_NEED_FOR_FUTURE_DRONE_CLEANING_SERVICES_IS_APPROXIMATELY"
                  )
                }}
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="estimated-future-right">
              <h3>2,500,000</h3>
              <p>{{ $t("DRONES_INTERNATIONALLY") }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="vacant-shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill"
            d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
            fill="#1F1F1F"
          ></path>
        </svg>
      </div>
    </section> -->

		<!-- GLOBAL REACH SEC -->
		<SectionsGlobalReachSection />

		<!-- WORKING GROWTH SEC -->
		<SectionsWorkingGrowthSection />
		

		<!-- SAFETY STATEMENT SEC -->
		<SectionsSafetyStatementSection />

		

		<!-- POPULATED SEC -->
		<section class="populated-section">
			<img src="~assets/images/BuroojAir_4.jpg" alt="" class="img-fluid w-100" />
		</section>

		<!-- WORK STAND SEC -->
		<!-- <section class="work-stand-section">
      <div class="vacant-shape work-vacant-shape" data-negative="false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill"
            d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
            fill="#6B6B77"
          ></path>
        </svg>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h3>SETTING THE STANDARD FOR WORKING DRONES</h3>
          </div>
          <div class="col-md-5">
            <div class="text-box">
              <p>
                <strong
                  >BUROOJ AIR Working Drone evolved out of BUROOJ AIR Group. BUROOJ AIR Group was
                  founded in 1992 by Kennet Nilsen. BUROOJ AIR Group have more than 30
                  years experience with facade and window cleaning and are
                  experts in their field.</strong
                >
              </p>
              <p>
                BUROOJ AIR Working Drone originated from an idea to find an innovative
                and efficient way to clean facades and windows. This was back in
                2015. A lot of mods were needed to make the drone work properly
                for cleaning, also commercial. Fast forward the result is a
                unique drone with tailor-made and uniquely adapted mounting
                equipment with specially designed cleaning equipment. A patent
                pending safety solution to prevent the drone from falling down
                during operation is also developed.
              </p>
              <p>
                The drone has been extensively tested and commercialised for use
                with window and facade cleaning and has been used operationally
                since 2020 by the BUROOJ AIR Group in Norway.
              </p>
              <p>
                In 2022, BUROOJ AIR Working Drone was ready and the commercialising
                process started. Today BUROOJ AIR Working Drone is established almost
                all over the world, and the partner network is growing rapidly.
              </p>
              <p>
                The future holds many opportunities for development for BUROOJ AIR
                Working Drone. We think our drones soon will be able to do small
                repairs, special inspections and even surface treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="vacant-shape vacant-shape-bottom" data-negative="false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill"
            d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
            fill="#6B6B77"
          ></path>
        </svg>
      </div>
    </section> -->

		<!-- DEVELOPMENT SEC -->
		<SectionsDevelopmentSection />

		<!-- Contact Section -->
		<SectionsContactSection />
		<Footer />
	</div>
</template>

<script>
export default {
	name: "HOME",
	head() {
		return {
			title: `Burooj Air`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: "We aim to contribute to a safer work day for people who work at great heights with lifts, scaffolding and for facade climbers.",
				},
			],
		};
	},
	computed: {
		dir() {
			return this.language === "ar" ? "rtl" : "ltr";
		},
	},
};
</script>
