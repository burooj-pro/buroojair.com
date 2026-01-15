<template>
	<section class="bg-[#EBF5FF] py-16 font-neo-sans text-gray-900 dark:bg-[#04061C] dark:text-white lg:py-24">
		<div class="container mx-auto px-4 lg:px-6 xl:px-8">
			<!-- Section Header with Navigation -->
			<div class="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-center">
				<!-- Title and Subtitle - Left Aligned -->
				<div class="flex-1">
					<h2 class="mb-4 text-start rtl:text-end text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white lg:text-4xl xl:text-5xl">
						{{ $t('EXCLUSIVE_PARTNERSHIP_WITH_TTA') }}
					</h2>
					<p class="text-start rtl:text-end text-base font-light text-gray-700 dark:text-gray-300 lg:text-xl">
						{{ $t('TTA_PARTNERSHIP_DESC') }}
					</p>
				</div>

				<!-- Navigation Buttons - Right Aligned -->
				<div class="flex gap-3 lg:gap-4">
					<button
						@click="previousCards"
						:disabled="currentIndex === 0"
						class="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-gray-900/10 dark:bg-white/10 text-gray-900 dark:text-white transition-all hover:bg-gray-900/20 dark:hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
						aria-label="Previous products"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						@click="nextCards"
						:disabled="currentIndex >= maxIndex"
						class="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-gray-900/10 dark:bg-white/10 text-gray-900 dark:text-white transition-all hover:bg-gray-900/20 dark:hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
						aria-label="Next products"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			</div>

			<!-- Product Cards Carousel - All products -->
			<div class="overflow-hidden pb-6">
				<div 
					class="flex gap-4 px-4 transition-transform duration-300 ease-in-out lg:gap-4 lg:px-6"
					:style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }"
				>
					<div
						class="card-wrapper is-glass is-climate-card flex w-[320px] flex-shrink-0 flex-col overflow-hidden transition-all duration-300 lg:w-[360px] xl:w-[400px]"
						v-for="product in products"
						:key="product.id"
					>
						<!-- Product Image -->
						<div class="mb-5 flex h-64 items-center justify-center bg-white p-6 lg:h-72 lg:p-8">
							<img
								class="h-full max-h-48 w-full object-contain transition-transform duration-300 lg:max-h-56"
								:src="product.image"
								:alt="`${product.name} - ${product.description}`"
								width="400"
								height="300"
								loading="lazy"
							/>
						</div>

						<!-- Product Info -->
						<div class="flex flex-grow flex-col justify-between p-6 lg:p-8">
							<div>
								<h5 class="mb-4 text-2xl font-black leading-tight text-gray-900 lg:text-3xl">
									{{ product.name }}
								</h5>
								<p class="mb-5 text-sm leading-relaxed text-gray-700 lg:text-base">
									{{ product.description }}
								</p>
							</div>

							<!-- Contact Button -->
							<a
								:href="'mailto:contact@buroojair.com?subject=Interested in ' + product.name"
								class="mt-auto block w-full rounded-lg bg-brand-second px-6 py-3 text-center text-sm font-bold text-white no-underline transition-colors hover:bg-brand-first focus:outline-none focus:ring-2 focus:ring-brand-second focus:ring-offset-2 lg:py-4 lg:text-base"
							>
								{{ $t('CONTACT_US') }}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: 0,
			cardsPerView: 3,
			cardWidth: 416, // 400px card + 16px gap
		};
	},
	computed: {
		products() {
			return [
				{
					id: 1,
					name: this.$t('TTA_PRODUCT_M4E_NAME'),
					description: this.$t('TTA_PRODUCT_M4E_DESC'),
					image: '/images/TTA/M4E(5L).png',
				},
				{
					id: 2,
					name: this.$t('TTA_PRODUCT_M6E1_NAME'),
					description: this.$t('TTA_PRODUCT_M6E1_DESC'),
					image: '/images/TTA/M6E-1.webp',
				},
				{
					id: 3,
					name: this.$t('TTA_PRODUCT_M6EX_V1_NAME'),
					description: this.$t('TTA_PRODUCT_M6EX_V1_DESC'),
					image: '/images/TTA/M6E-XVersion1(10L).webp',
				},
				{
					id: 4,
					name: this.$t('TTA_PRODUCT_M6EX_V2_NAME'),
					description: this.$t('TTA_PRODUCT_M6EX_V2_DESC'),
					image: '/images/TTA/M6E-XVersion2.png',
				},
				{
					id: 5,
					name: this.$t('TTA_PRODUCT_M6EG200_NAME'),
					description: this.$t('TTA_PRODUCT_M6EG200_DESC'),
					image: '/images/TTA/M6E-G200(16L).jpeg',
				},
				{
					id: 6,
					name: this.$t('TTA_PRODUCT_M8APRO_NAME'),
					description: this.$t('TTA_PRODUCT_M8APRO_DESC'),
					image: '/images/TTA/M8APRO-20L.jpg',
				},
				{
					id: 7,
					name: this.$t('TTA_PRODUCT_M6EG300_NAME'),
					description: this.$t('TTA_PRODUCT_M6EG300_DESC'),
					image: '/images/TTA/M6EG300.png',
				},
			];
		},
		maxIndex() {
			return Math.max(0, this.products.length - this.cardsPerView);
		},
	},
	methods: {
		nextCards() {
			if (this.currentIndex < this.maxIndex) {
				this.currentIndex++;
			}
		},
		previousCards() {
			if (this.currentIndex > 0) {
				this.currentIndex--;
			}
		},
	},
		mounted() {
			// Adjust cards per view and card width based on screen size
			if (process.client) {
				const updateCardsPerView = () => {
					const width = window.innerWidth;
					if (width >= 1536) {
						// 2xl screens - 3 cards
						this.cardsPerView = 3;
						this.cardWidth = 416; // 400px card + 16px gap
					} else if (width >= 1280) {
						// xl screens - 2 cards for better fit
						this.cardsPerView = 2;
						this.cardWidth = 416; // 400px card + 16px gap
					} else if (width >= 1024) {
						// lg screens - 2 cards
						this.cardsPerView = 2;
						this.cardWidth = 336; // 320px card + 16px gap
					} else if (width >= 768) {
						// md screens - 2 cards
						this.cardsPerView = 2;
						this.cardWidth = 336; // 320px card + 16px gap
					} else {
						// sm screens - 1 card
						this.cardsPerView = 1;
						this.cardWidth = 336; // 320px card + 16px gap
					}
				};
				updateCardsPerView();
				window.addEventListener('resize', updateCardsPerView);
				this.$once('hook:beforeDestroy', () => {
					window.removeEventListener('resize', updateCardsPerView);
				});
			}
		},
};
</script>

<style scoped>
/* Ensure cards are not cropped */
.flex > div {
	flex-shrink: 0;
}

/* Glassmorphism card styling - matching Benefits section */
.card-wrapper.is-glass.is-climate-card {
	display: flex;
	flex-direction: column;
	padding: 0;
	background-color: #ffffff;
	border: 1px solid #e5e7eb;
	border-radius: 20px;
	transition: all 0.3s ease;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	overflow: hidden;
}

.card-wrapper.is-glass.is-climate-card:hover {
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	transform: translateY(-2px);
}

@media screen and (max-width: 1023px) {
	.card-wrapper.is-glass.is-climate-card {
		border-radius: 16px;
	}
}

@media screen and (max-width: 767px) {
	.card-wrapper.is-glass.is-climate-card {
		border-radius: 12px;
	}
}
</style>


