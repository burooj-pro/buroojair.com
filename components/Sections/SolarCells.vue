<template>
	<section id="solarCellsSection" class="text-white bg-gradient-to-tr from-brand-first to-black relative">
		<div class="grid md:grid-cols-2 relative">
			<div class="relative overflow-hidden aspect-square">
				<img src="~assets/images/solar-cell-img.png" class="absolute top-0 w-full h-full object-center object-cover" />
				<div class="bg-gray-900 bg-opacity-50 absolute w-full h-full top-0 left-0 bg-blend-darken"></div>
				<div>
					<h4 class="text-6xl">{{ $t("SOLAR_CELL_PANEL") }}<br />{{ $t("CLEANING") }}</h4>
				</div>
			</div>
			<div class="p-8 md:p-36 aspect-square">
				<h4 class="text-5xl mb-12 font-bold">{{ $t("THIS_PROCEDURE_KEEPS") }}</h4>
				<p class="text-xl">{{ $t("OUR_WINDOW_CLEANING_METHOD") }}</p>
			</div>
		</div>
	</section>
</template>
