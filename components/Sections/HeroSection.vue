<template>
  <section id="heroSection" class="hero-section">
    <video
    ref="videoPlayer"
    muted
    autoplay
    loop
    playsinline
    class="elementor-background-video-embed d-none d-md-block"
    style="width: 1903px; height: 1072.11px"
  >
    <source src="https://res.cloudinary.com/dshekyqdl/video/upload/v1691936569/Website_video1_1_vcyojc.mp4" type="video/mp4" />
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
};
</script>

