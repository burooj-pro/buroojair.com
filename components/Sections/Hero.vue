<template>
	<section id="heroSection" class="hero-section relative font-neo-sans">
		<video ref="videoPlayer" muted autoplay loop playsinline class="w-full h-auto aspect-square lg:aspect-auto object-cover relative">
			<source src="https://res.cloudinary.com/dshekyqdl/video/upload/v1691936569/Website_video1_1_vcyojc.mp4" type="video/mp4" />
		</video>

		<SectionsTemplatesOverlay classColor="bg-indigo-800" classOpacity="bg-opacity-10" />

		<div class="relative flex w-full lg:absolute lg:top-0 lg:items-center lg:h-screen">
			<div class="flex items-start w-full lg:container lg:mx-auto lg:h-full lg:pt-52">
				<div class="bg-gray-900 bg-opacity-95 w-full p-8 lg:max-w-md lg:mb-16 lg:rounded-tl-2xl lg:rounded-br-2xl lg:rounded-tr-[80px] lg:rounded-bl-[80px]">
					<h3 class="text-white text-3xl uppercase font-neo-sans mb-5">{{ $t('NOW_REQUEST_A_QUOTE_FOR_DRONE_CLEANING') }}</h3>

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
