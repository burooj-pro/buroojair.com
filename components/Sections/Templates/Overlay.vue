<template>
	<div class="absolute top-0 h-full w-full bg-blend-darken" :class="jointClasses"></div>
</template>

<script>
export default {
	props: {
		classColor: {
			type: String,
			default: 'bg-black',
		},
		classOpacity: {
			type: String,
			default: 'bg-opacity-50',
		},
	},
	computed: {
		jointClasses() {
			return `${this.classColor} ${this.classOpacity}`
		},
	},
}
</script>
