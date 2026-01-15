<template>
	<section class="bg-[#EBF5FF] py-16 font-neo-sans text-gray-900 dark:bg-[#04061C] dark:text-white lg:py-24">
		<div class="container mx-auto px-4 lg:px-6 xl:px-8">
			<!-- Section Header -->
			<div class="mb-8 text-center lg:mb-16">
				<h2 class="mb-4 text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white lg:text-5xl">
					{{ $t('OUR_CLIENTS') }}
				</h2>
				<p class="mx-auto max-w-3xl text-base font-light text-gray-700 dark:text-gray-300 lg:text-xl">
					{{ $t('OUR_CLIENTS_DESC') }}
				</p>
			</div>

			<!-- Client Logos -->
			<div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6">
				<div
					v-for="(client, index) in clients"
					:key="index"
					class="flex h-24 w-32 items-center justify-center rounded-lg bg-gray-900 dark:bg-gray-800 px-4 py-4 transition-all hover:bg-gray-800 dark:hover:bg-gray-700 sm:h-28 sm:w-40 sm:px-6 sm:py-6 lg:h-32 lg:w-48 lg:py-8"
				>
					<img
						:src="client.logo"
						:alt="client.name"
						width="160"
						height="80"
						class="mx-auto max-h-16 w-full max-w-full object-contain opacity-70 transition-all hover:opacity-100 lg:max-h-20"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			clients: [
				{
					name: 'Aramco',
					logo: require('~/assets/images/clients/aramco-white-logo.png'),
				},
				{
					name: 'Qiddiya',
					logo: require('~/assets/images/clients/qiddiya.png'),
				},
				{
					name: 'Six Flags',
					logo: require('~/assets/images/clients/six-flags-white-logo.webp'),
				},
				{
					name: 'Tammimi',
					logo: require('~/assets/images/clients/tammimi-white-logo.png'),
				},
				{
					name: 'Zammil',
					logo: require('~/assets/images/clients/zammil-white logo.png'),
				},
				{
					name: 'Gree',
					logo: require('~/assets/images/clients/gree.png'),
				},
			],
		}
	},
}
</script>

<style scoped>
</style>

