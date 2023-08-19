<template>
	<section id="benefitsSection" class="bg-blue-50 lg:py-32 p-8 font-neo-sans text-gray-800">
		<div class="container mx-auto">
			<div class="grid lg:grid-cols-2 gap-4">
				<h3 class="text-5xl lg:text-7xl font-black">{{ $t('ADVANTAGES_USING_BUROOJ_AIR_DRONES') }}</h3>
				<ul class="space-y-6 text-xl font-semibold">
					<Benefit :text="$t('HIGH_SPEED_AND_EFFECTIVE_SURPASSING_TRADITIONAL_METHODS')" />
					<Benefit :text="$t('SIMPLIFIED_ACCESS_TO_REMOTE_OR_HARD_TO_GET_TO_PLACES')" />
					<Benefit :text="$t('REINFORCED_SAFETY_AND_SECURITY')" />
					<Benefit :text="$t('ACCESSING_ELEVATED_AREAS_WITHOUT_REQUIRING_HEIGHT_SPECIFIC_TOOLS')" />
				</ul>
			</div>
		</div>
	</section>
</template>
