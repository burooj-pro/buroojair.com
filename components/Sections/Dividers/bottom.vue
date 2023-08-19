<template>
	<div class="absolute bottom-0 w-full hidden lg:block" :class="sectionClass">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="h-12 block translate-x-0 w-full">
			<path :class="pathClass" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
		</svg>
	</div>
</template>
<script>
export default {
	props: ['pathClass', 'sectionClass'],
}
</script>
