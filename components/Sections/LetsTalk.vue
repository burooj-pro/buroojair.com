<template>
	<section class="text-gray-700 bg-[url(~assets/images/map_grey.png)] font-neo-sans bg-cover bg-center bg-no-repeat py-80 relative">
		<SectionsTemplatesOverlay classColor="bg-gray-200" classOpacity="bg-opacity-80" />

		<div class="absolute w-full h-full inset-0 top-0 flex items-center">
			<div class="container mx-auto p-8">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div class="uppercase">
						<h4 class="text-4xl lg:text-7xl font-bold mb-6">{{ $t('FRANCHISE') }}</h4>
						<p class="text-3xl lg:text-4xl">{{ $t('OPPORTUNITIES_AVAILABLE') }}</p>
					</div>
					<div class="let-talk-right">
						<p class="text-xl mb-6">
							{{ $t('TAKE_PART_IN_THE_MOST_INNOVATIVE_BUSINESS_IDEA') }}
						</p>
						<NuxtLink to="/franchise" class="py-3 px-4 rounded-lg no-underline bg-brand-second text-white hover:bg-brand-first">
							<i class="bi bi-arrow-right fs-5 me-2"></i>
							{{ $t('LET_S_TALK') }}
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
