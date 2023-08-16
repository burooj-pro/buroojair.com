<template>
	<div>
		<section id="headingSection" 
		class="overflow-hidden 
		bg-cover bg-top bg-no-repeat pt-36 font-neo-sans"
		:class="`bg-[url(~assets/images/burooj_air_drone.jpg)]`"
		>
			<div class="bg-black/25 lg:py-24">
				<div class="container mx-auto">
					<div class="text-center ltr:lg:text-left rtl:lg:text-right uppercase">
						<h2 class="font-bold text-white text-3xl lg:text-5xl">{{ title }}
						<small class="block mt-4 font-medium" v-if="subtitle">{{ subtitle }}</small>
						</h2>

					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	props: ["image", "title", "subtitle"],
};
</script>
