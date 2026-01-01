export default async ({ app }) => {
	if (process.client) {
		const { gsap } = await import('gsap')

		// Set up page transition
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

		// Inject GSAP for use in components
		app.$gsap = gsap
	}
}

