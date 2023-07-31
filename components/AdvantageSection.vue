<template>
  <section class="advantage-sec">
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
                      "FAST_AND_EFFECTIVE_N_TIMES_FASTER_THAN_TRADITIONAL_METHODS"
                    )
                  }}
                </p>
              </li>
              <li>
                <span><img src="~assets/images/check-icon.png" alt="" /></span>
                <p class="mx-2">
                  {{ $t("EASIER_ACCESS_TO_HARD_TO_REACH_AREAS") }}
                </p>
              </li>
              <li>
                <span><img src="~assets/images/check-icon.png" alt="" /></span>
                <p class="mx-2">
                  {{ $t("SAFER_AND_MORE_SECURE") }}
                </p>
              </li>
              <li>
                <span><img src="~assets/images/check-icon.png" alt="" /></span>
                <p class="mx-2">
                  {{ $t("NO_HEIGHT_EQUIPMENT_REQUIRED_FOR_ACCESS") }}
                </p>
              </li>
              <li>
                <span><img src="~assets/images/check-icon.png" alt="" /></span>
                <p class="mx-2">
                  {{ $t("CONTACTLESS_SOLUTION") }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/***** ADVANTAGE DRONE *****/

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
.advantage-sec {
  background-color: rgba($secondary, 0.1);
  padding: 130px 0;
  .text-box {
    height: 100%;
    display: flex;
    align-items: center;
    h3 {
      max-width: 432px;
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
          @include Red_Hat_Display(600);
          font-size: $font20;
          line-height: 24px;
        }
      }
    }
  }
}

@import "~assets/scss/pages.scss/responsive.scss";
</style>
