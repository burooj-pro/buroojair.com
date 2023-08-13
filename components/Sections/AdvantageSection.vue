<template>
  <section id="advantageSection" class="advantage-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="text-box">
            <h3>{{ $t("ADVANTAGES_USING_BUROOJ_AIR_DRONES") }}</h3>
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-list">
            <ul>
              <li>
                <span><img src="~assets/images/check-icon.png" alt="" /></span>
                <p class="mx-2">
                  {{
                    $t(
                      "HIGH_SPEED_AND_EFFECTIVE_SURPASSING_TRADITIONAL_METHODS"
                    )
                  }}
                </p>
              </li>
              <li>
                <span><img src="~assets/images/check-icon.png" alt="" /></span>
                <p class="mx-2">
                  {{ $t("SIMPLIFIED_ACCESS_TO_REMOTE_OR_HARD_TO_GET_TO_PLACES") }}
                </p>
              </li>
              <li>
                <span><img src="~assets/images/check-icon.png" alt="" /></span>
                <p class="mx-2">
                  {{ $t("REINFORCED_SAFETY_AND_SECURITY") }}
                </p>
              </li>
              <li>
                <span><img src="~assets/images/check-icon.png" alt="" /></span>
                <p class="mx-2">
                  {{ $t("ACCESSING_ELEVATED_AREAS_WITHOUT_REQUIRING_HEIGHT_SPECIFIC_TOOLS") }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>