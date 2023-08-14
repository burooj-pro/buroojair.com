<template>
	<section class="gallery-main py-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 order-lg-1 order-2 bg-light p-5" style="">
					<h3 class="mb-4 fs-1">{{ $t("IMAGES") }}</h3>
                    <div class="row row-cols-3">


                        <div class="col" v-for="image in images">
                            <a>
                                <img class="img-fluid" :src="image" />
                            </a>
                        </div>

                    </div>
				</div>
				<div class="col-lg-8 order-lg-2 order-1 bg-white p-5">
					<div class="video-wrapper">
                        <h3 class="mb-4 fs-1">{{ $t("VIDEOS") }}</h3>
						<div class="row row-cols-1">
							<div class="col">
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
    props: ['videos','images'],
};
</script>
