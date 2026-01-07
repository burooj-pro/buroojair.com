<template>
  <section id="heroSection" class="hero-section font-neo-sans bg-transparent">
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
			preload="metadata"
			class="hero-video-mobile w-full h-full bg-gray-900"
			@error="handleVideoError"
			@loadeddata="handleVideoLoaded"
			@canplay="handleVideoCanPlay"
			@loadstart="handleVideoLoadStart"
			@progress="handleVideoProgress"
			@waiting="handleVideoWaiting"
			@playing="handleVideoPlaying"
			@ended="handleVideoEnded"
		  >
			<source src="https://hel1.your-objectstorage.com/burooj-prod/videos/heronew.mp4" type="video/mp4" />
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
		  <h1 ref="mobileTitle" class="mb-5 font-neo-sans text-2xl font-normal uppercase text-white">
			{{ $t('NOW_REQUEST_A_QUOTE_FOR_DRONE_CLEANING') }}
		  </h1>
  
		  <div
			ref="mobileForm"
			class="pipedriveWebForms"
			data-pd-webforms="https://webforms.pipedrive.com/f/6coemjWsjuoqlhJqDxw5vARg9RKtlXs9Rk7xeP0SZJLEXlmO9hyO7YDdWfq6IcrYLV"
		  >
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
		  preload="metadata"
		  class="hero-video absolute inset-0 z-0 bg-gray-900"
		  @error="handleVideoError"
		  @loadeddata="handleVideoLoaded"
		  @canplay="handleVideoCanPlay"
		  @loadstart="handleVideoLoadStart"
		  @progress="handleVideoProgress"
		  @waiting="handleVideoWaiting"
		  @playing="handleVideoPlaying"
		  @ended="handleVideoEnded"
		>
		  <source src="https://hel1.your-objectstorage.com/burooj-prod/videos/heronew.mp4" type="video/mp4" />
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
			  <h1 ref="desktopTitle" class="mb-5 font-neo-sans text-3xl font-normal uppercase text-white">
				{{ $t('NOW_REQUEST_A_QUOTE_FOR_DRONE_CLEANING') }}
			  </h1>
  
			  <div
				ref="desktopForm"
				class="pipedriveWebForms"
				data-pd-webforms="https://webforms.pipedrive.com/f/6coemjWsjuoqlhJqDxw5vARg9RKtlXs9Rk7xeP0SZJLEXlmO9hyO7YDdWfq6IcrYLV"
			  >
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
    if (!process.client) return

    // Load Pipedrive first, then initialize other things
    this.loadPipedriveOnce()
    
    // Initialize forms after a short delay to ensure DOM is ready
    this.$nextTick(() => {
      setTimeout(() => {
        this.initPipedriveForms()
      }, 500)
    })
    
    this.initVideos()
    this.initGSAP()
  },
  methods: {
    loadPipedriveOnce() {
      // Script is now loaded in nuxt.config.js head
      // Just ensure forms are initialized after component mounts
      // Pipedrive should auto-detect forms, but we'll help it along
      this.$nextTick(() => {
        // Multiple attempts to ensure forms load
        setTimeout(() => {
          this.initPipedriveForms()
        }, 500)
        
        setTimeout(() => {
          this.initPipedriveForms()
        }, 1500)
        
        setTimeout(() => {
          this.initPipedriveForms()
        }, 3000)
      })
    },
    
    initPipedriveForms() {
      // Pipedrive WebForms auto-detects forms, but we need to ensure they're visible
      // Check if forms are already loaded
      const forms = document.querySelectorAll('.pipedriveWebForms[data-pd-webforms]')
      
      if (forms.length === 0) {
        // Forms not in DOM yet, try again
        setTimeout(() => {
          this.initPipedriveForms()
        }, 500)
        return
      }
      
      forms.forEach((formContainer) => {
        // Check if form is already loaded
        if (formContainer.querySelector('form') || formContainer.querySelector('iframe')) {
          if (process.env.NODE_ENV === 'development') {
            console.log('[Pipedrive] Form already loaded')
          }
          return // Form already loaded
        }
        
        // Ensure container is visible and has proper attributes
        formContainer.style.display = 'block'
        formContainer.style.visibility = 'visible'
        formContainer.style.opacity = '1'
        formContainer.style.minHeight = '200px'
        
        if (process.env.NODE_ENV === 'development') {
          console.log('[Pipedrive] Form container ready:', formContainer)
        }
      })
      
      // Check if Pipedrive is available
      if (typeof window.Pipedrive !== 'undefined') {
        if (process.env.NODE_ENV === 'development') {
          console.log('[Pipedrive] Pipedrive object found, forms should auto-load')
        }
        // Pipedrive is available, forms should auto-load
        // Try to manually trigger if available
        if (window.Pipedrive.load) {
          forms.forEach((formContainer) => {
            if (!formContainer.querySelector('form') && !formContainer.querySelector('iframe')) {
              try {
                window.Pipedrive.load(formContainer)
              } catch (e) {
                if (process.env.NODE_ENV === 'development') {
                  console.warn('[Pipedrive] Manual load failed:', e)
                }
              }
            }
          })
        }
      } else {
        // Pipedrive not ready yet, wait a bit more
        if (process.env.NODE_ENV === 'development') {
          console.log('[Pipedrive] Waiting for Pipedrive to load...')
        }
        setTimeout(() => {
          this.initPipedriveForms()
        }, 1000)
      }
    },

    initVideos() {
      // Delay video loading slightly to allow initial render to complete
      // This improves FCP and LCP scores
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          this.loadVideos()
        }, { timeout: 500 })
      } else {
        setTimeout(() => {
          this.loadVideos()
        }, 100)
      }
    },
    
    loadVideos() {
      this.$nextTick(() => {
        const videos = [this.$refs.videoPlayerDesktop, this.$refs.videoPlayerMobile].filter(Boolean)

        videos.forEach((v, index) => {
          const label = index === 0 ? 'Desktop' : 'Mobile'
          
          // Ensure video is visible and properly configured
          v.muted = true
          v.volume = 0
          v.playsInline = true
          v.autoplay = true
          v.loop = true
          v.preload = 'metadata'
          // Remove crossOrigin to avoid CORS issues
          v.removeAttribute('crossorigin')

          // Force video to be visible and properly sized
          v.style.display = 'block'
          v.style.opacity = '1'
          v.style.visibility = 'visible'
          v.style.position = 'absolute'
          v.style.width = '100%'
          v.style.height = '100%'
          v.style.minWidth = '100%'
          v.style.minHeight = '100%'
          v.style.objectFit = 'cover'
          v.style.zIndex = '0'
          v.style.top = '0'
          v.style.left = '0'
          v.style.right = '0'
          v.style.bottom = '0'

          // Try to play video
          const tryPlay = () => {
            if (v.readyState >= 2 && v.paused) {
              v.muted = true
              v.play().catch((err) => {
                if (process.env.NODE_ENV === 'development') {
                  console.warn(`[Hero Video] ${label} - Play failed:`, err)
                }
              })
            }
          }
          
          // Multiple event listeners to catch when video is ready
          v.addEventListener('loadedmetadata', () => {
            if (process.env.NODE_ENV === 'development') {
              console.log(`[Hero Video] ${label} - Metadata loaded`)
            }
            tryPlay()
          }, { once: true })
          
          v.addEventListener('canplay', () => {
            if (process.env.NODE_ENV === 'development') {
              console.log(`[Hero Video] ${label} - Can play`)
            }
            tryPlay()
          }, { once: true })
          
          v.addEventListener('canplaythrough', () => {
            if (process.env.NODE_ENV === 'development') {
              console.log(`[Hero Video] ${label} - Can play through`)
            }
            tryPlay()
          }, { once: true })
          
          v.addEventListener('loadeddata', () => {
            if (process.env.NODE_ENV === 'development') {
              console.log(`[Hero Video] ${label} - Data loaded`)
            }
            tryPlay()
          }, { once: true })

          // Try immediately if already ready
          if (v.readyState >= 2) {
            tryPlay()
          }
          
          // Fallback: try playing after a short delay
          setTimeout(() => {
            if (v.paused && v.readyState >= 2) {
              tryPlay()
            }
          }, 500)
        })
      })
    },

    handleVideoLoadStart(e) {
      const video = e.target
      if (process.env.NODE_ENV === 'development') {
        console.log('[Hero Video] loadstart', video.currentSrc || video.src)
      }
    },

    handleVideoError(e) {
      const v = e.target
      if (process.env.NODE_ENV === 'development') {
        console.error('[Hero Video] error', v?.error, v.currentSrc || v.src)
      }
    },

    handleVideoLoaded(e) {
      const video = e.target
      if (process.env.NODE_ENV === 'development') {
        console.log('[Hero Video] loaded', video.currentSrc || video.src)
      }
      video.play().catch(() => {})
    },

    handleVideoCanPlay(e) {
      const video = e.target
      video.play().catch(() => {})
    },

    handleVideoProgress(e) {
      const video = e.target
      if (video.buffered.length > 0 && video.readyState >= 2 && video.paused) {
        video.play().catch(() => {})
      }
    },

    handleVideoWaiting(e) {
      // Video is buffering
    },

    handleVideoPlaying(e) {
      if (process.env.NODE_ENV === 'development') {
        console.log('[Hero Video] playing')
      }
    },

    handleVideoEnded(e) {
      const video = e.target
      video.currentTime = 0
      video.play().catch(() => {})
    },

    async initGSAP() {
      if (!process.client) return

      const { gsap } = await import('gsap')

      this.$nextTick(() => {
        const desktopTitle = this.$refs.desktopTitle
        const desktopForm = this.$refs.desktopForm
        const desktopContainer = this.$refs.desktopFormContainer

        const mobileTitle = this.$refs.mobileTitle
        const mobileForm = this.$refs.mobileForm
        const mobileContainer = this.$refs.mobileFormContainer

        if (desktopContainer && window.innerWidth >= 1024) {
          gsap.set(desktopTitle, { opacity: 0, y: 30 })
          // Don't hide form initially - let it be visible so Pipedrive can load
          gsap.set(desktopForm, { opacity: 1, y: 0 })

          const desktopTL = gsap.timeline({ delay: 0.3 })
          desktopTL
            .to(desktopTitle, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
            })
          // Form stays visible, no animation needed
        }

        if (mobileContainer && window.innerWidth < 1024) {
          gsap.set(mobileTitle, { opacity: 0, y: 20 })
          // Don't hide form initially - let it be visible so Pipedrive can load
          gsap.set(mobileForm, { opacity: 1, y: 0 })

          const mobileTL = gsap.timeline({ delay: 0.2 })
          mobileTL
            .to(mobileTitle, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
            })
          // Form stays visible, no animation needed
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
	background: transparent;
	overflow: hidden;
	position: relative;
  }
  
  .hero-section {
	background: transparent;
	position: relative;
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
	background: #111827; /* Fallback color while video loads */
	min-width: 100%;
	min-height: 100%;
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
  
  /* Ensure Pipedrive form container is visible and has proper dimensions */
  .pipedriveWebForms {
	min-height: 200px;
	width: 100%;
	display: block !important;
	visibility: visible !important;
	opacity: 1 !important;
  }
  
  /* Ensure form iframe is visible */
  .pipedriveWebForms iframe {
	width: 100% !important;
	min-height: 400px;
	display: block !important;
  }
  
  /* Ensure form elements are visible */
  .pipedriveWebForms form {
	display: block !important;
	visibility: visible !important;
	opacity: 1 !important;
  }
  </style>
  