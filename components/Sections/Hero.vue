<template>
	<section id="heroSection" class="hero-section relative font-neo-sans">
		<video ref="videoPlayer" muted autoplay loop playsinline class="relative aspect-square h-auto w-full object-cover lg:aspect-auto">
			<source src="/videos//burooj.mp4" type="video/mp4" />
		</video>

		<SectionsTemplatesOverlay classColor="bg-indigo-800" classOpacity="bg-opacity-10" />

		<div class="relative flex w-full lg:absolute lg:top-0 lg:h-screen lg:items-center">
			<div class="flex w-full items-start lg:container lg:mx-auto lg:h-full lg:pt-52">
				<div class="w-full bg-gray-900 bg-opacity-95 p-8 lg:mb-16 lg:max-w-md lg:rounded-bl-[80px] lg:rounded-br-2xl lg:rounded-tl-2xl lg:rounded-tr-[80px]">
					<h3 class="mb-5 font-neo-sans text-3xl uppercase text-white">{{ $t('NOW_REQUEST_A_QUOTE_FOR_DRONE_CLEANING') }}</h3>

					<div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6coemjWsjuoqlhJqDxw5vARg9RKtlXs9Rk7xeP0SZJLEXlmO9hyO7YDdWfq6IcrYLV">
						<script src="https://webforms.pipedrive.com/f/loader"></script>
					</div>
				</div>
			</div>
		</div>

		<!-- Divider Section -->
		<SectionsDividersBottom pathClass="fill-purple-50" sectionClass="rotate-180" />
	</section>
</template>
