<template>
  <div>
    <Header />
    <!-- Hero -->
    <SectionsHeroPartnerSection />
    
    
    <!-- CLEANING SEC -->
    <section class="cleaning">
      <div class="container">
        <div class="text-box">
          <h2>{{ $t("FACADE_CLEANING") }}​</h2>
          <p>
            {{
              $t("FAST_AND_EFFECTIVE_N_TIMES_FASTER_THAN_TRADITIONAL_METHODS")
            }}
          </p>
        </div>
      </div>
    </section>
    <!-- FRANCHISE SEC -->
    <section class="partner-franchise">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="shape"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          class="elementor-shape-fill"
          d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
        ></path>
      </svg>
      <div class="row g-0">
        <div class="col-lg-6">
          <div class="opertunityBox">
            <h2>{{ $t("FRANCHISE") + " " + $t("OPPORTUNITIES_AVAILABLE") }}</h2>
            <p>
              {{ $t("OUR_HISTORY_AND_THE_EVOLUTION_OF_CLEANING") }}
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="text-box">
            <h2>
              BECOME INVOLVED IN THE MOST INNOVATIVE BUSINESS IDEA THAT THE
              CLEANING INDUSTRY HAS SEEN IN MORE THAN 100 YEARS.
            </h2>
            <h4>
              Our philosophy at BUROOJ AIR Working Drone is simple – provide
              innovative solutions that are safe and efficient and develop new
              and emerging technology utilising drones.
            </h4>
            <p>
              BUROOJ AIR Working Drone is creating a family around the globe
              where our values are based on working with good people to achieve
              mutual goals. Every day we strive to evolve with new ideas and we
              work with our hearts. Not being afraid of our curiosity we are
              always looking at ways that we can become better.
            </p>
            <p>
              BUROOJ AIR Working Drone aims to make a difference in the world
              utlising drones in our everyday working lives to bring more
              efficient solutions to the cleaning and other emerging industries
              that could have benefits from drones. So if you're ready to
              explore a new innovative solution and become part of the family we
              are
            </p>
            <a href="#" class="btn btn-secondary">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M21 5c-1.11-.35-2.33-.5-3.5-.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.95 0-4.05.4-5.5 1.5v14.65c0 .25.25.5.5.5c.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.1.05.15.05.25.05c.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1m0 13.5c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5v11.5Z"
                  />
                </svg>
              </i>
              {{ $t("READ_MORE") }}
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Estimate -->
    <section class="estimate">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="text-box">
              <p>
                {{
                  $t(
                    "THE_ESTIMATED_NEED_FOR_FUTURE_DRONE_CLEANING_SERVICES_IS_APPROXIMATELY"
                  )
                }}
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-box">
              <h2>2,500,000</h2>
              <h4>{{ $t("DRONES_INTERNATIONALLY") }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="advantages partnerAdvantage">
      <div class="video">
        <iframe
          src="https://player.vimeo.com/video/713580406?h=6988e72af6&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;transparent=0&amp;background=1&amp;app_id=122963"
          width="426"
          height="240"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen=""
          title="BUROOJ AIR Working Drone"
          data-ready="true"
          class="elementor-background-video-embed"
          style="width: 1903px; height: 1072.11px"
        ></iframe>
      </div>
      <div class="container">
        <div class="row align-items-center">
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
              <h4>
                {{ $t("IMPORTANT_KEY_FACTS") }}
              </h4>
              <p>
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- HOW BUROOJ AIR SEC -->
    <section class="how-ktv">
      <div class="row g-0">
        <div class="col-lg-5">
          <div class="text-box">
            <h3>HOW DID BUROOJ AIR WORKING DRONE DEVELOPE?</h3>
            <p>
              <strong>How did BUROOJ AIR Working Drone develope?</strong> <br />
              BUROOJ AIR Working Drone was founded by the entrepreneur Kennet
              Nilsen where he Established BUROOJ AIR Group some 30 years ago.
              Kennet built a very successful facilities management and cleaning
              business that was the first to secure 20 year contacts for the
              maintenance and management of many buildings in a number of
              countries.
            </p>

            <p>
              Three Decades on and many years of R & D and development and the
              advancement in technology Kennet evolved and is now the first
              company in the world to commercialise the use of drones for use in
              the cleaning, paint and industrial coatings industry. Some others
              have come and gone, some have similar technology but are yet to
            </p>

            <a href="#" class="btn btn-secondary">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M21 5c-1.11-.35-2.33-.5-3.5-.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.95 0-4.05.4-5.5 1.5v14.65c0 .25.25.5.5.5c.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.1.05.15.05.25.05c.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1m0 13.5c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5v11.5Z"
                  />
                </svg>
              </i>
              {{ $t("READ_MORE") }}
            </a>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="img-holder">
            <img src="~assets/images/spyledrone_3184ed.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    
    

    <!-- ADVANTAGE SEC -->
    <AdvantageSection />
    <!-- Advantages SEC -->
    <Footer />
  </div>
</template>

<script>
export default {
  name: "BECOME_A_PARTNER",
  head() {
    return {
      title: `Burooj Air | ${this.$t("BECOME_A_PARTNER")}`,
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



.cleaning {
  background-color: $mainly_blue;
  padding: 40px 0;

  h2 {
    color: $white;
    font-size: $font54;
    font-weight: 800;
    text-transform: none;
    line-height: 58px;
    margin-bottom: 10px;
  }

  p {
    color: $white;
    font-size: $font40;
    font-weight: 300;
    text-transform: none;
    line-height: 52px;
  }
}

.partner-franchise {
  position: relative;

  .text-box {
    padding: 20% 20%;

    .btn {
      display: inline-flex;
      align-items: center;

      i {
        margin-right: 10px;
      }
    }
  }

  .opertunityBox {
    padding: 20% 20%;
    background: url(~assets/images/ktv_5461.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 100%;

    &:after {
      content: "";
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
    }

    h2 {
      color: $white;
      font-size: 66px;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 72px;
      margin-bottom: 20px;
      position: relative;
      z-index: 1;
    }

    p {
      color: $white;
      font-size: 42px;
      font-weight: 400;
      text-transform: uppercase;
      line-height: 52px;
      position: relative;
      z-index: 1;
    }
  }

  .text-box {
    background: $bright_gray;

    h2 {
      font-size: 26px;
      font-weight: 600;
      line-height: 30px;
      margin-bottom: 15px;
      color: $white;
    }

    h4 {
      font-size: 1.25rem;
      margin-bottom: 15px;
      color: $white;
    }

    p {
      margin-bottom: 15px;
      color: $white;
    }
  }

  .shape {
    height: 60px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 6;

    path {
      fill: $mainly_blue;
    }
  }
}

.estimate {
  text-align: center;

  .text-box {
    padding: 200px 40px;

    p {
      font-size: 54px;
      font-weight: 500;
      text-transform: uppercase;
      line-height: 58px;
      max-width: 770px;
      margin: 0 auto;
    }

    h2 {
      font-size: 90px;
      font-weight: 800;
      text-transform: uppercase;
      line-height: 90px;
    }

    h4 {
      font-size: 41px;
      font-weight: 800;
      line-height: 40px;
    }
  }
}

.advantages {
  padding: 240px 0 110px;
  background-image: url(~assets/images/ktv_5505.jpg);
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

.partnerAdvantage {
  overflow: hidden;

  .container {
    position: relative;
    z-index: 55;
  }

  .video {
    position: absolute;
    inset: 0;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}

.how-ktv {
  .text-box {
    padding: 200px;

    h3 {
      font-size: 42px;
      text-transform: uppercase;
      font-weight: 400;
      margin-bottom: 20px;
      line-height: 52px;
    }

    p {
      margin-bottom: 20px;
    }

    a {
      i {
        margin-right: 10px;
      }
    }
  }

  .img-holder {
    height: 100%;
    position: relative;

    &:after {
      content: "";
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
    }

    img {
      height: 100%;
      object-fit: cover;
    }
  }
}



// responsive

</style>
