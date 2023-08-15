<template>
	<div>
		<section 
      id="headingSection" 
      class="
      overflow-hidden 
      bg-[url(~assets/images/burooj_air_drone.jpg)] 
      bg-cover bg-top bg-no-repeat 
      pt-36 font-neo-sans
      ">
			<div class="bg-black/25 md:py-24">
				<div class="container mx-auto">
          <div class="text-center ltr:sm:text-left rtl:sm:text-right">
					<h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">{{ $t("GALLERY") }}</h2>
				</div>
        </div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	props: ["image", "title"],
};
</script>
