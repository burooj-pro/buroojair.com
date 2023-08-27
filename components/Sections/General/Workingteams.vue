<template>
  <div class="container my-24 mx-auto md:px-6">
    <section class="mb-32 text-center font-neo-sans">
      <h2 class="mb-12 text-3xl font-bold uppercase leading-relaxed text-gray-600">
        {{ $t('MEET_BUROOJ_AIR_TEAM') }}
      </h2>
      <div class="overflow-x-auto relative">
        <div class="flex lg:gap-6 gap-4">
          <div
            class="lg:w-1/3 lg:mb-8 mb-8"
            v-for="member in teamMembers"
            :key="member.id"
          >
            <div class="member-card relative rounded-lg overflow-hidden bg-white border border-gray-300 h-70 w-80">
              <div class="member-image-circle mx-auto mt-4 w-24 h-24 rounded-full">
                <img
                  :src="member.image"
                  :alt="member.name"
                  class="w-full h-full object-cover rounded-full"
                />
              </div>
              <div class="p-4">
                <h5 class="mb-2 text-lg font-semibold">{{ member.name }}</h5>
                <p class="mb-2">{{ member.position }}</p>
                <div class="flex justify-center space-x-2 p-2">
                	<a :href="member.linkedin" class="px-2">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
										class="h-3.5 w-3.5 text-primary dark:text-primary-400">
										<path fill="currentColor"
											d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
									</svg>
								</a>
                  <a :href="member.email" class="px-2 text-primary">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
                  </a>
                  <!-- Add more social media links/icons as needed -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
	<!-- <div>
		<div class="">
			<div class="container my-24 mx-auto md:px-6">
				<section class="mb-32 text-center">
					<h2 class="mb-12 text-3xl font-bold">
						Meet Buroojair team
					</h2>
					<div
						class="lg:gap-xl-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
						<div class="lg:mb-12 mb-12" v-for="member in teamMembers" :key="member.id">
							<img class="mx-auto rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
								:src="member.image" :alt="member.name" />
							<h5 class="mb-2 mt-2 text-lg font-bold">{{ member.name }}</h5>
							<p class="mb-2">{{ member.position }}</p>
							<ul class="mx-auto flex list-inside justify-center">
								<a :href="member.linkedin" class="px-2">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
										class="h-3.5 w-3.5 text-primary dark:text-primary-400">
										<path fill="currentColor"
											d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
									</svg>
								</a>
							</ul>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div> -->

</template>

<script>
export default {
	data() {
		return {
			teamMembers: [
				{
					id: 1,
					name: 'Mohammed Bin Faihan',
					position: 'Chief Executive Officer',
					image: '/images/gallery/Mohammed.png',
					linkedin: 'https://www.linkedin.com/in/mohammed-bin-faihan/',
					email: '',
				},
				{
					id: 2,
					name: 'Mohannad F. Otaibi',
					position: 'Chief Technology Officer',
					image: '/images/gallery/Mohannad.png',
					linkedin: 'https://www.linkedin.com/in/mohannadotaibi/',
					email: '',
				},
				{
					id: 3,
					name: 'Osamah Algrainees',
					position: 'Managing Director',
					image: '/images/gallery/osama.png',
					linkedin: 'https://www.linkedin.com/in/osama-al-grainees-business-developer®-14b44b179/',
					email: '',
				},
				{
					id: 4,
					name: 'Hatim Shuwaikan',
					position: 'Operation Manager',
					image: '/images/gallery/Hatim.png',
					linkedin: 'https://www.linkedin.com/in/hatim-h-shuwaikan/',
					email: 'hatim@burooj.pro',
				},
				// {
				// 	id: 5,
				// 	name: 'Faisal G. Alotaibi',
				// 	position: 'Account Manager',
				// 	image: '/images/gallery/Faisal.png',
				// 	linkedin: '',
				// 	email: '',
				// },
				{
					id: 6,
					name: 'Mutlaq N. Aldhubaib',
					position: 'Software Engineer',
					image: '/images/gallery/Mutlaq.png',
					linkedin: 'https://www.linkedin.com/in/mutlaq-aldhbuiub/',
					email: '',
				},
				// 		{
				// 	id: 7,
				// 	name: 'Sumaya Alzahrani',
				// 	position: 'Marketing Manager',
				// 	image: '/images/gallery/Sumaya.png',
				// 	linkedin: '',
				// 	email: '',
				// },
				{
					id: 8,
					name: 'Aisha AlAseery',
					position: 'Senior Account Manage',
					image: '/images/Aisha.png',
					linkedin: 'https://www.linkedin.com/in/aisha-al-aseery-a7570b190',
					email: '',
				},
				// 					{
				// 	id: 9,
				// 	name: 'Ghadeer Alanezi',
				// 	position: 'Public Relations Manager',
				// 	image: '/images/gallery/ghdeer.png',
				// 	linkedin: '',
				// 	email: '',
				// },
										{
					id: 10,
					name: 'Hanin Shubat',
					position: 'Public Relations Manager',
					image: 'https://media.licdn.com/dms/image/C4D03AQEhBvcmCKD0FQ/profile-displayphoto-shrink_200_200/0/1639233293545?e=1698278400&v=beta&t=35tu_KCfW1Xr9QCxn-1fjJCcHZRaMeW27Gt9Y6ayAIE',
					linkedin: 'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAC-em00B3igBHvbXFXCXy4531Eztgf31c5s&keywords=hanin%20g.%20alharbi&origin=RICH_QUERY_SUGGESTION&position=0&searchId=760ec250-679f-4a39-b299-607903346c67&sid=9LZ',
					email: '',
				},
				// 								{
				// 	id: 10,
				// 	name: 'Majid Alyami',
				// 	position: 'Senior Bidding Specialist',
				// 	image: '/images/gallery/MAjid.png',
				// 	linkedin: '',
				// 	email: '',
				// },
			],
		};
	},
};
</script>





