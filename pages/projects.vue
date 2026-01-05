<template>
	<div id="projectsPage" class="overflow-hidden bg-[#EBF5FF] dark:bg-[#04061C] font-neo-sans">
		<Header />

		<!-- Hero Section -->
		<section class="bg-[#EBF5FF] pt-32 pb-16 dark:bg-[#04061C] lg:pt-40 lg:pb-24">
			<div class="container mx-auto px-4 lg:px-8">
				<div class="mb-12 lg:mb-20">
					<h1 class="mb-4 text-4xl font-black leading-tight text-gray-900 dark:text-white lg:text-6xl xl:text-7xl">
						{{ $t('OUR_PROJECTS') || 'Our Projects' }}
					</h1>
					<p class="mb-6 max-w-3xl text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-xl">
						{{ $t('OUR_PROJECTS_DESC') || 'Explore our portfolio of innovative drone cleaning projects. From high-rise facades to industrial facilities, see how we deliver safe, efficient, and cost-effective cleaning solutions.' }}
					</p>
				</div>
			</div>
		</section>

		<!-- Projects Grid -->
		<section class="bg-[#EBF5FF] pb-16 dark:bg-[#04061C] lg:pb-24">
			<div class="container mx-auto px-4 lg:px-8">
				<div class="grid gap-8 lg:grid-cols-2 lg:gap-16 xl:grid-cols-3">
					<div
						v-for="(project, index) in filteredProjects"
						:key="index"
						class="flex flex-col transition-all hover:scale-[1.02]"
					>
						<!-- Project Visual - Top -->
						<div ref="videoContainer" class="relative mb-6 aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-lg group">
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
								@mouseenter="handleVideoHover"
								@mouseleave="handleVideoLeave"
							>
								<source :data-src="getVideoSrc(project.video)" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
							<!-- Error fallback -->
							<div v-if="videoErrors[project.video]" class="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800">
								<p class="text-sm text-gray-600 dark:text-gray-400">Video unavailable</p>
							</div>
							<!-- Glassy Video Icon Overlay -->
							<button
								@click="openVideoModal(project.video, project.title)"
								class="absolute inset-0 z-10 flex items-center justify-center transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 rounded-xl"
								:class="isVideoModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'"
								aria-label="Play full video"
							>
								<div class="video-play-button-circle">
									<svg class="h-12 w-12 text-white lg:h-14 lg:w-14" fill="currentColor" viewBox="0 0 24 24">
										<path d="M8 5v14l11-7z" />
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

				<!-- Empty State -->
				<div v-if="filteredProjects.length === 0" class="py-16 text-center">
					<p class="text-lg text-gray-600 dark:text-gray-400">
						{{ $t('NO_PROJECTS_FOUND') || 'No projects found in this category.' }}
					</p>
				</div>
			</div>
		</section>

		<BackToTop />
		<Footer />

		<!-- Video Modal -->
		<VideoModal
			:is-open="isVideoModalOpen"
			:video-src="selectedVideoSrc"
			:title="selectedVideoTitle"
			@close="closeVideoModal"
		/>
	</div>
</template>

