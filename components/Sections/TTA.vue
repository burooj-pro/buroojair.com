<template>
	<div class="container my-24 mx-auto md:px-6">
		<section class="mb-32 text-center font-neo-sans">
			<h2 class="mb-12 text-3xl font-bold uppercase leading-relaxed text-gray-600">
				Exclusive Partnership with TTA
			</h2>
			<p class="mb-12 text-lg text-gray-600 leading-relaxed">
				Burooj Air is proud to be the official GCC agent for TT Aviation, a global leader in UAV technologies. Together, we bring cutting-edge drone solutions to the region.
			</p>
			<div class="overflow-x-auto flex gap-6 px-4">
				<div
					class="flex-shrink-0 w-[400px] bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between items-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-300"
					v-for="product in products"
					:key="product.id"
				>
					<div class="flex justify-center items-center h-56">
						<img
							class="h-36 object-contain"
							:src="product.image"
							:alt="product.name"
						/>
					</div>
					<div class="px-5 flex-grow flex flex-col justify-center text-center">
						<h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
							{{ product.name }}
						</h5>
						<p class="mt-2 text-sm text-gray-700 dark:text-gray-400">
							{{ product.description }}
						</p>
					</div>
					<div class="px-5 pb-5 mt-auto w-full">
						<a
							:href="'mailto:contact@buroojair.com?subject=Interested in ' + product.name"
							class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full block"
						>
							Contact Us
						</a>
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
					description: 'Compact and efficient for small-scale operations.',
					image: '/images/TTA/M4E(5L).png',
				},
				{
					id: 2,
					name: 'M6E-1 (10L)',
					description: 'Ideal for medium-scale cleaning tasks.',
					image: '/images/TTA/M6E-1.webp',
				},
				{
					id: 3,
					name: 'M6E-X, Version1 (10L)',
					description: 'Enhanced performance with advanced features.',
					image: '/images/TTA/M6E-XVersion1(10L).webp',
				},
				{
					id: 4,
					name: 'M6E-X, Version2 (10L)',
					description: 'Superior range and payload capacity.',
					image: '/images/TTA/M6E-XVersion2.png',
				},
				{
					id: 5,
					name: 'M6E-G200 (16L)',
					description: 'Engineered for large-scale industrial tasks.',
					image: '/images/TTA/M6E-G200(16L).jpeg',
				},
				{
					id: 6,
					name: 'M8A PRO (20L)',
					description: 'High efficiency and reliability for demanding jobs.',
					image: '/images/TTA/M8APRO-20L.jpg',
				},
				{
					id: 7,
					name: 'M6E G300 (30L) 4 Atomizers',
					description: 'Cutting-edge technology for maximum productivity.',
					image: '/images/TTA/M6EG300.png',
				},
			],
		};
	},
};
</script>

<style scoped>
.overflow-x-auto {
	display: flex;
	gap: 1.5rem;
	overflow-x: auto;
	padding-bottom: 1rem;
}

.flex-shrink-0 {
	scroll-snap-align: center;
	width: 400px;
}

.flex-shrink-0 img {
	transition: transform 0.3s ease-in-out;
}

.flex-shrink-0:hover img {
	transform: scale(1.05);
}

.overflow-x-auto::-webkit-scrollbar {
	height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
	background: #c0c0c0;
	border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
	background: #f4f4f4;
}
</style>
