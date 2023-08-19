<template>
	<li class="flex items-center text-lg font-light lg:text-3xl lg:font-medium">
		<i class="bi bi-triangle-fill me-4 text-3xl text-emerald-400 rtl:ms-6"></i>
		<span>{{ text }}</span>
	</li>
</template>
<script>
export default {
	props: ['text'],
}
</script>
