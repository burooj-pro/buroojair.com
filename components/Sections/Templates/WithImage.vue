<template>
	<section class="overflow-hidden lg:grid lg:grid-cols-2 font-neo-sans text-xl" :class="sectionClass">
		<div class="flex justify-center items-center" :class="imageLocation == 'left' ? 'order-2' : ''">
			<div class="mx-auto ltr:!text-left rtl:!text-right">
				<slot />
			</div>
		</div>
		<div class="relative">
			<img :src="image" class="w-full object-cover lg:h-full" :class="imageLocation == 'left' ? 'order-1' : ''" />
			<SectionsTemplatesOverlay classColor="bg-black" classOpacity="bg-opacity-50" />
			<div v-if="$slots.imageText" class="absolute w-full h-full inset-0 top-0 flex items-center justify-center text-white">
				<slot name="imageText" />
			</div>
		</div>
	</section>
</template>
<script>
export default {
	props: ['image', 'imageLocation', 'sectionClass'],
	mounted() {
		if (this.sectionClass) {
			console.log(this.sectionClass)
		}
	},
}
</script>
