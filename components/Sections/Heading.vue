<template>
    <section id="headingSection" class="relative aspect-[2]">
      <img src="~assets/images/burooj_air_drone.jpg" class="object-cover cover object-right h-full absolute top-0" />
      <div class="absolute top-0 left-0 w-full h-full bg-indigo-800 bg-opacity-10 bg-blend-darken"></div>
      <div class="container mx-auto py-8 h-full d-flex items-center drop-shadow-md">
        <h1 class="text-white text-4xl font-semibold">{{ $t("GALLERY") }}</h1>
      </div>
    </section>
</template>
<script>
export default {
  props: ['image', 'title']
};

</script>