<template>
	<section class="bg-[#EBF5FF] py-16 font-neo-sans dark:bg-[#04061C] lg:py-24">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
				<!-- Left Side - Text Content -->
				<div>
					<h2 class="mb-6 text-3xl font-black uppercase leading-tight text-gray-900 dark:text-white lg:text-5xl xl:text-6xl">
						{{ $t('BEHIND_THE_PROJECTS') || 'BEHIND THE PROJECTS' }}
			</h2>
					<p class="text-base font-light leading-relaxed text-gray-700 dark:text-gray-300 lg:text-lg">
						{{ $t('BEHIND_THE_PROJECTS_DESC') || 'Meet the minds behind the magic. Our team blends creativity, strategy, and passion to turn ideas into impactful design. Together, we bring your vision to life—one pixel at a time.' }}
					</p>
				</div>

				<!-- Right Side - Team Members Grid (2x3) -->
				<div class="grid grid-cols-2 gap-6 lg:gap-8">
					<div
						v-for="member in teamMembers"
						:key="member.id"
						class="relative aspect-[3/4] overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105"
					>
						<img
							:src="member.image"
							:alt="`${member.name} - ${$i18n.locale === 'ar' ? member.position_ar : member.position}`"
							class="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
							loading="lazy"
						/>
						<!-- Linear Gradient Overlay from Bottom -->
						<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none z-[1]"></div>
						<!-- Name and Position at Bottom Left -->
						<div class="absolute bottom-0 left-0 right-0 p-4 lg:p-6 z-10">
							<h3 class="text-base font-semibold leading-tight text-white lg:text-lg mb-1">
								{{ $i18n.locale === 'ar' ? member.name_ar : member.name }}
							</h3>
							<p class="text-sm font-light text-white/90 lg:text-base">
								{{ $i18n.locale === 'ar' ? member.position_ar : member.position }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
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
				},
				{
					id: 2,
					name: 'Faisal G. Alotaibi',
					name_ar: 'فيصل العتيبي',
					position: 'Managing Director',
					position_ar: 'مدير حساب',
					image: '/images/employees/Faisal.png?v=2',
				},
				{
					id: 3,
					name: 'Ghadeer Alanezi',
					name_ar: 'غدير العنزي',
					position: 'Public Relations Manager',
					position_ar: 'مدير العلاقات العامة',
					image: '/images/employees/Ghadeer.png',
				},
				{
					id: 4,
					name: 'Omar A. Ahmed',
					name_ar: 'مطلق الضبيب',
					position: 'UAV Operations Department Manager',
					position_ar: 'مهندس برمجيات',
					image: '/images/employees/Omar.png',
				},
				{
					id: 5,
					name: 'Mohammad S. Barayan',
					name_ar: 'سمية الزهراني',
					position: 'Drone Operator',
					position_ar: 'مدير التسويق',
					image: '/images/employees/MohammedB.png',
				},
				// {
				// 	id: 6,
				// 	name: 'Mahjoub O. Mohamed',
				// 	name_ar: 'عائشة العسيري',
				// 	position: 'Drone Operator Assistant',
				// 	position_ar: 'مدير حساب خبير',
				// 	image: '/images/employees/Mahjob.png',
				// },
				{
					id: 7,
					name: 'Majid A. Alyami',
					name_ar: 'ماجد اليامي',
					position: 'Projects’ Bidding Manager',
					position_ar: 'أخصائي مناقصات أول',
					image: '/images/employees/Majid.png',
				},
				// {
				// 	id: 7,
				// 	name: 'Aisha M. AlAseery',
				// 	name_ar: 'ماجد اليامي',
				// 	position: 'Senior Account Manager',
				// 	position_ar: 'أخصائي مناقصات أول',
				// 	image: '/images/employees/Aisha.png',
				// },
			],
		};
	},
};
</script>

<style scoped>
.overflow-x-auto {
	overflow-x: auto;
	white-space: nowrap;
}

.flex > * {
	display: inline-block;
}

img {
	transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
}

img:hover {
	transform: scale(1.05);
	filter: none;
}

</style>
