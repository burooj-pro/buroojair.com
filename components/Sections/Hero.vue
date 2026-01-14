<template>
  <section id="heroSection" class="hero-section font-neo-sans bg-transparent">
	  <!-- Mobile: Video and form separated -->
	  <div class="block lg:hidden hero-section-mobile">
		<!-- Video Section -->
		<div class="relative hero-video-container-mobile overflow-hidden">
		  <video
			ref="videoPlayerMobile"
			muted
			loop
			playsinline
			webkit-playsinline
			preload="none"
			poster="/images/hero-poster-mobile.webp"
			class="hero-video-mobile w-full h-full bg-gray-900"
			aria-label="Burooj Air hero video showing drone cleaning services"
			@error="handleVideoError"
			@loadeddata="handleVideoLoaded"
			@canplay="handleVideoCanPlay"
			@loadstart="handleVideoLoadStart"
			@progress="handleVideoProgress"
			@waiting="handleVideoWaiting"
			@playing="handleVideoPlaying"
			@ended="handleVideoEnded"
		  >
			<source data-src="https://hel1.your-objectstorage.com/burooj-prod/videos/heronew.mp4" type="video/mp4" />
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
		  loop
		  playsinline
		  webkit-playsinline
		  preload="none"
		  poster="/images/hero-poster-desktop.webp"
		  class="hero-video absolute inset-0 z-0 bg-gray-900"
		  aria-label="Burooj Air hero video showing drone cleaning services"
		  @error="handleVideoError"
		  @loadeddata="handleVideoLoaded"
		  @canplay="handleVideoCanPlay"
		  @loadstart="handleVideoLoadStart"
		  @progress="handleVideoProgress"
		  @waiting="handleVideoWaiting"
		  @playing="handleVideoPlaying"
		  @ended="handleVideoEnded"
		>
		  <source data-src="https://hel1.your-objectstorage.com/burooj-prod/videos/heronew.mp4" type="video/mp4" />
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

    // Initialize videos first (critical content)
    this.initVideos()
    
    // Load Pipedrive asynchronously after initial render
    this.loadPipedriveOnce()
    
    // Initialize GSAP animations after a delay
    this.$nextTick(() => {
      // Use requestIdleCallback to avoid blocking
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          this.initGSAP()
        }, { timeout: 1000 })
      } else {
        setTimeout(() => {
          this.initGSAP()
        }, 300)
      }
    })
  },
  methods: {
    loadPipedriveOnce() {
      // Check if script is already loaded
      if (document.querySelector('script[src*="pipedrive.com"]')) {
        // Script already exists, just initialize forms
        this.$nextTick(() => {
          this.initPipedriveForms()
        })
        return
      }

      // Load Pipedrive script asynchronously after page is interactive
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          this.loadPipedriveScript()
        }, { once: true })
      } else {
        // Use requestIdleCallback to load when browser is idle
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            this.loadPipedriveScript()
          }, { timeout: 2000 })
        } else {
          setTimeout(() => {
            this.loadPipedriveScript()
          }, 1000)
        }
      }
    },
    
    loadPipedriveScript() {
      const s = document.createElement('script')
      s.src = 'https://webforms.pipedrive.com/f/loader'
      s.async = true
      s.defer = true
      
      s.onload = () => {
        this.$nextTick(() => {
          setTimeout(() => {
            this.initPipedriveForms()
          }, 500)
        })
      }
      
      document.head.appendChild(s)
      
      // Fallback initialization
      setTimeout(() => {
        this.initPipedriveForms()
      }, 2000)
    },
    
    initPipedriveForms() {
      // Check if already initialized (prevent multiple calls)
      if (this._pipedriveInitialized) return
      
      const forms = document.querySelectorAll('.pipedriveWebForms[data-pd-webforms]')
      
      if (forms.length === 0) {
        return // Forms not in DOM yet
      }
      
      // Check if any form is already loaded
      let allLoaded = true
      forms.forEach((formContainer) => {
        if (!formContainer.querySelector('form') && !formContainer.querySelector('iframe')) {
          allLoaded = false
          // Ensure container is visible
          formContainer.style.display = 'block'
          formContainer.style.visibility = 'visible'
          formContainer.style.opacity = '1'
          formContainer.style.minHeight = '200px'
        }
      })
      
      if (allLoaded) {
        this._pipedriveInitialized = true
        return
      }
      
      // Check if Pipedrive is available
      if (typeof window.Pipedrive !== 'undefined') {
        // Pipedrive is available, forms should auto-load
        this._pipedriveInitialized = true
        // Try manual trigger if available
        if (window.Pipedrive.load) {
          forms.forEach((formContainer) => {
            if (!formContainer.querySelector('form') && !formContainer.querySelector('iframe')) {
              try {
                window.Pipedrive.load(formContainer)
              } catch (e) {
                // Silent fail
              }
            }
          })
        }
      }
      // If Pipedrive not ready, it will auto-detect when it loads
    },

    initVideos() {
      // Load videos immediately but with metadata preload only
      // This allows page to render while videos prepare
      this.loadVideos()
    },
    
    loadVideos() {
      this.$nextTick(() => {
        const videos = [this.$refs.videoPlayerDesktop, this.$refs.videoPlayerMobile].filter(Boolean)

        videos.forEach((v, index) => {
          const label = index === 0 ? 'Desktop' : 'Mobile'
          
          // Ensure video is visible and properly configured
          // Cross-browser compatibility: Set both standard and webkit attributes
          v.muted = true
          v.volume = 0
          v.setAttribute('muted', 'muted') // HTML attribute for better compatibility
          v.playsInline = true
          v.setAttribute('playsinline', 'playsinline') // iOS Safari
          v.setAttribute('webkit-playsinline', 'webkit-playsinline') // Older iOS
          v.autoplay = false // Don't autoplay initially - set after loading
          v.loop = true
          v.setAttribute('loop', 'loop') // HTML attribute
          v.preload = 'none' // Don't preload - load only when needed
          // Remove crossOrigin to avoid CORS issues
          v.removeAttribute('crossorigin')
          
          // CRITICAL: Load hero video - immediately if loading screen active, otherwise delayed
          // Strategy: If loading screen exists, load immediately so content is ready when screen hides
          const loadVideo = () => {
            if (v.readyState === 0 || !v.src) {
              const source = v.querySelector('source[data-src]')
              if (source && source.dataset.src) {
                // Move data-src to src to trigger loading
                source.src = source.dataset.src
                source.removeAttribute('data-src')
                if (!v.src) {
                  v.src = source.src
                }
                v.load()
                
                // Enable autoplay and try to play after loading
                // Cross-browser compatible: Handle autoplay with multiple event listeners
                const tryPlayVideo = () => {
                  v.autoplay = true
                  v.setAttribute('autoplay', 'autoplay') // HTML attribute for better compatibility
                  
                  // Ensure video is muted for autoplay (required by most browsers)
                  v.muted = true
                  v.setAttribute('muted', 'muted')
                  
                  // Try to play - handle autoplay policy differences
                  const playPromise = v.play()
                  if (playPromise !== undefined) {
                    playPromise.catch((error) => {
                      // Autoplay blocked - this is expected in some browsers
                      // User interaction will be required
                      if (process.env.NODE_ENV === 'development') {
                        console.log(`[Hero Video] ${label} - Autoplay blocked (normal behavior):`, error)
                      }
                    })
                  }
                }
                
                // Try playing on multiple events for better browser compatibility
                const events = ['loadeddata', 'canplay', 'canplaythrough']
                events.forEach(eventName => {
                  const handler = () => {
                    tryPlayVideo()
                    v.removeEventListener(eventName, handler)
                  }
                  v.addEventListener(eventName, handler, { once: true })
                })
                
                // Also try immediately if video is already ready
                if (v.readyState >= 2) {
                  tryPlayVideo()
                }
              }
            }
          }
          
          // CRITICAL: Load video immediately if loading screen is active
          // This ensures videos are ready when loading screen finishes
          // Strategy: Check if loading screen exists, if yes load immediately, otherwise delay
          const checkLoadingScreen = () => {
            // Try multiple ways to detect loading screen
            const z100 = document.querySelector('[class*="z-[100]"]')
            const fixedInset = Array.from(document.querySelectorAll('.fixed.inset-0')).find(el => 
              window.getComputedStyle(el).zIndex === '100' || 
              el.style.zIndex === '100' ||
              el.getAttribute('class')?.includes('z-[100]')
            )
            return z100 || fixedInset
          }
          
          const loadingScreenActive = checkLoadingScreen()
          
          if (loadingScreenActive) {
            // Loading screen is active - load video immediately so it's ready when screen hides
            // Small delay to let DOM settle and ensure video element is ready
            this.$nextTick(() => {
              setTimeout(() => {
                loadVideo()
              }, 300)
            })
          } else {
            // No loading screen - use delayed loading for performance
            let videoLoaded = false
            let interactionListenersAdded = false
            
            const loadVideoOnInteraction = () => {
              if (!videoLoaded) {
                videoLoaded = true
                loadVideo()
                // Remove listeners after loading to prevent multiple calls
                if (interactionListenersAdded) {
                  window.removeEventListener('scroll', loadVideoOnInteraction, { passive: true })
                  window.removeEventListener('click', loadVideoOnInteraction, { passive: true })
                  window.removeEventListener('touchstart', loadVideoOnInteraction, { passive: true })
                  window.removeEventListener('mousedown', loadVideoOnInteraction, { passive: true })
                }
              }
            }
            
            // Cross-browser event listener helper
            const addEventListenerOnce = (element, event, handler, options) => {
              const wrappedHandler = function() {
                handler()
                element.removeEventListener(event, wrappedHandler, options)
              }
              element.addEventListener(event, wrappedHandler, options)
            }
            
            // Load on user interaction (scroll or click) - immediate feedback
            const passiveOption = { passive: true }
            try {
              addEventListenerOnce(window, 'scroll', loadVideoOnInteraction, passiveOption)
              addEventListenerOnce(window, 'click', loadVideoOnInteraction, passiveOption)
              addEventListenerOnce(window, 'touchstart', loadVideoOnInteraction, passiveOption)
              addEventListenerOnce(window, 'mousedown', loadVideoOnInteraction, passiveOption)
              interactionListenersAdded = true
            } catch (e) {
              // Fallback for browsers that don't support passive option
              addEventListenerOnce(window, 'scroll', loadVideoOnInteraction, false)
              addEventListenerOnce(window, 'click', loadVideoOnInteraction, false)
              addEventListenerOnce(window, 'touchstart', loadVideoOnInteraction, false)
              addEventListenerOnce(window, 'mousedown', loadVideoOnInteraction, false)
              interactionListenersAdded = true
            }
            
            // Fallback: Load after 5 seconds if no interaction
            const scheduleDelayedLoad = () => {
              setTimeout(() => {
                if (!videoLoaded) {
                  loadVideoOnInteraction()
                }
              }, 5000)
            }
            
            if (typeof requestIdleCallback !== 'undefined') {
              try {
                requestIdleCallback(() => {
                  scheduleDelayedLoad()
                }, { timeout: 6000 })
              } catch (e) {
                scheduleDelayedLoad()
              }
            } else {
              if (document.readyState === 'complete' || document.readyState === 'interactive') {
                scheduleDelayedLoad()
              } else {
                const domReadyHandler = () => {
                  scheduleDelayedLoad()
                  document.removeEventListener('DOMContentLoaded', domReadyHandler)
                }
                document.addEventListener('DOMContentLoaded', domReadyHandler)
              }
            }
          }

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
      
      // Use injected GSAP (available synchronously)
      const gsap = this.$gsap

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
  