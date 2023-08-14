<template>
	<section id="aboutUsSection" class="font-neo-sans relative text-xl">
		<div class="container-fluid p-0">
			<div class="grid md:grid-cols-2 g-0">
				<div class="p-20 flex flex-col justify-center items-start text-gray-800 leading-normal aspect-square">
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
						<li class=" text-violet-900 font-bold list-none">{{ $t("MOHAMMED_DMS") }}</li>
					</ul>
				</div>
				<div class="p-10 flex items-center justify-center relative h-full overflow-hidden">
					<img src="~assets/images/ktv_dronepilot.jpg" class="absolute top-0 w-full object-center object-cover" />
					<div class="bg-gray-900 bg-opacity-50 absolute w-full h-full top-0 left-0 bg-blend-darken"></div>
					<div class="text-box text-white p-5 text-uppercase">
						<h3 class="text-white mb-5 text-6xl font-bold">{{ $t("ABOUT_US") }}</h3>
						<h4 class="text-5xl">{{ $t("OUR_HISTORY_AND_THE_EVOLUTION_OF_CLEANING") }}</h4>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
