// Load GSAP synchronously but register plugin properly
// Components can use direct imports or injected instances
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (process.client) {
	gsap.registerPlugin(ScrollTrigger)
}

export default ({ app }, inject) => {
	if (process.client) {
		// Inject GSAP and ScrollTrigger as direct objects (not functions)
		// This allows components to use this.$gsap and this.$ScrollTrigger directly
		inject('gsap', gsap)
		inject('ScrollTrigger', ScrollTrigger)
	}
}

