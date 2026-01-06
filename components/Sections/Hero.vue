<template>
	<section id="heroSection" class="hero-section font-neo-sans">
	  <!-- Mobile: Video and form separated -->
	  <div class="block lg:hidden hero-section-mobile">
		<!-- Video Section -->
		<div class="relative hero-video-container-mobile overflow-hidden">
		  <video
			ref="videoPlayerMobile"
			muted
			autoplay
			loop
			playsinline
			webkit-playsinline
			preload="auto"
			class="hero-video-mobile w-full h-full bg-gray-900"
			@error="handleVideoError"
			@loadeddata="handleVideoLoaded"
			@canplay="handleVideoCanPlay"
			@loadstart="handleVideoLoadStart"
		  >
			<source src="/videos/heronew.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		  </video>
		  
		  <!-- Overlay -->
		  <SectionsTemplatesOverlay classColor="bg-indigo-800 dark:bg-gray-900" classOpacity="bg-opacity-10 dark:bg-opacity-30" />
		</div>
  
		<!-- Form section below video -->
		<div
		  ref="mobileFormContainer"
		  class="w-full bg-gray-900 bg-opacity-95 p-6 dark:bg-gray-800 dark:bg-opacity-95"
		>
		  <h3 ref="mobileTitle" class="mb-5 font-neo-sans text-2xl font-normal uppercase text-white">
			{{ $t('NOW_REQUEST_A_QUOTE_FOR_DRONE_CLEANING') }}
		  </h3>
  
		  <div
			ref="mobileForm"
			class="pipedriveWebForms"
			data-pd-webforms="https://webforms.pipedrive.com/f/6coemjWsjuoqlhJqDxw5vARg9RKtlXs9Rk7xeP0SZJLEXlmO9hyO7YDdWfq6IcrYLV"
		  >
			<script src="https://webforms.pipedrive.com/f/loader"></script>
		  </div>
		</div>
	  </div>
		
	  <!-- Desktop: Full viewport video background + form overlay -->
	  <div class="hidden lg:block hero-section-desktop relative">
		<!-- Video -->
		<video
		  ref="videoPlayerDesktop"
		  muted
		  autoplay
		  loop
		  playsinline
		  webkit-playsinline
		  preload="auto"
		  class="hero-video absolute inset-0 z-0 bg-gray-900"
		  @error="handleVideoError"
		  @loadeddata="handleVideoLoaded"
		  @canplay="handleVideoCanPlay"
		  @loadstart="handleVideoLoadStart"
		>
		  <source src="/videos/heronew.mp4" type="video/mp4" />
		  Your browser does not support the video tag.
		</video>
		
		<!-- Overlay -->
		<SectionsTemplatesOverlay classColor="bg-indigo-800 dark:bg-gray-900" classOpacity="bg-opacity-10 dark:bg-opacity-30" />
  
		<!-- Content -->
		<div class="relative z-10 h-full w-full flex items-center hero-content-pad">
		  <div class="container mx-auto px-6 flex items-center justify-start rtl:justify-end">
			<div
			  ref="desktopFormContainer"
			  class="w-full bg-gray-900 bg-opacity-95 dark:bg-gray-800 dark:bg-opacity-95 max-w-md rounded-bl-[80px] rounded-br-2xl rounded-tl-2xl rounded-tr-[80px] p-8"
			>
			  <h3 ref="desktopTitle" class="mb-5 font-neo-sans text-3xl font-normal uppercase text-white">
				{{ $t('NOW_REQUEST_A_QUOTE_FOR_DRONE_CLEANING') }}
			  </h3>
  
			  <div
				ref="desktopForm"
				class="pipedriveWebForms"
				data-pd-webforms="https://webforms.pipedrive.com/f/6coemjWsjuoqlhJqDxw5vARg9RKtlXs9Rk7xeP0SZJLEXlmO9hyO7YDdWfq6IcrYLV"
			  >
				<script src="https://webforms.pipedrive.com/f/loader"></script>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</section>
  </template>
  
  <script>
  export default {
	mounted() {
	  if (process.client) {
		this.initGSAP()
		this.initVideos()
	  }
	},
	methods: {
	  initVideos() {
		// Ensure videos are properly initialized and playing
		this.$nextTick(() => {
		  // Force load and play desktop video
		  if (this.$refs.videoPlayerDesktop) {
			const desktopVideo = this.$refs.videoPlayerDesktop
			// Ensure video is muted for autoplay
			desktopVideo.muted = true
			// Force load the video
			desktopVideo.load()
			
			// Try to play immediately if ready
			if (desktopVideo.readyState >= 2) {
			  this.playVideo(desktopVideo, 'Desktop')
			}
			
			// Set up event listeners
			const playWhenReady = () => {
			  this.playVideo(desktopVideo, 'Desktop')
			}
			desktopVideo.addEventListener('loadeddata', playWhenReady, { once: true })
			desktopVideo.addEventListener('canplay', playWhenReady, { once: true })
			desktopVideo.addEventListener('loadedmetadata', playWhenReady, { once: true })
			
			// Fallback: try to play after a short delay
			setTimeout(() => {
			  if (desktopVideo.readyState >= 2) {
				this.playVideo(desktopVideo, 'Desktop')
			  }
			}, 500)
		  }

		  // Force load and play mobile video
		  if (this.$refs.videoPlayerMobile) {
			const mobileVideo = this.$refs.videoPlayerMobile
			// Ensure video is muted for autoplay
			mobileVideo.muted = true
			// Force load the video
			mobileVideo.load()
			
			// Try to play immediately if ready
			if (mobileVideo.readyState >= 2) {
			  this.playVideo(mobileVideo, 'Mobile')
			}
			
			// Set up event listeners
			const playWhenReadyMobile = () => {
			  this.playVideo(mobileVideo, 'Mobile')
			}
			mobileVideo.addEventListener('loadeddata', playWhenReadyMobile, { once: true })
			mobileVideo.addEventListener('canplay', playWhenReadyMobile, { once: true })
			mobileVideo.addEventListener('loadedmetadata', playWhenReadyMobile, { once: true })
			
			// Fallback: try to play after a short delay
			setTimeout(() => {
			  if (mobileVideo.readyState >= 2) {
				this.playVideo(mobileVideo, 'Mobile')
			  }
			}, 500)
		  }
		})
	  },
	  handleVideoError(e) {
		// Log detailed error for debugging
		const video = e.target
		const error = video?.error
		if (error) {
		  let errorMsg = 'Unknown error'
		  switch (error.code) {
			case error.MEDIA_ERR_ABORTED:
			  errorMsg = 'Video loading aborted'
			  break
			case error.MEDIA_ERR_NETWORK:
			  errorMsg = 'Network error while loading video'
			  break
			case error.MEDIA_ERR_DECODE:
			  errorMsg = 'Video decoding error'
			  break
			case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
			  errorMsg = 'Video format not supported'
			  break
		  }
		  console.error('Hero video error:', errorMsg, {
			code: error.code,
			message: error.message,
			src: video?.src || video?.currentSrc
		  })
		} else {
		  console.warn('Hero video error (no error details):', e)
		}
		// Video is decorative, so failure is not critical
	  },
	  handleVideoLoaded(e) {
		// Video loaded successfully - ensure it plays
		const video = e.target
		const label = video === this.$refs.videoPlayerMobile ? 'Mobile' : 'Desktop'
		console.log(`[Hero Video] ${label} - Data loaded:`, {
			readyState: video.readyState,
			duration: video.duration,
			videoWidth: video.videoWidth,
			videoHeight: video.videoHeight,
			paused: video.paused
		})
		this.playVideo(video, label)
	  },
	  handleVideoCanPlay(e) {
		// Video is ready to play - try playing it
		const video = e.target
		const label = video === this.$refs.videoPlayerMobile ? 'Mobile' : 'Desktop'
		console.log(`[Hero Video] ${label} - Can play:`, {
			readyState: video.readyState,
			paused: video.paused,
			ended: video.ended
		})
		this.playVideo(video, label)
	  },
	  handleVideoLoadStart(e) {
		// Video started loading
		const video = e.target
		const label = video === this.$refs.videoPlayerMobile ? 'Mobile' : 'Desktop'
		console.log(`[Hero Video] ${label} - Load started:`, {
			src: video.src || video.currentSrc,
			readyState: video.readyState,
			networkState: video.networkState,
			paused: video.paused,
			muted: video.muted
		})
	  },
	  playVideo(video, label) {
		if (!video) {
		  console.warn(`[Hero Video] ${label} - Video element not found`)
		  return
		}
		
		// Ensure video is muted for autoplay
		video.muted = true
		video.volume = 0
		
		// Ensure video has a source
		if (!video.src && !video.currentSrc) {
		  const source = video.querySelector('source')
		  if (source && source.src) {
			console.log(`[Hero Video] ${label} - Setting video source:`, source.src)
			video.src = source.src
			video.load()
			return // Will retry after load
		  } else {
			console.error(`[Hero Video] ${label} - No video source found`)
			return
		  }
		}
		
		console.log(`[Hero Video] ${label} - Attempting to play:`, {
			src: video.currentSrc || video.src,
			readyState: video.readyState,
			paused: video.paused,
			muted: video.muted
		})
		
		// Try to play
		const playPromise = video.play()
		if (playPromise !== undefined) {
		  playPromise
			.then(() => {
			  // Video is playing
			  console.log(`[Hero Video] ${label} - ✅ Playing successfully`, {
				paused: video.paused,
				ended: video.ended,
				currentTime: video.currentTime
			  })
			  // Ensure it stays playing
			  if (video.paused) {
				console.warn(`[Hero Video] ${label} - Video paused after play, retrying...`)
				setTimeout(() => {
				  video.play().catch(() => {})
				}, 100)
			  }
			})
			.catch((err) => {
			  console.warn(`[Hero Video] ${label} - ❌ Autoplay prevented:`, err.message)
			  // Try again after user interaction
			  const tryPlayOnInteraction = () => {
				video.muted = true
				video.play()
				  .then(() => {
					console.log(`[Hero Video] ${label} - ✅ Started playing after user interaction`)
					document.removeEventListener('click', tryPlayOnInteraction)
					document.removeEventListener('touchstart', tryPlayOnInteraction)
					document.removeEventListener('scroll', tryPlayOnInteraction)
					document.removeEventListener('mousemove', tryPlayOnInteraction)
				  })
				  .catch((playErr) => {
					console.warn(`[Hero Video] ${label} - Failed to play after interaction:`, playErr)
				  })
			  }
			  document.addEventListener('click', tryPlayOnInteraction, { once: true })
			  document.addEventListener('touchstart', tryPlayOnInteraction, { once: true })
			  document.addEventListener('scroll', tryPlayOnInteraction, { once: true })
			  document.addEventListener('mousemove', tryPlayOnInteraction, { once: true })
			})
		} else {
		  // Fallback for older browsers
		  try {
			video.play()
			console.log(`[Hero Video] ${label} - Play called (legacy browser)`)
		  } catch (err) {
			console.warn(`[Hero Video] ${label} - Play failed:`, err)
		  }
		}
	  },
	  async initGSAP() {
		if (!process.client) return
  
		const { gsap } = await import('gsap')
  
		this.$nextTick(() => {
		  // Desktop animations
		  const desktopTitle = this.$refs.desktopTitle
		  const desktopForm = this.$refs.desktopForm
		  const desktopContainer = this.$refs.desktopFormContainer
  
		  // Mobile animations
		  const mobileTitle = this.$refs.mobileTitle
		  const mobileForm = this.$refs.mobileForm
		  const mobileContainer = this.$refs.mobileFormContainer
  
		  // Desktop: Animate title and form
		  if (desktopContainer && window.innerWidth >= 1024) {
			gsap.set(desktopTitle, { opacity: 0, y: 30 })
			gsap.set(desktopForm, { opacity: 0, y: 30 })
  
			const desktopTL = gsap.timeline({ delay: 0.3 })
			desktopTL
			  .to(desktopTitle, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
			  })
			  .to(
				desktopForm,
				{
				  opacity: 1,
				  y: 0,
				  duration: 0.8,
				  ease: 'power3.out',
				},
				'-=0.4'
			  )
		  }
  
		  // Mobile: Animate title and form
		  if (mobileContainer && window.innerWidth < 1024) {
			gsap.set(mobileTitle, { opacity: 0, y: 20 })
			gsap.set(mobileForm, { opacity: 0, y: 20 })
  
			const mobileTL = gsap.timeline({ delay: 0.2 })
			mobileTL
			  .to(mobileTitle, {
				opacity: 1,
				y: 0,
				duration: 0.6,
				ease: 'power2.out',
			  })
			  .to(
				mobileForm,
				{
				  opacity: 1,
				  y: 0,
				  duration: 0.6,
				  ease: 'power2.out',
				},
				'-=0.3'
			  )
		  }
		})
	  },
	},
  }
  </script>
  
  <style scoped>
  /* =========
	 HERO HEIGHT
	 =========
	 Use 100svh for better mobile viewport behavior (Safari URL bar),
	 with 100vh fallback.
  */
  .hero-section-desktop {
	height: 100vh;
	min-height: 100vh;
  }
  
  .hero-section-mobile {
	display: flex;
	flex-direction: column;
  }

  @media (min-width: 1024px) {
	.hero-section-mobile {
	  display: none !important;
	}
  }
  
  @supports (height: 100svh) {
	.hero-section-desktop {
	  height: 100svh;
	  min-height: 100svh;
	}
  }
  
  /* =========
	 VIDEO
	 ========= */
  .hero-video {
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
  }

  /* =========
	 MOBILE VIDEO CONTAINER
	 ========= */
  .hero-video-container-mobile {
	width: 100%;
	height: 60vh;
	min-height: 400px;
	position: relative;
  }

  .hero-video-mobile {
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
  }
  
  /* =========
	 NAVBAR OFFSET
	 =========
	 Instead of negative margins/tops, we pad the content to avoid hiding behind navbar.
	 Adjust this value to match your actual navbar height.
  */
  .hero-content-pad {
	padding-top: 120px;
  }
  </style>
  