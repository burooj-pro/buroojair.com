<template>
	<section class="gallery-main py-5">
		<div class="container">
			<div class="row gap-0 row-gap-3">
				<div class="col-lg-6 order-lg-1 order-2 bg-white">
					<div class="inner">
						<h3 class="mb-4">{{ $t("IMAGES") }}</h3>
						<ul class="gallery-container" id="animated-thumbnails-gallery">
							<li class="large gallery-item" data-lg-size="1600-1067" data-src="~assets/images/BuroojAir_1.jpg">
								<a>
									<img alt="layers of blue." class="img-fluid" src="~assets/images/BuroojAir_1.jpg" />
								</a>
							</li>
							<li class="small gallery-item"   data-src="~assets/images/BuroojAir_2.jpg">
								<a>
									<img class="img-fluid" src="~assets/images/BuroojAir_2.jpg" />
								</a>
							</li>
							<li class="small gallery-item"  data-src="~assets/images/BuroojAir_3.jpg">
								<a>
									<img class="img-fluid" src="~assets/images/BuroojAir_3.jpg" />
								</a>
							</li>
							<li class="medium gallery-item"   data-src="~assets/images/BuroojAir_4.jpg">
								<a>
									<img class="img-fluid" src="~assets/images/BuroojAir_4.jpg" />
								</a>
							</li>
							<li class="small gallery-item"  data-src="~assets/images/BuroojAir_3.jpg">
								<a>
									<img class="img-fluid" src="~assets/images/BuroojAir_3.jpg" />
								</a>
							</li>
							<li class="large gallery-item"  data-src="~assets/images/BuroojAir_1.jpg">
								<a>
									<img class="img-fluid" src="~assets/images/BuroojAir_1.jpg" />
								</a>
							</li>
							<li class="small gallery-item"  data-src="~assets/images/BuroojAir_2.jpg">
								<a>
									<img class="img-fluid" src="~assets/images/BuroojAir_2.jpg" />
								</a>
							</li>
							<li class="small gallery-item"   data-src="~assets/images/BuroojAir_3.jpg">
								<a>
									<img class="img-fluid" src="~assets/images/BuroojAir_3.jpg" />
								</a>
							</li>
							<li class="medium gallery-item"  data-src="~assets/images/BuroojAir_4.jpg">
								<a>
									<img class="img-fluid" src="~assets/images/BuroojAir_4.jpg" />
								</a>
							</li>
							<li class="small gallery-item"  data-src="~assets/images/BuroojAir_3.jpg">
								<a>
									<img class="img-fluid" src="~assets/images/BuroojAir_3.jpg" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-6 order-lg-2 order-1 bg-white">
					<div class="video-wrapper">
						<div class="text-end">
							<h3 class="mb-4">{{ $t("VIDEOS") }}</h3>
						</div>
						<div class="row">
							<div class="col-12">
								<div v-for="video in videos" class="ratio ratio-16x9 rounded overflow-hidden">
									<video autoplay muted loop playsinline preload="auto" class="d-none d-md-block">
										<source :src="video" type="video/mp4" />
									</video>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
    // add prop for videos
    props: ['videos',],
};
</script>
