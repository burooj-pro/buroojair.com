<template>
	<section id="servicesSection" class="bg-blue-100 py-10 font-neo-sans text-gray-700 lg:py-20">
		<div class="container mx-auto">
			<div class="grid lg:grid-cols-2">
				<!-- Left Section -->
				<div class="p-8 lg:p-8">
					<h2 class="mb-4 text-4xl font-bold lg:text-7xl">{{ $t('OUR_SERVICES') }}</h2>
					<p class="text-4xl lg:text-5xl">{{ $t('TRANSFORMING_INDUSTRIES_WITH_DRONE_SOLUTIONS') }}</p>
				</div>

				<!-- Right Section -->
				<div class="p-4 lg:p-4">
					<ul class="space-y-8 text-base font-thin lg:ps-14">
						<!-- Building & Asset Cleaning -->
						<li>
							<h3 class="block text-2xl font-bold uppercase">{{ $t('BUILDING_ASSET_CLEANING') }}</h3>
							<p class="text-gray-600 leading-relaxed">{{ $t('BUILDING_ASSET_CLEANING_DESC') }}</p>
						</li>

						<!-- Weightlifting & Transport -->
						<li>
							<h3 class="block text-2xl font-bold uppercase">{{ $t('WEIGHTLIFTING_TRANSPORT') }}</h3>
							<p class="text-gray-600 leading-relaxed">{{ $t('WEIGHTLIFTING_TRANSPORT_DESC') }}</p>
						</li>

						<!-- Heat Measurement & Firefighting -->
						<li>
							<h3 class="block text-2xl font-bold uppercase">{{ $t('HEAT_MEASUREMENT_FIREFIGHTING') }}</h3>
							<p class="text-gray-600 leading-relaxed">{{ $t('HEAT_MEASUREMENT_FIREFIGHTING_DESC') }}</p>
						</li>

						<!-- Aerial Filming -->
						<li>
							<h3 class="block text-2xl font-bold uppercase">{{ $t('AERIAL_FILMING') }}</h3>
							<p class="text-gray-600 leading-relaxed">{{ $t('AERIAL_FILMING_DESC') }}</p>
						</li>

						<li>
							<h3 class="block text-2xl font-bold uppercase">{{ $t('INDUSTRIAL_STRUCTURE') }}</h3>
							<p class="text-gray-600 leading-relaxed">{{ $t('INDUSTRIAL_STRUCTURE_DESC') }}</p>
						</li>

						<li>
							<h3 class="block text-2xl font-bold uppercase">{{ $t('SURFACE_CLENNING') }}</h3>
							<p class="text-gray-600 leading-relaxed">{{ $t('SURFACE_CLENNING_DESC') }}</p>
						</li>

	
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>
