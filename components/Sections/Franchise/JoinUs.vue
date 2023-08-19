<template>
	<section class="bg-white text-gray-800 py-16 lg:py-32 font-neo-sans">
		<div class="container mx-auto">
			<div class="grid grid-cols-1">
				<div class="p-8">
					<h3 class="text-3xl lg:text-6xl font-bold uppercase">
						{{ $t('GET_INVOLVED_AND_BECOME_PARTNER') }}
					</h3>
				</div>
				<div class="p-8 text-lg space-y-8">
					<p>
						<strong>{{ $t('WE_ARE_SEEKING_INTERSET_FOR_COUNTRY_PARTNERS') }}</strong>
					</p>
					<div>
						<p>{{ $t('The_drone_and_all_the_fitting_required_to_operate_the_drone_for_cleaning_at_heights') }}</p>
						<p>{{ $t('The_required_equipment_list_necessary_to_operate') }}</p>
						<p>{{ $t('Assistance_and_application_directly_to_the_countries_civil_aviation_authority_for_licensing') }}</p>
						<p>{{ $t('Full_UAV_operators_manual') }}</p>
					</div>
					<p>
						<strong>{{ $t('COST') }}</strong>
					</p>
					<p>{{ $t('If_like_to_find_out_more_and_get_involved_regardless') }}</p>
					<p>{{ $t('Our_partnership_and_exclusive_master_license') }}</p>
					<p>{{ $t('Our_aim_is_to_work_with_our_partners_to_expand') }}</p>
				</div>
			</div>
			<div class="p-8">
				<NuxtLink to="/franchise/nda" class="whitespace-nowrap py-3 px-4 bg-brand-second rounded-lg hover:bg-brand-first text-white no-underline">
					<span>{{ $t('NDA_BUTTON') }}</span>
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
