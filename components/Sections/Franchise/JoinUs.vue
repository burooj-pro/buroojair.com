<template>
	<section id="franchiseFormSection" class="py-16 font-neo-sans lg:py-32">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="grid grid-cols-1">
				<div class="p-6 lg:p-8">
					<h3 class="mb-8 text-3xl font-black uppercase text-gray-900 dark:text-white lg:text-6xl">
						{{ $t('GET_INVOLVED_AND_BECOME_PARTNER') }}
					</h3>
				</div>
				<div class="space-y-6 p-6 text-base leading-relaxed text-gray-700 dark:text-gray-300 lg:p-8 lg:text-lg">
					<p>
						<strong class="text-gray-900 dark:text-white">{{ $t('WE_ARE_SEEKING_INTERSET_FOR_COUNTRY_PARTNERS') }}</strong>
					</p>
					<div class="space-y-4">
						<p class="font-light">{{ $t('The_drone_and_all_the_fitting_required_to_operate_the_drone_for_cleaning_at_heights') }}</p>
						<p class="font-light">{{ $t('The_required_equipment_list_necessary_to_operate') }}</p>
						<p class="font-light">{{ $t('Assistance_and_application_directly_to_the_countries_civil_aviation_authority_for_licensing') }}</p>
						<p class="font-light">{{ $t('Full_UAV_operators_manual') }}</p>
					</div>
					<p>
						<strong class="text-gray-900 dark:text-white">{{ $t('COST') }}</strong>
					</p>
					<p class="font-light">{{ $t('If_like_to_find_out_more_and_get_involved_regardless') }}</p>
					<p class="font-light">{{ $t('Our_aim_is_to_work_with_our_partners_to_expand') }}</p>
				</div>
			</div>
			<div class="mt-12">
				<div class="rounded-xl p-6 lg:p-8">
					<div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/bXCZRhnEATSSg8AiaLHNw1Fkti3HRSJNU7pWyVOxhoYkm92ZdiQQcGzHw83hVqKg5J">
						<script src="https://webforms.pipedrive.com/f/loader"></script>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
