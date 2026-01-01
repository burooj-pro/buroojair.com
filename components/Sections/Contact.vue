<template>
		<section id="contactSection" class="scroll-mt-20 bg-[#EBF5FF] py-8 text-gray-900 dark:bg-[#04061C] dark:text-white lg:py-32 lg:scroll-mt-24">
			<div class="container mx-auto px-4 lg:px-8">
				<div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
					<div class="flex flex-col items-start gap-4 p-4 lg:p-8 text-start rtl:text-end">
						<div class="mb-4 border-b border-dashed border-gray-600 dark:border-gray-600 pb-3 w-full">
							<h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl lg:text-5xl">{{ $t('CONTACT_US') }}</h3>
							<p class="text-xs font-light text-gray-700 dark:text-gray-300 lg:text-sm lg:text-base">{{ $t('SEND_YOUR_INQUIRY_AND_WE_WILL_GET_IN_TOUCH_AS_SOON_AS_POSSIBLE') }}</p>
						</div>

						<div class="w-full">
							<h4 class="mb-2 text-xl font-bold text-gray-900 dark:text-white lg:text-2xl">{{ $t('BUROOJ_AIR') }}</h4>
							<ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300 lg:text-base lg:text-xl lg:leading-loose">
								<li class="font-light">{{ $t('KHOBAR_SAUDI_ARABIA') }}</li>
								<li class="break-words"><span class="font-light">{{ $t('EMAIL') }}:</span> <a href="mailto:contact@buroojair.com" class="hover:underline">contact@buroojair.com</a></li>
								<li><span class="font-light">{{ $t('PHONE') }}:</span> <a href="tel:+966566639994" class="hover:underline">+966 56 663 9994</a></li>
							</ul>
						</div>
						<div class="flex flex-wrap gap-3 lg:space-x-4">
							<a href="https://www.instagram.com/burooj_air?igsh=bnp3cDFlb2FncTgw" target="_blank" aria-label="Instagram" class="text-brand-second hover:text-brand-first">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 lg:h-6 lg:w-6" fill="white" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
							</a>
							<a href="https://www.linkedin.com/company/buroojair" target="_blank" aria-label="LinkedIn" class="text-brand-second hover:text-brand-first">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 lg:h-6 lg:w-6" fill="white" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
							</a>
							<a href="https://x.com/burooj_air?s=21" target="_blank" aria-label="Twitter" class="text-brand-second hover:text-brand-first">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 lg:h-6 lg:w-6" fill="white" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
							</a>
							<a href="https://www.tiktok.com/@buroojair?_t=ZS-8stA3h37dnr&_r=1" target="_blank" aria-label="tiktok" class="text-brand-second hover:text-brand-first">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 lg:h-6 lg:w-6" fill="white" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
							</a>
						</div>
					</div>
					<div class="flex flex-col p-4 lg:p-8">
						<div class="pipedriveWebForms p-4 lg:p-6" data-pd-webforms="https://webforms.pipedrive.com/f/6coemjWsjuoqlhJqDxw5vARg9RKtlXs9Rk7xeP0SZJLEXlmO9hyO7YDdWfq6IcrYLV">
							<script src="https://webforms.pipedrive.com/f/loader"></script>
						</div>
					</div>
				</div>
				<div class="w-full mt-6 lg:mt-8">
					<SectionsGeneralMap />
				</div>
			</div>
		</section>
</template>

<style scoped>
/* Style Pipedrive form submit button to match blue Submit button */
:deep(.pipedriveWebForms button[type="submit"]),
:deep(.pipedriveWebForms input[type="submit"]),
:deep(.pipedriveWebForms .pipedrive-submit-button) {
	background-color: #2563eb !important;
	color: white !important;
	border: none !important;
	border-radius: 0.5rem !important;
	padding: 0.75rem 1.5rem !important;
	font-weight: 600 !important;
	font-size: 1rem !important;
	cursor: pointer !important;
	transition: background-color 0.2s !important;
	width: 100% !important;
}

:deep(.pipedriveWebForms button[type="submit"]:hover),
:deep(.pipedriveWebForms input[type="submit"]:hover),
:deep(.pipedriveWebForms .pipedrive-submit-button:hover) {
	background-color: #1d4ed8 !important;
}
</style>
