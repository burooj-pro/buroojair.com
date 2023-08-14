<template>
  <div id="contactPage" class="overflow-hidden">
    <Header />
    <!-- Contact Map -->
    <section class="contactMap mt-5 pt-5">
      <iframe
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d265.8312530146434!2d50.22431416573115!3d26.307557957450317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e72624c069cf%3A0x476e625d6d9bfa10!2zUHJvbW90aW9uIEVmZmljaWVuY3kgQWR2ZXJ0aXNpbmcgfCDZg9mB2KfYodipINin2YTYudix2LYg2YTZhNiv2LnYp9mK2Kkg2YjYp9mE2KXYudmE2KfZhg!5e0!3m2!1sen!2ssa!4v1690806487768!5m2!1sen!2ssa"
        title="Prince Turki St. - Khobar - Saudi Arabia"
        aria-label="Prince Turki St. - Khobar - Saudi Arabia"
      ></iframe>
    </section>
    <!-- Contact Location SECTION -->
    <section class="contact-location">
      <div class="container">
        <div class="titleText">
          <h3>{{ $t("BUROOJ_AIR_HEADQUARTERS") }}</h3>
          <p style="color: black;">{{ $t("KHOBAR_SAUDI_ARABIA") }}</p>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="text-box">
              <p>
                <strong>{{ $t("GENERAL_INQUIRY") }}:</strong>
                <br />
                contact@buroojair.com
              </p>
              <!-- <p>
                <strong>{{ $t("FRANCHISE_PARTNER_INQUIRIES") }}:</strong>
                <br />
                contact@buroojair.com
              </p> -->
              <!-- <p>
                <strong>{{ $t("MEDIA_INQUIRIES") }}:</strong>
                <br />
                info@buroojair.com
              </p> -->
              <!-- <p>
                <strong>{{ $t("DISTRIBUTION") }}:</strong>
                <br />
                info@buroojair.com
              </p> -->
              <!-- <div title="Page 9">
                <div>
                  <div>
                    <div>
                      <p>
                        <strong>{{ $t("OPERATING_PERMITS") }}:</strong>
                        <br />
                        info@buroojair.com
                      </p>
                    </div>
                  </div>
                </div>
              </div> -->
              <!-- <p>
                <strong>{{ $t("MARKETING") }}:</strong>
                <br />
                info@buroojair.com
              </p> -->
            </div>
          </div>
          <div class="col-md-8 col-sm-6">
            <div class="text-box">
              <p>
                <strong>{{ $t("OFFICE_HOURS") }}:</strong>
                <br />
                {{ $t("SUNDAY_TO_THURSDAY_08_00_AM_TO_5_00_PM") }}
              </p>
              <p>
                <strong>{{ $t("ADDRESS") }}:</strong>
                <br />
                <strong>{{ $t("BUROOJ_AIR") }}</strong>
                <br />
                {{ $t("KHOBAR_SAUDI_ARABIA") }}
              </p>
              <p>
                <strong>{{ $t("PHONE") }}:</strong>
                <br />
                966500000001
              </p>
            </div>
            <a href="#inquiry" class="btn btn-secondary">{{
              $t("MAKE_AN_INQUIRY_TODAY")
            }}</a>
          </div>
        </div>
      </div>
    </section>
    <SectionsContactSection />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "CONTACT",
  head() {
    return {
      title: `Burooj Air | ${this.$t("CONTACT")}`,
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