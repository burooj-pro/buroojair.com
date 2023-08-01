<template>
  <div class="wrapper">
    <Header />
    <!-- BANNER SEC -->
    <Banner />

    <!-- SERVICES SEC -->
    <section class="servics-sec">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title">
              <h2>
                {{ $t("DRONE_SERVICES") }}
              </h2>
              <p>
                {{ $t("HIGH_RISE_WINDOW_AND_FACADE_CLEANING") }}
              </p>
            </div>
            <div class="servics-inner">
              <div class="row">
                <div class="col-md-6">
                  <div class="text-box">
                    <h3>
                      {{ $t("WINDOW_CLEANING") }}
                    </h3>
                    <p>
                      {{ $t("WINDOW_CLEANING_DESC") }}
                    </p>
                    <NuxtLink to="/window-cleaning" class="btn btn-secondary">
                      <span>
                        <svg
                          width="800px"
                          height="800px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>
                      {{ $t("READ_MORE") }}
                    </NuxtLink>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="text-box">
                    <h3>
                      {{ $t("FACADE_CLEANING") }}
                    </h3>
                    <p>
                      {{ $t("FACADE_CLEANING_DESC") }}
                    </p>
                    <NuxtLink to="/facade-cleaning" class="btn btn-secondary">
                      <span>
                        <svg
                          width="800px"
                          height="800px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>
                      {{ $t("READ_MORE") }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- VACANT PILOT SEC -->
    <section class="vacant-pilot-sec">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="text-box">
              <div class="media">
                <img
                  src="~assets/images/info-icon.png"
                  alt=""
                  class="img-fluid"
                />
                <h4 class="mx-2">
                  {{ $t("A_DRONE_PILOT_POSITION")
                  }}<span> {{ $t("IS_AVAILABLE") }}</span>
                </h4>
              </div>
              <a href="#" class="btn btn-secondary">
                {{ $t("APPLY_NOW") }}
              </a>
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
            fill="#212121"
          ></path>
        </svg>
      </div>
    </section>

    <!-- VACANT PILOT SEC -->
    <section class="arrived-drone-sec">
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-md-6">
            <div class="image-holder">
              <img
                src="~assets/images/arrived-drone-img.jpg"
                alt=""
                class="img-fluid"
              />
              <h4>
                {{ $t("WINDOW_AND_FACADE") }} <br />
                {{ $t("CLEANING_WITH_DRONE") }}
              </h4>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-box">
              <h4>
                {{
                  $t(
                    "THE_HIGH_RISE_WINDOW_AND_FACADE_CLEANING_EVOLUTION_HAS_ARRIVED"
                  )
                }}
              </h4>
              <p>
                {{
                  $t(
                    "TO_DATE_ONLY_SPECIALIZED_CLEANING_BUSINESSES_WITH_EXPERIENCE_IN_ABSEILING"
                  )
                }}
              </p>
              <NuxtLink to="/facade-cleaning" class="btn btn-secondary">
                <span
                  ><!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                      fill="#fff"
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
    <AdvantageSection />

    <!-- SOLAR CELL SEC -->
    <section class="arrived-drone-sec solar-cell-sec">
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-md-6">
            <div class="image-holder">
              <img
                src="~assets/images/solar-cell-img.jpg"
                alt=""
                class="img-fluid"
              />
              <h4>
                SOLAR CELL PANEL <br />
                CLEANING
              </h4>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-box">
              <h4>THE PANEL SURFACE IS NOT HURT BY THIS PROCEDURE.</h4>
              <p>
                Our window cleaning technique is ideal for cleaning solar cell
                panels, and it won't damage the surface.
              </p>
              <p class="m-0">
                The fact that there is no chance of stains and the surfaces stay
                clean longer than with conventional cleaning is a significant
                benefit of this technique.
              </p>
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
            fill="#EEEAFF"
          ></path>
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
                {{ $t("PARTICIPATE_IN_THE_MOST_CREATIVE") }}
              </p>
              <a href="#" class="btn btn-secondary btn-blue">
                <span>
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                {{
                  $t(
                    "OUR_MAIN_GOAL_IS_TO_HELP_OTHERS_AND_MAKE_WORKING_LIFE_BETTER_FOR_EVERYONE"
                  )
                }}
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
    <section class="about-us-sec">
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-md-6">
            <div class="about-us-left">
              <h4>{{ $t("MOHAMMED_ALOTAIBI_FOUNDED_THE_BUROOJ") }}</h4>
              <p>
                {{
                  $t(
                    "GROUP_IN_2018_WHICH_GREW_INTO_BUROOJ_AIR_DRONES_THE_BUROOJ_GROUPS_PRIORITY_WAS_HIGH_PRESSURE_CLEANING"
                  )
                }}
              </p>
              <a href="#" class="btn btn-secondary">
                <span>
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </span>
                {{ $t("READ_MORE") }}
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="about-us-right">
              <div class="text-box">
                <h3>{{ $t("ABOUT_US") }}</h3>
                <h4>{{ $t("OUR_HISTORY_AND_THE_EVOLUTION_OF_CLEANING") }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ESTIMATED FUTURE SEC -->
    <section class="estimated-future-sec">
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
            fill="#542FFB"
          ></path>
        </svg>
      </div>
    </section>

    <!-- GLOBAL REACH SEC -->
    <section class="global-reach-sec">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="text-left">
              <h3>{{ $t("GLOBAL_REACH") }}</h3>
              <p>
                {{ $t("GLOBAL_REACH_DESC") }}
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-right">
              <p>
                {{ $t("NO_MATTER_WHERE_YOU_ARE_IN_THE_WORLD") }}
              </p>
              <p>
                {{ $t("THROUGHOUT_OUR_JOB_SECTORS") }}
              </p>
              <a href="#" class="btn btn-secondary">
                <span>
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </span>
                {{ $t("READ_MORE") }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WORKING GROWTH SEC -->
    <!-- <section class="working-growth-sec">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="text-left">
              <h3>BUROOJ AIR WORKING DRONE GROWTH</h3>
              <img
                src="~assets/images/graph-img.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-box">
              <h4>
                Drone use is increasing worldwide for a variety of purposes, and
                many industries are still seeing rapid innovation. No matter if
                they are flown for recreational, military, or commercial
                purposes, drones are becoming more and more common. The
                worldwide drone business is expanding year after year.
              </h4>
              <p>
                Burooj Air Drones is a part of this expansion commercializing
                the usage of drones for the cleaning business by utilizing
                several solutions.
              </p>
              <p>
                Burooj Air Drones offers a comprehensive contactless solution
                that reduces the hazards associated with conventional
                techniques. A contactless solution might also lessen the
                long-term risk to building structures, where minor mishaps can
                occasionally occur without warning and necessitate repairs years
                later.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="vacant-shape vacant-shape2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill"
            d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
            fill="#f0f0f1"
          ></path>
        </svg>
      </div>
    </section> -->

    <!-- SAFETY STATEMENT SEC -->
    <!-- <section class="safety-statement-sec">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="statement-left">
              <h3>OUR SAFETY STATEMENT</h3>
              <p>
                Safety is of the utmost importance to Burooj Air Drones’
                management. The main objective is to guarantee that all
                employees, partners, and franchises adhere to the BUROOJ AIR Working
                Drone Safety Policy at all times in order to ensure safe
                operations while maintaining the attention on everyone involved
                and around.
              </p>
            </div>
          </div>
          <div class="col-md-5">
            <div class="text-box">
              <p>
                In accordance with the safety standards established and defined
                in the business's global safety policy, Burooj Air Drones
                conducts the essential safety measures and safeguards, including
                but not limited to the following:
              </p>
              <ul>
                <li>To reduce our negative effects on the environment</li>
                <li>Not to damage or annoy others who are not involved.</li>
                <li>
                  Not to cause harm to property, structures, cars, or other
                  assets
                </li>
                <li>
                  To always abide by the General Authority of Civil Aviation
                  (GACA) and other international privacy laws, to treat
                  information respectfully and carefully, and to do everything
                  possible to comply with them.
                </li>
              </ul>
              <p>
                Burooj Air Drones will conduct its operations in accordance with
                the established aviation culture. We will work to ensure the
                brand and the sector experience good growth by learning,
                developing, and modifying our service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- POPULATED SEC -->
    <section class="populated-sec">
      <img
        src="~assets/images/populated-img.jpg"
        alt=""
        class="img-fluid w-100"
      />
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
    <section class="development-sec">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="development-left">
              <h3>{{ $t("FUTURE_DEVELOPMENT") }}</h3>
              <p>{{ $t("WHATS_NEXT") }}</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-box">
              <ul :dir="dir">
                <li>
                  <p>
                    <strong>Spray painting</strong> With continued development,
                    extended testing and new partnerships with paint
                    manufacturers, we are moving closer to the final testing
                    fase.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Higher altitudes </strong> We have solved the
                    operating height restriction with our patent pending roof
                    safety system. There are no longer limitations on operation
                    height, and we will continue the testing to be able to
                    operate safely in heights and altitudes up to 600 meters and
                    above.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Goggles</strong> As a result of operating in higher
                    altitudes, the use of special flight goggles is being
                    considered and tested.
                  </p>
                </li>
                <li>
                  <p class="mb-4">
                    <strong>Remote Control rooms</strong> Looking beyond 2023,
                    BUROOJ AIR Working Drones is planning to create special
                    control rooms where drone pilots can operate drones all over
                    the world via the internet. Drone Pilots will be able to
                    provide support, provide remote tasks, work safer and be
                    able to provide specialist service to anywhere there is
                    service.
                  </p>
                  <p>
                    Remote control rooms would be a great advantage in areas
                    with a lot of noise, high/low temperatures, and other
                    ‘problem’ areas.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <ContactSection />
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
          content:
            "We aim to contribute to a safer work day for people who work at great heights with lifts, scaffolding and for facade climbers.",
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
<style lang="scss">
h3 {
  color: $mainly_blue;
  font-size: $font62;
  text-transform: uppercase;
  line-height: 68px;
  @include Red_Hat_Display(900);
}

p {
  font-size: $font16;
  line-height: 24px;
  @include Red_Hat_Display(400);
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
  @include Red_Hat_Display(800);
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

.btn-blue {
  background-color: $secondary !important;
  color: $white !important;
  border: 1px solid $secondary !important;
}

/****** SERVICES SEC ******/

.servics-sec {
  background-color: rgba($secondary, 0.1);
  padding: 158px 0 152px;
}

.servics-inner {
  margin: 34px 0 0 0;
  .text-box {
    h3 {
      font-size: $font26;
      line-height: 1;
    }
    p {
      color: $dark_gray;
      margin: 24px 0 35px 0;
      max-width: 540px;
      width: 100%;
    }
  }
}

.title {
  h2 {
    color: $dark_gray;
    font-size: $font62;
    text-transform: uppercase;
    line-height: 1;
    @include Al_Qabas(bold);
    margin: 0 0 25px 0;
  }
  p {
    color: $dark_gray;
    font-size: $font42;
    text-transform: uppercase;
    line-height: 52px;
    @include Red_Hat_Display(400);
  }
}

.shape-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: rotateX(180deg);
  svg {
    height: 42px;
    width: 100%;
    display: block;
  }
}

/****** VACANT PILOT SEC ******/

.vacant-pilot-sec {
  background-color: $primary;
  padding: 66px 0;
  position: relative;
  .text-box {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .media {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 20px;
      h4 {
        color: $white;
        @include Red_Hat_Display(700);
        font-size: $font40;
        text-transform: uppercase;
        margin-left: 16px;
        span {
          @include Red_Hat_Display(400);
        }
      }
    }
  }
}

.vacant-shape {
  position: absolute;
  bottom: -42px;
  left: 0;
  width: 100%;
  z-index: 10;
  svg {
    height: 42px;
    width: 100%;
    display: block;
  }
  &.vacant-shape2 {
    bottom: -60px;
    svg {
      height: 60px;
    }
  }
}

/***** ARRIVED DRONE *****/

.arrived-drone-sec {
  background-color: $secondary;
  .image-holder {
    position: relative;
    height: 800px;
    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($black, 0.4);
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    h4 {
      @include Red_Hat_Display(700);
      font-size: $font62;
      text-align: right;
      text-transform: uppercase;
      line-height: 68px;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      color: $white;
      right: 0;
      width: 100%;
      padding: 100px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      z-index: 10;
    }
  }
  .text-box {
    padding: 140px 140px 140px 140px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h4 {
      font-size: $font42;
      color: $white;
      text-transform: uppercase;
      line-height: 52px;
      @include Red_Hat_Display(600);
    }
    p {
      color: $white;
      margin: 30px 0 34px;
    }
  }
}

/***** SOLAR SELL SEC ******/

.solar-cell-sec {
  background-color: $blue;
  position: relative;
  .image-holder {
    &::after {
      background-color: rgba($black, 0.2);
    }
  }
  .text-box {
    p {
      margin-bottom: 15px;
    }
  }
  .vacant-shape {
    bottom: auto;
    top: 0;
    svg {
      height: 60px;
    }
  }
}

/***** LET TALK AEC ******/

.let-talk-sec {
  background: url(~assets/images/map_grey.png) no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  padding: 340px 0 290px;
  &::after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($gray10, 0.88);
  }
  .let-talk-left {
    position: relative;
    z-index: 10;
    h4 {
      color: $black;
      font-size: $font62;
      text-transform: uppercase;
      line-height: 68px;
      @include Red_Hat_Display(900);
      margin: 0 0 24px 0;
    }
    p {
      color: $black;
      font-size: $font42;
      text-transform: uppercase;
      line-height: 52px;
      @include Red_Hat_Display(400);
    }
  }
  .let-talk-right {
    position: relative;
    z-index: 10;
    p {
      color: $black;
      @include Red_Hat_Display(500);
      font-size: $font20;
      margin: 0 0 36px 0;
      line-height: 24px;
    }
  }
}

/***** INTENTION SEC ******/

.intention-sec {
  padding: 220px 0 226px;
  background-color: $primary;
  .intention-left {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      color: $white;
    }
  }
  .intention-right {
    padding: 0 0 0 31px;
    h4 {
      color: $white;
      font-size: $font20;
      line-height: 24px;
      @include Red_Hat_Display(700);
      margin: 0 0 20px 0;
    }
    p {
      color: $white;
      margin: 0 0 16px 0;
      &:last-child {
        margin: 0;
      }
    }
  }
}

/******** ABOUT US *****/

.about-us-sec {
  .about-us-left {
    padding: 120px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h4 {
      color: $gray;
      @include Red_Hat_Display(400);
      font-size: $font42;
      text-transform: uppercase;
      line-height: 52px;
    }
    p {
      color: $gray;
      text-transform: uppercase;
      line-height: 24px;
      margin: 24px 0 32px;
    }
  }
  .about-us-right {
    background: url(~assets/images/about-img.jpg) no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
    object-fit: cover;
    padding: 100px;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($black, 0.4);
    }
    .text-box {
      position: relative;
      z-index: 10;
      h3 {
        color: $white;
        margin: 0 0 26px 0;
      }
      h4 {
        color: $white;
        @include Red_Hat_Display(700);
        font-size: $font42;
        text-transform: uppercase;
        line-height: 52px;
      }
    }
  }
}

