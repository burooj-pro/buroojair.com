<template>
	<section class="bg-[#EBF5FF] py-16 font-neo-sans dark:bg-[#04061C] lg:py-32">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="grid gap-12 grid-cols-1 lg:grid-cols-2">
				<div class="p-6 lg:p-8">
					<h3 class="mb-6 text-2xl font-black uppercase text-gray-900 dark:text-white lg:text-4xl">
						{{ $t('SERVICES') }}
						<small class="block font-normal">{{ $t('HIGH_RISE_WINDOW_AND_FACADE_CLEANING') }}</small>
					</h3>

					<div class="video-holder">
						<img src="~assets/images/BuroojAir_1.jpg" alt="Window Cleaning" class="w-full rounded-xl" />
					</div>
				</div>

				<div class="space-y-6 p-6 lg:p-8">
					<h5 class="text-xl font-bold uppercase text-gray-900 dark:text-white lg:text-3xl">{{ $t('WINDOW_CLEANING') }}</h5>
					<p class="text-base font-semibold leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">{{ $t('HIGH_RISE_COMMERICAL_WINDOW_CLEANING') }}</p>
					<p class="text-base leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">{{ $t('MODERN_DAY_BUILDINGS_INCLUDING') }}</p>
					<p class="text-base leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
						{{ $t('UP_UNTIL_NOW_ONLY_PRO') }}
						<strong class="text-gray-900 dark:text-white"> {{ $t('COMMERCIAL_WINDOW_CLEANERS') }}</strong>
						{{ $t('HEIGHT_ACCREDITATION') }}
					</p>
					<p class="text-base leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
						{{ $t('BUROOJ_AIR_WORKING_DRONE_IS_THE_FIRST') }}
						<strong class="text-gray-900 dark:text-white">{{ $t('WINDOW_CLEANING') }}</strong>
						{{ $t('SERVICE_PROCESS_SAFER') }}
					</p>
					<p class="text-base leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">{{ $t('BUROOJ_AIR_WORKING_DRONE_IS_ALSO_CONSIDERED_TO_BE_WORKSAFE') }}</p>
				</div>
			</div>
		</div>
	</section>
</template>
