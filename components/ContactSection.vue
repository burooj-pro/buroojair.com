<template>
  <section class="contact-sec">
    <div class="container">
      <div class="d-flex flex-column flex-md-row">
        <div>
          <div class="contact-left">
            <div class="text-box">
              <h3>{{ $t("CONTACT_US") }}</h3>
              <p>
                {{
                  $t(
                    "SEND_YOUR_INQUIRY_AND_WE_WILL_GET_IN_TOUCH_AS_SOON_AS_POSSIBLE"
                  )
                }}
              </p>
            </div>
            <ul>
              <li>
                <p>
                  <strong>{{ $t("BUROOJ_AIR") }}</strong>
                </p>
                <p>{{ $t("KHOBAR_SAUDI_ARABIA") }}</p>
              </li>
              <li>
                <p>{{ $t("EMAIL") }}: Contact@buroojair.com</p>
                <p>{{ $t("PHONE") }}: 966500000001</p>
              </li>
            </ul>
          </div>
        </div>
        <div style="display: flex; flex: 1"></div>
        <div id="inquiry">
          <div
            class="pipedriveWebForms"
            data-pd-webforms="https://webforms.pipedrive.com/f/6coemjWsjuoqlhJqDxw5vARg9RKtlXs9Rk7xeP0SZJLEXlmO9hyO7YDdWfq6IcrYLV"
          >
            <script src="https://webforms.pipedrive.com/f/loader"></script>
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
h3 {
  color: $mainly_blue;
  font-size: $font50;
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

/***** CONTACT SEC ******/

.contact-sec {
  background-color: $primary;
  padding: 130px 0;
  .contact-left {
    .text-box {
      padding-bottom: 43px;
      h3 {
        color: $white;
        margin: 0 0 21px 0;
      }
      p {
        color: $white;
        max-width: 510px;
        width: 100%;
      }
    }
    ul {
      border-top: 1px dotted $white;
      padding-top: 30px;
      max-width: 302px;
      width: 100%;
      li {
        margin: 0 0 20px 0;
        &:last-child {
          margin: 0;
        }
        p {
          color: $white;
          margin: 0 0 3px 0;
          line-height: 1;
        }
      }
    }
  }
  .contact-right {
    margin: 20px 0 0 0;
    form {
      .form-group {
        margin-bottom: 15px;
        .form-control {
          border: none;
          background-color: $white;
          @include NeoSans(400);
          font-size: $font14;
          text-transform: uppercase;
          height: 59px;
          color: $black;
          @include border_radius(5px);
          padding: 7px 20px;
          &::placeholder {
            color: $black;
          }
        }
      }
    }
  }
}
</style>
