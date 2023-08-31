<template>
	<section id="contactSection" class="bg-gray-900 py-12 text-white lg:py-32">
		<div class="container mx-auto">
			<div class="grid gap-4 lg:grid-cols-2">
				<div class="flex flex-col items-start gap-4 p-8 text-start rtl:text-end">
					<div class="mb-4 border-b border-dashed border-b-gray-600 pb-3">
						<h3 class="mb-2 text-5xl font-bold">{{ $t('CONTACT_US') }}</h3>
						<p class="text-gray-300">{{ $t('SEND_YOUR_INQUIRY_AND_WE_WILL_GET_IN_TOUCH_AS_SOON_AS_POSSIBLE') }}</p>
					</div>

					<div>
						<h4 class="text-2xl font-bold">{{ $t('BUROOJ_AIR') }}</h4>
						<ul class="text-base text-gray-300 lg:text-xl lg:leading-loose">
							<li></li>
							<li>{{ $t('KHOBAR_SAUDI_ARABIA') }}</li>
							<li>{{ $t('EMAIL') }}: Contact@buroojair.com</li>
							<li>{{ $t('PHONE') }}: +966566639994</li>
						</ul>
					</div>

					<SectionsGeneralMap />
				</div>
				<div class="container mx-auto">
					<div class="pipedriveWebForms p-2" data-pd-webforms="https://webforms.pipedrive.com/f/6coemjWsjuoqlhJqDxw5vARg9RKtlXs9Rk7xeP0SZJLEXlmO9hyO7YDdWfq6IcrYLV">
						<script src="https://webforms.pipedrive.com/f/loader"></script>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
