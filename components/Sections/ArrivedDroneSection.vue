<template>
    <section id="arrivedDroneSection" class="arrived-drone-section">
			<div class="container-fluid p-0">
				<div class="row g-0">
					<div class="col-md-6">
						<div class="image-holder">
							<img src="~assets/images/arrived-drone-img.png" alt="" class="img-fluid" />
							<h4 class="z-2">
								{{ $t("BUILDINGS_CLEANING") }} <br />
								{{ $t("AND_HEAVYLIFTING_USING_DRONE") }}
							</h4>
						</div>
					</div>
					<div class="col-md-6">
						<div class="text-box">
							<h4 class="z-2">
								{{ $t("THE_BEST_SOLUTION_TO_CLEAN_BUILDINGS_AND_LIFT_HEAVY_WEIGHTS_IN_A_FASTER_WAY_IS_AVAILABLE_NOW") }}
							</h4>
							<p>
								{{ $t("UNTIL_NOW_CLEANING_OF_TALL_BUILDINGS_HAS_BEEN_A_COMPLEX_AND_DANGEROUS_UNDERTAKING") }}
							</p>
							<NuxtLink to="/facade-cleaning" class="btn btn-white">
								<i class="bi bi-arrow-right fs-5 me-2"></i>
								{{ $t("READ_MORE") }}
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</section>
</template>