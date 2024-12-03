<template>
	<section id="servicesSection" class="services-section bg-purple-50 py-12 font-neo-sans lg:py-24">
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Section Header -->
			<div class="text-center mb-8 lg:mb-12">
				<h2 class="text-3xl font-bold text-gray-800 uppercase lg:text-5xl">
					{{ $t('DRONE_SERVICES') }}
				</h2>
				<p class="mt-4 text-gray-600 text-base lg:text-lg leading-relaxed">
					{{ $t('CLEANING_BUILDINGS_AND_HEAVY_LIFTING') }}
				</p>
				<!-- <NuxtLink
					to="/services/window-cleaning"
					class="mt-6 inline-block rounded-lg bg-brand-second px-6 py-3 text-white font-semibold no-underline hover:bg-brand-first">
					<i class="bi bi-arrow-right fs-5 me-2"></i>{{ $t('READ_MORE') }}
				</NuxtLink> -->
			</div>

			<!-- Services Grid -->
			<!-- <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			
				<div class="flex flex-col items-start gap-6 bg-white shadow-md rounded-lg p-6 lg:p-8">
					<h3 class="text-2xl font-bold text-gray-800 lg:text-3xl">
						{{ $t('CLEANING_BUILDINGS') }}
					</h3>
					<p class="text-gray-600 text-base lg:text-lg leading-relaxed">
						{{ $t('CLEANING_BUILDINGS_DESC') }}
					</p>
					<NuxtLink
						to="/services/window-cleaning"
						class="mt-4 rounded-lg bg-brand-second px-6 py-3 text-white font-semibold no-underline hover:bg-brand-first">
						<i class="bi bi-arrow-right fs-5 me-2"></i>{{ $t('READ_MORE') }}
					</NuxtLink>
				</div>

			
				<div class="flex flex-col items-start gap-6 bg-white shadow-md rounded-lg p-6 lg:p-8">
					<h3 class="text-2xl font-bold text-gray-800 lg:text-3xl">
						{{ $t('HEAVY_LIFTING') }}
					</h3>
					<p class="text-gray-600 text-base lg:text-lg leading-relaxed">
						{{ $t('HEAVY_LIFTING_DESC') }}
					</p>
					<NuxtLink
						to="/services/facade-cleaning"
						class="mt-4 rounded-lg bg-brand-second px-6 py-3 text-white font-semibold no-underline hover:bg-brand-first">
						<i class="bi bi-arrow-right fs-5 me-2"></i>{{ $t('READ_MORE') }}
					</NuxtLink>
				</div>
			</div> -->
		</div>
	</section>
</template>
