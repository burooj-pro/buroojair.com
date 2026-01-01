<template>
	<button
		v-if="isVisible"
		@click="scrollToTop"
		class="back-to-top-button fixed bottom-8 right-8 rtl:left-8 z-[100] flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2"
		aria-label="Back to top"
	>
		<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
		</svg>
	</button>
</template>

<script>
export default {
	data() {
		return {
			isVisible: false,
		}
	},
	mounted() {
		if (process.client) {
			window.addEventListener('scroll', this.handleScroll)
			// Check initial scroll position
			this.handleScroll()
		}
	},
	beforeDestroy() {
		if (process.client) {
			window.removeEventListener('scroll', this.handleScroll)
		}
	},
	methods: {
		handleScroll() {
			// Show button after scrolling 200px
			this.isVisible = window.scrollY > 200
		},
		scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		},
	},
}
</script>

<style scoped>
.back-to-top-button {
	background-color: rgba(31, 41, 55, 0.6);
	border: 1px solid rgba(255, 255, 255, 0.2);
	-webkit-backdrop-filter: blur(20px);
	backdrop-filter: blur(20px);
	box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.back-to-top-button:hover {
	background-color: rgba(31, 41, 55, 0.8);
	border-color: rgba(255, 255, 255, 0.3);
}

.dark .back-to-top-button {
	background-color: rgba(17, 24, 39, 0.7);
	border-color: rgba(255, 255, 255, 0.15);
}

.dark .back-to-top-button:hover {
	background-color: rgba(17, 24, 39, 0.9);
	border-color: rgba(255, 255, 255, 0.25);
}
</style>

