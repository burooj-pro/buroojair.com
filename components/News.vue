<template>
	<div class="row">
		<div class="col-md-4 col-sm-6" v-for="index in 10" :key="index">
			<div class="news-box">
				<div class="image-holder">
					<a href="#">
						<!-- <img src="~assets/images/news-img.jpg" alt="" class="img-fluid" /> -->
					</a>
				</div>
				<div class="text-box">
					<h5>WATCH THE STORY OF BUROOJ AIR WORKING DRONE</h5>
					<span>MARS 24, 2023</span>
					<p>Watch the video where CEO and founder Kennet Nilsen explains why and how BUROOJ AIR Working Drone was started, talking about the teams behind BUROOJ AIR Working</p>
					<NuxtLink to="/news/_slug">Read More »</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			n: 1,
		}
	},
}
</script>
