<template>
  <div :dir="dir">
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    dir() {
      return this.$i18n.locale === "ar" ? "rtl" : "ltr";
    },
  },
};
</script>
