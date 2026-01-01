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
						<div class="relative mb-6 aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-lg group">
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
		}
	},
	methods: {
		openVideoModal(videoSrc, title) {
			this.selectedVideoSrc = videoSrc
			this.selectedVideoTitle = title
			this.isVideoModalOpen = true
		},
		closeVideoModal() {
			this.isVideoModalOpen = false
			this.selectedVideoSrc = ''
			this.selectedVideoTitle = ''
		},
	},
	computed: {
		projects() {
			return [
				{
					title: this.$t('PROJECT_TAMIMI_TITLE'),
					description: this.$t('PROJECT_TAMIMI_DESC'),
					video: require('~/assets/videos/Burooj Air 01 - Al-Tamimi Video.MP4'),
					category: this.$t('CATEGORY_BUILDING_MAINTENANCE'),
				},
				{
					title: this.$t('PROJECT_ARAMCO_TITLE'),
					description: this.$t('PROJECT_ARAMCO_DESC'),
					video: require('~/assets/videos/Burooj Air - Aramco Spark 2.mp4'),
					category: this.$t('CATEGORY_INDUSTRIAL_CLEANING'),
				},
				{
					title: this.$t('PROJECT_JINAN_TITLE'),
					description: this.$t('PROJECT_JINAN_DESC'),
					video: require('~/assets/videos/Burooj Air - Jinan Building D5.mp4'),
					category: this.$t('CATEGORY_FACADE_CLEANING'),
				},
				{
					title: this.$t('PROJECT_QOSSIBI_TITLE'),
					description: this.$t('PROJECT_QOSSIBI_DESC'),
					video: require('~/assets/videos/Burooj Air - Al Qossibi HQ H.mp4'),
					category: this.$t('CATEGORY_FACADE_CLEANING'),
				},
				{
					title: this.$t('PROJECT_FOZAN_TITLE'),
					description: this.$t('PROJECT_FOZAN_DESC'),
					video: require('~/assets/videos/Burooj Air - Al Fozan H.mp4'),
					category: this.$t('CATEGORY_FACADE_CLEANING'),
				},
				{
					title: this.$t('PROJECT_SAFA_TITLE'),
					description: this.$t('PROJECT_SAFA_DESC'),
					video: require('~/assets/videos/Burooj Air - AL Safa Privet House H .mp4'),
					category: this.$t('CATEGORY_BUILDING_MAINTENANCE'),
				},
				{
					title: this.$t('PROJECT_ZAMIL_TITLE'),
					description: this.$t('PROJECT_ZAMIL_DESC'),
					video: require('~/assets/videos/Burooj Air - Al Zamil Edit 02.mp4'),
					category: this.$t('CATEGORY_BUILDING_MAINTENANCE'),
				},
				{
					title: this.$t('PROJECT_ASSALAM_TITLE'),
					description: this.$t('PROJECT_ASSALAM_DESC'),
					video: require('~/assets/videos/Burooj Air - AsSalam Privet Villa.mp4'),
					category: this.$t('CATEGORY_BUILDING_MAINTENANCE'),
				},
				{
					title: this.$t('PROJECT_CORNAICH_TITLE'),
					description: this.$t('PROJECT_CORNAICH_DESC'),
					video: require('~/assets/videos/Burooj Air - Cornaich Park Screen H.mp4'),
					category: this.$t('CATEGORY_BUILDING_MAINTENANCE'),
				},
				{
					title: this.$t('PROJECT_BASIC_DEMO_TITLE'),
					description: this.$t('PROJECT_BASIC_DEMO_DESC'),
					video: require('~/assets/videos/Burooj Air - Basic Demo 03.mp4'),
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

