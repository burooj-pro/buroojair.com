<template>
	<div id="facadeCleaningPage" class="overflow-hidden">
		<Header />
		<!-- Banner Start -->
		<SectionsHeading :title="$t('HIGH_RISE_FACADE_CLEANING')" image="~assets/images/burooj_air_drone.jpg" />

		<!-- Service Start -->
		<section class="service">
			<div class="container mx-auto">
				<div class="row">
					<div class="col-lg-7">
						<div class="text-box">
							<h3>{{ $t("SERVICES") }}</h3>
							<h4>{{ $t("HIGH_RISE_FACADE_CLEANING") }}</h4>
							<div class="video-holder">
								<img src="~assets/images/BuroojAir_1.jpg" alt="#" class="w-100" />
							</div>
							<h5>{{ $t("SELFCLEANER_METHOD") }}</h5>
							<p>
								<strong>{{ $t("THE_SELFCLEANER_METHOD_WAS_DEVELOPED") }}</strong>
							</p>
							<p>
								{{ $t("THE_METHOD_ENABLES_FACADE_CLEANING") }}
							</p>
							<p>
								{{ $t("ALREADY_AFTER_1_2_WEEKS_YOU_WILL") }}
							</p>
						</div>
					</div>
					<div class="col-lg-5">
						<div class="text-box">
							<h5>{{ $t("FACADE_CLEANING") }}</h5>
							<p>
								<strong>
									{{ $t("MANY_MULTI_STOREY_BUILDINGS_CREATE") }}
								</strong>
							</p>
							<p>
								{{ $t("ENVIRONMENTAL_FRIENDLY_SOLUTIONS") }}
							</p>
							<p>
								{{ $t("HAVING_A_CLEAN_FACADE_IS_ONE") }}
							</p>
							<p>
								{{ $t("BUROOJ_AIR_WORKING_DRONE_IS_NOW_ABLE_TO_PROVIDE") }}
							</p>
							<p>
								{{ $t("BUROOJ_AIR_WORKING_DRONE_IS_ALSO_CONSIDERED_TO_BE_WORKSAFE") }}
							</p>
							<!-- <a href="#" class="btn btn-secondary"> {{ $t("ENQUIRE_TODAY") }}</a> -->
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Service End -->
		<!-- ADVANTAGE SECTION -->
		<SectionsBenefits />
		<!-- Advantages SECTION -->
		<section class="advantages">
			<div class="container mx-auto">
				<div class="row align-items-center">
					<div class="col-lg-8">
						<div class="text-box">
							<h3>
								{{ $t("ADVANTAGES_OF_GLASS_AND_FACADE_CLEANING_WITH_BUROOJ_AIR_DRONE") }}
							</h3>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="text-box">
							<h4>{{ $t("IMPORTANT_KEY_FACTS") }}</h4>
							<p>
								<strong>1000 {{ $t("SQM_HOUR") }}</strong
								><br />{{ $t("CAPACITY_FACADE_CLEANING") }}
							</p>
							<p>
								<strong>1500 {{ $t("SQM_HOUR") }}</strong
								><br />{{ $t("CAPACIY_WINDOW_CLEANING") }}
							</p>
							<p>
								<strong>{{ $t("HEIGHT") }} 100+ {{ $t("METER") }}</strong
								><br />{{ $t("DRONE_FULLY_OPERATIONAL") }}
							</p>
							<p>
								<strong>{{ $t("FLYTIME") }} 24 {{ $t("HOUR") }}</strong
								><br />{{ $t("BATTERY_CASE_BATTERIES") }}
							</p>
							<p>
								<strong>7 {{ $t("M_SEC") }}</strong
								><br />{{ $t("WORKS_IN_MAXIMUM_WINDS") }} 7 {{ $t("M_SEC") }}. {{ $t("UP_TO") }} 15 {{ $t("M_SEC") }} {{ $t("WITHOUT_EQUIPMENT") }}
							</p>
							<p>
								<strong>{{ $t("UP_TO") }} 180 {{ $t("BAR_PRESSURE") }}</strong
								><br />{{ $t("CAPACITY_WATER_PRESSURE") }}
							</p>
							<p>
								<strong>{{ $t("AIRSENSE_ADS") }}</strong
								><br />{{ $t("ADVANCED_FLIGHT_COLLISION") }}
							</p>
							<p>
								<strong>{{ $t("SELF_HEATING_BATTERY") }}</strong
								><br />{{ $t("EFFICIENT_BATTERY_USE") }}
							</p>
							<p>
								<strong>-20°C {{ $t("TO") }} 50°C</strong><br />{{ $t("WORKING_TEMPERATURE_RANGE") }}
							</p>
							<p>
								<strong>{{ $t("IP_45") }}</strong
								><br />{{ $t("PROTECTED_AGAINST_PRESSURE") }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- INQUIRY SECTION -->
		<section class="inquiry">
			<div class="container mx-auto">
				<div class="row">
					<div class="col-lg-6">
						<div class="text-box">
							<h3>{{ $t("ENQUIRE_TODAY") }}</h3>

							<p>
								{{ $t("BUROOJ_AIR_DRONES_PROVIDES_A_SOLUTION") }}
								<b>{{ $t("BUILDING_OWNER_DEVELOPER_BUILDING_MANAGEMENT_BUSINESS_OR") }} </b>
								{{ $t("WITH_HIGH_RISE_WINDOW_CLEANING") }}
							</p>
							<p>
								<b>{{ $t("BUROOJ_AIR_DRONES") }}</b> {{ $t("OFFERS_VARIETY_OF_DIRECT_INDIRECT") }}
							</p>
						</div>
					</div>
					<div class="col-lg-6">
						<form>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Name" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Company" />
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="E-mail" />
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<select class="form-control">
											<option>{{ $t("WHICH_COUNTRY") }}</option>
										</select>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<textarea class="form-control" rows="4" placeholder="BUILDING ADDRESS AND INFO"></textarea>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<input type="text" class="form-control" placeholder="PHONE (REMEMBER COUNTRY CODE)" />
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<textarea class="form-control info-field" placeholder="OTHER INFO"></textarea>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group mb-0">
										<input type="submit" class="btn btn-secondary" value="SEND INQUIRY" />
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		<SectionsContact />
		<Footer />
	</div>
</template>
