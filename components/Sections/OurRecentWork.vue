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
						<p class="max-w-2xl text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-xl">
							{{ $t('OUR_RECENT_WORK_DESC') || 'We support impact-focused organisations through strategic creative work that amplifies their reach.' }}
						</p>
					</div>
					<!-- Right Side - CTA Button -->
					<div class="flex items-start lg:justify-end">
						<NuxtLink
							to="/projects"
							class="inline-flex items-center justify-center min-h-[44px] rounded-lg border border-gray-900 bg-transparent px-6 py-3 text-sm font-semibold text-gray-900 no-underline transition-colors hover:bg-gray-100/50 dark:border-gray-300 dark:bg-transparent dark:text-white dark:hover:bg-gray-800/50 lg:px-8 lg:py-4 lg:text-base"
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
					<div class="relative mb-6 aspect-square overflow-hidden rounded-lg bg-gray-100 group">
						<video
							:src="project.video"
							class="h-full w-full object-cover"
							autoplay
							muted
							loop
							playsinline
							preload="metadata"
							:aria-label="project.title"
						>
							<source :src="project.video" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
						<!-- Play Button Overlay -->
						<button
							@click="openVideoModal(project.video, project.title)"
							class="absolute inset-0 z-10 flex items-center justify-center transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 rounded-lg"
							:class="isVideoModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-100'"
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
		}
	},
	computed: {
		projects() {
			return [
				{
					title: this.$t('PROJECT_TAMIMI_TITLE'),
					description: this.$t('PROJECT_TAMIMI_DESC'),
					video: '/videos/Burooj Air 01 - Al-Tamimi Video.MP4',
					category: this.$t('CATEGORY_BUILDING_MAINTENANCE'),
				},
				{
					title: this.$t('PROJECT_ARAMCO_TITLE'),
					description: this.$t('PROJECT_ARAMCO_DESC'),
					video: '/videos/Burooj Air - Aramco Spark 2.mp4',
					category: this.$t('CATEGORY_INDUSTRIAL_CLEANING'),
				},
				{
					title: this.$t('PROJECT_JINAN_TITLE'),
					description: this.$t('PROJECT_JINAN_DESC'),
					video: '/videos/Burooj Air - Jinan Building D5.mp4',
					category: this.$t('CATEGORY_FACADE_CLEANING'),
				},
				{
					title: this.$t('PROJECT_QOSSIBI_TITLE'),
					description: this.$t('PROJECT_QOSSIBI_DESC'),
					video: '/videos/Burooj Air - Al Qossibi HQ H.mp4',
					category: this.$t('CATEGORY_FACADE_CLEANING'),
				},
			]
		},
	},
	methods: {
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
			// Encode URL for modal (browser handles spaces in static paths)
			this.selectedVideoSrc = encodeURI(videoSrc)
			this.selectedVideoTitle = title
			this.isVideoModalOpen = true
		},
		closeVideoModal() {
			this.isVideoModalOpen = false
			this.selectedVideoSrc = ''
			this.selectedVideoTitle = ''
		},
	},
}
</script>

<style scoped>
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

