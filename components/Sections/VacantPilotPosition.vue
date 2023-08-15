<template>
	<section id="vacantPilotPositionSection" class=" z-30 font-neo-sans relative text-lg leading-none">
		<div class="w-full text-white bg-gray-700 py-20">
			<div class="container">
			<div class="flex flex-col items-center gap-4 md:gap-0 md:flex-row justify-content-between">
				
				<h2 class="uppercase gap-5 md:gap-0 text-center md:text-start flex flex-col itemx-center md:inline text-5xl font-bold">
					<i class="bi bi-info-circle-fill md:me-8 text-7xl"></i>
					<span class="inline-block">{{ $t("GACA_PART_107_DRONE_PILOT") }}{{ $t("IS_REQUIRED") }}</span>
				</h2>

				<NuxtLink to="/pilot-position" class="py-3 px-4 bg-brand-second rounded-lg hover:bg-brand-first text-white no-underline">
					{{ $t("APPLY_NOW") }}
				</NuxtLink>
			</div>
		</div>
		</div>
		<div class="relative w-full hidden md:block -mb-12">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="h-12 block translate-x-0 w-full">
				<path class="fill-gray-700" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" fill="#212121"></path>
			</svg>
		</div>
	</section>
</template>
