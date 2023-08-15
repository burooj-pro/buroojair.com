<template>
    <section class="inquiry">
      <div class="container mx-auto">
        <div class="row">
          <div class="col-lg-6">
            <div class="text-box">
              <h3>
                {{ $t("ENQUIRE_TODAY") }}
              </h3>

              <p>
                {{ $t("IF_YOU_ARE") }}

                <b>{{ $t("BUILDING_OWNER_DEVELOPER") }}</b>
                <b>{{ $t("CLEANING_COMPANY") }}</b>
                {{ $t("WITH_HIGH_RISE_WINDOW_CLEANING") }}
              </p>
              <p>
                <b>{{ $t("BUROOJ_AIR_WORKING_DRONE") }}</b>

                {{ $t("HAS_MANY_WAYS_THAT_CAN_PROVIDE") }}
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <form>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Company"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="E-mail"
                    />
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
                    <textarea
                      class="form-control"
                      rows="4"
                      placeholder="BUILDING ADDRESS AND INFO"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="PHONE (REMEMBER COUNTRY CODE)"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      class="form-control info-field"
                      placeholder="OTHER INFO"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group mb-0">
                    <input
                      type="submit"
                      class="btn btn-secondary"
                      value="SEND INQUIRY"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
</template>