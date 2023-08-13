<template>
    <section id="vacantPilotPositionSection" class="vacant-pilot-section">
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
                  {{ $t("GACA_PART_107_DRONE_PILOT") }}
                  <span> {{ $t("IS_REQUIRED") }}</span>
                </h4>
              </div>
              <!-- <a href="#" class="btn btn-secondary">
                {{ $t("APPLY_NOW") }}
              </a> -->
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
</template>