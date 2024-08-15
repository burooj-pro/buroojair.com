<template>

		<div class="container my-24 mx-auto md:px-6">
		<section class="mb-32 text-center font-neo-sans">
			<h2 class="mb-12 text-3xl font-bold uppercase leading-relaxed text-gray-600">
				The Official Agent for TTA in the GCC
			</h2>
			<div class="overflow-x-auto relative m-5">
				<div class="flex lg:gap-6 gap-4">
					<div class="lg:w-1/3 lg:mb-8 mb-8" v-for="product in products" :key="product.id">
						<div class="member-card relative rounded-lg overflow-hidden bg-white border border-gray-300 h-70 w-80">
							<div class="member-image-circle mx-auto mt-4 w-24 h-24 rounded-full">
								<img :src="product.image" :alt="product.name" class="w-full h-full" />
							</div>
							<div class="p-4">
								<h5 class="mb-2 text-lg font-semibold">
									{{ product.name }}
								</h5>
								<a :href="'mailto:contact@buroojair.com?subject=Interested in ' + product.name"
									class="contact-button block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out">
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			products: [
				{
					id: 1,
					name: 'M4E (5L)',
					price: '11,248.605 SAR',
					image: '/images/TTA/M4E(5L).png',
				},
					{
					id: 2,
					name: 'M6E-1（10L）',
					price: '40,509.60 SAR',
					image: '/images/TTA/M6E-1.webp',
				},
				{
					id: 3,
					name: 'M6E-X, Version1 (10L)',
					price: '41,072.31 SAR',

					image: '/images/TTA/M6E-XVersion1(10L).webp',
				},
					{
					id: 4,
					name: 'M6E-X, Version2 (10L)',
					price: '45,011.295 SAR',
					image: '/images/TTA/M6E-X Version 2.png',
				},
				{
					id: 5,
					name: 'M6E-G200 (16L)',
					price: '56,265.525 SAR',
					image: '/images/TTA/M6E-G200 (16L).jpeg',
				},
				{
					id: 6,
					name: 'M8A PRO （20L）',
					price: '54,014.67 SAR',
					image: '/images/TTA/M8A PRO-20L.jpg',
				},
				{
					id: 7,
					name: 'M6E G300(30L) 4 Atomizers',
					price: '81,024.825 SAR',
					image: '/images/TTA/M6E G300.png',
				},

			],
		};
	},
};
</script>





