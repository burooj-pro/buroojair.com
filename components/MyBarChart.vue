<template>
	<div class="rounded-lg bg-white p-2 text-black shadow-md">
		<label class="mb-2 block font-bold"> Drone Market Size & Forecast 2020-2025 </label>

		<div class="font-thin">
			<BarChart :options="chartOptions" :data="chartData" />
		</div>
		<p class="text-sm text-gray-500">Source: Drone Market Report 2020 (c) by Drone Industry Insignt</p>
		<p>The global drone market could generate $43 Billion in revenues by 2025.</p>
	</div>
</template>

<script>
export default {
	mounted() {},
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
