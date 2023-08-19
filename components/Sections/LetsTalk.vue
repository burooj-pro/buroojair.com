<template>
	<section class="relative bg-[url(~assets/images/map_grey.png)] bg-cover bg-center bg-no-repeat py-80 font-neo-sans text-gray-700">
		<SectionsTemplatesOverlay classColor="bg-gray-200" classOpacity="bg-opacity-80" />

		<div class="absolute inset-0 top-0 flex h-full w-full items-center">
			<div class="container mx-auto p-8">
				<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<div class="uppercase">
						<h4 class="mb-6 text-4xl font-bold lg:text-7xl">{{ $t('FRANCHISE') }}</h4>
						<p class="text-3xl lg:text-4xl">{{ $t('OPPORTUNITIES_AVAILABLE') }}</p>
					</div>
					<div class="let-talk-right">
						<p class="mb-6 text-xl">
							{{ $t('TAKE_PART_IN_THE_MOST_INNOVATIVE_BUSINESS_IDEA') }}
						</p>
						<NuxtLink to="/franchise" class="rounded-lg bg-brand-second px-4 py-3 text-white no-underline hover:bg-brand-first">
							<i class="bi bi-arrow-right fs-5 me-2"></i>
							{{ $t('LET_S_TALK') }}
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
