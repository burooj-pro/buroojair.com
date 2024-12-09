<template>
	<footer class="bg-brand-first py-8 font-neo-sans text-white">
		<div class="container mx-auto">
			<div class="lg:flex lg:items-center lg:justify-between">
				<div class="text-center lg:!text-left">
					<p class="fw-bold">Burooj Air ®</p>
					<p>{{ $t('FOR_INQUIRIES_PLEASE_USE_OUR_LISTED_CONTACT_INFO') }}</p>
				</div>
				
				<div class="text-center text-sm lg:text-right">
					<p>{{ $t('COPY_RIGHT') }}</p>
					<p>
						<a href="/privacy-policy" class="underline hover:no-underline text-white">
							{{ $t('PRIVACY_POLICY') }}
						</a>
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>
