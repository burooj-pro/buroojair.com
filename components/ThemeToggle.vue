<template>
	<button
	  @click="toggleTheme"
	  type="button"
	  class="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all hover:bg-white/10"
	  :aria-label="currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
	  title="Toggle theme"
	>
	  <div class="flex items-center gap-3">
		<!-- Sun -->
		<svg class="h-5 w-5 shrink-0 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		  <path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
		  />
		</svg>
  
		<!-- Switch -->
		<div
		  class="relative h-5 w-11 shrink-0 rounded-full transition-colors"
		  :class="currentTheme === 'dark' ? 'bg-[#26DF9A]' : 'bg-white/20'"
		  aria-hidden="true"
		>
		  <div
			class="absolute top-0.5 left-0.5 rtl:right-0.5 h-4 w-4 rounded-full bg-white transition-transform duration-300"
			:class="currentTheme === 'dark' ? 'translate-x-6' : 'translate-x-0'"
		  />
		</div>
  
		<!-- Moon -->
		<svg class="h-5 w-5 shrink-0 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		  <path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
		  />
		</svg>
	  </div>
	</button>
  </template>
  
  
  <script>
  export default {
	data() {
	  return {
		currentTheme: 'dark',
		_themeInterval: null,
		_storageHandler: null,
	  }
	},
	mounted() {
	  if (process.client && this.$theme) {
		this.currentTheme = this.$theme.getTheme()
		this.watchTheme()
	  }
	},
	beforeUnmount() {
	  if (process.client) {
		if (this._storageHandler) window.removeEventListener('storage', this._storageHandler)
		if (this._themeInterval) clearInterval(this._themeInterval)
	  }
	},
	methods: {
	  toggleTheme() {
		if (process.client && this.$theme) {
		  this.currentTheme = this.$theme.toggleTheme()
		}
	  },
	  watchTheme() {
		if (!process.client) return
  
		this._storageHandler = (e) => {
		  if (e.key === 'theme') {
			this.currentTheme = e.newValue || 'dark'
			if (this.$theme) this.$theme.setTheme(this.currentTheme)
		  }
		}
		window.addEventListener('storage', this._storageHandler)
  
		this._themeInterval = setInterval(() => {
		  if (this.$theme) {
			const theme = this.$theme.getTheme()
			if (theme !== this.currentTheme) this.currentTheme = theme
		  }
		}, 300)
	  },
	},
  }
  </script>
  