<template>
	<SectionsTemplatesWithImage imageLocation="" :image="require('@/assets/images/ktv_dronepilot.jpg')">
		<div class="p-8 flex flex-col justify-center items-start text-gray-800 leading-normal aspect-square">
			<p class="mb-5">{{ $t("MOHAMMED_ALOTAIBI_FOUNDED_THE_BUROOJ") }}</p>
			<h4 class="uppercase text-5xl font-bold mb-4">
				{{ $t("GROUP_IN_2018_WHICH_GREW_INTO_BUROOJ_AIR_DRONES_THE_BUROOJ_GROUPS_PRIORITY_WAS_HIGH_PRESSURE_CLEANING") }}
			</h4>
			<ul class="text-2xl list-disc ps-8 space-y-3">
				<li>{{ $t("MOHAMMED_CEO") }}</li>
				<li>{{ $t("MOHANNAD_CTO") }}</li>
				<li>{{ $t("OSAMAH_MD") }}</li>
				<li>{{ $t("FAISAL_PM") }}</li>
				<li>{{ $t("HATIM_DOM") }}</li>
				<li class="text-violet-900 font-bold list-none">{{ $t("MOHAMMED_DMS") }}</li>
			</ul>
		</div>
	</SectionsTemplatesWithImage>
</template>
