<template>
	<section class="font-neo-sans bg-emerald-600 text-white py-16 lg:py-32">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-2">
				<div class="p-8">
					<h3 class="text-2xl lg:text-4xl font-bold mb-6 uppercase">
						{{ $t("SERVICES") }}
						<small class="font-thin block">{{ $t("HIGH_RISE_FACADE_CLEANING") }}</small>
					</h3>

					<div class="video-holder">
						<img src="~assets/images/BuroojAir_1.jpg" alt="#" class="w-full rounded-lg" />
					</div>
				</div>

				<div class="p-8 space-y-8">
					<h5 class="uppercase text-xl lg:text-3xl font-bold">{{ $t("SELFCLEANER_METHOD") }}</h5>
					<p class="font-semibold">{{ $t("THE_SELFCLEANER_METHOD_WAS_DEVELOPED") }}</p>
					<p>{{ $t("THE_METHOD_ENABLES_FACADE_CLEANING") }}</p>
					<p>
						{{ $t("ALREADY_AFTER_1_2_WEEKS_YOU_WILL") }}
					</p>
					<h5 class="uppercase text-xl lg:text-3xl font-bold">{{ $t("FACADE_CLEANING") }}</h5>
					<p>
						<strong>
							{{ $t("MANY_MULTI_STOREY_BUILDINGS_CREATE") }}
						</strong>
					</p>
					<p>
						{{ $t("ENVIRONMENTAL_FRIENDLY_SOLUTIONS") }}
					</p>
					<p>
						{{ $t("HAVING_A_CLEAN_FACADE_IS_ONE") }}
					</p>
					<p>
						{{ $t("BUROOJ_AIR_WORKING_DRONE_IS_NOW_ABLE_TO_PROVIDE") }}
					</p>
					<p>
						{{ $t("BUROOJ_AIR_WORKING_DRONE_IS_ALSO_CONSIDERED_TO_BE_WORKSAFE") }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
