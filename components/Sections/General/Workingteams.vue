<template>
	<div>
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
	</div>
</template>

<script>
export default {
	data() {
		return {
			teamMembers: [
				{
					id: 1,
					name: 'Mutlaq Aldhbuiub',
					position: 'Software engineer',
					image: 'https://media.licdn.com/dms/image/D4D03AQFDQLuI2pfJZQ/profile-displayphoto-shrink_800_800/0/1674970595981?e=1698278400&v=beta&t=PAx9qDTxbA2Zo33HDHQLv03lVkAdkEXmgGduQCjeYTM',
					linkedin: 'https://www.linkedin.com/in/mutlaq-aldhbuiub',
				},
				{
					id: 2,
					name: 'Adel Omar',
					position: 'Zahmaola Manager',
					image: 'https://media.licdn.com/dms/image/D4D03AQExfU58PhnOxg/profile-displayphoto-shrink_800_800/0/1665065967520?e=1698278400&v=beta&t=XRccKuCu3U-lha_wDRtu0smCOrq3u0MErsokwo9j0a0',
					linkedin: 'https://www.linkedin.com/in/adel-omar',
				},
				{
					id: 3,
					name: 'Hussain Alsaffar',
					position: 'Application Developer',
					image: 'https://avatars.githubusercontent.com/u/58249549?v=4',
					linkedin: 'https://www.linkedin.com/in/alsaffar16/',
				},
				{
					id: 4,
					name: 'Mohannad Alotaibi',
					position: 'CTO',
					image: 'https://media.licdn.com/dms/image/C5603AQEAZv7YN7H3bQ/profile-displayphoto-shrink_800_800/0/1516655456590?e=1698278400&v=beta&t=Z4wsx_Hm0w_BKxdsf15lTLu7Vsl-9uIW8zL4bWJIdr8',
					linkedin: 'https://www.linkedin.com/in/mohannadotaibi/',
				},
				{
					id: 5,
					name: 'Mohammed Alotaibi',
					position: 'CEO',
					image: 'https://media.licdn.com/dms/image/C4D03AQFNk7eHIJwZBQ/profile-displayphoto-shrink_800_800/0/1607189463824?e=1698278400&v=beta&t=rluBlPoeLnmpk3179sSog8QWbSRyA3DHbu6Nm4Z40Rk',
					linkedin: 'https://www.linkedin.com/in/mohammed-bin-faihan/',
				},
				{
					id: 6,
					name: 'Osama Algrainees',
					position: 'Managing Director',
					image: 'https://media.licdn.com/dms/image/D4D03AQGBKbOzr3v-1A/profile-displayphoto-shrink_800_800/0/1688397243757?e=1698278400&v=beta&t=avGvf9oA7SqRBe6Qb9niYki225x5akIga2WhvBPtvl4',
					linkedin: 'https://www.linkedin.com/in/osama-al-grainees-business-developer%C2%AE-14b44b179/',
				},
			],
		};
	},
};
</script>
