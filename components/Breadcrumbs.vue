<template>
	<nav v-if="items && items.length > 1" class="bg-gray-100 py-3" aria-label="Breadcrumb">
		<div class="container mx-auto px-4 lg:px-8">
			<ol class="flex flex-wrap items-center space-x-2 text-sm">
				<li v-for="(item, index) in items" :key="index" class="flex items-center">
					<NuxtLink 
						v-if="item.to && index < items.length - 1"
						:to="item.to"
						class="text-gray-600 no-underline transition-colors hover:text-brand-second"
					>
						{{ item.text }}
					</NuxtLink>
					<span v-else class="text-gray-900 font-medium">{{ item.text }}</span>
					<svg 
						v-if="index < items.length - 1"
						class="mx-2 h-4 w-4 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</li>
			</ol>
		</div>
	</nav>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			required: true,
			validator: (items) => {
				return items.every(item => item.text && (item.to || !item.to))
			}
		}
	}
}
</script>

