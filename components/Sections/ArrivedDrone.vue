<template>
	<SectionsTemplatesWithImage 
	imageLocation="" 
	:image="require('@/assets/images/arrived-drone-img.png')"
	sectionClass="bg-gray-300"
	>
		<div class="p-8 max-w-2xl mx-auto flex flex-col justify-center items-center text-gray-800 leading-normal aspect-square">
			<h4 class="text-4xl mb-4">{{ $t("THE_BEST_SOLUTION_TO_CLEAN_BUILDINGS_AND_LIFT_HEAVY_WEIGHTS_IN_A_FASTER_WAY_IS_AVAILABLE_NOW") }}</h4>
			<p class="mb-4">{{ $t("UNTIL_NOW_CLEANING_OF_TALL_BUILDINGS_HAS_BEEN_A_COMPLEX_AND_DANGEROUS_UNDERTAKING") }}</p>
			<NuxtLink to="/services/facade-cleaning" class="btn btn-white">
				<i class="bi bi-arrow-right fs-5 me-2"></i>
				{{ $t("READ_MORE") }}
			</NuxtLink>
		</div>

		<template #imageText>
			<div class="p-8 max-w-xl">
				<h4 class="text-4xl md:text-6xl font-bold">
				{{ $t("BUILDINGS_CLEANING") }} <br />
				{{ $t("AND_HEAVYLIFTING_USING_DRONE") }}
			</h4>
			</div>
		</template>
	</SectionsTemplatesWithImage>
</template>