/***** ESTIMATES FUTURE SEC ******/

.estimated-future-sec {
  background-color: $secondary;
  padding: 228px 0;
  position: relative;
  .estimated-future-left {
    padding: 0 15px;
    p {
      color: $white;
      @include Red_Hat_Display(400);
      font-size: $font42;
      text-transform: uppercase;
      line-height: 52px;
      max-width: 730px;
      width: 100%;
      text-align: center;
      margin: 0 auto;
    }
  }
  .estimated-future-right {
    text-align: center;
    height: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
      color: $white;
    }
    p {
      color: $white;
      @include Red_Hat_Display(800);
      font-size: $font41;
      line-height: 40px;
    }
  }
  .vacant-shape {
    bottom: -70px;
    SVG {
      height: 70px;
    }
  }
}

/***** GLOBAL REACH SEC *****/

.global-reach-sec {
  padding: 192px 0 110px;
  .text-left {
    h3 {
      color: $eclipse;
      margin: 0 0 22px 0;
    }
    p {
      color: $eclipse;
    }
  }
  .text-right {
    p {
      color: $eclipse;
      margin-bottom: 14px;
    }
    .btn-secondary {
      margin-top: 24px;
    }
  }
}

/****** WORKING GROWTH SEc *****/

.working-growth-sec {
  background-color: rgba($secondary, 0.1);
  position: relative;
  padding: 240px 0;
  .text-left {
    h3 {
      color: $black;
      margin: 0 0 28px 0;
    }
  }
  .text-box {
    padding: 8px 0 0 0;
    h4 {
      color: $eclipse;
      @include Red_Hat_Display(700);
      font-size: $font16;
      margin-bottom: 14px;
      line-height: 24px;
    }
    p {
      color: $eclipse;
      margin-bottom: 14px;
      max-width: 540px;
      width: 100%;
    }
  }
}

