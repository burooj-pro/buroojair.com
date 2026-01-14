export default {
	target: 'static',
	ssr: false,
  
	head: {
	  title: 'Burooj Air - Industrial and Commercial Drone Solutions in Saudi Arabia',
	  htmlAttrs: { lang: 'en' },
	  link: [
		{ rel: 'canonical', href: 'https://buroojair.com/' },
		// Preload hero poster images for faster LCP (critical for performance)
		{ rel: 'preload', as: 'image', href: '/images/hero-poster-desktop.webp', media: '(min-width: 1024px)' },
		{ rel: 'preload', as: 'image', href: '/images/hero-poster-mobile.webp', media: '(max-width: 1023px)' },
		// Resource hints - only critical ones (Lighthouse recommends max 4 preconnect)
		// Video hosting is critical for LCP
		{ rel: 'dns-prefetch', href: 'https://hel1.your-objectstorage.com' },
		{ rel: 'preconnect', href: 'https://hel1.your-objectstorage.com', crossorigin: 'anonymous' },
		// Analytics - use dns-prefetch only (less critical)
		{ rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
		{ rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
		// Pipedrive forms - use dns-prefetch only
		{ rel: 'dns-prefetch', href: 'https://webforms.pipedrive.com' },
		// Other analytics - dns-prefetch only (non-critical)
		{ rel: 'dns-prefetch', href: 'https://analytics.tiktok.com' },
		{ rel: 'dns-prefetch', href: 'https://sc-static.net' },
		{ rel: 'dns-prefetch', href: 'https://connect.facebook.net' },
	  ],
	  meta: [
		{ charset: 'utf-8' },
		{ name: 'keywords', content: 'drone, industrial, commercial, Saudi Arabia' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		// Note: CSP should be set via HTTP headers on the server for better security
		// Meta tag CSP has limitations (no wildcards, frame-ancestors ignored, etc.)
		// Temporarily removed to allow Pipedrive forms to load properly
		{
		  hid: 'description',
		  name: 'description',
		  content:
			'Burooj Air is the first Saudi team licensed for drone cleaning services, offering innovative and eco-friendly solutions for high-rise facade cleaning and more.',
		},
		{
		  hid: 'keywords',
		  name: 'keywords',
		  content:
			'Drone cleaning, Drone facade cleaning, High-rise drone cleaning, Building cleaning drones, Window cleaning drones, Aerial cleaning services, Facade cleaning Saudi Arabia, Drone services Saudi Arabia, Licensed drone operators, Innovative cleaning technology, Professional drone cleaning, Eco-friendly cleaning drones, Sustainable drone cleaning, Burooj Air services, Contactless building cleaning, Advanced drone solutions, Exterior cleaning drones, High-tech cleaning methods, Saudi drone cleaning company, First licensed drone cleaning Saudi Arabia',
		},
		{ hid: 'og:title', property: 'og:title', content: 'Burooj Air' },
		{
		  hid: 'og:description',
		  property: 'og:description',
		  content:
			'Burooj Air is the first Saudi team licensed for drone cleaning services, offering innovative and eco-friendly solutions for high-rise facade cleaning and more.',
		},
		{
		  hid: 'og:image',
		  property: 'og:image',
		  content: 'https://buroojair.com/images/buroojair-og.png',
		},
		{
		  hid: 'og:image:width',
		  property: 'og:image:width',
		  content: '1200',
		},
		{
		  hid: 'og:image:height',
		  property: 'og:image:height',
		  content: '630',
		},
		{
		  hid: 'og:image:type',
		  property: 'og:image:type',
		  content: 'image/png',
		},
		{ hid: 'og:url', property: 'og:url', content: 'https://buroojair.com/' },
		{ hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
		{ hid: 'twitter:title', name: 'twitter:title', content: 'Burooj Air' },
		{
		  hid: 'twitter:description',
		  name: 'twitter:description',
		  content:
			'Burooj Air is the first Saudi team licensed for drone cleaning services, offering innovative and eco-friendly solutions for high-rise facade cleaning and more.',
		},
		{
		  hid: 'twitter:image',
		  name: 'twitter:image',
		  content: 'https://buroojair.com/images/buroojair-og.png',
		},
		{ name: 'format-detection', content: 'telephone=no' },
	  ],
	  // Analytics scripts moved to plugins/analytics.client.js to load after page load for better performance
	  script: [
		{
		  hid: 'theme-init',
		  innerHTML: `
			(function() {
			  const theme = localStorage.getItem('theme') || 'dark';
			  if (theme === 'dark') {
				document.documentElement.classList.add('dark');
			  } else {
				document.documentElement.classList.remove('dark');
			  }
			})();
		  `,
		  type: 'text/javascript',
		  charset: 'utf-8'
		},
	  ],
	  __dangerouslyDisableSanitizersByTagID: {
		'theme-init': ['innerHTML']
	  },
	},
  
	css: ['@/assets/scss/main.scss', 'animate.css/animate.min.css'],
  
	plugins: [
	  { src: '@/plugins/light-gallery.client.js', ssr: false },
	  // Chart.js is now lazy loaded in MyBarChart component - removed from global plugins
	  { src: '~/plugins/theme.client.js', mode: 'client' },
	  { src: '~/plugins/gsap.client.js', mode: 'client' },
	  { src: '~/plugins/page-transitions.client.js', mode: 'client' },
	  { src: '~/plugins/localStorageLocale.js', mode: 'client' },
	  { src: '~/plugins/analytics.client.js', mode: 'client' },
	],
  
	components: {
	  dirs: ['@/components'],
	},
  
	modules: ['@nuxtjs/style-resources', '@nuxtjs/i18n'],
	
	router: {
		scrollBehavior(to, from, savedPosition) {
			// Always scroll to top when navigating to a new page
			if (savedPosition) {
				return savedPosition
			} else {
				return { x: 0, y: 0 }
			}
		},
	},
  
	build: {
	  extractCSS: true,
	  // Generate source maps for better debugging (required by Lighthouse)
	  devtools: process.env.NODE_ENV === 'development',
	  // Optimize build performance
	  terser: {
		terserOptions: {
		  compress: {
			drop_console: process.env.NODE_ENV === 'production',
			drop_debugger: process.env.NODE_ENV === 'production',
			pure_funcs: process.env.NODE_ENV === 'production' ? ['console.log', 'console.info', 'console.debug'] : [],
		  },
		  mangle: true,
		},
		sourceMap: process.env.NODE_ENV === 'production',
		extractComments: false,
	  },
	  extend(config, { isDev, isClient }) {
		if (isClient) {
		  // Generate source maps in production for debugging (Lighthouse requirement)
		  // Use 'source-map' for production to ensure proper source maps
		  config.devtool = isDev ? 'eval-source-map' : 'source-map'
		}
		
		// Optimize chunk splitting to reduce unused JavaScript
		if (!isDev && isClient) {
		  config.optimization = config.optimization || {}
		  config.optimization.splitChunks = {
			chunks: 'all',
			cacheGroups: {
			  default: false,
			  vendors: false,
			  // Separate vendor chunks
			  vendor: {
				name: 'vendors',
				test: /[\\/]node_modules[\\/]/,
				priority: 20,
				reuseExistingChunk: true,
			  },
			  // Separate GSAP (large library)
			  gsap: {
				name: 'gsap',
				test: /[\\/]node_modules[\\/]gsap[\\/]/,
				priority: 30,
				reuseExistingChunk: true,
			  },
			  // Common chunks
			  common: {
				minChunks: 2,
				priority: 10,
				reuseExistingChunk: true,
			  },
			},
		  }
		}
	  },
	  postcss: {
		postcssOptions: {
		  plugins: {
			tailwindcss: {},
			autoprefixer: {},
		  },
		},
	  },
	  hardSource: false,
	  splitChunks: {
		layouts: true,
		pages: true,
		commons: true,
	  },
	},
  
	i18n: {
	  strategy: 'no_prefix',
	  locales: [
		{
		  code: 'en',
		  iso: 'en-US',
		  file: 'en-US.js',
		  dir: 'ltr',
		  name: 'English',
		},
		{
		  code: 'ar',
		  iso: 'ar-SA',
		  file: 'ar-SA.js',
		  dir: 'rtl',
		  name: 'Arabic',
		},
	  ],
	  lazy: true,
	  langDir: 'i18n/',
	  defaultLocale: 'en',
	  baseUrl: process.env.BASE_URL || 'https://buroojair.com',
  
	  vueI18n: {
		fallbackLocale: 'en',
	  },
	},
  }
