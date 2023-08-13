<template>
  <div id="windowCleaningPage" class="overflow-hidden">
    <Header />
    <!-- Banner Start -->
    <section class="banner">
      <div class="overlay"></div>
    </section>
    <!-- Banner End -->
    <!-- Service Start -->
    <section class="service mt-5 pt-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <div class="text-box">
              <h3>{{ $t("SERVICES") }}</h3>
              <h4>{{ $t("HIGH_RISE_WINDOW_AND_FACADE_CLEANING") }}</h4>
              <div class="video-holder">
                <img
                  src="~assets/images/BuroojAir_1.jpg"
                  alt="#"
                  class="w-100"
                />
                <!-- <i class="iconPlay">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="256"
                    height="256"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="white"
                      d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90Zm35.33-95l-48-32a6 6 0 0 0-9.33 5v64a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10ZM118 148.79v-41.58L149.18 128Z"
                    />
                  </svg>
                </i> -->
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="text-box">
              <h5>{{ $t("WINDOW_CLEANING") }}</h5>

              <p>
                <strong>{{
                  $t("HIGH_RISE_COMMERICAL_WINDOW_CLEANING")
                }}</strong>
              </p>
              <p>
                {{ $t("MODERN_DAY_BUILDINGS_INCLUDING") }}
              </p>
              <p>
                {{ $t("UP_UNTIL_NOW_ONLY_PRO") }}
                <b> {{ $t("COMMERCIAL_WINDOW_CLEANERS") }}</b>
                {{ $t("HEIGHT_ACCREDITATION") }}
              </p>
              <p>
                {{ $t("BUROOJ_AIR_WORKING_DRONE_IS_THE_FIRST") }}
                <b>{{ $t("WINDOW_CLEANING") }}</b>
                {{ $t("SERVICE_PROCESS_SAFER") }}
              </p>
              <p>
                {{
                  $t(
                    "BUROOJ_AIR_WORKING_DRONE_IS_ALSO_CONSIDERED_TO_BE_WORKSAFE"
                  )
                }}
              </p>

              <!-- <a href="#" class="btn btn-secondary"> {{ $t("ENQUIRE_TODAY") }}</a> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Service End -->
    <!-- ADVANTAGE SEC -->
    <AdvantageSection />
    <!-- Advantages SEC -->
    <section class="advantages">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="text-box">
              <h3>
                {{
                  $t(
                    "ADVANTAGES_OF_GLASS_AND_FACADE_CLEANING_WITH_BUROOJ_AIR_DRONE"
                  )
                }}
              </h3>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="text-box">
              <h4>{{ $t("IMPORTANT_KEY_FACTS") }}</h4>
              <p>
                <strong>1000 {{ $t("SQM_HOUR") }}</strong
                ><br />{{ $t("CAPACITY_FACADE_CLEANING") }}
              </p>
              <p>
                <strong>1500 {{ $t("SQM_HOUR") }}</strong
                ><br />{{ $t("CAPACIY_WINDOW_CLEANING") }}
              </p>
              <p>
                <strong>{{ $t("HEIGHT") }} 100+ {{ $t("METER") }}</strong
                ><br />{{ $t("DRONE_FULLY_OPERATIONAL") }}
              </p>
              <p>
                <strong>{{ $t("FLYTIME") }} 24 {{ $t("HOUR") }}</strong
                ><br />{{ $t("BATTERY_CASE_BATTERIES") }}
              </p>
              <p>
                <strong>7 {{ $t("M_SEC") }}</strong
                ><br />{{ $t("WORKS_IN_MAXIMUM_WINDS") }} 7 {{ $t("M_SEC") }}.
                {{ $t("UP_TO") }} 15 {{ $t("M_SEC") }}
                {{ $t("WITHOUT_EQUIPMENT") }}
              </p>
              <p>
                <strong>{{ $t("UP_TO") }} 180 {{ $t("BAR_PRESSURE") }}</strong
                ><br />{{ $t("CAPACITY_WATER_PRESSURE") }}
              </p>
              <p>
                <strong>{{ $t("AIRSENSE_ADS") }}</strong
                ><br />{{ $t("ADVANCED_FLIGHT_COLLISION") }}
              </p>
              <p>
                <strong>{{ $t("SELF_HEATING_BATTERY") }}</strong
                ><br />{{ $t("EFFICIENT_BATTERY_USE") }}
              </p>
              <p>
                <strong>-20°C {{ $t("TO") }} 50°C</strong><br />{{
                  $t("WORKING_TEMPERATURE_RANGE")
                }}
              </p>
              <p>
                <strong>{{ $t("IP_45") }}</strong
                ><br />{{ $t("PROTECTED_AGAINST_PRESSURE") }}
              </p>
              <!-- <p>
                <strong>1000 sqm/hour</strong><br />Capacity facade cleaning
              </p>
              <p>
                <strong>1500 sqm/hour</strong><br />Capacity window cleaning
              </p>
              <p>
                <strong>Height 100+ meter</strong><br />When the drone is fully
                operational
              </p>
              <p>
                <strong>Flytime 24 hour</strong><br />With battery case with 8
                batteries
              </p>
              <p>
                <strong>7 m/sec</strong><br />Works in maximum winds of 7 m/s.
                Up to 15 m/s without equipment
              </p>
              <p>
                <strong>Up to 180 bar pressure</strong><br />Capacity water
                pressure
              </p>
              <p>
                <strong>AirSense ADS-B</strong><br />Advanced flight / collision
                warning system
              </p>
              <p>
                <strong>Self-heating battery</strong><br />Provides efficient
                battery use
              </p>
              <p>
                <strong>-20°C to 50°C</strong><br />Working temperature range
              </p>
              <p>
                <strong>IP 45</strong><br />Protected against low pressure water
                jets
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- INQUIRY SEC -->
    <section class="inquiry">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text-box">
              <h3>
                {{ $t("ENQUIRE_TODAY") }}
              </h3>

              <p>
                {{ $t("IF_YOU_ARE") }}

                <b>{{ $t("BUILDING_OWNER_DEVELOPER") }}</b>
                <b>{{ $t("CLEANING_COMPANY") }}</b>
                {{ $t("WITH_HIGH_RISE_WINDOW_CLEANING") }}
              </p>
              <p>
                <b>{{ $t("BUROOJ_AIR_WORKING_DRONE") }}</b>

                {{ $t("HAS_MANY_WAYS_THAT_CAN_PROVIDE") }}
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
    </section>
    <SectionsContactSection />
    <Footer />
  </div>
</template>
