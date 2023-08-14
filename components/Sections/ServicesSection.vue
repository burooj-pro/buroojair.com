<template>
    <section id="servicesSection" class="services-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title">
              <h2>
                {{ $t("DRONE_SERVICES") }}
              </h2>
              <p>
                {{ $t("CLEANING_BUILDINGS_AND_HEAVY_LIFTING") }}
              </p>
            </div>
            <div class="services-inner">
              <div class="row">
                <div class="col-md-6">
                  <div class="text-box">
                    <h3>
                      {{ $t("CLEANING_BUILDINGS") }}
                    </h3>
                    <p>
                      {{ $t("CLEANING_BUILDINGS_DESC") }}
                    </p>
                    <NuxtLink to="/services/-cleaning" class="btn btn-secondary">
                      <i class="bi bi-arrow-right fs-5 me-2"></i>
                      {{ $t("READ_MORE") }}
                    </NuxtLink>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="text-box">
                    <h3>
                      {{ $t("HEAVY_LIFTING") }}
                    </h3>
                    <p>
                      {{ $t("HEAVY_LIFTING_DESC") }}
                    </p>
                    <NuxtLink to="/services/facade-cleaning" class="btn btn-secondary rounded-3">
                      <i class="bi bi-arrow-right fs-5 me-2"></i>
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
</template>