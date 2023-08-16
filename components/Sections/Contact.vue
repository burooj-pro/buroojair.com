<template>
	<section id="contactSection" class="bg-gray-900 py-12 lg:py-32 text-white">
		<div class="container mx-auto">
			<div class="grid lg:grid-cols-2 gap-4">
				<div class="p-8 flex flex-col items-start gap-4 text-start rtl:text-end">
					<div class="border-b-gray-600 border-b border-dashed pb-3 mb-4">
						<h3 class="text-5xl font-bold mb-2">{{ $t("CONTACT_US") }}</h3>
						<p class="text-gray-300">{{ $t("SEND_YOUR_INQUIRY_AND_WE_WILL_GET_IN_TOUCH_AS_SOON_AS_POSSIBLE") }}</p>
					</div>

					<div>
						<h4 class="text-2xl font-bold">{{ $t("BUROOJ_AIR") }}</h4>
						<ul class="text-gray-300 text-base lg:text-xl lg:leading-loose">
							<li></li>
							<li>{{ $t("KHOBAR_SAUDI_ARABIA") }}</li>
							<li>{{ $t("EMAIL") }}: Contact@buroojair.com</li>
							<li>{{ $t("PHONE") }}: +966566639994</li>
						</ul>
					</div>					
				</div>

				<div class="pipedriveWebForms p-8" data-pd-webforms="https://webforms.pipedrive.com/f/6coemjWsjuoqlhJqDxw5vARg9RKtlXs9Rk7xeP0SZJLEXlmO9hyO7YDdWfq6IcrYLV">
					<script src="https://webforms.pipedrive.com/f/loader"></script>
				</div>
			</div>
		</div>
	</section>
</template>
