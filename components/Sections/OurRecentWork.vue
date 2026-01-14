<template>
	<section class="bg-[#EBF5FF] py-16 font-neo-sans dark:bg-[#04061C] lg:py-24">
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Header Section -->
			<div class="mb-12 lg:mb-20">
				<div class="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">
					<!-- Left Side - Title and Description -->
					<div>
						<h2 class="mb-4 text-3xl font-black leading-tight text-gray-900 dark:text-white lg:text-6xl xl:text-7xl">
							{{ $t('OUR_RECENT_WORK') || 'Our Recent Work' }}
						</h2>
						<p class="max-w-2xl text-base font-bold leading-relaxed text-gray-700 dark:text-gray-300 lg:text-xl">
							{{ $t('OUR_RECENT_WORK_DESC') || 'We support impact-focused organisations through strategic creative work that amplifies their reach.' }}
						</p>
					</div>
					<!-- Right Side - CTA Button -->
					<div class="flex items-start lg:justify-end">
						<NuxtLink
							to="/projects"
							class="inline-flex items-center justify-center min-h-[44px] rounded-lg border border-gray-900 bg-transparent px-6 py-3 text-sm font-bold text-gray-900 no-underline transition-colors hover:bg-gray-100/50 dark:border-gray-300 dark:bg-transparent dark:text-white dark:hover:bg-gray-800/50 lg:px-8 lg:py-4 lg:text-base"
						>
							{{ $t('VIEW_ALL_PROJECTS') || 'View All Projects' }}
						</NuxtLink>
					</div>
				</div>
			</div>

			<!-- Project Entries - Two Column Grid -->
			<div class="grid gap-8 lg:grid-cols-2 lg:gap-16">
				<div
					v-for="(project, index) in projects"
					:key="index"
					class="flex flex-col"
				>
					<!-- Project Visual - Top -->
					<div class="relative mb-6 aspect-square overflow-hidden rounded-lg bg-gray-900 dark:bg-gray-800 group">
					<video
						:ref="`video-${index}`"
						:data-src="getVideoSrc(project.video)"
						class="h-full w-full object-cover"
						muted
						loop
						playsinline
						preload="none"
						:aria-label="project.title"
						@error="(e) => handleVideoError(e, project.video)"
						@loadstart="handleVideoLoadStart"
						@loadedmetadata="handleVideoMetadataLoaded"
						@loadeddata="handleVideoLoaded"
						@canplay="handleVideoCanPlay"
					>
							<source :data-src="getVideoSrc(project.video)" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
						<!-- Loading state -->
						<div v-if="!videoErrors[project.video] && !videoLoaded[project.video]" class="absolute inset-0 z-0 flex items-center justify-center bg-gray-900 dark:bg-gray-800 transition-opacity duration-300">
							<div class="flex flex-col items-center gap-2">
								<div class="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white"></div>
								<p class="text-xs text-white/60">Loading video...</p>
							</div>
						</div>
						<!-- Error fallback -->
						<div v-if="videoErrors[project.video]" class="absolute inset-0 z-0 flex items-center justify-center bg-gray-900 dark:bg-gray-800">
							<p class="text-sm text-gray-400 dark:text-gray-500">Video unavailable</p>
						</div>
						<!-- Fullscreen Icon Overlay - Bottom Left -->
						<button
							@click="openVideoModal(project.video, project.title)"
							class="absolute bottom-4 left-4 z-10 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 rounded-lg"
							:class="isVideoModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-100'"
							aria-label="Open video in fullscreen"
						>
							<div class="video-fullscreen-button">
								<svg class="h-6 w-6 text-white lg:h-7 lg:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
								</svg>
							</div>
						</button>
					</div>

					<!-- Project Content - Bottom -->
					<div class="flex flex-col">
						<h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
							{{ project.title }}
						</h3>
						<p class="text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
							{{ project.description }}
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Video Modal -->
		<VideoModal
			:is-open="isVideoModalOpen"
			:video-src="selectedVideoSrc"
			:title="selectedVideoTitle"
			@close="closeVideoModal"
		/>
	</section>
</template>

