<template>
	<div class="absolute top-0 w-full h-full bg-blend-darken" :class="jointClasses"></div>
</template>

<script>
export default {
	props: ['classColor', 'classOpacity'],
	computed: {
		jointClasses() {
			return `${this.classColor} ${this.classOpacity}`
		},
	},
}
</script>
