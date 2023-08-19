<template>
	<SectionsTemplatesWithImage imageLocation="left" :image="require('@/assets/images/solar-cell-img.png')" sectionClass="bg-gradient-to-tr from-brand-first to-black">
		<div class="mx-auto flex aspect-square max-w-2xl flex-col items-center justify-center p-8 leading-normal text-white">
			<h4 class="mb-12 text-3xl font-semibold leading-tight lg:text-5xl">{{ $t('THIS_PROCEDURE_KEEPS') }}</h4>
			<p class="text-xl">{{ $t('OUR_WINDOW_CLEANING_METHOD') }}</p>
		</div>

		<template #imageText>
			<div class="max-w-xl p-8">
				<h4 class="text-3xl font-bold leading-tight lg:text-6xl">{{ $t('SOLAR_CELL_PANEL') }}<br />{{ $t('CLEANING') }}</h4>
			</div>
		</template>
	</SectionsTemplatesWithImage>
</template>
