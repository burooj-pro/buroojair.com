<template>
	<section class="relative font-neo-sans">
		<div class="relative bg-emerald-600 py-56 text-white">
			<div class="container mx-auto p-0">
				<div class="grid grid-cols-1 lg:grid-cols-2">
					<div class="p-8 text-4xl uppercase">
						<p>{{ $t('THE_ESTIMATED_NEED_FOR_FUTURE_DRONE_CLEANING_SERVICES_IS_APPROXIMATELY') }}</p>
					</div>

					<div class="p-8 text-5xl font-bold">
						<h3>{{ animatedNumber.toLocaleString() }}</h3>
						<p class="text-3xl">{{ $t('DRONES_INTERNATIONALLY') }}</p>
					</div>
				</div>
			</div>
		</div>

		<SectionsDividersBottom pathClass="fill-emerald-600" sectionClass="" />
	</section>
</template>

<script>
export default {
	data() {
		return {
			animatedNumber: 0, // Starting number for the counter
			endValue: 2500000, // Final number to count up to
			duration: 2000, // Duration of the count-up animation in milliseconds
			observer: null, // For intersection observer
		};
	},
	mounted() {
		this.initObserver(); // Initialize the observer to trigger animation
	},
	methods: {
		initObserver() {
			// Observe when the section becomes visible in the viewport
			const section = this.$el;

			this.observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						this.startCountUp();
						this.observer.disconnect(); // Stop observing after the animation starts
					}
				},
				{ threshold: 0.5 }
			);

			this.observer.observe(section);
		},
		startCountUp() {
			const stepTime = this.duration / 100; // Divide into 100 steps
			const increment = this.endValue / 100; // Increment value for each step
			let currentValue = 0;

			const interval = setInterval(() => {
				currentValue += increment;

				if (currentValue >= this.endValue) {
					currentValue = this.endValue; // Ensure exact value at the end
					clearInterval(interval); // Stop the interval
				}

				this.animatedNumber = Math.round(currentValue); // Update the animated number
			}, stepTime);
		},
	},
};
</script>

<style scoped>
h3 {
	margin: 0;
}
</style>
