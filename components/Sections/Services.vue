<template>
	<section id="servicesSection" class="services-section bg-purple-50 py-8 font-neo-sans lg:py-32">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 text-lg lg:grid-cols-2 lg:gap-8">
				<div class="p-8 uppercase leading-relaxed text-gray-600 lg:col-span-2">
					<h2 class="text-4xl font-semibold lg:text-7xl">{{ $t('DRONE_SERVICES') }}</h2>
					<p class="text-2xl font-medium lg:text-5xl">{{ $t('CLEANING_BUILDINGS_AND_HEAVY_LIFTING') }}</p>
				</div>
				<div class="flex flex-col items-start justify-between gap-3 p-8">
					<h3 class="text-3xl font-bold">{{ $t('CLEANING_BUILDINGS') }}</h3>
					<p>{{ $t('CLEANING_BUILDINGS_DESC') }}</p>
					<NuxtLink to="/services/window-cleaning" class="rounded-lg bg-brand-second px-4 py-3 text-white no-underline hover:bg-brand-first">
						<i class="bi bi-arrow-right fs-5 me-2"></i>
						{{ $t('READ_MORE') }}
					</NuxtLink>
				</div>
				<div class="flex flex-col items-start justify-between gap-3 p-8">
					<h3 class="text-3xl font-bold">{{ $t('HEAVY_LIFTING') }}</h3>
					<p>{{ $t('HEAVY_LIFTING_DESC') }}</p>
					<NuxtLink to="/services/facade-cleaning" class="rounded-lg bg-brand-second px-4 py-3 text-white no-underline hover:bg-brand-first">
						<i class="bi bi-arrow-right fs-5 me-2"></i>
						{{ $t('READ_MORE') }}
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>
