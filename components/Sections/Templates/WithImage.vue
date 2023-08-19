<template>
	<section class="overflow-hidden font-neo-sans text-xl lg:grid lg:grid-cols-2" :class="sectionClass">
		<div class="flex items-center justify-center" :class="imageLocation == 'left' ? 'order-2' : ''">
			<div class="mx-auto ltr:!text-left rtl:!text-right">
				<slot />
			</div>
		</div>
		<div class="relative">
			<img :src="image" class="w-full object-cover lg:h-full" :class="imageLocation == 'left' ? 'order-1' : ''" />
			<SectionsTemplatesOverlay classColor="bg-black" classOpacity="bg-opacity-50" />
			<div v-if="$slots.imageText" class="absolute inset-0 top-0 flex h-full w-full items-center justify-center text-white">
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
