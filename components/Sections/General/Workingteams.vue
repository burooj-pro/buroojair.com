<template>
	<div class="container my-24 mx-auto md:px-6">
		<section class="mb-32 text-center font-neo-sans">
			<h2 class="mb-12 text-3xl font-bold uppercase leading-relaxed text-gray-600">
				{{ $t('MEET_BUROOJ_AIR_TEAM') }}
			</h2>
			<div class="overflow-x-auto relative m-5">
				<div class="flex lg:gap-6 gap-4">
					<div class="lg:w-1/3 lg:mb-8 mb-8" v-for="member in teamMembers" :key="member.id">
						<div
							class="member-card relative rounded-lg overflow-hidden bg-white border border-gray-300 h-70 w-80">
							<div class="member-image-circle mx-auto mt-4 w-24 h-24 rounded-full">
								<img :src="member.image" :alt="member.name"
									class="w-full h-full object-cover rounded-full" />
							</div>
							<div class="p-4">
								<h5 class="mb-2 text-lg font-semibold">
									{{ $i18n.locale === 'ar' ? member.name_ar : member.name }}
								</h5>
								<p class="mb-2">
									{{ $i18n.locale === 'ar' ? member.position_ar : member.position }}
								</p>
								<div class="flex justify-center space-x-2 p-2">
									<a :href="member.linkedin" class="px-2">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
											class="h-3.5 w-3.5 text-primary dark:text-primary-400">
											<path fill="currentColor"
												d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
										</svg>
									</a>
									<a :href="member.email" class="px-2 text-primary">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
											class="bi bi-envelope-fill" viewBox="0 0 16 16">
											<path
												d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
										</svg>
									</a>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			teamMembers: [
				{
					id: 1,
					name: 'Mohammed Bin Faihan',
					name_ar: 'محمد بن فيحان',
					position: 'Chief Executive Officer',
					position_ar: 'الرئيس التنفيذي',
					image: '/images/employees/Mohammed.png',
					linkedin: 'https://www.linkedin.com/in/mohammed-bin-faihan/',
					email: 'mailto:mohammed@buroojair.com',
				},
				{
					id: 2,
					name: 'Mohannad F. Otaibi',
					name_ar: 'مهند العتيبي',
					position: 'Chief Technology Officer',
					position_ar: 'رئيس تكنولوجيا المعلومات',
					image: '/images/employees/Mohannad.png',
					linkedin: 'https://www.linkedin.com/in/mohannadotaibi/',
					email: 'mailto:mohannad@buroojair.com',
				},
				{
					id: 3,
					name: 'Faisal G. Alotaibi',
					name_ar: 'فيصل العتيبي',
					position: 'Account Manager',
					position_ar: 'مدير حساب',
					image: '/images/employees/Faisal.png',
					linkedin: '',
					email: 'mailto:faisal@buroojair.com',
				},
				{
					id: 4,
					name: 'Ghadeer Alanezi',
					name_ar: 'غدير العنزي',
					position: 'Public Relations Manager',
					position_ar: 'مدير العلاقات العامة',
					image: '/images/employees/ghdeer.png',
					linkedin: 'https://www.linkedin.com/in/ghadeer-alenizy/',
					email: 'mailto:ghadeer@buroojair.com',
				},
				{
					id: 5,
					name: 'Osamah Algrainees',
					name_ar: 'أسامة القرينيس',
					position: 'Managing Director',
					position_ar: 'المدير العام',
					image: '/images/employees/osama.png',
					linkedin: 'https://www.linkedin.com/in/osama-al-grainees-business-developer®-14b44b179/',
					email: 'mailto:osamah@buroojair.com',
				},
				{
					id: 6,
					name: 'Hatim Shuwaikan',
					name_ar: 'حاتم شويكان',
					position: 'Operation Manager',
					position_ar: 'مدير العمليات',
					image: '/images/employees/Hatim.png',
					linkedin: 'https://www.linkedin.com/in/hatim-h-shuwaikan/',
					email: 'mailto:hatim@buroojair.com',
				},
				{
					id: 7,
					name: 'Mutlaq N. Aldhubaib',
					name_ar: 'مطلق الضبيب',
					position: 'Software Engineer',
					position_ar: 'مهندس برمجيات',
					image: '/images/employees/Mutlaq.png',
					linkedin: 'https://www.linkedin.com/in/mutlaq-aldhbuiub/',
					email: 'mailto:mutlaq@buroojair.com',
				},
				{
					id: 8,
					name: 'Sumaya Alzahrani',
					name_ar: 'سمية الزهراني',
					position: 'Marketing Manager',
					position_ar: 'مدير التسويق',
					image: '/images/employees/Sumaya.png',
					linkedin: 'https://www.linkedin.com/in/sumaya-alzahrani-090a821a8',
					email: 'mailto:sumaya@buroojair.com',
				},
				{
					id: 9,
					name: 'Aisha AlAseery',
					name_ar: 'عائشة العسيري',
					position: 'Senior Account Manager',
					position_ar: 'مدير حساب خبير',
					image: '/images/employees/Aisha.png',
					linkedin: 'https://www.linkedin.com/in/aisha-al-aseery-a7570b190',
					email: 'mailto:aisha@buroojair.com',
				},

				{
					id: 10,
					name: 'Hanin Shubat',
					name_ar: 'حنين شباط',
					position: 'Business Support Manager',
					position_ar: 'مدير دعم الأعمال',
					image: '/images/employees/hanin.png',
					linkedin: 'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAC-em00B3igBHvbXFXCXy4531Eztgf31c5s&keywords=hanin%20g.%20alharbi&origin=RICH_QUERY_SUGGESTION&position=0&searchId=760ec250-679f-4a39-b299-607903346c67&sid=9LZ',
					email: 'mailto:hanin@buroojair.com',
				},
				{
					id: 11,
					name: 'Majid Alyami',
					name_ar: 'ماجد اليامي',
					position: 'Senior Bidding Specialist',
					position_ar: 'أخصائي مناقصات أول',
					image: '/images/employees/MAjid.png',
					linkedin: 'https://www.linkedin.com/in/majid-alyami-6ab700233/',
					email: 'mailto:majid@buroojair.com',
				},
			],
		};
	},
};
</script>





