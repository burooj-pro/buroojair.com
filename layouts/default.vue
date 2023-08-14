<template>
  <div :dir="this.$i18n.localeProperties.dir" class="relative">
    <Nuxt />
  </div>
</template>

<script>
import {     initCollapses,  } from 'flowbite'
export default {
  mounted() {
    initCollapses();


  },

  head() {
    let i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
		return {
			title: `Burooj Air`,
      htmlAttrs: {
                lang: 'en',
                ...i18nHead.htmlAttrs
            },
			meta: [
				{
					hid: "description",
					name: "description",
					content: "We aim to contribute to a safer work day for people who work at great heights with lifts, scaffolding and for facade climbers.",
				},
			],
		};
	},

};


</script>
