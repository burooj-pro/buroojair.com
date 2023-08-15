<template>
	<section id="contactSection" class="contact-section bg-gray-900 py-32 text-white">
		<div class="container">
			<div class="grid md:grid-cols-2 gap-5">
				<div class="!text-center !md:text-start mb-5 md:mb-0">
					<div class="text-box text-white">
							<h3 class="text-5xl font-bold">{{ $t("CONTACT_US") }}</h3>
							<p class="text-white">{{ $t("SEND_YOUR_INQUIRY_AND_WE_WILL_GET_IN_TOUCH_AS_SOON_AS_POSSIBLE") }}</p>
						</div>
						<ul class="mt-3 pt-3 text-white text-2xl leading-loose border-t-gray-200 border-t border-dotted">
							<li>
								<strong>{{ $t("BUROOJ_AIR") }}</strong>
							</li>

							<li>{{ $t("KHOBAR_SAUDI_ARABIA") }}</li>
							<li>{{ $t("EMAIL") }}: Contact@buroojair.com</li>
							<li>{{ $t("PHONE") }}: +966566639994</li>
						</ul>
				</div>
				<div class="">
					<div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6coemjWsjuoqlhJqDxw5vARg9RKtlXs9Rk7xeP0SZJLEXlmO9hyO7YDdWfq6IcrYLV">
						<script src="https://webforms.pipedrive.com/f/loader"></script>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
