<template>
	<div class="relative grid grid-cols-1 lg:mt-36 lg:grid-cols-5">
		<div class="relative aspect-square h-full lg:col-span-3 lg:aspect-auto">
			<img class="absolute inset-0 top-0 h-full object-cover object-center" src="@/assets/images/burooj_air_drone.jpg" alt="Burooj Air Drone Services" loading="eager" />
			<div class="absolute inset-0 bg-black/50"></div>
			<div class="absolute inset-0">
				<div class="flex h-full w-full items-center justify-center p-8">
					<div class="text-center uppercase ltr:lg:text-left rtl:lg:text-right">
						<h2 class="text-3xl font-bold text-white lg:text-5xl">
							{{ $t('SERVICES') }}
							<small class="mt-4 block font-medium">{{ $t('THE_EVOLUTION_OF_HIGH_RISE_WINDOW_AND_FACADE_CLEANING_HAS_ARRIVED') }}</small>
						</h2>
					</div>
				</div>
			</div>
		</div>

		<section class="col-span-2 bg-[#EBF5FF] p-8 py-16 text-base text-gray-900 dark:bg-[#04061C] dark:text-white">
			<div class="container mx-auto">
				<p class="mb-4 text-lg font-semibold">{{ $t('UP_UNTIL_NOW_HIGH_RISE_WINDOW_AND_FACADE_CLEANING') }}</p>
				<p class="mb-6">{{ $t('WITH_THE_INNOVATION_OF_BUROOJ_AIR_WORKING_DRONE') }}</p>
				<p class="mb-4 text-lg font-semibold">{{ $t('A_MORE_EFFICIENT_SAFER_AND') }}</p>
				<p class="mb-4">{{ $t('BUROOJ_AIR_WORKING_DRONE_ARE_NOW_BEING') }}</p>
				<p class="mb-4">{{ $t('FOR_NOW_WE_HAVE_COMMERCIALISED_THE_USE_FOR') }}</p>
				<p>{{ $t('BUROOJ_AIR_WORKING_DRONE_IS_IN_FURTHER_DEVELOPMENT') }}</p>
			</div>
		</section>
	</div>
</template>
