<template>
  <div class="wrapper">
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
    <ContactSection />
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
h3 {
  color: $mainly_blue;
  font-size: $font62;
  text-transform: uppercase;
  line-height: 68px;
  @include NeoSans(900);
}

p {
  font-size: $font16;
  line-height: 24px;
  @include NeoSans(400);
  color: $charcoal;
}

.btn-secondary {
  background-color: $orange;
  padding: 0;
  border: 1px solid $orange;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: $white;
  text-transform: uppercase;
  @include NeoSans(900);
  @include border_radius(4px);
  height: 54px;
  padding: 0 29px;
  span {
    display: block;
    margin-right: 10px;
    svg {
      width: 20px;
      height: 20px;
      display: block;
    }
  }
}

.btn-white {
  background-color: $white;
  color: $black;
}

.banner {
  background-image: url(~assets/images/burooj_air_drone.jpg);
  background-position: 50%;
  background-repeat: no-repeat;
  min-width: 100%;
  min-height: 100%;
  background-size: cover;
  .overlay {
    background-color: rgba($overlay, 0.35);
    height: 330px;
  }
}
.service {
  padding: 180px 0 40px 0;
  background: $primary;
  .text-box {
    color: $white;
    h3,
    h4,
    p {
      color: $white;
      margin-bottom: 20px;
    }
    h4 {
      font-size: $font42;
      line-height: 52px;
      text-transform: uppercase;
      font-weight: normal;
      margin: 10px 0 20px;
    }
    h5 {
      font-size: $font26;
      font-weight: 800;
      line-height: 26px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .video-holder {
      margin-bottom: 20px;
      position: relative;
      .iconPlay {
        position: absolute;
        left: 50%;
        top: 50%;
        @include translate(-50%, -50%);
        svg {
          width: 212px;
          height: 212px;
          display: block;
        }
      }
    }
  }
}

/***** ADVANTAGE DRONE *****/

.advantages {
  padding: 240px 0 110px;
  background-image: url(~assets/images/BuroojAir_3.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: $black;
    opacity: 0.71;
    z-index: 10;
  }
  .container {
    position: relative;
    z-index: 55;
  }
  .text-box {
    h4,
    h3,
    p {
      color: $white;
    }
    h4 {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      font-weight: bold;
      line-height: 1.2;
      font-size: $font32;
    }
    p {
      margin-bottom: 0.9rem;
    }
  }
}
.inquiry {
  background: $whiteSecondary;
  padding: 100px 0;
  h3 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  .row {
    align-items: center;
  }
  form {
    max-width: 504px;
    .form-group {
      margin-bottom: 14px;
    }
    .form-control {
      background-color: $white;
      border-width: 0px 0px 0px 0px;
      @include border_radius(8px);
      height: 59px;
    }
    textarea {
      &.form-control {
        height: auto;
      }
    }
  }
}

// responsive

@import "~assets/scss/pages.scss/responsive.scss";
</style>
