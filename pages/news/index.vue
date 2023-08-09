<template>
  <div class="wrapper">
    <Header />
    <!-- NEWS SEC -->
    <section class="news-sec">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="news-inner">
              <h4>NEWS ARCHIVE</h4>
              <News />
            </div>
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
.news-sec {
  padding: 65px 0;

  .news-inner {
    h4 {
      @include NeoSans(400);
      font-size: $font38;
      text-transform: uppercase;
      line-height: 1;
      color: $dark_gray2;
      margin: 0 0 50px 0;
    }
  }
}

.news-box {
  margin: 20px 0;

  .text-box {
    margin: 16px 0 0 0;

    h5 {
      @include NeoSans(600);
      font-size: $font20;
      text-transform: uppercase;
      line-height: 1;
      color: $bright_gray;
      margin: 0 0 5px 0;
    }

    span {
      display: block;
      color: $gray53;
      @include NeoSans(400);
      font-size: $font14;
      text-transform: uppercase;
      line-height: 16px;
    }

    p {
      color: $matterhorn;
      @include NeoSans(400);
      font-size: $font14;
      line-height: 16px;
      margin: 17px 0 13px 0;
    }

    a {
      font-size: $font13;
      @include NeoSans(600);
      color: $black;
      display: block;
    }
  }
}

.detail-card {
  h3 {
    font-size: $font32;
    line-height: 1;
    margin-bottom: 0.9rem;
  }

  .date {
    margin-bottom: 0.9rem;
  }

  .titleImg {
    margin-bottom: 0.9rem;
  }

  .text-box {
    p {
      margin-bottom: 0.9rem;
    }
  }

  .like {
    display: flex;
    align-items: center;
    margin: 0 -8px 0.9rem;

    li {
      padding: 0 8px;

      a {
        display: inline-flex;
        align-items: center;

        i {
          margin-right: 8px;
          line-height: 0;

          svg {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  a {
    display: flex;
    align-items: center;

    i {
      margin-right: 10px;
    }

    span {
      flex: 1;
      font-size: 14px;
      text-transform: uppercase;
      color: $gray53;

      &.media {
        display: flex;
        flex-direction: column;

        strong {
          font-weight: bold;
          color: $black;
          font-weight: 700;
        }
      }
    }
  }
}

// responsive

@import "~assets/scss/pages.scss/responsive.scss";
</style>
