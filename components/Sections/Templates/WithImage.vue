<template>
	<section class="overflow-hidden md:grid md:grid-cols-2 font-neo-sans text-xl">
		<div class="" :class="imageLocation == 'left' ? 'order-2' : ''">
			<div class="mx-auto ltr:!text-left rtl:!text-right">
				<slot />
			</div>
		</div>
		<div class="relative">
            <img :src="image" class="h-56 w-full object-cover md:h-full" :class="imageLocation == 'left' ? 'order-1' : ''" />
            <div class="bg-black bg-opacity-50 absolute inset-0 w-full top-0 h-full"></div>
            <div v-if="$slots.imageText">
                <slot name="imageText" />
            </div>
        </div>
	</section>
</template>
<script>
export default {
	// 'https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" class="h-56 w-full object-cover sm:h-full'
	props: ["image", "imageLocation"],
};
</script>
