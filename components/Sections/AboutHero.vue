<template>
	<div class="relative grid grid-cols-1 lg:mt-36 lg:grid-cols-5">
		<div class="relative aspect-square h-full lg:col-span-3 lg:aspect-auto">
			<img class="absolute inset-0 top-0 h-full object-cover object-center" src="@/assets/images/burooj_air_drone.jpg" alt="Burooj Air" />
			<div class="absolute inset-0 bg-black/50"></div>
			<div class="absolute inset-0">
				<div class="flex h-full w-full items-center justify-center p-8">
					<div class="text-center uppercase ltr:lg:text-left rtl:lg:text-right">
						<h2 class="text-3xl font-bold text-white lg:text-5xl">
							{{ $t('ABOUT_US') }}
							<small class="mt-4 block font-medium">{{ $t('OUR_HISTORY_AND_THE_EVOLUTION_OF_CLEANING') }}</small>
						</h2>
					</div>
				</div>
			</div>
		</div>

		<section class="col-span-2 bg-emerald-600 p-8 py-16 text-base text-white">
			<div class="container mx-auto">
				<p class="text-lg font-semibold">{{ $t('BUROOJ_AIR_IS_A_DRONE_COMPANY_BASED_IN_THE_KINGDOM_OF_SAUDI_ARABIA') }}</p>
				<p class="mb-12">{{ $t('CLEANING_BUILDINGS_BUROOJ_AIR_DRONES_CAN_BE_USED') }}</p>
				<p class="text-lg font-semibold">{{ $t('WEIGHTLIFTING_BUROOJ_AIR_DRONES_CAN_BE_USED') }}</p>
				<p>{{ $t('HEAT_MEASUREMENT_AND_FIRE_FIGHTING') }}</p>
				<p>{{ $t('CAMERA_FILMING') }}</p>
			</div>
		</section>
	</div>
</template>
