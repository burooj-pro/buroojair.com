<template>
  <div class="wrapper">
    <Header />
    <!-- Contact Map -->
    <section class="contactMap">
      <iframe
        loading="lazy"
        src="https://maps.google.com/maps?q=Han%C3%B8ytangen%20111&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
        title="Hanøytangen 111"
        aria-label="Hanøytangen 111"
      ></iframe>
    </section>
    <!-- Contact Location Sec -->
    <section class="contact-location">
      <div class="container">
        <div class="titleText">
          <h3>HEADQUARTERS BUROOJ AIR WORKING DRONE</h3>
          <p>BERGEN, NORWAY</p>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="text-box">
              <p>
                <strong>General inquiry:</strong><br />post@ktvworkingdrone.com
              </p>
              <p>
                <strong>Franchise/partner inquiries:</strong
                ><br />partner@ktvworkingdrone.com
              </p>
              <p>
                <strong>Media inquiries:</strong><br />kn@ktvworkingdrone.com
              </p>
              <p><strong>Distribution:</strong><br />em@ktvworkingdrone.com</p>
              <div title="Page 9">
                <div>
                  <div>
                    <div>
                      <p>
                        <strong>Operating permits:</strong
                        ><br />jw@ktvworkingdrone.com
                      </p>
                      <p>
                        <strong>Drone ordering and equipment:</strong
                        ><br />em@ktvworkingdrone.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <strong>Bluetag support and training:</strong
                ><br />bluetag@ktvworkingdrone.com
              </p>
              <p><strong>Marketing:</strong><br />ta@ktvworkingdrone.com</p>
            </div>
          </div>
          <div class="col-md-8 col-sm-6">
            <div class="text-box">
              <p>
                <strong>Office Hours:</strong><br />Monday to Friday, 08:00 to
                16:00<br />(Oslo time GMT +02:00)
              </p>
              <p>
                <strong>Address:</strong><br /><strong
                  >BUROOJ AIR Working Drone AS</strong
                ><br />Hanøytangen 111 <br />5310 Hauglandshella <br />Bergen,
                Norway
              </p>
              <p><strong>Phone:</strong><br />+47 56 15 66 00</p>
            </div>
            <a href="#" class="btn btn-secondary">Make an inquiry today</a>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <form action="" class="enquireForm">
              <h3>ENQUIRE TODAY</h3>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Company"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="E-mail"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <select class="form-control">
                      <option>WHICH COUNTRY?</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      rows="4"
                      placeholder="BUILDING ADDRESS AND INFO"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="PHONE (REMEMBER COUNTRY CODE)"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      class="form-control info-field"
                      placeholder="OTHER INFO"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group mb-0">
                    <input
                      type="submit"
                      class="btn btn-secondary"
                      value="SEND INQUIRY"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <ContactSection />
    <Footer />
  </div>
</template>
<script>
export default {};
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

.contactMap {
  iframe {
    height: 511px;
    width: 100%;
  }
}

.contact-location {
  padding: 100px 0;
  background: $whiteSecondary;

  .titleText {
    h3 {
      font-size: $font24;
      text-transform: uppercase;
      color: $black;
      line-height: 1.4;
      margin: 0;
    }

    p {
      text-transform: uppercase;
      margin-bottom: 20px;
    }
  }

  .text-box {
    p {
      margin-bottom: 0.9rem;
    }
  }
}

.enquireForm {
  margin-top: 100px;

  h3 {
    font-size: $font24;
    text-transform: uppercase;
    color: $black;
    line-height: 1.4;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 14px;
  }

  .form-control {
    background-color: $white;
    border-width: 0px 0px 0px 0px;
    @include border_radius(8px);
    height: 59px;
  }

  textarea {
    &.form-control {
      height: auto;
    }
  }
}
// responsive

@import "~assets/scss/pages.scss/responsive.scss";
</style>
