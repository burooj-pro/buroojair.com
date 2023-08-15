<template>
	<section id="vacantPilotPositionSection" class="font-neo-sans relative text-lg leading-none">
		<div class="w-full text-white bg-gray-700 py-16">
			<div class="container mx-auto">
			<div class="flex flex-col items-center gap-4 md:gap-4">
				<NuxtLink to="/pilot-position" class="
				text-xl py-3 px-4 rounded-lg no-underline
				bg-white text-gray-700 
				hover:!bg-brand-first hover:text-white
				">
					{{ $t("APPLY_NOW") }}
				</NuxtLink>

				<small class="uppercase gap-5 md:gap-0 text-center md:text-start text-base text-gray-300">
					<i class="bi bi-info-circle-fill md:me-2"></i>
					<span class="inline-block">{{ $t("GACA_PART_107_DRONE_PILOT") }}{{ $t("IS_REQUIRED") }}</span>
				</small>

				
			</div>
		</div>
		</div>
		<div class="relative w-full hidden md:block -mb-12 z-20">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="h-12 block translate-x-0 w-full">
				<path class="fill-gray-700" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" fill="#212121"></path>
			</svg>
		</div>
	</section>
</template>
