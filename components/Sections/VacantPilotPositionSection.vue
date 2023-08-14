<template>
	<section id="vacantPilotPositionSection" class="vacant-pilot-section text-white z-30 font-neo-sans py-20 relative">
		<div class="container">
			<div class="flex justify-content-between">
				
				<h1 class="text-uppercase">
					<i class="bi bi-info-circle-fill me-8"></i>
					{{ $t("GACA_PART_107_DRONE_PILOT") }}
					<span>{{ $t("IS_REQUIRED") }}</span>
				</h1>

				<NuxtLink to="/PilotePosition" class="btn btn-secondary btn-blue text-center">
					{{ $t("APPLY_NOW") }}
				</NuxtLink>
			</div>
		</div>
		<div class="vacant-shape">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
				<path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" fill="#212121"></path>
			</svg>
		</div>
	</section>
</template>
