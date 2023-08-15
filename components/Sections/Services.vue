<template>
	<section id="servicesSection" class="services-section bg-purple-50 py-16 md:py-32 font-neo-sans">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">
				<div class="md:col-span-2 leading-relaxed uppercase text-gray-600">
					<h2 class="text-7xl font-semibold">{{ $t("DRONE_SERVICES") }}</h2>
					<p class="text-5xl font-medium">{{ $t("CLEANING_BUILDINGS_AND_HEAVY_LIFTING") }}</p>
				</div>
				<div class="flex flex-col justify-between items-start gap-3">
					<h3 class="text-3xl font-bold">{{ $t("CLEANING_BUILDINGS") }}</h3>
					<p>{{ $t("CLEANING_BUILDINGS_DESC") }}</p>
					<NuxtLink to="/services/-cleaning" class="py-3 px-4 bg-brand-second rounded-lg hover:bg-brand-first text-white no-underline">
						<i class="bi bi-arrow-right fs-5 me-2"></i>
						{{ $t("READ_MORE") }}
					</NuxtLink>
				</div>
				<div class="flex flex-col justify-between items-start gap-3">
					<h3 class="text-3xl font-bold">{{ $t("HEAVY_LIFTING") }}</h3>
					<p>{{ $t("HEAVY_LIFTING_DESC") }}</p>
					<NuxtLink to="/services/facade-cleaning" class="py-3 px-4 bg-brand-second rounded-lg hover:bg-brand-first text-white no-underline">
						<i class="bi bi-arrow-right fs-5 me-2"></i>
						{{ $t("READ_MORE") }}
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>
