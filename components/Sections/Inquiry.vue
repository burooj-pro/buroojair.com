<template>
	<section class="text-white bg-gray-800 font-neo-sans py-16 lg:py-32">
		<div class="container mx-auto">
			<div class="flex flex-row items-start">
				<div class="p-8 space-y-8">
					<h3 class="text-5xl font-bold">{{ $t('ENQUIRE_TODAY') }}</h3>

					<p>
						{{ $t('IF_YOU_ARE') }}
						<b>{{ $t('BUILDING_OWNER_DEVELOPER') }}</b>
						<b>{{ $t('CLEANING_COMPANY') }}</b>
						{{ $t('WITH_HIGH_RISE_WINDOW_CLEANING') }}
					</p>
					<p>
						<b>{{ $t('BUROOJ_AIR_WORKING_DRONE') }}</b>
						{{ $t('HAS_MANY_WAYS_THAT_CAN_PROVIDE') }}
					</p>

					<div>
						<NuxtLink class="py-3 px-4 bg-white rounded-lg hover:bg-indigo-100 hover:text-brand-first text-gray-700 no-underline" to="#contactSection">{{ $t('ENQUIRE_TODAY') }}</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
