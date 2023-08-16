<template>
    <div class="grid grid-cols-1 lg:grid-cols-5 lg:mt-36 relative">
			<div class="relative h-full aspect-square lg:aspect-auto lg:col-span-3">
				<img class="absolute inset-0 h-full object-center top-0 object-cover" src="@/assets/images/burooj_air_drone.jpg" alt="Burooj Air" />
				<div class="absolute inset-0 bg-black/50"></div>
				<div class="absolute inset-0">
					<div class="flex justify-center items-center p-8 w-full h-full">
						<div class="text-center ltr:lg:text-left rtl:lg:text-right uppercase">
							<h2 class="font-bold text-white text-3xl lg:text-5xl">{{ $t("SERVICES") }}
								<small class="block mt-4 font-medium">{{ $t("THE_EVOLUTION_OF_HIGH_RISE_WINDOW_AND_FACADE_CLEANING_HAS_ARRIVED") }}</small>
							</h2>
						</div>
						</div>
				</div>
			</div>

		<section class="p-8 bg-emerald-600 text-white py-16 text-base col-span-2">
			<div class="container mx-auto">
				<p class="font-semibold text-lg"> {{ $t("UP_UNTIL_NOW_HIGH_RISE_WINDOW_AND_FACADE_CLEANING") }}</p>
				<p class="mb-12">{{ $t("WITH_THE_INNOVATION_OF_BUROOJ_AIR_WORKING_DRONE") }}</p>
				<p class="font-semibold  text-lg">{{ $t("A_MORE_EFFICIENT_SAFER_AND") }}</p>
				<p>{{ $t("BUROOJ_AIR_WORKING_DRONE_ARE_NOW_BEING") }}</p>
				<p>{{ $t("FOR_NOW_WE_HAVE_COMMERCIALISED_THE_USE_FOR") }}</p>
				<p>{{ $t("BUROOJ_AIR_WORKING_DRONE_IS_IN_FURTHER_DEVELOPMENT") }}</p>
			</div>
		</section>
		</div>
</template>