<template>
	<section class="bg-emerald-600 py-16 font-neo-sans text-white lg:py-32">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-2">
				<div class="p-8">
					<h3 class="mb-6 text-2xl font-bold uppercase lg:text-4xl">
						{{ $t('SERVICES') }}
						<small class="block font-thin">{{ $t('HIGH_RISE_FACADE_CLEANING') }}</small>
					</h3>

					<div class="video-holder">
						<img src="~assets/images/BuroojAir_1.jpg" alt="#" class="w-full rounded-lg" />
					</div>
				</div>

				<div class="space-y-8 p-8">
					<h5 class="text-xl font-bold uppercase lg:text-3xl">{{ $t('SELFCLEANER_METHOD') }}</h5>
					<p class="font-semibold">{{ $t('THE_SELFCLEANER_METHOD_WAS_DEVELOPED') }}</p>
					<p>{{ $t('THE_METHOD_ENABLES_FACADE_CLEANING') }}</p>
					<p>
						{{ $t('ALREADY_AFTER_1_2_WEEKS_YOU_WILL') }}
					</p>
					<h5 class="text-xl font-bold uppercase lg:text-3xl">{{ $t('FACADE_CLEANING') }}</h5>
					<p>
						<strong>
							{{ $t('MANY_MULTI_STOREY_BUILDINGS_CREATE') }}
						</strong>
					</p>
					<p>
						{{ $t('ENVIRONMENTAL_FRIENDLY_SOLUTIONS') }}
					</p>
					<p>
						{{ $t('HAVING_A_CLEAN_FACADE_IS_ONE') }}
					</p>
					<p>
						{{ $t('BUROOJ_AIR_WORKING_DRONE_IS_NOW_ABLE_TO_PROVIDE') }}
					</p>
					<p>
						{{ $t('BUROOJ_AIR_WORKING_DRONE_IS_ALSO_CONSIDERED_TO_BE_WORKSAFE') }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
