export default async ({ app }) => {
	if (process.client) {
		// Set up page transition (GSAP will be loaded lazily when needed)
		app.router.beforeEach((to, from, next) => {
			// Only animate if we're actually changing routes
			if (to.path !== from.path) {
				// Store the transition state
				app.$gsapTransition = {
					leaving: true,
					entering: false,
				}
			}
			next()
		})
	}
}

