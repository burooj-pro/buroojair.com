<template>
	<SectionsTemplatesWithImage imageLocation="left" :image="require('@/assets/images/solarpanelcleaning_ktv.jpg')" sectionClass="bg-[#EBF5FF] dark:bg-[#04061C]">
		<div class="mx-auto flex aspect-square max-w-2xl flex-col items-center justify-center p-6 text-base leading-normal text-gray-900 dark:text-white lg:p-8 lg:text-xl">
			<h2 class="mb-8 text-3xl font-black leading-tight text-gray-900 dark:text-white lg:text-5xl">{{ $t('THIS_METHOD_DOES_NOT_HARM_THE_PANEL_SURFACE') }}</h2>
			<p class="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
				{{ $t('OUR_METHOD_DEVELOPED_FOR_WINDOW_CLEANING_IS_PERFECT') }}
			</p>
			<p class="text-base leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
				{{ $t('A_MAJOR_ADVANTAGE_OF_THIS_METHOD_IS_THAT_THE_SURFACES') }}
			</p>
		</div>

		<template #imageText>
			<div class="max-w-xl p-6 lg:p-8">
				<h4 class="text-3xl font-black leading-tight text-white lg:text-6xl">{{ $t('SOLAR_CELL_PANEL') }}<br />{{ $t('CLEANING') }}</h4>
			</div>
		</template>
	</SectionsTemplatesWithImage>
</template>
