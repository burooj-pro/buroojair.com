<template>
	<SectionsTemplatesWithImage imageLocation="" :image="require('@/assets/images/arrived-drone-img.png')" sectionClass="bg-purple-50 font-neo-sans">
		<div class="mx-auto flex aspect-square max-w-2xl flex-col items-start justify-center gap-4 p-8 leading-normal text-gray-800">
			<h4 class="text-2xl font-bold text-gray-800 uppercase lg:text-5xl">{{ $t('THE_BEST_SOLUTION_TO_CLEAN_BUILDINGS_AND_LIFT_HEAVY_WEIGHTS_IN_A_FASTER_WAY_IS_AVAILABLE_NOW') }}</h4>
			<p>{{ $t('UNTIL_NOW_CLEANING_OF_TALL_BUILDINGS_HAS_BEEN_A_COMPLEX_AND_DANGEROUS_UNDERTAKING') }}</p>
			<!-- <NuxtLink class="whitespace-nowrap rounded-lg border border-4 border-brand-first bg-white px-4 py-3 text-gray-800 no-underline hover:bg-brand-first hover:text-white" to="/services/facade-cleaning"><i class="bi bi-arrow-right fs-5 me-2"></i>{{ $t('READ_MORE') }}</NuxtLink> -->
		</div>

		<!-- <template #imageText>
			<div class="max-w-xl p-8">
				<h4 class="text-4xl font-bold lg:text-6xl">
					{{ $t('BUILDINGS_CLEANING') }} <br />
					{{ $t('AND_HEAVYLIFTING_USING_DRONE') }}
				</h4>
			</div>
		</template> -->
	</SectionsTemplatesWithImage>
</template>
