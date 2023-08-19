<template>
	<SectionsTemplatesWithImage imageLocation="" :image="require('@/assets/images/arrived-drone-img.png')" sectionClass="bg-white font-neo-sans">
		<div class="p-8 max-w-2xl mx-auto flex flex-col justify-center gap-4 items-start text-gray-800 leading-normal aspect-square">
			<h4 class="text-4xl">{{ $t('THE_BEST_SOLUTION_TO_CLEAN_BUILDINGS_AND_LIFT_HEAVY_WEIGHTS_IN_A_FASTER_WAY_IS_AVAILABLE_NOW') }}</h4>
			<p>{{ $t('UNTIL_NOW_CLEANING_OF_TALL_BUILDINGS_HAS_BEEN_A_COMPLEX_AND_DANGEROUS_UNDERTAKING') }}</p>
			<NuxtLink class="whitespace-nowrap py-3 px-4 no-underline rounded-lg bg-white text-gray-800 border border-brand-first border-4 hover:bg-brand-first hover:text-white" to="/services/facade-cleaning"><i class="bi bi-arrow-right fs-5 me-2"></i>{{ $t('READ_MORE') }}</NuxtLink>
		</div>

		<template #imageText>
			<div class="p-8 max-w-xl">
				<h4 class="text-4xl lg:text-6xl font-bold">
					{{ $t('BUILDINGS_CLEANING') }} <br />
					{{ $t('AND_HEAVYLIFTING_USING_DRONE') }}
				</h4>
			</div>
		</template>
	</SectionsTemplatesWithImage>
</template>
