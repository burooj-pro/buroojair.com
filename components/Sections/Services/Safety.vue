<template>
	<section class="bg-[#EBF5FF] py-16 dark:bg-[#04061C] lg:py-24">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
				<div class="p-6 lg:col-span-7 lg:p-8">
					<h3 class="mb-6 text-3xl font-black text-gray-900 dark:text-white lg:text-5xl">{{ $t('OUR_SAFETY_STATEMENT') }}</h3>
					<p class="text-sm font-light leading-normal text-gray-700 dark:text-gray-300 lg:text-base">
						<strong class="text-gray-900 dark:text-white"> {{ $t('FOR_THE_MANAGEMENT_OF_BUROOJ_AIR_WORKING') }}</strong>
					</p>
				</div>
				<div class="space-y-6 p-6 lg:col-span-5 lg:p-8">
					<p class="text-base leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">{{ $t('BUROOJ_AIR_WORKING_DRONE_IMPLEMENTS') }}</p>
					<ul class="list-disc space-y-2 ps-6 text-base leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
						<li aria-level="1">
							{{ $t('TO_MINIMISE_OUR_IMPACT') }}
						</li>
						<li>
							{{ $t('NOT_TO_HARM_OR_DISTURB') }}
						</li>
						<li>
							{{ $t('NOT_TO_INFLICT_DAMAGE_TO_PROPERTY') }}
						</li>
						<li>{{ $t('TO_ALWAYS_OPERATE_ACCORDING_EUROPEAN_GDPR') }}</li>
					</ul>
					<p class="text-base leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
						{{ $t('BUROOJ_AIR_WORKING_DRONE_WILL_OPERATE') }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
