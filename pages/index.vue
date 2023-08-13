<template>
	<div id="indexPage" class="overflow-hidden">
		<Header />

		<!-- Hero SEC -->
		<SectionsHeroSection />

		<!-- SERVICES SEC -->
		<SectionsServicesSection />

		<!-- VACANT PILOT SEC -->
		<SectionsVacantPilotPositionSection />

		<!-- VACANT PILOT SEC -->
		<section class="arrived-drone-sec">
			<div class="container-fluid p-0">
				<div class="row g-0">
					<div class="col-md-6">
						<div class="image-holder">
							<img src="~assets/images/arrived-drone-img.png" alt="" class="img-fluid" />
							<h4>
								{{ $t("BUILDINGS_CLEANING") }} <br />
								{{ $t("AND_HEAVYLIFTING_USING_DRONE") }}
							</h4>
						</div>
					</div>
					<div class="col-md-6">
						<div class="text-box">
							<h4>
								{{ $t("THE_BEST_SOLUTION_TO_CLEAN_BUILDINGS_AND_LIFT_HEAVY_WEIGHTS_IN_A_FASTER_WAY_IS_AVAILABLE_NOW") }}
							</h4>
							<p>
								{{ $t("UNTIL_NOW_CLEANING_OF_TALL_BUILDINGS_HAS_BEEN_A_COMPLEX_AND_DANGEROUS_UNDERTAKING") }}
							</p>
							<NuxtLink to="/facade-cleaning" class="btn btn-white">
								<span>
									<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
											fill="#212121"
										></path>
									</svg>
								</span>
								{{ $t("READ_MORE") }}
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- ADVANTAGE SEC -->
		<SectionsAdvantageSection />

		<!-- SOLAR CELL SEC -->
		<section class="arrived-drone-sec solar-cell-sec">
			<div class="container-fluid p-0">
				<div class="row g-0">
					<div class="col-md-6">
						<div class="image-holder">
							<img src="~assets/images/solar-cell-img.png" alt="" class="img-fluid" />
							<h4>
								{{ $t("SOLAR_CELL_PANEL") }}
								<br />
								{{ $t("CLEANING") }}
							</h4>
						</div>
					</div>
					<div class="col-md-6">
						<div class="text-box">
							<h4>
								{{ $t("THIS_PROCEDURE_KEEPS") }}
							</h4>
							<p>
								{{ $t("OUR_WINDOW_CLEANING_METHOD") }}
							</p>
							<!-- <p class="m-0">
                {{ $t("ADDITIONALLY_THIS_TECNHIQUE") }}
              </p> -->
						</div>
					</div>
				</div>
			</div>
			<div class="vacant-shape">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
					<path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" fill="#E4E7ED"></path>
				</svg>
			</div>
		</section>

		<!-- LET TALK SEC -->
		<section class="let-talk-sec">
			<div class="container">
				<div class="row">
					<div class="col-md-7">
						<div class="let-talk-left">
							<h4>{{ $t("FRANCHISE") }}</h4>
							<p>{{ $t("OPPORTUNITIES_AVAILABLE") }}</p>
						</div>
					</div>
					<div class="col-md-5">
						<div class="let-talk-right">
							<p>
								{{ $t("TAKE_PART_IN_THE_MOST_INNOVATIVE_BUSINESS_IDEA") }}
							</p>
							<a href="#" class="btn btn-secondary btn-blue">
								<span>
									<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
											fill="#fff"
										></path>
									</svg>
								</span>
								{{ $t("LET_S_TALK") }}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- INTENTION SEC -->
		<section class="intention-sec">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="intention-left">
							<h3>
								{{ $t("OUR_INTENTION") }}
							</h3>
						</div>
					</div>
					<div class="col-md-6">
						<div class="intention-right">
							<h4>
								{{ $t("OUR_MAIN_GOAL_IS_TO_HELP_OTHERS_AND_MAKE_WORKING_LIFE_BETTER_FOR_EVERYONE") }}
							</h4>
							<p>
								{{ $t("WE_WANT_TO_HELP_MAKE_WORKDAYS") }}
							</p>
							<p>
								{{ $t("THESE_ARE_PHYSICALLY_DEMANDING_JOBS") }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- ABOUT US SEC -->
		<SectionsAboutUsSection />
		

		<!-- ESTIMATED FUTURE SEC -->
		<!-- <section class="estimated-future-sec">
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
		<SectionsworkingGrowthSection />
		

		<!-- SAFETY STATEMENT SEC -->
		<SectionsSafetyStatementSection />

		

		<!-- POPULATED SEC -->
		<section class="populated-sec">
			<img src="~assets/images/BuroojAir_4.jpg" alt="" class="img-fluid w-100" />
		</section>

		<!-- WORK STAND SEC -->
		<!-- <section class="work-stand-sec">
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
