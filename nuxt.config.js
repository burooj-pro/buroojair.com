export default {
	target: 'static',
	ssr: false,
  
	head: {
	  title: 'Burooj Air - Industrial and Commercial Drone Solutions in Saudi Arabia',
	  htmlAttrs: { lang: 'en' },
	  link: [{ rel: 'canonical', href: 'https://www.buroojair.com/' }],
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
		  content: 'https://buroojair.com/images/BuroojAir.png',
		},
		{ hid: 'og:url', property: 'og:url', content: 'https://www.buroojair.com/' },
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
		  content: 'https://buroojair.com/images/BuroojAir.png',
		},
		{ name: 'format-detection', content: 'telephone=no' },
	  ],
	  script: [
		{
			hid: 'gtm',
			innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			  })(window,document,'script','dataLayer','GTM-55SGMJF5');`,
			type: 'text/javascript',
			charset: 'utf-8'
		  },
		{
		  hid: 'tiktok-pixel',
		  innerHTML: `!function (w, d, t) {
			w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
			ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
			ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
			for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq, ttq.methods[i]);
			ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
			ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
			ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
			var s=d.createElement("script");s.type="text/javascript";s.async=!0;
			s.src=r+"?sdkid="+e+"&lib="+t;
			var f=d.getElementsByTagName("script")[0];
			f.parentNode.insertBefore(s,f)};
			ttq.load("D0M466RC77U6GBUFK3M0");
			ttq.page();
		  }(window, document, 'ttq');`,
		  type: 'text/javascript',
		  charset: 'utf-8',
		},
		{
		  hid: 'snap-pixel',
		  innerHTML: `(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
		  {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
		  a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
		  r.src=n;var u=t.getElementsByTagName(s)[0];
		  u.parentNode.insertBefore(r,u);})(window,document,
		  'https://sc-static.net/scevent.min.js');
  
		  snaptr('init', '74876930-c068-4ef8-abc7-f9c5f4cdc9f0');
		  snaptr('track', 'PAGE_VIEW');`,
		  type: 'text/javascript',
		  charset: 'utf-8',
		},
		{
			hid: 'meta-pixel',
			innerHTML: `!function(f,b,e,v,n,t,s)
			{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
			n.callMethod.apply(n,arguments):n.queue.push(arguments)};
			if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
			n.queue=[];t=b.createElement(e);t.async=!0;
			t.src=v;s=b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t,s)}(window, document,'script',
			'https://connect.facebook.net/en_US/fbevents.js');
			fbq('init', '2545877985601143');
			fbq('track', 'PageView');`,
			type: 'text/javascript',
			charset: 'utf-8',
		  },
	  ],
	  __dangerouslyDisableSanitizersByTagID: {
		gtm: ['innerHTML'],
		'tiktok-pixel': ['innerHTML'],
		'snap-pixel': ['innerHTML'],
		'meta-pixel': ['innerHTML'],
	  },
	},
  
	css: ['@/assets/scss/main.scss', 'animate.css/animate.min.css'],
  
	plugins: [
	  { src: '@/plugins/light-gallery.client.js', ssr: false },
	  { src: '~/plugins/chart.js', mode: 'client' },
	],
  
	components: {
	  dirs: ['@/components'],
	},
  
	modules: ['@nuxtjs/style-resources', '@nuxtjs/i18n'],
  
	build: {
	  extractCSS: true,
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
		// Uncomment if Arabic is added
		// {
		//   code: 'ar',
		//   iso: 'ar-SA',
		//   file: 'ar-SA.js',
		//   dir: 'rtl',
		//   name: 'Arabic',
		// },
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
  