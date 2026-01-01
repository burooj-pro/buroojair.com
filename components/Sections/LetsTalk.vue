<template>
	<section class="relative bg-[#EBF5FF] bg-[url(~assets/images/Section.png)] bg-cover bg-center bg-no-repeat py-24 font-neo-sans text-gray-800 dark:bg-[#04061C] lg:py-32">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:gap-16">
				<!-- Left Side - Franchise Title -->
					<div class="uppercase">
					<h4 class="mb-2 text-3xl font-bold text-gray-900 lg:text-7xl">
						{{ $t('FRANCHISE') }}
					</h4>
					<p class="text-xl font-normal text-gray-900 lg:text-4xl">
						{{ $t('OPPORTUNITIES_AVAILABLE') }}
					</p>
					</div>

				<!-- Right Side - Description and CTA -->
				<div class="flex flex-col justify-center">
					<p class="mb-6 text-base leading-relaxed text-gray-800 lg:text-xl">
							{{ $t('TAKE_PART_IN_THE_MOST_INNOVATIVE_BUSINESS_IDEA') }}
						</p>
					<NuxtLink 
						to="/franchise" 
						class="inline-flex items-center justify-center min-h-[44px] gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white no-underline transition-colors hover:bg-blue-700 lg:px-8 lg:py-4 lg:text-lg"
					>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
							{{ $t('LET_S_TALK') }}
						</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>
