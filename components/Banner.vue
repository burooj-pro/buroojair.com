<template>
  <section class="banner-sec">
    <video
      ref="videoPlayer"
      muted
      playsinline
      class="elementor-background-video-embed d-none d-md-block"
      style="width: 1903px; height: 1072.11px"
    >
      <source :src="videoSrc" type="video/mp4" />
    </video>
    <div class="banner-inner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="banner-form">
              <div class="text-box">
                <h3>{{ $t("NOW_REQUEST_A_QUOTE_FOR_DRONE_CLEANING") }}</h3>
              </div>
              <div
                class="pipedriveWebForms"
                data-pd-webforms="https://webforms.pipedrive.com/f/6coemjWsjuoqlhJqDxw5vARg9RKtlXs9Rk7xeP0SZJLEXlmO9hyO7YDdWfq6IcrYLV"
              >
                <script src="https://webforms.pipedrive.com/f/loader"></script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-bottom">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          class="elementor-shape-fill"
          d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
          fill="#E4E7ED"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videoPlaylist: [
        "/videos/long_video.mp4",
      ],
      currentVideoIndex: 0,
    };
  },
  computed: {
    videoSrc() {
      return this.videoPlaylist[this.currentVideoIndex];
    },
  },
  methods: {
    playNextVideo() {
      this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoPlaylist.length;
      this.$refs.videoPlayer.load();
      this.$refs.videoPlayer.play();
    },
  },
  mounted() {
    this.$refs.videoPlayer.addEventListener('ended', this.playNextVideo);
    this.$refs.videoPlayer.load();
    this.$refs.videoPlayer.play();
  },
  beforeDestroy() {
    this.$refs.videoPlayer.removeEventListener('ended', this.playNextVideo);
  },
};
</script>

<style lang="scss" scoped>
// Banner Section
.banner-sec {
  position: relative;
  margin: 0 0 -5px 0;
  .banner-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    margin: 0 auto;
    transform: translate(-50%, -50%);
    max-width: 1390px;
    // padding: 120px 0 0 0;
    .banner-form {
      background-color: rgba($primary, 0.93);
      padding: 57px;
      max-width: 475px;
      width: 100%;
      @include border_radius(16px 80px 16px 80px);
      .text-box {
        margin: 0 0 35px 0;
        h3 {
          color: $white;
          font-size: $font28;
          text-transform: uppercase;
          line-height: 32px;
          @include NeoSans(900);
          margin: 0 0 24px 0;
        }
        p {
          color: $white;
          font-size: $font13;
          line-height: 15px;
          margin-bottom: 14.4px;
          @include NeoSans(600);
        }
      }
      form {
        .form-group {
          margin-bottom: 10px;
          .form-control {
            @include border_radius(0);
            background-color: $white;
            box-shadow: none;
            height: 40px;
            font-size: $font12;
            @include NeoSans(400);
            text-transform: uppercase;
            border: none;
            &:focus {
              border-color: transparent;
            }
          }
          textarea {
            &.form-control {
              height: 106px;
              resize: none;
            }
            &.info-field {
              height: 58px;
            }
          }
          .btn-default {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            height: 40px;
            max-width: 237px;
            width: 100%;
            color: #fff;
            text-transform: uppercase;
            @include NeoSans(900);
            letter-spacing: 0.5px;
            background-color: $orange;
          }
        }
      }
    }
  }
}
</style>
