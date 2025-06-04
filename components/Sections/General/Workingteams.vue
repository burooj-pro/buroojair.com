<template>
	<div class="container my-24 mx-auto md:px-6">
		<section class="mb-32 text-center font-neo-sans">
			<h2 class="mb-12 text-3xl font-bold uppercase leading-relaxed text-gray-800">
				{{ $t('MEET_BUROOJ_AIR_TEAM') }}
			</h2>
			<div class="overflow-x-auto">
				<div class="flex space-x-4">
					<div
						v-for="member in teamMembers"
						:key="member.id"
						class="relative flex-shrink-0 rounded-lg overflow-hidden bg-white shadow-md w-64 h-80"
					>
						<div class="relative w-full h-full overflow-hidden">
							<img
								:src="member.image"
								:alt="member.name"
								class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-105 grayscale hover:grayscale-0"
							/>
							<div
								class="absolute inset-0 pointer-events-none"
								style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #000 133.3%);"
							></div>
						</div>
						<div class="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
							<h3 class="text-lg font-semibold">
								{{ $i18n.locale === 'ar' ? member.name_ar : member.name }}
							</h3>
							<p class="text-sm">
								{{ $i18n.locale === 'ar' ? member.position_ar : member.position }}
							</p>
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
				},
				{
					id: 2,
					name: 'Faisal G. Alotaibi',
					name_ar: 'فيصل العتيبي',
					position: 'Managing Director',
					position_ar: 'مدير حساب',
					image: '/images/employees/Faisal.png',
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
