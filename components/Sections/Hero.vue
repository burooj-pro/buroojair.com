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
		<div class="relative z-10 h-full w-full flex items-center hero-content-pad" style="margin-top: 0;">
		  <div class="container mx-auto px-4 sm:px-6 flex items-center justify-start rtl:justify-end">
			<div
			  ref="desktopFormContainer"
			  class="w-full bg-gray-900 bg-opacity-95 dark:bg-gray-800 dark:bg-opacity-95 max-w-sm lg:max-w-md xl:max-w-lg hero-form-container rounded-bl-[60px] rounded-br-xl rounded-tl-xl rounded-tr-[60px] lg:rounded-bl-[80px] lg:rounded-br-2xl lg:rounded-tl-2xl lg:rounded-tr-[80px] p-4 lg:p-6 xl:p-8"
			>
			  <h1 ref="desktopTitle" class="mb-3 lg:mb-4 xl:mb-5 font-neo-sans text-xl lg:text-2xl xl:text-3xl font-normal uppercase text-white">
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
	 Increased padding for Windows and smaller desktop screens where navbar might be taller.
	 
	 Navbar structure:
	 - Header padding: py-3 sm:py-4 lg:py-4 xl:py-6 (top + bottom)
	 - Nav container padding: p-3 sm:p-4 lg:p-4
	 - Total approximate height: ~80-100px on mobile, ~90-110px on desktop
  */
  .hero-content-pad {
	padding-top: 100px; /* Base padding for mobile */
  }
  
  @media (min-width: 640px) {
	.hero-content-pad {
	  padding-top: 110px; /* Slightly more on small tablets */
	}
  }
  
  @media (min-width: 1024px) {
	.hero-content-pad {
	  padding-top: 140px; /* Desktop - accounts for navbar + extra spacing */
	}
  }
  
  @media (min-width: 1280px) {
	.hero-content-pad {
	  padding-top: 150px; /* Larger desktop - navbar might be slightly taller */
	}
  }
  
  /* Form container constraints */
  .hero-form-container {
	max-height: calc(100vh - 180px); /* More space for form */
	overflow: visible !important; /* Allow full form to be visible */
	display: flex;
	flex-direction: column;
  }
  
  /* Specific adjustments for 1920x1200 and similar 16:10 aspect ratios */
  /* Targets screens that are wide (1920px+) but have limited height (1200px or less) */
  @media (min-width: 1920px) and (max-height: 1200px) {
	.hero-content-pad {
	  padding-top: 110px; /* Reduced padding for 16:10 screens */
	}
	
	.hero-form-container {
	  max-width: 400px !important; /* Smaller form on 16:10 screens */
	  max-height: calc(100vh - 160px) !important; /* Constrain height with less padding */
	  padding: 0.875rem 1rem !important; /* Reduced padding */
	}
	
	.pipedriveWebForms {
	  max-height: 320px !important; /* Smaller form container */
	}
	
	.pipedriveWebForms iframe {
	  max-height: 300px !important; /* Smaller iframe */
	}
	
	.hero-form-container h1 {
	  font-size: 1.125rem !important; /* Smaller title (18px) */
	  margin-bottom: 0.625rem !important;
	}
  }
  
  /* For screens with height constraints (1200px or less) but not as wide */
  @media (min-width: 1280px) and (max-width: 1919px) and (max-height: 1200px) {
	.hero-content-pad {
	  padding-top: 125px; /* Balanced padding */
	}
	
	.hero-form-container {
	  max-height: calc(100vh - 190px); /* Constrain height */
	}
	
	.pipedriveWebForms {
	  max-height: 380px !important;
	}
	
	.pipedriveWebForms iframe {
	  max-height: 360px !important;
	}
  }
  
  /* For any screen with limited height (common for 16:10 or ultrawide) */
  @media (min-width: 1024px) and (max-height: 1200px) {
	.hero-form-container {
	  max-height: calc(100vh - 200px); /* Ensure form fits in viewport */
	}
  }
  
  /* For screens with height between 1200px and 1080px (common desktop range) */
  @media (min-width: 1280px) and (max-height: 1200px) {
	.hero-content-pad {
	  padding-top: 130px; /* Balanced padding */
	}
  }
  
  /* Ensure Pipedrive form container is visible and has proper dimensions */
  .pipedriveWebForms {
	min-height: 0; /* Remove min-height to allow form to be smaller */
	width: 100%;
	display: block !important;
	visibility: visible !important;
	opacity: 1 !important;
	flex: 1 1 auto; /* Allow form to grow but not exceed container */
	overflow: visible !important; /* Allow full form to be visible */
	max-height: none !important; /* Remove height restriction to show full form */
	position: relative;
  }
  
  @media (min-width: 1024px) {
	.pipedriveWebForms {
	  max-height: 800px !important; /* Much larger to accommodate full form */
	}
  }
  
  @media (min-width: 1280px) {
	.pipedriveWebForms {
	  max-height: 900px !important; /* Even larger on bigger screens */
	}
  }
  
  /* Ensure form iframe is visible and scaled to fit */
  .pipedriveWebForms iframe {
	width: 100% !important;
	height: auto !important;
	min-height: 0 !important;
	max-height: 700px !important; /* Much larger to show full form */
	display: block !important;
	overflow: visible !important; /* Show full form */
	border: none !important;
	transform-origin: top center; /* Scale from top */
  }
  
  @media (min-width: 1024px) {
	.pipedriveWebForms iframe {
	  max-height: 800px !important; /* Large enough for full form */
	  transform: scale(0.75); /* Scale down to 75% to fit in viewport */
	}
  }
  
  @media (min-width: 1280px) {
	.pipedriveWebForms iframe {
	  max-height: 850px !important; /* Even larger for full form */
	  transform: scale(0.8); /* Scale down to 80% on larger screens */
	}
  }
  
  @media (min-width: 1920px) {
	.pipedriveWebForms iframe {
	  max-height: 900px !important;
	  transform: scale(0.85); /* Scale down to 85% on very large screens */
	}
  }
  
  /* Specific adjustments for 1920x1200 screens */
  @media (min-width: 1920px) and (max-height: 1200px) {
	.pipedriveWebForms {
	  max-height: 900px !important; /* Large enough for full form */
	}
	
	.pipedriveWebForms iframe {
	  max-height: 850px !important; /* Full form height - much larger */
	  transform: scale(0.65) !important; /* Scale down to 65% to fit 16:10 screens */
	}
  }
  
  /* For screens with height constraints */
  @media (min-width: 1280px) and (max-width: 1919px) and (max-height: 1200px) {
	.pipedriveWebForms {
	  max-height: 850px !important;
	}
	
	.pipedriveWebForms iframe {
	  max-height: 800px !important;
	  transform: scale(0.7) !important; /* Scale down to 70% */
	}
  }
  
  /* For smaller desktop screens */
  @media (min-width: 1024px) and (max-width: 1279px) {
	.pipedriveWebForms {
	  max-height: 800px !important;
	}
	
	.pipedriveWebForms iframe {
	  max-height: 750px !important;
	  transform: scale(0.7) !important; /* Scale down to 70% */
	}
  }
  
  /* Ensure form elements are visible */
  .pipedriveWebForms form {
	display: block !important;
	visibility: visible !important;
	opacity: 1 !important;
	overflow: visible !important; /* Allow full form to be visible */
  }
  
  /* Allow Pipedrive form content to be fully visible */
  .pipedriveWebForms * {
	overflow: visible !important;
  }
  
  /* Target Pipedrive form wrapper if it exists */
  .pipedriveWebForms > div {
	overflow: visible !important; /* Show full form */
  }
  
  /* Adjust container to account for scaled iframe */
  @media (min-width: 1024px) {
	.pipedriveWebForms {
	  display: flex !important;
	  justify-content: center;
	  align-items: flex-start;
	  height: auto !important; /* Allow container to grow */
	}
	
	/* Compensate for transform scale - the iframe takes original space but appears smaller */
	.pipedriveWebForms iframe {
	  margin: 0 auto; /* Center the scaled iframe */
	  /* The transform scale makes it visually smaller but layout space remains */
	}
  }
  
  /* Ensure form container can accommodate the full scaled form */
  @media (min-width: 1024px) {
	.hero-form-container {
	  max-height: calc(100vh - 150px) !important; /* More space for full form */
	}
  }
  
  @media (min-width: 1920px) and (max-height: 1200px) {
	.hero-form-container {
	  max-height: calc(100vh - 120px) !important; /* Even more space on 16:10 */
	}
  }
  </style>
  