<template>
	<section class="font-neo-sans bg-emerald-600 text-white py-16 lg:py-32">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-2">
				<div class="p-8">
					<h3 class="text-2xl lg:text-4xl font-bold mb-6 uppercase">
						{{ $t("SERVICES") }}
						<small class="font-thin block">{{ $t("HIGH_RISE_WINDOW_AND_FACADE_CLEANING") }}</small>
					</h3>

					<div class="video-holder">
						<img src="~assets/images/BuroojAir_1.jpg" alt="#" class="w-full rounded-lg" />
					</div>
				</div>

				<div class="p-8 space-y-8">
					<h5 class="uppercase text-xl lg:text-3xl font-bold">{{ $t("WINDOW_CLEANING") }}</h5>
					<p class="font-semibold">{{ $t("HIGH_RISE_COMMERICAL_WINDOW_CLEANING") }}</p>
					<p>{{ $t("MODERN_DAY_BUILDINGS_INCLUDING") }}</p>
					<p>
						{{ $t("UP_UNTIL_NOW_ONLY_PRO") }}
						<b> {{ $t("COMMERCIAL_WINDOW_CLEANERS") }}</b>
						{{ $t("HEIGHT_ACCREDITATION") }}
					</p>
					<p>
						{{ $t("BUROOJ_AIR_WORKING_DRONE_IS_THE_FIRST") }}
						<b>{{ $t("WINDOW_CLEANING") }}</b>
						{{ $t("SERVICE_PROCESS_SAFER") }}
					</p>
					<p>{{ $t("BUROOJ_AIR_WORKING_DRONE_IS_ALSO_CONSIDERED_TO_BE_WORKSAFE") }}</p>
				</div>
			</div>
		</div>
	</section>
</template>
