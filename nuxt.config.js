export default {
	target: 'static',
	ssr: false,
  
	head: {
	  title: 'Burooj Air - Industrial and Commercial Drone Solutions in Saudi Arabia',
	  htmlAttrs: { lang: 'en' },
	  link: [{ rel: 'canonical', href: 'https://buroojair.com/' }],
	  meta: [
		{ charset: 'utf-8' },
		{ name: 'keywords', content: 'drone, industrial, commercial, Saudi Arabia' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{
		  hid: 'description',
		  name: 'description',
		  content:
			'Burooj Air is the first Saudi company licensed for drone cleaning services, offering innovative and eco-friendly solutions for high-rise facade cleaning and more.',
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
			'Burooj Air is the first Saudi company licensed for drone cleaning services, offering innovative and eco-friendly solutions for high-rise facade cleaning and more.',
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
			'Burooj Air is the first Saudi company licensed for drone cleaning services, offering innovative and eco-friendly solutions for high-rise facade cleaning and more.',
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
		}
	  ],
	  __dangerouslyDisableSanitizersByTagID: {
		'theme-init': ['innerHTML']
	  },
	},
  
	css: ['@/assets/scss/main.scss', 'animate.css/animate.min.css'],
  
	plugins: [
	  { src: '@/plugins/light-gallery.client.js', ssr: false },
	  { src: '~/plugins/chart.js', mode: 'client' },
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
  
	build: {
	  extractCSS: true,
	  // Generate source maps for better debugging (required by Lighthouse)
	  devtools: process.env.NODE_ENV === 'development',
	  extend(config, { isDev, isClient }) {
		if (isClient) {
		  config.devtool = isDev ? 'eval-source-map' : 'source-map'
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
	  // Optimize bundle size
	  optimization: {
		splitChunks: {
		  chunks: 'all',
		  cacheGroups: {
			vendor: {
			  test: /[\\/]node_modules[\\/]/,
			  name: 'vendors',
			  priority: 10,
			},
		  },
		},
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
	  baseUrl: 'https://buroojair.com' || 'http://localhost:3000',
  
	  vueI18n: {
		fallbackLocale: 'en',
	  },
	},
  }