/***** SAFETY STATEMENT SEC *****/

.safety-statement-sec {
  background-color: $primary;
  padding: 250px 0 170px;
  .statement-left {
    h3 {
      color: $white;
      margin: 0 0 23px 0;
    }
    p {
      color: $white;
      margin-bottom: 14px;
      max-width: 639px;
      width: 100%;
    }
  }
  .text-box {
    p {
      color: $white;
      @include Red_Hat_Display(400);
      font-size: $font16;
      line-height: 24px;
    }
    ul {
      padding: 14px 0 23px 23px;
      li {
        color: $white;
        @include Red_Hat_Display(600);
        font-size: $font16;
        margin-bottom: 0px;
        line-height: 24px;
        position: relative;
        padding-left: 18px;
        &::after {
          position: absolute;
          content: "";
          left: 0;
          top: 8px;
          background-color: $white;
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
      }
    }
  }
}

/***** POPULATED SEC *****/

.populated-sec {
  display: flex;
  align-items: center;
  img {
    height: 530px;
    width: 100%;
    object-fit: cover;
  }
}

/***** WORK STAND SEC *****/

.work-stand-sec {
  background-color: $secondary;
  position: relative;
  padding: 140px 0;
  h3 {
    color: $white;
  }
  .text-box {
    p {
      color: $white;
      margin-top: 23px;
    }
  }
  .work-vacant-shape {
    bottom: auto;
    top: -66px;
    transform: rotatex(180deg) rotatey(180deg);
    width: 100%;
    svg {
      height: 66px;
    }
  }
}

/***** DEVELOPMENT SEC *****/

.development-sec {
  background-color: $dark_green;
  padding: 235px 0 150px;
  .development-left {
    h3 {
      color: $white;
      margin: 0 0 30px 0;
    }
    p {
      color: $white;
      @include Red_Hat_Display(400);
      font-size: $font42;
      text-transform: uppercase;
      line-height: 52px;
    }
  }
  .text-box {
    padding: 0 0 0 50px;
    ul {
      li {
        margin-bottom: 24px;
        position: relative;
        padding-left: 18px;
        p {
          color: $white;
          strong {
            display: block;
          }
        }
        &::after {
          position: absolute;
          content: "";
          left: 0;
          top: 8px;
          background-color: $white;
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        &:last-child {
          margin: 0;
        }
      }
    }
  }
}

// responsive

@import "~assets/scss/pages.scss/responsive.scss";
</style>
