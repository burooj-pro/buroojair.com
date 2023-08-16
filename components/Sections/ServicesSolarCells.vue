<template>
	<SectionsTemplatesWithImage 
	imageLocation="left" 
	:image="require('@/assets/images/solarpanelcleaning_ktv.jpg')"
	sectionClass="bg-gradient-to-tr from-brand-third to-brand-first"
	>
    
		<div class="p-8  text-xl max-w-2xl mx-auto flex flex-col justify-center items-center text-white leading-normal aspect-square">
            <h2 class="text-3xl lg:text-5xl mb-12 font-semibold leading-tight">{{ $t("THIS_METHOD_DOES_NOT_HARM_THE_PANEL_SURFACE") }}</h2>
            <p class="mb-4">
                {{ $t("OUR_METHOD_DEVELOPED_FOR_WINDOW_CLEANING_IS_PERFECT") }}
            </p>
            <p>
                {{ $t("A_MAJOR_ADVANTAGE_OF_THIS_METHOD_IS_THAT_THE_SURFACES") }}
            </p>
		</div>

		<template #imageText>
			<div class="p-8 max-w-xl">
				<h4 class="text-3xl lg:text-6xl font-bold leading-tight">{{ $t("SOLAR_CELL_PANEL") }}<br />{{ $t("CLEANING") }}</h4>
			</div>
		</template>
	</SectionsTemplatesWithImage>
	
</template>
