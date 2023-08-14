<template>
  <section id="contactSection" class="contact-section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 text-md-start text-center mb-5 mb-md-0">
          <div class="contact-left">
            <div class="text-box">
              <h3>{{ $t("CONTACT_US") }}</h3>
              <p>{{$t("SEND_YOUR_INQUIRY_AND_WE_WILL_GET_IN_TOUCH_AS_SOON_AS_POSSIBLE")}}</p>
            </div>
            <ul class="mt-3 pt-3 text-white fs-5 lh-lg">
              <li><strong>{{ $t("BUROOJ_AIR") }}</strong></li>

                <li>{{ $t("KHOBAR_SAUDI_ARABIA") }}</li>
              <li>{{ $t("EMAIL") }}: Contact@buroojair.com</li>
                <li>{{ $t("PHONE") }}: +966566639994</li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6">
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
