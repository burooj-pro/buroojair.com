<template>
	<li class="flex items-start rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
		<div class="mr-4 flex-shrink-0">
			<svg class="h-6 w-6 text-brand-second" fill="currentColor" viewBox="0 0 20 20">
				<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
			</svg>
		</div>
		<span class="text-lg font-medium text-gray-800 lg:text-xl">{{ text }}</span>
	</li>
</template>
<script>
export default {
	props: {
		text: {
			type: String,
			required: true,
		},
	},
}
</script>
