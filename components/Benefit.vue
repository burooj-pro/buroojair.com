<template>
	<li class="flex items-center text-lg lg:text-3xl font-light lg:font-medium">
		<i class="bi bi-triangle-fill text-3xl text-emerald-400 me-4 rtl:ms-6"></i>
		<span>{{ text }}</span>
	</li>
</template>
<script>
export default {
	props: ['text'],
}
</script>
