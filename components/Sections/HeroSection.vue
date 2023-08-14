<template>
	<section id="heroSection" class="hero-section relative">
		<video ref="videoPlayer" muted autoplay loop playsinline class="w-full h-auto relative">
			<source src="https://res.cloudinary.com/dshekyqdl/video/upload/v1691936569/Website_video1_1_vcyojc.mp4" type="video/mp4" />
		</video>

		<div class="absolute top-0 left-0 w-full h-full bg-purple-950 bg-opacity-5 bg-blend-darken"></div>

		<div class="md:absolute relative flex w-full md:top-0 md:left-0 md:items-center md:h-screen">
			<div class="md:container w-full mx-auto md:m-0 p-0 m-0 md:h-full items-end flex mb:pb-12">
				<div class="hero-form bg-gray-900 bg-opacity-90 md:mb-12 w-full clear-both p-12 md:max-w-xl md:rounded-tl-2xl md:rounded-br-2xl md:rounded-tr-[80px] md:rounded-bl-[80px]">
					<div class="text-box">
						<h3 class="text-white text-3xl uppercase font-neo-sans mb-5">{{ $t("NOW_REQUEST_A_QUOTE_FOR_DRONE_CLEANING") }}</h3>
					</div>

					<div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6coemjWsjuoqlhJqDxw5vARg9RKtlXs9Rk7xeP0SZJLEXlmO9hyO7YDdWfq6IcrYLV">
						<script src="https://webforms.pipedrive.com/f/loader"></script>
					</div>
				</div>
			</div>
		</div>

		<div class="absolute bottom-0 w-full hidden md:block rotate-180">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="h-12 block translate-x-0 w-full">
				<path class="fill-purple-50" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" fill="#212121"></path>
			</svg>
		</div>
	</section>
</template>

<script>
export default {};
</script>
