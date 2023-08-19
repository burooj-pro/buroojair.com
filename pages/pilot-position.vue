<template>
	<div class="font-neo-sans">
		<Header disableSpacer="true" />

		<section class="mt-18 lg:mt-36">
			<div class="container mx-auto">
				<div class="grid grid-cols-1 gap-8">
					<div class="p-8 text-start space-y-8">
						<h3 class="text-xl lg:text-3xl font-bold uppercase">{{ $t('GACA_PILOTE') }}</h3>
						<p>{{ $t('GACA_PILOTE_DESC') }}</p>
					</div>
					<div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6b1fBjUKYW15kfyjrvmHuMTeoIPFjH7wKNdSYfEV2XdYJJHt7SYhYQO0VSalzEAk7N"><script src="https://webforms.pipedrive.com/f/loader"></script></div>
				</div>
			</div>
		</section>

		<SectionsContact />

		<Footer />
	</div>
</template>
<script>
export default {
	head() {
		return {
			title: this.$t('GACA_PILOTE'),
		}
	},
}
</script>
