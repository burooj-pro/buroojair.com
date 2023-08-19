<template>
	<div class="grid grid-cols-1 lg:grid-cols-5 lg:mt-36 relative">
		<div class="relative h-full aspect-square lg:aspect-auto lg:col-span-3">
			<img class="absolute inset-0 h-full object-center top-0 object-cover" src="@/assets/images/burooj_air_drone.jpg" alt="Burooj Air" />
			<div class="absolute inset-0 bg-black/50"></div>
			<div class="absolute inset-0">
				<div class="flex justify-center items-center p-8 w-full h-full">
					<div class="text-center ltr:lg:text-left rtl:lg:text-right uppercase">
						<h2 class="font-bold text-white text-3xl lg:text-5xl">
							{{ $t('ABOUT_US') }}
							<small class="block mt-4 font-medium">{{ $t('OUR_HISTORY_AND_THE_EVOLUTION_OF_CLEANING') }}</small>
						</h2>
					</div>
				</div>
			</div>
		</div>

		<section class="p-8 bg-emerald-600 text-white py-16 text-base col-span-2">
			<div class="container mx-auto">
				<p class="font-semibold text-lg">{{ $t('BUROOJ_AIR_IS_A_DRONE_COMPANY_BASED_IN_THE_KINGDOM_OF_SAUDI_ARABIA') }}</p>
				<p class="mb-12">{{ $t('CLEANING_BUILDINGS_BUROOJ_AIR_DRONES_CAN_BE_USED') }}</p>
				<p class="font-semibold text-lg">{{ $t('WEIGHTLIFTING_BUROOJ_AIR_DRONES_CAN_BE_USED') }}</p>
				<p>{{ $t('HEAT_MEASUREMENT_AND_FIRE_FIGHTING') }}</p>
				<p>{{ $t('CAMERA_FILMING') }}</p>
			</div>
		</section>
	</div>
</template>
