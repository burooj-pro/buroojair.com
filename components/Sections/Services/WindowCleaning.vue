<template>
	<section class="bg-emerald-600 py-16 font-neo-sans text-white lg:py-32">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-2">
				<div class="p-8">
					<h3 class="mb-6 text-2xl font-bold uppercase lg:text-4xl">
						{{ $t('SERVICES') }}
						<small class="block font-thin">{{ $t('HIGH_RISE_WINDOW_AND_FACADE_CLEANING') }}</small>
					</h3>

					<div class="video-holder">
						<img src="~assets/images/BuroojAir_1.jpg" alt="#" class="w-full rounded-lg" />
					</div>
				</div>

				<div class="space-y-8 p-8">
					<h5 class="text-xl font-bold uppercase lg:text-3xl">{{ $t('WINDOW_CLEANING') }}</h5>
					<p class="font-semibold">{{ $t('HIGH_RISE_COMMERICAL_WINDOW_CLEANING') }}</p>
					<p>{{ $t('MODERN_DAY_BUILDINGS_INCLUDING') }}</p>
					<p>
						{{ $t('UP_UNTIL_NOW_ONLY_PRO') }}
						<b> {{ $t('COMMERCIAL_WINDOW_CLEANERS') }}</b>
						{{ $t('HEIGHT_ACCREDITATION') }}
					</p>
					<p>
						{{ $t('BUROOJ_AIR_WORKING_DRONE_IS_THE_FIRST') }}
						<b>{{ $t('WINDOW_CLEANING') }}</b>
						{{ $t('SERVICE_PROCESS_SAFER') }}
					</p>
					<p>{{ $t('BUROOJ_AIR_WORKING_DRONE_IS_ALSO_CONSIDERED_TO_BE_WORKSAFE') }}</p>
				</div>
			</div>
		</div>
	</section>
</template>