<script>
export default {
	name: 'PROJECTS',
	data() {
		return {
			selectedCategory: 'all',
			isVideoModalOpen: false,
			selectedVideoSrc: '',
			selectedVideoTitle: '',
			videoErrors: {},
		}
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
			if (event.target && event.target.src) {
				this.$set(this.videoErrors, event.target.src, false)
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
		handleVideoHover(event) {
			// Start playing video on hover
			const video = event.target
			if (video && video.paused) {
				video.play().catch(() => {
					// Autoplay might be prevented, that's okay
				})
			}
		},
		handleVideoLeave(event) {
			// Pause video when mouse leaves to save bandwidth
			const video = event.target
			if (video && !video.paused) {
				video.pause()
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
				console.error(`Video error for "${originalUrl}":`, errorMsg, {
					code: error.code,
					message: error.message,
					src: videoSrc,
					networkState: video?.networkState,
					readyState: video?.readyState,
				})
			} else {
				console.error('Video loading error (no error details):', {
					src: videoSrc,
					networkState: video?.networkState,
					readyState: video?.readyState,
				})
			}
		},
		initLazyLoading() {
			if (!process.client || typeof IntersectionObserver === 'undefined') {
				// Fallback: load all videos immediately if IntersectionObserver not supported
				this.$nextTick(() => {
					const videos = document.querySelectorAll('video[data-src]')
					videos.forEach((video) => {
						if (video.dataset.src) {
							video.src = video.dataset.src
							video.preload = 'metadata'
							const source = video.querySelector('source')
							if (source && source.dataset.src) {
								source.src = source.dataset.src
							}
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
							if (video.dataset.src) {
								loadingVideos.add(video)
								// Only load metadata, not the full video
								video.src = video.dataset.src
								video.preload = 'metadata'
								const source = video.querySelector('source')
								if (source && source.dataset.src) {
									source.src = source.dataset.src
								}
								// Load metadata asynchronously to not block
								video.load()
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
			// Ensure page starts at top
			window.scrollTo(0, 0)
			// Initialize lazy loading after a short delay to prevent scroll issues
			this.$nextTick(() => {
				setTimeout(() => {
					this.initLazyLoading()
					// Ensure we're still at top after initialization
					window.scrollTo(0, 0)
				}, 100)
			})
		}
	},
	beforeRouteEnter(to, from, next) {
		// Scroll to top before entering the route
		if (process.client) {
			window.scrollTo(0, 0)
		}
		next()
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
				{
					title: this.$t('PROJECT_FOZAN_TITLE'),
					description: this.$t('PROJECT_FOZAN_DESC'),
					video: 'https://hel1.your-objectstorage.com/burooj-prod/videos/Burooj%20Air%20-%20Al%20Fozan%20H.mp4',
					category: this.$t('CATEGORY_FACADE_CLEANING'),
				},
				{
					title: this.$t('PROJECT_SAFA_TITLE'),
					description: this.$t('PROJECT_SAFA_DESC'),
					video: 'https://hel1.your-objectstorage.com/burooj-prod/videos/Burooj%20Air%20-%20AL%20Safa%20Privet%20House%20H.mp4',
					category: this.$t('CATEGORY_BUILDING_MAINTENANCE'),
				},
				{
					title: this.$t('PROJECT_ZAMIL_TITLE'),
					description: this.$t('PROJECT_ZAMIL_DESC'),
					video: '/videos/Burooj Air - Al Zamil Edit 02.mp4',
					category: this.$t('CATEGORY_BUILDING_MAINTENANCE'),
				},
				{
					title: this.$t('PROJECT_ASSALAM_TITLE'),
					description: this.$t('PROJECT_ASSALAM_DESC'),
					video: 'https://hel1.your-objectstorage.com/burooj-prod/videos/Burooj%20Air%20-%20AsSalam%20Privet%20Villa.mp4',
					category: this.$t('CATEGORY_BUILDING_MAINTENANCE'),
				},
				{
					title: this.$t('PROJECT_CORNAICH_TITLE'),
					description: this.$t('PROJECT_CORNAICH_DESC'),
					video: '/videos/Burooj Air - Cornaich Park Screen H.mp4',
					category: this.$t('CATEGORY_BUILDING_MAINTENANCE'),
				},
				{
					title: this.$t('PROJECT_BASIC_DEMO_TITLE'),
					description: this.$t('PROJECT_BASIC_DEMO_DESC'),
					video: 'https://hel1.your-objectstorage.com/burooj-prod/videos/Burooj%20Air%20-%20Basic%20Demo%2003.mp4',
					category: this.$t('CATEGORY_BUILDING_MAINTENANCE'),
				},
			]
		},
		categories() {
			const cats = [...new Set(this.projects.map((p) => p.category))]
			return cats.sort()
		},
		filteredProjects() {
			if (this.selectedCategory === 'all') {
				return this.projects
			}
			return this.projects.filter((p) => p.category === this.selectedCategory)
		},
	},
	head() {
		return {
			title: `${this.$t('OUR_PROJECTS') || 'Our Projects'} - Burooj Air`,
			link: [
				{ rel: 'canonical', href: 'https://buroojair.com/projects' },
			],
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.$t('OUR_PROJECTS_DESC') || 'Explore our portfolio of innovative drone cleaning projects. From high-rise facades to industrial facilities, see how we deliver safe, efficient, and cost-effective cleaning solutions.',
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'drone cleaning projects, facade cleaning, window cleaning, building maintenance, industrial cleaning, Burooj Air portfolio, drone cleaning case studies, commercial drone projects, high-rise cleaning projects',
				},
				{
					name: 'robots',
					content: 'index, follow',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: `${this.$t('OUR_PROJECTS') || 'Our Projects'} - Burooj Air`,
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.$t('OUR_PROJECTS_DESC') || 'Explore our portfolio of innovative drone cleaning projects. From high-rise facades to industrial facilities, see how we deliver safe, efficient, and cost-effective cleaning solutions.',
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
				{
					hid: 'og:url',
					property: 'og:url',
					content: 'https://buroojair.com/projects',
				},
				{
					hid: 'og:type',
					property: 'og:type',
					content: 'website',
				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image',
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: `${this.$t('OUR_PROJECTS') || 'Our Projects'} - Burooj Air`,
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.$t('OUR_PROJECTS_DESC') || 'Explore our portfolio of innovative drone cleaning projects. From high-rise facades to industrial facilities, see how we deliver safe, efficient, and cost-effective cleaning solutions.',
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: 'https://buroojair.com/images/buroojair-og.png',
				},
			],
		}
	},
}
</script>

<style scoped>
/* Smooth transitions for hover effects */
.transition-all {
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 300ms;
}

/* Glassy Video Play Button - Circular Background */
.video-play-button-circle {
	width: 80px;
	height: 80px;
	background-color: rgba(31, 41, 55, 0.4);
	border: 1px solid rgba(255, 255, 255, 0.3);
	-webkit-backdrop-filter: blur(20px);
	backdrop-filter: blur(20px);
	border-radius: 50%;
	box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
}

@media (min-width: 1024px) {
	.video-play-button-circle {
		width: 100px;
		height: 100px;
	}
}

.video-play-button-circle:hover {
	background-color: rgba(31, 41, 55, 0.6);
	border-color: rgba(255, 255, 255, 0.5);
	transform: scale(1.1);
	box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.5);
}

.dark .video-play-button-circle {
	background-color: rgba(17, 24, 39, 0.5);
	border-color: rgba(255, 255, 255, 0.2);
}

.dark .video-play-button-circle:hover {
	background-color: rgba(17, 24, 39, 0.7);
	border-color: rgba(255, 255, 255, 0.4);
}
</style>

