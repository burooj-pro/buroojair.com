<template>
	<SectionsTemplatesWithImage imageLocation="" :image="require('@/assets/images/ktv_dronepilot.jpg')">
		<div class="p-8 flex flex-col justify-center items-start text-gray-800 leading-normal aspect-square">
			<h4 class="">{{ $t("THE_BEST_SOLUTION_TO_CLEAN_BUILDINGS_AND_LIFT_HEAVY_WEIGHTS_IN_A_FASTER_WAY_IS_AVAILABLE_NOW") }}</h4>
			<p>{{ $t("UNTIL_NOW_CLEANING_OF_TALL_BUILDINGS_HAS_BEEN_A_COMPLEX_AND_DANGEROUS_UNDERTAKING") }}</p>
			<NuxtLink to="/services/facade-cleaning" class="btn btn-white">
				<i class="bi bi-arrow-right fs-5 me-2"></i>
				{{ $t("READ_MORE") }}
			</NuxtLink>
		</div>

		<template #imageText>
			<h4 class="z-2">
				{{ $t("BUILDINGS_CLEANING") }} <br />
				{{ $t("AND_HEAVYLIFTING_USING_DRONE") }}
			</h4>
		</template>
	</SectionsTemplatesWithImage>
</template>
