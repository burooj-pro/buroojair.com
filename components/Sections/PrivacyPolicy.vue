<template>
	
	<div class="privacy-policy container mx-auto px-4 py-12 lg:px-8 lg:py-32">
	  <h1 class="mb-6 text-3xl font-black text-gray-900 dark:text-white lg:text-5xl">{{ $t('PRIVACY_POLICY') }}</h1>
	  
	  <section class="mb-8">
		<h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{{ $t('PRIVACY_INTRO_TITLE') }}</h2>
		<p class="text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
		  {{ $t('PRIVACY_INTRO_TEXT') }}
		</p>
	  </section>
	  
	  <section class="mb-8">
		<h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{{ $t('PRIVACY_INFO_COLLECT_TITLE') }}</h2>
		<ul class="list-disc space-y-2 ms-6 rtl:me-6 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
		  <li><strong class="text-gray-900 dark:text-white">{{ $t('PRIVACY_PERSONAL_INFO') }}:</strong> {{ $t('PRIVACY_PERSONAL_INFO_DESC') }}</li>
		  <li><strong class="text-gray-900 dark:text-white">{{ $t('PRIVACY_USAGE_DATA') }}:</strong> {{ $t('PRIVACY_USAGE_DATA_DESC') }}</li>
		  <li><strong class="text-gray-900 dark:text-white">{{ $t('PRIVACY_COOKIES') }}:</strong> {{ $t('PRIVACY_COOKIES_DESC') }}</li>
		</ul>
	  </section>
  
	  <section class="mb-8">
		<h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{{ $t('PRIVACY_USE_INFO_TITLE') }}</h2>
		<p class="mb-4 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">{{ $t('PRIVACY_USE_INFO_INTRO') }}</p>
		<ul class="list-disc space-y-2 ms-6 rtl:me-6 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
		  <li>{{ $t('PRIVACY_USE_INFO_1') }}</li>
		  <li>{{ $t('PRIVACY_USE_INFO_2') }}</li>
		  <li>{{ $t('PRIVACY_USE_INFO_3') }}</li>
		</ul>
	  </section>
  
	  <section class="mb-8">
		<h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{{ $t('PRIVACY_SHARING_TITLE') }}</h2>
		<p class="mb-4 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">{{ $t('PRIVACY_SHARING_INTRO') }}</p>
		<ul class="list-disc space-y-2 ms-6 rtl:me-6 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
		  <li>{{ $t('PRIVACY_SHARING_1') }}</li>
		  <li>{{ $t('PRIVACY_SHARING_2') }}</li>
		</ul>
	  </section>
  
	  <section class="mb-8">
		<h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{{ $t('PRIVACY_SECURITY_TITLE') }}</h2>
		<p class="mb-4 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">{{ $t('PRIVACY_SECURITY_INTRO') }}</p>
		<ul class="list-disc space-y-2 ms-6 rtl:me-6 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
		  <li>{{ $t('PRIVACY_SECURITY_1') }}</li>
		  <li>{{ $t('PRIVACY_SECURITY_2') }}</li>
		  <li>{{ $t('PRIVACY_SECURITY_3') }}</li>
		</ul>
	  </section>
  
	  <section class="mb-8">
		<h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{{ $t('PRIVACY_RIGHTS_TITLE') }}</h2>
		<p class="mb-4 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">{{ $t('PRIVACY_RIGHTS_INTRO') }}</p>
		<ul class="list-disc space-y-2 ms-6 rtl:me-6 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
		  <li>{{ $t('PRIVACY_RIGHTS_1') }}</li>
		  <li>{{ $t('PRIVACY_RIGHTS_2') }}</li>
		  <li>{{ $t('PRIVACY_RIGHTS_3') }}</li>
		</ul>
	  </section>
  
	  <section class="mb-8">
		<h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{{ $t('PRIVACY_COOKIES_TITLE') }}</h2>
		<p class="mb-4 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">{{ $t('PRIVACY_COOKIES_INTRO') }}</p>
		<ul class="list-disc space-y-2 ms-6 rtl:me-6 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
		  <li>{{ $t('PRIVACY_COOKIES_USE_1') }}</li>
		  <li>{{ $t('PRIVACY_COOKIES_USE_2') }}</li>
		  <li>{{ $t('PRIVACY_COOKIES_USE_3') }}</li>
		</ul>
		<p class="mt-4 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">{{ $t('PRIVACY_COOKIES_MANAGE') }}</p>
	  </section>
  
	  <section class="mb-8">
		<h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{{ $t('PRIVACY_CONTACT_TITLE') }}</h2>
		<p class="mb-4 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
		  {{ $t('PRIVACY_CONTACT_INTRO') }}
		</p>
		<ul class="list-disc space-y-2 ms-6 rtl:me-6 text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
		  <li><strong class="text-gray-900 dark:text-white">{{ $t('EMAIL') }}:</strong> contact@buroojair.com</li>
		  <li><strong class="text-gray-900 dark:text-white">{{ $t('PHONE') }}:</strong> +966566639994</li>
		  <li><strong class="text-gray-900 dark:text-white">{{ $t('ADDRESS') }}:</strong> {{ $t('PRIVACY_CONTACT_ADDRESS') }}</li>
		</ul>
	  </section>
  
	  <section class="mb-8">
		<h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{{ $t('PRIVACY_CHANGES_TITLE') }}</h2>
		<p class="text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
		  {{ $t('PRIVACY_CHANGES_TEXT') }}
		</p>
	  </section>
  
	  <p class="mt-6 text-sm font-light text-gray-600 dark:text-gray-400">{{ $t('PRIVACY_LAST_UPDATED') }}: 01-01-2026</p>
	</div>
  </template>
  