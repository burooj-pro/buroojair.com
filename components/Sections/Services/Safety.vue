<template>
	<section class="bg-indigo-950 py-12 text-white lg:py-60">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-12">
				<div class="p-8 lg:col-span-7">
					<h3 class="mb-6 text-3xl font-bold lg:text-5xl">{{ $t('OUR_SAFETY_STATEMENT') }}</h3>
					<p class="text-xs font-light leading-normal">
						<strong> {{ $t('FOR_THE_MANAGEMENT_OF_BUROOJ_AIR_WORKING') }}</strong>
					</p>
				</div>
				<div class="space-y-6 p-8 lg:col-span-5">
					<p class="">{{ $t('BUROOJ_AIR_WORKING_DRONE_IMPLEMENTS') }}</p>
					<ul class="list-disc ps-8">
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
					<p>
						{{ $t('BUROOJ_AIR_WORKING_DRONE_WILL_OPERATE') }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
