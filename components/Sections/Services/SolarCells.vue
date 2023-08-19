<template>
	<SectionsTemplatesWithImage imageLocation="left" :image="require('@/assets/images/solarpanelcleaning_ktv.jpg')" sectionClass="bg-gradient-to-tr from-brand-third to-brand-first">
		<div class="mx-auto flex aspect-square max-w-2xl flex-col items-center justify-center p-8 text-xl leading-normal text-white">
			<h2 class="mb-12 text-3xl font-semibold leading-tight lg:text-5xl">{{ $t('THIS_METHOD_DOES_NOT_HARM_THE_PANEL_SURFACE') }}</h2>
			<p class="mb-4">
				{{ $t('OUR_METHOD_DEVELOPED_FOR_WINDOW_CLEANING_IS_PERFECT') }}
			</p>
			<p>
				{{ $t('A_MAJOR_ADVANTAGE_OF_THIS_METHOD_IS_THAT_THE_SURFACES') }}
			</p>
		</div>

		<template #imageText>
			<div class="max-w-xl p-8">
				<h4 class="text-3xl font-bold leading-tight lg:text-6xl">{{ $t('SOLAR_CELL_PANEL') }}<br />{{ $t('CLEANING') }}</h4>
			</div>
		</template>
	</SectionsTemplatesWithImage>
</template>
