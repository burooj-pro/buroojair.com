<template>
	<SectionsTemplatesWithImage imageLocation="" :image="require('@/assets/images/ktv_dronepilot.jpg')">
		<div class="p-8 max-w-2xl mx-auto flex flex-col justify-center items-start text-gray-700 leading-normal aspect-square">
			<p class="mb-5 text-base font-thin">{{ $t("MOHAMMED_ALOTAIBI_FOUNDED_THE_BUROOJ") }}</p>
			
			<h4 class="uppercase text-3xl lg:text-5xl font-bold mb-4">
				{{ $t("GROUP_IN_2018_WHICH_GREW_INTO_BUROOJ_AIR_DRONES_THE_BUROOJ_GROUPS_PRIORITY_WAS_HIGH_PRESSURE_CLEANING") }}
			</h4>

			<ul class="text-base lg:text-xl space-y-1 lg:space-y-3">
				<li><i class="bi bi-dash me-2"></i>{{ $t("MOHAMMED_CEO") }}</li>
				<li><i class="bi bi-dash me-2"></i>{{ $t("MOHANNAD_CTO") }}</li>
				<li><i class="bi bi-dash me-2"></i>{{ $t("OSAMAH_MD") }}</li>
				<li><i class="bi bi-dash me-2"></i>{{ $t("FAISAL_PM") }}</li>
				<li><i class="bi bi-dash me-2"></i>{{ $t("HATIM_DOM") }}</li>
				<li class="text-violet-900 font-bold">{{ $t("MOHAMMED_DMS") }}</li>
			</ul>
			
		</div>
	</SectionsTemplatesWithImage>
</template>