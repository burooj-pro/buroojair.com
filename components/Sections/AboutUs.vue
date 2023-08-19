<template>
	<SectionsTemplatesWithImage imageLocation="" :image="require('@/assets/images/ktv_dronepilot.jpg')">
		<div class="mx-auto flex aspect-square max-w-2xl flex-col items-start justify-center p-8 leading-normal text-gray-700">
			<p class="mb-5 text-base font-thin">{{ $t('MOHAMMED_ALOTAIBI_FOUNDED_THE_BUROOJ') }}</p>

			<h4 class="mb-4 text-3xl font-bold uppercase lg:text-5xl">
				{{ $t('GROUP_IN_2018_WHICH_GREW_INTO_BUROOJ_AIR_DRONES_THE_BUROOJ_GROUPS_PRIORITY_WAS_HIGH_PRESSURE_CLEANING') }}
			</h4>

			<ul class="space-y-1 text-base lg:space-y-3 lg:text-xl">
				<li><i class="bi bi-dash me-2"></i>{{ $t('MOHAMMED_CEO') }}</li>
				<li><i class="bi bi-dash me-2"></i>{{ $t('MOHANNAD_CTO') }}</li>
				<li><i class="bi bi-dash me-2"></i>{{ $t('OSAMAH_MD') }}</li>
				<li><i class="bi bi-dash me-2"></i>{{ $t('FAISAL_PM') }}</li>
				<li><i class="bi bi-dash me-2"></i>{{ $t('HATIM_DOM') }}</li>
				<li class="font-bold text-violet-900">{{ $t('MOHAMMED_DMS') }}</li>
			</ul>
		</div>
	</SectionsTemplatesWithImage>
</template>
