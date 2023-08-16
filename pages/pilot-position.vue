<template>
	<div id="franchiseIndexPage">
		<Header disableSpacer="true" />

		<section class="content p-5">
			<div class="container mx-auto p-5">
				<div class="row">
					<div class="col-12 col-md-6 text-md-start text-center mb-5 mb-md-0">
						<div class="contact-left">
							<div class="text-box">
								{{ $t("GACA_PILOTE_DESC") }}
								<h3>{{ $t("GACA_PILOTE") }}</h3>
								<p>{{ $t("GACA_PILOTE_DESC") }}</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-6">
						<div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6b1fBjUKYW15kfyjrvmHuMTeoIPFjH7wKNdSYfEV2XdYJJHt7SYhYQO0VSalzEAk7N"><script src="https://webforms.pipedrive.com/f/loader"></script></div>
					</div>
				</div>

				<div class="row pt-3">
					<div class="col-4"></div>
				</div>
			</div>
		</section>

		<SectionsContact />
    
		<Footer />
	</div>
</template>
