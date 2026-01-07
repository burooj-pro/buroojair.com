<template>
	<div class="rounded-lg bg-white p-4 text-black shadow-lg dark:bg-gray-800 dark:text-white lg:p-6">
		<label class="mb-2 block text-lg font-bold lg:text-xl"> Drone Market Size & Forecast 2020-2025 </label>

		<div class="mb-4 font-thin overflow-hidden" style="height: 500px; position: relative;">
			<component v-if="BarChartComponent" :is="BarChartComponent" :options="chartOptions" :data="chartData" />
			<div v-else class="flex h-full items-center justify-center">
				<p class="text-sm text-gray-500 dark:text-gray-400">Loading chart...</p>
			</div>
		</div>
		
		<div class="mt-2 space-y-1 pt-2">
			<p class="text-xs text-gray-500 dark:text-gray-400 lg:text-sm">Source: Drone Market Report 2020 (c) by Drone Industry Insignt</p>
			<p class="text-sm font-semibold text-gray-700 dark:text-gray-300 lg:text-base">The global drone market could generate $43 Billion in revenues by 2025.</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			BarChartComponent: null,
		}
	},
	async mounted() {
		if (process.client) {
			// Lazy load Chart.js only when component is mounted
			await this.loadChart()
		}
	},
	methods: {
		async loadChart() {
			try {
				// Dynamically import vue-chartjs
				const { Bar } = await import('vue-chartjs')
				
				// Create a local component that extends Bar
				this.BarChartComponent = {
					extends: Bar,
					props: {
						data: {
							type: Object,
							required: true,
						},
						options: {
							type: Object,
							required: false,
							default: () => ({}),
						},
					},
					watch: {
						data() {
							this.renderChart(this.data, this.options)
						},
					},
					mounted() {
						this.renderChart(this.data, this.options)
					},
				}
			} catch (error) {
				if (process.env.NODE_ENV === 'development') {
					console.error('Failed to load chart:', error)
				}
			}
		},
	},
	computed: {
		chartOptions() {
			return {
				responsive: true,
				maintainAspectRatio: false,
				legend: {
					display: false,
				},
				plugins: {
					legend: {
						labels: {
							font: {
								size: 14,
								family: 'NeoSans', // Set the font family
								weight: '100', // Set the font weight to thin
							},
						},
					},
				},
				scales: {
					// Apply the same changes to the scales for the axes
					x: {
						ticks: {
							font: {
								family: 'NeoSans',
								weight: '100',
							},
						},
					},
					y: {
						ticks: {
							font: {
								family: 'NeoSans',
								weight: '100',
							},
						},
					},
				},
			}
		},

		chartData() {
			return {
				labels: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
				datasets: [
					{
						label: '$ Billion ',
						data: [18, 22, 28, 33, 37, 40, 43],
						backgroundColor: 'rgba(52, 55, 255, 0.3)',
						borderColor: 'rgba(52, 55, 255, 1)',
						borderWidth: 2,
					},
				],
			}
		},
	},
}
</script>
