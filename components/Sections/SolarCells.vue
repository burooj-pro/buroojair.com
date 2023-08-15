<template>
	<SectionsTemplatesWithImage 
	imageLocation="left" 
	:image="require('@/assets/images/solar-cell-img.png')"
	sectionClass="bg-gradient-to-tr from-brand-first to-black"
	>
		<div class="p-8 max-w-2xl mx-auto flex flex-col justify-center items-center text-white leading-normal aspect-square">
			<h4 class="text-3xl md:text-5xl mb-12 font-semibold leading-tight">{{ $t("THIS_PROCEDURE_KEEPS") }}</h4>
			<p class="text-xl">{{ $t("OUR_WINDOW_CLEANING_METHOD") }}</p>
		</div>

		<template #imageText>
			<div class="p-8 max-w-xl">
				<h4 class="text-3xl md:text-6xl font-bold leading-tight">{{ $t("SOLAR_CELL_PANEL") }}<br />{{ $t("CLEANING") }}</h4>
			</div>
		</template>
	</SectionsTemplatesWithImage>
	
</template>
