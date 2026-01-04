export default ({ app }, inject) => {
	if (process.client) {
		// Theme management
		const theme = {
			// Get current theme from localStorage or default to 'dark'
			getTheme() {
				return localStorage.getItem('theme') || 'dark'
			},

			// Set theme
			setTheme(newTheme) {
				if (newTheme === 'dark') {
					document.documentElement.classList.add('dark')
					localStorage.setItem('theme', 'dark')
				} else {
					document.documentElement.classList.remove('dark')
					localStorage.setItem('theme', 'light')
				}
			},

			// Toggle theme
			toggleTheme() {
				const currentTheme = this.getTheme()
				const newTheme = currentTheme === 'light' ? 'dark' : 'light'
				this.setTheme(newTheme)
				return newTheme
			},

			// Initialize theme on page load
			init() {
				const savedTheme = this.getTheme()
				this.setTheme(savedTheme)
			},
		}

		// Initialize theme when plugin loads
		theme.init()

		// Inject theme into Vue instance
		inject('theme', theme)
	}
}