<script>
export default {
	data() {
		return {
			isVideoModalOpen: false,
			selectedVideoSrc: '',
			selectedVideoTitle: '',
			videoErrors: {},
			videoLoaded: {},
		}
	},
	computed: {
		projects() {
			return [
				{
					title: this.$t('PROJECT_TAMIMI_TITLE'),
					description: this.$t('PROJECT_TAMIMI_DESC'),
					video: 'https://hel1.your-objectstorage.com/burooj-prod/videos/Burooj%20Air%2001%20-%20Al-Tamimi%20Video.MP4',
					category: this.$t('CATEGORY_BUILDING_MAINTENANCE'),
				},
				{
					title: this.$t('PROJECT_ARAMCO_TITLE'),
					description: this.$t('PROJECT_ARAMCO_DESC'),
					video: 'https://hel1.your-objectstorage.com/burooj-prod/videos/Burooj%20Air%20-%20Aramco%20Spark%202.mp4',
					category: this.$t('CATEGORY_INDUSTRIAL_CLEANING'),
				},
				{
					title: this.$t('PROJECT_JINAN_TITLE'),
					description: this.$t('PROJECT_JINAN_DESC'),
					video: 'https://hel1.your-objectstorage.com/burooj-prod/videos/Burooj%20Air%20-%20Jinan%20Building%20D5.mp4',
					category: this.$t('CATEGORY_FACADE_CLEANING'),
				},
				{
					title: this.$t('PROJECT_QOSSIBI_TITLE'),
					description: this.$t('PROJECT_QOSSIBI_DESC'),
					video: 'https://hel1.your-objectstorage.com/burooj-prod/videos/Burooj%20Air%20-%20Al%20Qossibi%20HQ%20H.mp4',
					category: this.$t('CATEGORY_FACADE_CLEANING'),
				},
			]
		},
	},
	methods: {
		isExternalVideo(url) {
			return url && (url.startsWith('http://') || url.startsWith('https://'))
		},
		getVideoSrc(url) {
			// For external URLs, ensure proper encoding
			if (this.isExternalVideo(url)) {
				// If URL already contains encoded characters, use as-is
				// Otherwise, ensure proper encoding
				return url
			}
			// For local paths, return as-is (browser will handle encoding)
			return url
		},
		encodeVideoUrl(url) {
			// For static files, encode the entire path properly
			// Split by /, encode each segment, then join
			return url.split('/').map(segment => {
				// Don't encode empty segments (leading/trailing slashes)
				if (!segment) return segment
				// Encode the segment (handles spaces and special chars)
				return encodeURIComponent(segment)
			}).join('/')
		},
		openVideoModal(videoSrc, title) {
			// For external URLs, use as-is (already encoded)
			// For local paths, encode if needed
			if (videoSrc.startsWith('http://') || videoSrc.startsWith('https://')) {
				this.selectedVideoSrc = videoSrc
			} else {
				this.selectedVideoSrc = encodeURI(videoSrc)
			}
			this.selectedVideoTitle = title
			this.isVideoModalOpen = true
		},
		closeVideoModal() {
			this.isVideoModalOpen = false
			this.selectedVideoSrc = ''
			this.selectedVideoTitle = ''
		},
		handleVideoLoadStart(event) {
			// Clear error state when video starts loading
			const video = event.target
			const videoSrc = video?.src || video?.currentSrc
			const projectVideo = this.projects.find(p => {
				const projectSrc = this.getVideoSrc(p.video)
				return videoSrc && (videoSrc.includes(projectSrc) || projectSrc.includes(videoSrc))
			})?.video
			
			if (projectVideo) {
				this.$set(this.videoErrors, projectVideo, false)
				this.$set(this.videoLoaded, projectVideo, false)
			}
		},
		handleVideoMetadataLoaded(event) {
			// When metadata is loaded, seek to a good frame for thumbnail
			const video = event.target
			if (video && video.duration) {
				// Seek to 1 second to get a good thumbnail frame
				video.currentTime = Math.min(1, video.duration * 0.1)
			}
		},
		handleVideoLoaded(event) {
			// Video data loaded - mark as loaded
			const video = event.target
			const videoSrc = video?.src || video?.currentSrc
			const projectVideo = this.projects.find(p => {
				const projectSrc = this.getVideoSrc(p.video)
				return videoSrc && (videoSrc.includes(projectSrc) || projectSrc.includes(videoSrc))
			})?.video
			
			if (projectVideo) {
				this.$set(this.videoLoaded, projectVideo, true)
			}
		},
		handleVideoCanPlay(event) {
			// Video can start playing - ensure it's marked as loaded and playing
			const video = event.target
			const videoSrc = video?.src || video?.currentSrc
			const projectVideo = this.projects.find(p => {
				const projectSrc = this.getVideoSrc(p.video)
				return videoSrc && (videoSrc.includes(projectSrc) || projectSrc.includes(videoSrc))
			})?.video
			
			if (projectVideo) {
				this.$set(this.videoLoaded, projectVideo, true)
			}
			
			// Ensure video is playing
			if (video && video.paused) {
				video.muted = true
				video.play().catch(() => {
					// Autoplay might be prevented, which is okay
				})
			}
		},
		handleVideoMetadataLoaded(event) {
			// When metadata is loaded, try to play
			const video = event.target
			if (video && video.readyState >= 2) {
				video.muted = true
				video.play().catch(() => {
					// Autoplay might be prevented, which is okay
				})
			}
		},
		handleVideoLoaded(event) {
			// When video data is loaded, ensure it's playing
			const video = event.target
			const videoSrc = video?.src || video?.currentSrc
			const projectVideo = this.projects.find(p => {
				const projectSrc = this.getVideoSrc(p.video)
				return videoSrc && (videoSrc.includes(projectSrc) || projectSrc.includes(videoSrc))
			})?.video
			
			if (projectVideo) {
				this.$set(this.videoLoaded, projectVideo, true)
			}
			
			if (video && video.paused) {
				video.muted = true
				video.play().catch(() => {
					// Autoplay might be prevented, which is okay
				})
			}
		},
		handleVideoError(event, originalUrl) {
			const video = event.target
			const error = video?.error
			const videoSrc = video?.src || originalUrl
			
			// Mark this video as having an error
			this.$set(this.videoErrors, originalUrl || videoSrc, true)
			
			// Detailed error logging
			if (error) {
				let errorMsg = 'Unknown error'
				switch (error.code) {
					case error.MEDIA_ERR_ABORTED:
						errorMsg = 'Video loading aborted'
						break
					case error.MEDIA_ERR_NETWORK:
						errorMsg = 'Network error (possibly CORS)'
						break
					case error.MEDIA_ERR_DECODE:
						errorMsg = 'Video decoding error'
						break
					case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
						errorMsg = 'Video format not supported or URL invalid'
						break
				}
				if (process.env.NODE_ENV === 'development') {
					console.error(`Video error for "${originalUrl}":`, errorMsg, {
						code: error.code,
						message: error.message,
						src: videoSrc,
						networkState: video?.networkState,
						readyState: video?.readyState,
					})
				}
			} else {
				if (process.env.NODE_ENV === 'development') {
					console.error('Video loading error (no error details):', {
						src: videoSrc,
						networkState: video?.networkState,
						readyState: video?.readyState,
					})
				}
			}
		},
		initLazyLoading() {
			if (!process.client) return
			
			// CRITICAL: Load videos immediately if loading screen is active
			// This ensures project videos are ready when loading screen finishes
			const checkLoadingScreen = () => {
				const z100 = document.querySelector('[class*="z-[100]"]')
				const fixedInset = Array.from(document.querySelectorAll('.fixed.inset-0')).find(el => 
					window.getComputedStyle(el).zIndex === '100' || 
					el.style.zIndex === '100' ||
					el.getAttribute('class')?.includes('z-[100]')
				)
				return z100 || fixedInset
			}
			
			const loadingScreenActive = checkLoadingScreen()
			
			// If loading screen is active, load all project videos immediately
			if (loadingScreenActive) {
				this.$nextTick(() => {
					setTimeout(() => {
						const videos = document.querySelectorAll('video[data-src]')
						videos.forEach((video) => {
							const dataSrc = video.dataset.src || video.getAttribute('data-src')
							const source = video.querySelector('source[data-src]') || video.querySelector('source')
							
							if (dataSrc || (source && source.dataset.src)) {
								// Set source src
								if (source && source.dataset.src) {
									source.src = source.dataset.src
									source.removeAttribute('data-src')
								}
								
								// Set video src
								if (dataSrc) {
									video.src = dataSrc
									video.removeAttribute('data-src')
								}
								
								// Set cross-browser video attributes
								video.muted = true
								video.setAttribute('muted', 'muted')
								video.playsInline = true
								video.setAttribute('playsinline', 'playsinline')
								video.setAttribute('webkit-playsinline', 'webkit-playsinline')
								video.autoplay = true
								video.setAttribute('autoplay', 'autoplay')
								video.loop = true
								video.setAttribute('loop', 'loop')
								video.preload = 'auto' // Preload when loading screen is active
								
								video.load()
								
								// Try to play after loading
								const tryPlay = () => {
									if (video.paused) {
										video.play().catch(() => {
											// Autoplay blocked - normal in some browsers
										})
									}
								}
								video.addEventListener('loadeddata', tryPlay, { once: true })
								video.addEventListener('canplay', tryPlay, { once: true })
							}
						})
					}, 400) // Slightly longer delay to let hero videos start first
				})
				return // Don't use lazy loading if loading screen is active
			}
			
			// Cross-browser fallback: Load immediately if IntersectionObserver not supported
			if (typeof IntersectionObserver === 'undefined') {
				this.$nextTick(() => {
					const videos = document.querySelectorAll('video[data-src]')
					videos.forEach((video) => {
						const dataSrc = video.dataset.src || video.getAttribute('data-src')
						const source = video.querySelector('source[data-src]') || video.querySelector('source')
						
						if (dataSrc || (source && source.dataset.src)) {
							// Set source src
							if (source && source.dataset.src) {
								source.src = source.dataset.src
								source.removeAttribute('data-src')
							}
							
							// Set video src
							if (dataSrc) {
								video.src = dataSrc
								video.removeAttribute('data-src')
							}
							
							// Set cross-browser video attributes
							video.muted = true
							video.setAttribute('muted', 'muted')
							video.playsInline = true
							video.setAttribute('playsinline', 'playsinline')
							video.setAttribute('webkit-playsinline', 'webkit-playsinline')
							video.autoplay = true
							video.setAttribute('autoplay', 'autoplay')
							video.loop = true
							video.setAttribute('loop', 'loop')
							video.preload = 'metadata'
							
							video.load()
						}
					})
				})
				return
			}

			// Use Intersection Observer for lazy loading with debouncing
			let loadingVideos = new Set()
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting && !loadingVideos.has(entry.target)) {
							const video = entry.target
							const dataSrc = video.dataset.src || video.getAttribute('data-src')
							const source = video.querySelector('source[data-src]') || video.querySelector('source')
							
							if (dataSrc || (source && source.dataset.src)) {
								loadingVideos.add(video)
								
								// Set source src
								if (source && source.dataset.src) {
									source.src = source.dataset.src
									source.removeAttribute('data-src')
								}
								
								// Set video src
								if (dataSrc) {
									video.src = dataSrc
									video.removeAttribute('data-src')
								}
								
								// Set cross-browser video attributes
								video.muted = true
								video.setAttribute('muted', 'muted')
								video.playsInline = true
								video.setAttribute('playsinline', 'playsinline')
								video.setAttribute('webkit-playsinline', 'webkit-playsinline')
								video.autoplay = true
								video.setAttribute('autoplay', 'autoplay')
								video.loop = true
								video.setAttribute('loop', 'loop')
								video.preload = 'metadata'
								
								// Load metadata asynchronously to not block
								video.load()
								
								// Try to play after loading (cross-browser autoplay)
								const tryPlay = () => {
									if (video.paused) {
										video.play().catch(() => {
											// Autoplay blocked - normal in some browsers
										})
									}
								}
								video.addEventListener('loadeddata', tryPlay, { once: true })
								video.addEventListener('canplay', tryPlay, { once: true })
								
								observer.unobserve(video)
							}
						}
					})
				},
				{
					rootMargin: '150px', // Start loading 150px before video enters viewport
					threshold: 0.01, // Trigger as soon as any part is visible
				}
			)

			this.$nextTick(() => {
				const videos = document.querySelectorAll('video[data-src]')
				videos.forEach((video) => {
					observer.observe(video)
				})
			})
		},
	},
	mounted() {
		if (process.client) {
			this.initLazyLoading()
		}
	},
}
</script>

<style scoped>
/* Fullscreen Button - Bottom Left Corner */
.video-fullscreen-button {
	width: 48px;
	height: 48px;
	background-color: rgba(31, 41, 55, 0.6);
	border: 1px solid rgba(255, 255, 255, 0.3);
	-webkit-backdrop-filter: blur(20px);
	backdrop-filter: blur(20px);
	border-radius: 8px;
	box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.4);
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
}

@media (min-width: 1024px) {
	.video-fullscreen-button {
		width: 56px;
		height: 56px;
	}
}

.video-fullscreen-button:hover {
	background-color: rgba(31, 41, 55, 0.8);
	border-color: rgba(255, 255, 255, 0.5);
	transform: scale(1.1);
	box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.5);
}

.dark .video-fullscreen-button {
	background-color: rgba(17, 24, 39, 0.7);
	border-color: rgba(255, 255, 255, 0.2);
}

.dark .video-fullscreen-button:hover {
	background-color: rgba(17, 24, 39, 0.9);
	border-color: rgba(255, 255, 255, 0.4);
}
</style>

