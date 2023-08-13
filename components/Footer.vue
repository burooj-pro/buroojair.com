<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="footer-left">
						<p>
							Burooj Air®
							<br />
							{{ $t("FOR_INQUIRIES_PLEASE_USE_OUR_LISTED_CONTACT_INFO") }}
						</p>
					</div>
				</div>
				<div class="col-md-6">
					<div class="footer-right">
						<p>{{ $t("COPY_RIGHT") }}</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
	background-color: #3437ff;
	padding: 22px 0;
	.footer-left {
		display: flex;
		align-items: center;
		p {
			color: $white;
			@include NeoSans(600);
			font-size: $font16;
			line-height: 1;
			padding-left: 10px;
		}
	}
	.footer-right {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		p {
			color: $white;
			@include NeoSans(500);
			font-size: $font15;
		}
	}
}
</style>
