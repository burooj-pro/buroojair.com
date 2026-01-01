<template>
	<section class="py-16 font-neo-sans lg:py-24">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="mx-auto max-w-7xl">
				<div class="grid gap-8 lg:grid-cols-5 lg:items-start">
					<!-- Left Side - Chart (Larger) -->
					<div class="order-2 lg:order-1 lg:col-span-3">
						<MyBarChart />
					</div>

					<!-- Right Side - Title and Text Content -->
					<div class="order-1 space-y-6 lg:order-2 lg:col-span-2">
						<!-- Title -->
						<h2 class="mb-6 text-3xl font-black uppercase text-gray-900 dark:text-white lg:text-5xl">
							{{ $t('BUROOJ_AIR_WORKING_DRONE_GROWTH') || 'BUROOJ AIR WORKING DRONE GROWTH' }}
						</h2>
						
						<p class="text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
							{{ $t('DRONE_USE_IS_INCREASING_WORLDWIDE') || 'Drone use is increasing worldwide for a variety of purposes, and many industries are still seeing rapid innovation. No matter if they are flown for recreational, military, or commercial purposes, drones are becoming more and more common. The worldwide drone business is expanding year after year.' }}
						</p>
						<p class="text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
							{{ $t('BUROOJ_AIR_DRONES_IS_PART_OF_EXPANSION') || 'Burooj Air Drones is a part of this expansion commercializing the usage of drones for the cleaning business by utilizing several solutions.' }}
						</p>
						<p class="text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
							{{ $t('BUROOJ_AIR_DRONES_OFFERS_COMPREHENSIVE_SOLUTION') || 'Burooj Air Drones offers a comprehensive contactless solution that reduces the hazards associated with conventional techniques. A contactless solution might also lessen the long-term risk to building structures, where minor mishaps can occasionally occur without warning and necessitate repairs years later.' }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'SectionsFranchiseWorkingGrowth',
}
</script>

