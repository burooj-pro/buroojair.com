<template>
	<Teleport to="body">
		<Transition name="modal">
			<div
				v-if="isOpen"
				class="fixed inset-0 z-[200] flex min-h-screen items-center justify-center bg-black/80 backdrop-blur-sm p-4"
				@click.self="closeModal"
			>
				<!-- Close Button -->
				<button
					@click="closeModal"
					class="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
					aria-label="Close video"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>

				<!-- Video Container -->
				<div class="relative flex w-full max-w-6xl flex-col items-center justify-center will-change-transform">
					<div class="relative w-full overflow-hidden rounded-xl bg-black shadow-2xl" style="max-height: calc(100vh - 12rem);">
						<video
							ref="videoPlayer"
							:src="normalizedVideoSrc"
							controls
							autoplay
							muted
							playsinline
							preload="auto"
							class="mx-auto block h-auto w-full max-h-full object-contain"
							style="max-height: calc(100vh - 12rem);"
							@click.stop
							@error="handleVideoError"
							@loadeddata="handleVideoLoaded"
						>
							<source :src="normalizedVideoSrc" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
					<!-- Video Title (Optional) -->
					<div v-if="title" class="mt-4 text-center">
						<h3 class="text-xl font-bold text-white lg:text-2xl">{{ title }}</h3>
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script>
export default {
	name: 'VideoModal',
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
		videoSrc: {
			type: [String, Object],
			required: true,
		},
		title: {
			type: String,
			default: '',
		},
	},
	computed: {
		normalizedVideoSrc() {
			// Handle both string URLs and webpack require() results
			if (typeof this.videoSrc === 'string') {
				// If URL is already encoded (contains %), return as-is
				// Otherwise, it's a local path that might need encoding
				if (this.videoSrc.startsWith('http://') || this.videoSrc.startsWith('https://')) {
					// External URL - return as-is (should already be properly encoded)
					return this.videoSrc
				}
				return this.videoSrc
			}
			// If it's a webpack module object, get the default export or the src
			if (this.videoSrc && typeof this.videoSrc === 'object') {
				return this.videoSrc.default || this.videoSrc.src || this.videoSrc
			}
			return this.videoSrc
		},
		isExternalUrl() {
			// Check if the video source is an external URL
			if (typeof this.videoSrc === 'string') {
				return this.videoSrc.startsWith('http://') || this.videoSrc.startsWith('https://')
			}
			return false
		},
	},
	watch: {
		isOpen(newVal) {
			if (newVal) {
				// Prevent body scroll when modal is open
				document.body.style.overflow = 'hidden'
				// Load and play video when modal opens
				this.$nextTick(() => {
					if (this.$refs.videoPlayer) {
						this.$refs.videoPlayer.load()
						this.$refs.videoPlayer.focus()
						// Try to play the video
						this.$refs.videoPlayer.play().catch((error) => {
							if (process.env.NODE_ENV === 'development') {
								console.warn('Video autoplay failed:', error)
							}
						})
					}
				})
			} else {
				// Restore body scroll
				document.body.style.overflow = ''
				// Pause video when closing
				if (this.$refs.videoPlayer) {
					this.$refs.videoPlayer.pause()
					this.$refs.videoPlayer.currentTime = 0
				}
			}
		},
		normalizedVideoSrc(newSrc) {
			// Reload video when source changes
			if (this.$refs.videoPlayer && newSrc) {
				this.$nextTick(() => {
					this.$refs.videoPlayer.load()
					this.$refs.videoPlayer.play().catch((error) => {
						console.warn('Video autoplay failed:', error)
					})
				})
			}
		},
	},
	methods: {
		closeModal() {
			this.$emit('close')
		},
		handleVideoError(event) {
			if (process.env.NODE_ENV === 'development') {
				console.error('Video loading error:', event)
			}
			// You could show an error message to the user here
		},
		handleVideoLoaded() {
			// Video has loaded successfully
			if (this.$refs.videoPlayer) {
				this.$refs.videoPlayer.play().catch((error) => {
					console.warn('Video autoplay failed:', error)
				})
			}
		},
	},
	beforeDestroy() {
		// Clean up: restore body scroll
		document.body.style.overflow = ''
	},
}
</script>

<style scoped>
/* Modal Transition - Smooth fade and scale */
.modal-enter-active {
	transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-leave-active {
	transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-active .relative,
.modal-leave-active .relative {
	transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from {
	opacity: 0;
}

.modal-leave-to {
	opacity: 0;
}

.modal-enter-from .relative {
	transform: scale(0.95) translateY(-10px);
	opacity: 0;
}

.modal-leave-to .relative {
	transform: scale(0.95) translateY(-10px);
	opacity: 0;
}

.modal-enter-to .relative,
.modal-leave-from .relative {
	transform: scale(1) translateY(0);
	opacity: 1;
}
</style>

