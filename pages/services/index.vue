<template>
	<div id="servicesPage" class="overflow-hidden  py-5">
		<Header />
		<!-- Service Hero SECTION -->
		<section class="heroServices mt-5 pt-5">
			<div class="row g-0">
				<div class="col-lg-7">
					<div class="heroFlag">
						<div class="titleText">
							<h2>{{ $t("SERVICES") }}</h2>
							<p>{{ $t("THE_EVOLUTION_OF_HIGH_RISE_WINDOW_AND_FACADE_CLEANING_HAS_ARRIVED") }}</p>
						</div>
					</div>
				</div>
				<div class="col-lg-5">
					<div class="text-box">
						<p><strong> {{ $t("UP_UNTIL_NOW_HIGH_RISE_WINDOW_AND_FACADE_CLEANING") }}</strong></p>
						<p>{{ $t("WITH_THE_INNOVATION_OF_BUROOJ_AIR_WORKING_DRONE") }}</p>
						<p><b>{{ $t("A_MORE_EFFICIENT_SAFER_AND") }}</b></p>
						<p>{{ $t("BUROOJ_AIR_WORKING_DRONE_ARE_NOW_BEING") }}</p>
						<p>{{ $t("FOR_NOW_WE_HAVE_COMMERCIALISED_THE_USE_FOR") }}</p>
						<p>{{ $t("BUROOJ_AIR_WORKING_DRONE_IS_IN_FURTHER_DEVELOPMENT") }}</p>
					</div>
				</div>
			</div>
		</section>
		<!-- ADVANTAGE SECTION -->
		<SectionsAdvantage/>
		<!-- METHOD SECTION -->
		<section class="method">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<div class="caption">
							<h2>{{ $t("FOR_FACADE_AND_WINDOW_CLEANING_WE_USE_MULTIPLE_METHODS") }}</h2>
						</div>
					</div>
					<div class="col-lg-6">
						<ol>
							<li aria-level="1">{{ $t("IF_THE_FACADE_IS_TRADITIONALLY_DIRTY_THE_DRONE") }}<br /><br /></li>
							<li aria-level="1">
								{{ $t("THE_CLEAN_WATER_METHOD_IS_IN_SHORT") }}
								<b><i> {{ $t("CLEANED") }}</i></b>
								<b><i>{{ $t("WITHOUT_CHEMICALS") }} </i></b>
								{{ $t("WINDOWS_STAY_CLEANER") }}
							</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
		<!-- Solar Panel Sec  -->
		<section class="solarPanel">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" class="shape" preserveAspectRatio="none">
				<path  d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
			</svg>
			<div class="row g-0">
				<div class="col-lg-6">
					<div class="solarBox">
						<div class="text-box">
							<h3>
								{{ $t("SOLAR_CELL_PANEL") }}
								<br />{{ $t("CLEANING") }}
							</h3>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="caption">
						<h2>{{ $t("THIS_METHOD_DOES_NOT_HARM_THE_PANEL_SURFACE") }}</h2>
						<p>
							{{ $t("OUR_METHOD_DEVELOPED_FOR_WINDOW_CLEANING_IS_PERFECT") }}
						</p>
						<p>
							{{ $t("A_MAJOR_ADVANTAGE_OF_THIS_METHOD_IS_THAT_THE_SURFACES") }}
						</p>
					</div>
				</div>
			</div>
		</section>
		<!-- SETTING STANDARD SECTION -->
		<section class="standardSolar">
			<div class="container">
				<div class="row">
					<div class="col-lg-7">
						<div class="text-box">
							<h3>
								{{ $t("SETTING_THE_STANDARD_FOR_WORKING_DRONES") }}
							</h3>
						</div>
					</div>
					<div class="col-lg-5">
						<div class="text-box">
							<p>
								<strong> {{ $t("BUROOJ_AIR_WORKING_DRONE_EVOLVED") }}</strong>
							</p>
							<p>
								{{ $t("BUROOJ_AIR_WORKING_DRONE_ORIGINATED") }}
							</p>
							<p>
								{{ $t("THE_DRONE_HAS_BEEN_EXTENSIVELY_TESTED") }}
							</p>
							<p>
								{{ $t("BUROOJ_AIR_WORKING_DRONE_WAS_READY_AND_THE_COMMERCIALISING") }}
							</p>
							<p>
								{{ $t("THE_FUTURE_HOLDS_MANY_OPPORTUNITIES_FOR_DEVELOPMENT") }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- INQUIRY SECTION -->
		<!-- <section class="inquiry">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text-box">
              <h3>
                {{ $t("ENQUIRE_TODAY") }}
              </h3>

              <p>

                {{ $t("IF_YOU_ARE") }}
                <b> {{ $t("BUILDING_OWNER_DEVELOPER") }}</b>
                <b>{{ $t("CLEANING_COMPANY") }}</b> {{ $t("WITH_HIGH_RISE_WINDOW_CLEANING") }}
              </p>
               <p>
                <b>BUROOJ AIR Working Drone</b> has many ways that we can
                provide this service directly and indirectly and we work with
                many different companies to contract this service. Whether
                you’re a direct client&nbsp; looking for a once off service, a
                building company looking for longer term fixed term contracts, a
                developer and building owner looking at reducing costs or are
                just curious and want to explore this technology to see how it
                can better work for you.&nbsp; Reach out , get in touch and one
                of our team will assist you to find the best cost effective and
                safer solution to your high rise cleaning needs
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <form>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Company"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="E-mail"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <select class="form-control">
                      <option>{{ $t("WHICH_COUNTRY") }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      rows="4"
                      placeholder="BUILDING ADDRESS AND INFO"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="PHONE (REMEMBER COUNTRY CODE)"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      class="form-control info-field"
                      placeholder="OTHER INFO"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group mb-0">
                    <input
                      type="submit"
                      class="btn btn-secondary"
                      value="SEND INQUIRY"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section> -->
		<!-- SAFETY SECTION -->
		<section class="safetyStand">
			<div class="container">
				<div class="row">
					<div class="col-lg-7">
						<div class="text-box">
							<h3>{{ $t("OUR_SAFETY_STATEMENT") }}</h3>
							<p>
								<strong> {{ $t("FOR_THE_MANAGEMENT_OF_BUROOJ_AIR_WORKING") }}</strong>
							</p>
						</div>
					</div>
					<div class="col-lg-5">
						<div class="text-box">
							<p>
								{{ $t("BUROOJ_AIR_WORKING_DRONE_IMPLEMENTS") }}
							</p>
							<ul>
								<li aria-level="1">
									{{ $t("TO_MINIMISE_OUR_IMPACT") }}
								</li>
								<li aria-level="1">
									{{ $t("NOT_TO_HARM_OR_DISTURB") }}
								</li>
								<li aria-level="1">
									{{ $t("NOT_TO_INFLICT_DAMAGE_TO_PROPERTY") }}
								</li>
								<li aria-level="1">{{ $t("TO_ALWAYS_OPERATE_ACCORDING_EUROPEAN_GDPR") }}<br /><br /></li>
							</ul>
							<p>
								{{ $t("BUROOJ_AIR_WORKING_DRONE_WILL_OPERATE") }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<SectionsContact/>
		<Footer />
	</div>
</template>

<script>
export default {
	name: "SERVICES",
	head() {
		return {
			title: `Burooj Air | ${this.$t("SERVICES")}`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: "We aim to contribute to a safer work day for people who work at great heights with lifts, scaffolding and for facade climbers.",
				},
			],
		};
	},
};
</script>
