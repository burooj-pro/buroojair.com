<template>
	<section class="text-gray-700 bg-[url(~assets/images/map_grey.png)] font-neo-sans bg-cover bg-center bg-no-repeat py-80 relative">
		<div class="overlay absolute w-full h-full top-0 inset-0 bg-gray-200 opacity-80"></div>
		<div class="absolute w-full h-full inset-0 top-0 flex items-center">
			<div class="container p-8">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="uppercase">
						<h4 class="text-4xl md:text-7xl font-bold mb-6">{{ $t("FRANCHISE") }}</h4>
						<p class="text-3xl md:text-4xl">{{ $t("OPPORTUNITIES_AVAILABLE") }}</p>
					</div>
					<div class="let-talk-right">
						<p class="text-xl mb-6">
							{{ $t("TAKE_PART_IN_THE_MOST_INNOVATIVE_BUSINESS_IDEA") }}
						</p>
						<a href="#" class="btn btn-secondary btn-blue">
							<i class="bi bi-arrow-right fs-5 me-2"></i>
							{{ $t("LET_S_TALK") }}
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
