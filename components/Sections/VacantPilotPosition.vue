<template>
	<section id="vacantPilotPositionSection" class="relative font-neo-sans text-lg leading-none">
		<div class="w-full bg-gray-700 py-16 text-white">
			<div class="container mx-auto">
				<div class="flex flex-col items-center gap-4 lg:gap-4">
					<NuxtLink to="/pilot-position" class="rounded-lg bg-white px-4 py-3 text-xl text-gray-700 no-underline hover:!bg-brand-first hover:text-white">{{ $t('APPLY_NOW') }}</NuxtLink>

					<small class="gap-5 text-center text-base uppercase text-gray-300 lg:gap-0 lg:text-start">
						<i class="bi bi-info-circle-fill lg:me-2"></i>
						<span class="inline-block">{{ $t('GACA_PART_107_DRONE_PILOT') }}{{ $t('IS_REQUIRED') }}</span>
					</small>
				</div>
			</div>
		</div>

		<SectionsDividersBottom pathClass="fill-gray-700" sectionClass="z-20 -mb-12" />
	</section>
</template>
