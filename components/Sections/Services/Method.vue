<template>
	<section id="servicesMethod" class="method bg-[#EBF5FF] py-16 font-normal dark:bg-[#04061C] lg:py-24">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="grid gap-12 grid-cols-1 lg:grid-cols-2">
				<div class="p-6 lg:p-8">
					<h2 class="text-2xl font-black text-gray-900 dark:text-white lg:text-4xl">{{ $t('FOR_FACADE_AND_WINDOW_CLEANING_WE_USE_MULTIPLE_METHODS') }}</h2>
				</div>
				<div class="p-6 lg:p-8">
					<ol class="list-decimal space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
						<li>{{ $t('IF_THE_FACADE_IS_TRADITIONALLY_DIRTY_THE_DRONE') }}</li>
						<li>
							{{ $t('THE_CLEAN_WATER_METHOD_IS_IN_SHORT') }}
							<strong class="text-gray-900 dark:text-white italic">{{ $t('CLEANED') }}{{ $t('WITHOUT_CHEMICALS') }}</strong>
							{{ $t('WINDOWS_STAY_CLEANER') }}
						</li>
					</ol>
				</div>
			</div>
		</div>
	</section>
</template>
