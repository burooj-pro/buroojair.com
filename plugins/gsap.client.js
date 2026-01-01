import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (process.client) {
	gsap.registerPlugin(ScrollTrigger)
}

export default ({ app }, inject) => {
	if (process.client) {
		inject('gsap', gsap)
		inject('ScrollTrigger', ScrollTrigger)
	}
}

