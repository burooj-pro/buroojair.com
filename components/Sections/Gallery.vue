<template>
	<section class="bg-gray-200 py-5 font-neo-sans">
		<div class="container mx-auto">
			<div class="grid lg:grid-cols-3">
				<div class="bg-gray-100 p-5">
					<h3 class="mb-4 text-5xl font-bold">{{ $t('IMAGES') }}</h3>
					<LightGallery :images="images" :index="index" @close="index = null" />
					<div class="grid grid-cols-2 gap-2">
						<div class="overflow-hidden rounded-lg" v-for="(image, imageIndex) in images" :key="imageIndex" @click="index = imageIndex">
							<a><img class="duration-400 aspect-square object-cover object-center transition-all hover:scale-105" :src="image" /></a>
						</div>

						<div class="overflow-hidden rounded-lg" v-for="(image, imageIndex) in images" :key="imageIndex" @click="index = imageIndex">
							<a><img class="duration-400 aspect-square object-cover object-center transition-all hover:scale-105" :src="image" /></a>
						</div>
					</div>
				</div>
				<div class="col-span-2 bg-white p-5">
					<h3 class="mb-4 text-5xl font-bold">{{ $t('VIDEOS') }}</h3>
					<div class="grid grid-cols-1 gap-4">
						<div v-for="video in videos" class="ratio ratio-16x9 overflow-hidden rounded">
							<video autoplay controls muted loop playsinline preload="auto" class="d-none d-md-block">
								<source :src="video" type="video/mp4" />
							</video>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	mounted() {
		console.log(this.gorseller)
	},

	// add prop for videos
	props: ['videos', 'images'],
	data() {
		return {
			index: null,
		}
	},
}
</script>
