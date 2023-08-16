<template>
	<section id="vacantPilotPositionSection" class="font-neo-sans relative text-lg leading-none">
		<div class="w-full text-white bg-gray-700 py-16">
			<div class="container mx-auto">
			<div class="flex flex-col items-center gap-4 lg:gap-4">
				<NuxtLink to="/pilot-position" class="
				text-xl py-3 px-4 rounded-lg no-underline
				bg-white text-gray-700 
				hover:!bg-brand-first hover:text-white
				">{{ $t("APPLY_NOW") }}</NuxtLink>

				<small class="uppercase gap-5 lg:gap-0 text-center lg:text-start text-base text-gray-300">
					<i class="bi bi-info-circle-fill lg:me-2"></i>
					<span class="inline-block">{{ $t("GACA_PART_107_DRONE_PILOT") }}{{ $t("IS_REQUIRED") }}</span>
				</small>

				
			</div>
		</div>
		</div>

		<SectionsDividersBottom pathClass="fill-gray-700" sectionClass="z-20 -mb-12" />

	</section>
</template>
