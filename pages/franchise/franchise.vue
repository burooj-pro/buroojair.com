<template>
  <div class="overflow-hidden">
    <Header />
    <!-- Service Hero Sec -->
    <section class="heroServices mt-5 pt-4">
      <div class="row g-0">
        <div class="col-lg-7">
          <div class="heroFlag">
            <div class="titleText">
              <h2>{{ $t("ABOUT_US") }}</h2>
              <p>
                {{ $t("OUR_HISTORY_AND_THE_EVOLUTION_OF_CLEANING") }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="text-box">
            <p>
              <strong>
                {{
                  $t(
                    "BUROOJ_AIR_IS_A_DRONE_COMPANY_BASED_IN_THE_KINGDOM_OF_SAUDI_ARABIA"
                  )
                }}
              </strong>
            </p>
            <p>
              {{ $t("CLEANING_BUILDINGS_BUROOJ_AIR_DRONES_CAN_BE_USED") }}
            </p>

            <p>
              {{ $t("WEIGHTLIFTING_BUROOJ_AIR_DRONES_CAN_BE_USED") }}
            </p>

            <p>
              {{ $t("HEAT_MEASUREMENT_AND_FIRE_FIGHTING") }}
            </p>

            <p>
              {{ $t("CAMERA_FILMING") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- METHOD SEC -->
    <section class="method">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="text-box">
              <h3>
                {{ $t("OUR_INTENTION") }}
              </h3>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-box">
              <p>
                {{ $t("OUR_MAIN_INTENTION_IS_TO_DO_GOOD") }}
              </p>
              <p>
                {{ $t("WE_AIM_TO_CONTRIBUTE_TO_A_SAFER_WORK") }}
              </p>
              <p>
                {{ $t("THESE_ARE_PHYSICALLY_DEMANDING_JOBS") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SETTING STANDARD SEC -->
    <section class="standardSolar aboutSetting">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        class="shape"
        preserveAspectRatio="none"
      >
        <path
          class="elementor-shape-fill"
          d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
        ></path>
      </svg>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 m-auto">
            <div class="text-box">
              <h3>
                {{ $t("FRANCHISE_OPPORTUNITIES_AVAILABLE") }}
              </h3>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="text-box">
              <p>
                <strong>
                  {{ $t("BECOME_INVOLVED_IN_THE_MOST_INNOVATIVE") }}
                </strong>
              </p>
              <p>
                {{ $t("OUR_PHILOSOPHY_AT_BUROOJ") }}
              </p>
              <p>
                {{ $t("BUROOJ_AIR_CREATING_A_FAMILY") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Development -->
    <section class="standardSolar futureDevelopment">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        class="shape"
        preserveAspectRatio="none"
      >
        <path
          class="elementor-shape-fill"
          d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
        ></path>
      </svg>
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="text-box titleText">
              <h3>
                {{ $t("WE_ARE_FAMILY") }}
              </h3>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="">
              <p>
                <b>
                  {{  $t("WE_THINK_OF_OUR_PARTNERS_AS_FAMILY") }}
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="standardSolar">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 m-auto">
            <div class="text-box">
              <h3>
                {{ $t("GET_INVOLVED_AND_BECOME_PARTNER") }}
              </h3>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="text-box">
              <p>
                <strong>
                  {{ $t("WE_ARE_SEEKING_INTERSET_FOR_COUNTRY_PARTNERS") }}
                </strong>
              </p>
              <div>
                <p>
                 {{ $t('The_drone_and_all_the_fitting_required_to_operate_the_drone_for_cleaning_at_heights') }}
                </p>
                <p>
                  {{ $t('The_required_equipment_list_necessary_to_operate') }}
                </p>
                <p>
                  {{ $t('Assistance_and_application_directly_to_the_countries_civil_aviation_authority_for_licensing') }}
                </p>
                <p>
                  {{ $t('Full_UAV_operators_manual') }}
                </p>
              </div>
              <p>
                <strong>
                  {{  $t('COST')  }}
                </strong>
              </p>
              <p>
                {{ $t('If_like_to_find_out_more_and_get_involved_regardless') }}
              </p>
              <p>
                {{ $t('Our_partnership_and_exclusive_master_license')  }}
              </p>
              <p>
                {{ $t('Our_aim_is_to_work_with_our_partners_to_expand') }}
              </p>
            </div>
          </div>
        </div>
        <div class="row ">
          <div class="col-12 text-center mt-3">
            <NuxtLink to="/franchise" class="btn btn-secondary btn-blue text-center">
              <span>
                {{ $t("NDA_BUTTON") }}
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

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

<style lang="scss">

p {
  font-size: $font16;
  line-height: 24px;
  @include NeoSans(400);
  color: $charcoal;
}
.heroServices {
  .heroFlag {
    padding: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(~assets/images/ktv_dronepilot.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: $black;
      opacity: 0.4;
    }
  }
  .text-box {
    padding: 100px;
    background: #e4e7ed !important;
    p {
      color: $primary !important;
      margin-bottom: 20px;
    }
  }
}

.titleText {
  position: relative;
  z-index: 5;
  h2 {
    font-size: $font62;
    color: $white;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  p {
    font-size: $font42;
    text-transform: uppercase;
    color: $white;
    line-height: 52px;
  }
}

.method {
  background: $primary;
  color: $white;
  padding: 240px 0 100px 0;
  ol {
    li {
      margin-bottom: 20px;
    }
  }
  .text-box {
    h3 {
      color: $white;
    }
  }
  h4 {
    font-size: 1.25rem;
    color: $white;
    line-height: 1.4;
    margin-bottom: 0.9rem;
  }
  p {
    color: $white;
    margin-bottom: 0.9rem;
  }
}
.standardSolar {
  background: $primary;
  padding: 240px 0px 100px 0px;
  .text-box {
    p,
    h3 {
      color: $white;
      margin-bottom: 20px;
    }
  }
}
.standardSolar {
  &.aboutSetting {
    position: relative;
    background: $blue;

    .shape {
      fill: $primary;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 46px;
      width: 100%;
    }

    .settingStabdardBox {
      height: 100%;
    }

    .text-box {
      h3,
      p {
        color: $white;
        margin-bottom: 0.9rem;
      }
    }
  }
}

.futureDevelopment {
  position: relative;
  background: $whiteSecondary !important;

  .shape {
    fill: $blue;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 46px;
    width: 100%;
  }

  .text-box {
    h3 {
      color: $primary !important;
    }

    h4 {
      font-weight: normal;
      text-transform: uppercase;
      font-size: $font42;
      color: $primary !important;
    }

    ul {
      padding-left: 20px;
      color: $primary !important;

      li {
        list-style: disc;
        font-size: $font16;
      }
    }
  }
}

.text-list {
  ul {
    li {
      display: flex;
      align-items: center;
      margin: 0 0 24px 0;
      &:last-child {
        margin: 0;
      }
      span {
        max-width: 46px;
        width: 100%;
        margin: 0 16px 0 0px;
      }
      p {
        flex: 1;
        @include NeoSans(600);
        font-size: $font20;
        line-height: 24px;
      }
    }
  }
}

// responsive

</style>
