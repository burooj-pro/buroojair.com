<template>
	<div class="bg-gray-400 font-neo-sans">
		<section class="bg-gray-800 py-4 text-sm text-white">
			<div class="container mx-auto">
				<div class="grid">
					<div class="px-8">
						<p>	{{ $t('BUROOJ_AIR_NDA_FORM') }}</p>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-gradient-to-tr from-emerald-400 to-brand-first py-6">
			<div class="container mx-auto items-center justify-center text-center">
				<div class="grid">
					<div class="px-8">
						<NuxtLink class="flex items-start" to="/"><img src="~assets/images/logo.png" alt="" class="h-12 lg:h-20" /></NuxtLink>
					</div>
				</div>
			</div>
		</section>

		<!-- <section class="text-thin bg-white text-black">
			<div class="container mx-auto">
				<div class="grid grid-cols-1">
					<div class="p-8 font-bold uppercase">
						<h3 class="text-2xl"> {{ $t('FRANCHISE_MODEL') }}</h3>
						<p> {{ $t('NDA_AGREEMENT') }}</p> -->
						<!-- First Section -->
					<!-- </div>
					<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
						<div class="space-y-8 p-8">
							<div class="space-y-4">
								<h4 class="text-lg font-bold">{{ $t('THIS_AGREEMENT_NDA_IS_ENTERED') }}</h4>
								<p>{{ $t('BUROOJ_PRIVATE_LIMITED_COMPANY') }} <br /></p>
								<p>{{ $t('THE_VISITOR_TO_THIS_PAGE') }}</p>
							</div>

							<div class="space-y-4">
								<h4 class="text-xl font-bold"> {{ $t('BACKGROUND') }}</h4>
								<p>
									{{ $t('THE_COMPANY_HAS_DEVELOPED') }}
								</p>
								<p>{{ $t('THIS_NDA_SETS_OUT') }}</p>
								<p> {{ $t('THE_CONFIDENTIAL_INFORMATION') }}</p>
							</div>

							<div class="space-y-4">
								<h4 class="text-xl font-bold"> {{ $t('AGREED_TERMS') }}</h4>
								<h5 class="text-lg font-bold"> {{ $t('CONFIDENTIALITY') }}</h5>
								<p>
									{{ $t('FOR_THE_PURPOSE_OF_THIS_NDA') }}
								</p>
								<p>{{ $t('THE_RECIPIENT_SHALL_KEEP') }} </p>
								<p>{{ $t('THE_RECIPIENT_MAY_DISCLOSE_CONFIDENTIAL_INFORMATION') }}</p>
								<p>
									{{ $t('THE_RECIPIENT_MAY_DISCLOSE_SUCH_CONFIDENTIAL_INFORMATION') }}

								</p>
									<p>
									{{ $t('THE_FORGOTTEN_OBLIGATION') }}

								</p>
										<p>
									{{ $t('WHICH_IS_ALREADY_KNOWN') }}

								</p>
										<p>
									{{ $t('WHICH_THE_RECIEPENT') }}

								</p>
											<p>
									{{ $t('WHICH_THE_RECIEPENT_CAN_PROVE') }}

								</p>
											<p>
									{{ $t('WHICH_THE_RECIEPENT_CAN_PROVE_HAS_BEEN_DEVELOPED') }}

								</p>
												<p>
									{{ $t('THE_RECIPIENT_ACKNOWLEDGS') }}

								</p>
							</div>
							<div class="space-y-4">
								<h5 class="text-lg font-bold"> {{ $t('USE_OF_THE_CONFIDENTIAL_INFORMATION') }}</h5>
								<p>{{ $t('THE_RECIPIENT_SHALL_NOT_USE') }}</p>
							</div>

							<div class="space-y-4">
								<h5 class="text-lg font-bold">{{ $t('STORING_AND_RETURN_CONFIDENTIAL_INFORMATION') }}</h5>
								<p>{{ $t('THE_RECIPIENT_AND_ITS_REPRESENTATIVES') }} </p>
								<p>{{ $t('THE_RECIPIENT_SHALL_AT_ITS_OWN_EXPENSE') }}</p>
								<p>{{ $t('RETURN_OR_DESTROY_ALL_WRITTEN') }}</p>
								<p>{{ $t('DESTROY_ALL_ANALYSES') }} </p>
								<p>{{ $t('DELETE_ORCAUSE_THE_DELETION') }}</p>
								<p>{{ $t('ON_REQUEST_CONFIRM') }}</p>
							</div>
						</div>
						<div class="space-y-8 p-8">
							<div class="space-y-4">
								<h5 class="text-lg font-bold">{{ $t('NON_COMPETITION_NON_SOLICITATION_AND_NON_RECRUITMENT') }}</h5>
								<p>{{ $t('DURING_THE_DURATION_OF_THIS_AGREEMENT') }} <br /></p>
								<p>{{ $t('CONFLICT_OR_APPEAR_TO_CONFLICT') }} <br /></p>
								<p>{{ $t('ARE_IN_COMPETITION_WITH') }} <br /></p>
								<p>{{ $t('IN_CONNECTION_WITH_THE_RECIPIENT') }}<br /></p>
								<p>{{ $t('THE_RECIPIENT_SHALL_NOT_SOLICIT') }}</p>
								<p>{{ $t('THE_RECIPIENT_SHALL_NOT_SOLICIT_OR_ENTICE') }} <br /></p>
								<p>{{ $t('THE_RECIPIENT_ACKNOWLEDGS_THAT') }} </p>
								<p>{{ $t('THE_RECIPIENT_AGREES_AND_ACKNOWLEDGS_THAT') }} </p>
							</div>
									<div class="space-y-4">
								<h5 class="text-lg font-bold">{{ $t('MISCELLANEOUS') }}</h5>
								<p>{{ $t('THE_RECIPIENT_AGREES_AND_ACKNOWLEDGS_THAT_IT_SHALL_NOT_OBTAIN') }} <br /></p>
								<p>{{ $t('THE_RECIPIENT_SHALL_IMMEDIETLLY') }} <br /></p>
								<p>{{ $t('THE_RECIPIENT_HEREBY_AGREES') }} <br /></p>
								<p>{{ $t('THE_EXPRESS_PROVISIONS_IN_THIS_NDA') }}<br /></p>
								<p>{{ $t('THE_COMPANY_ITS_AFFILIATES') }}</p>
								<p>{{ $t('IF_ANY_PROVISION_OF_THIS_NDA') }} <br /></p>
								<p>{{ $t('THIS_NDA_SHALL_NOT_CREATE') }} </p>
								<p>{{ $t('THE_RECIPIENT_SHALL_NOT_DISCLOSE_THE_CONFIDENTIAL_INFORMATION') }} </p>
							</div>

							<div class="space-y-4">
								<h5 class="text-lg font-bold">{{ $t('COMMENCEMENT_AND_TERM') }}</h5>
								<p>{{ $t('THIS_NDA_SHALL_COME_INTO_EFFECT') }} <br /></p>
								<p>{{ $t('THIS_NDA_SHALL_REMAIN_IN_FULL_FORCE') }} <br /></p>
							</div>


							<div class="space-y-4">
								<h5 class="text-lg font-bold">{{ $t('GOVERNING_LAW_AND_JURISDICTION') }}</h5>
								<p>{{ $t('ALL_MATTERS_RELATED_TO_THE_NDA') }} <br /></p>
								<p>{{ $t('ANY_DISPUTE_CONTROVERSY') }} <br /></p>
								<p>{{ $t('THIS_NDA_IS_SIGNED_ON_THE_EFFECTIVE_DATA') }} </p>
							</div>
			


						</div> -->
								<!-- <div class="space-y-8 p-8">
							<div class="space-y-4">
								<h5 class="text-lg font-bold">{{ $t('MISCELLANEOUS') }}</h5>
								<p>{{ $t('THE_RECIPIENT_AGREES_AND_ACKNOWLEDGS_THAT_IT_SHALL_NOT_OBTAIN') }} <br /></p>
								<p>{{ $t('THE_RECIPIENT_SHALL_IMMEDIETLLY') }} <br /></p>
								<p>{{ $t('THE_RECIPIENT_HEREBY_AGREES') }} <br /></p>
								<p>{{ $t('THE_EXPRESS_PROVISIONS_IN_THIS_NDA') }}<br /></p>
								<p>{{ $t('THE_COMPANY_ITS_AFFILIATES') }}</p>
								<p>{{ $t('IF_ANY_PROVISION_OF_THIS_NDA') }} <br /></p>
								<p>{{ $t('THIS_NDA_SHALL_NOT_CREATE') }} </p>
								<p>{{ $t('THE_RECIPIENT_SHALL_NOT_DISCLOSE_THE_CONFIDENTIAL_INFORMATION') }} </p>
							</div>
						</div> -->

					<!-- </div>
				</div>
			</div> -->
		</section>

		<section class="text-thin bg-white text-black">
			<div class="container mx-auto">
				<div class="grid">
					<div class="pipedriveWebForms p-8" data-pd-webforms="https://webforms.pipedrive.com/f/bXCZRhnEATSSg8AiaLHNw1Fkti3HRSJNU7pWyVOxhoYkm92ZdiQQcGzHw83hVqKg5J">
						<script src="https://webforms.pipedrive.com/f/loader"></script>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	name: 'Franchise',
	head() {
		return {
			title: 'Non-Disclosure Agreement',
		}
	},
}
</script>
