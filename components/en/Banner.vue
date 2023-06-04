<template>
        <section class="banner-sec">
            <iframe src="https://player.vimeo.com/video/713580406?h=6988e72af6&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;transparent=0&amp;background=1&amp;app_id=122963" frameborder="0" allowfullscreen allow="autoplay; fullscreen; picture-in-picture"
                title="KTV Working Drone" data-ready="true" class="elementor-background-video-embed d-none d-md-block" style="width: 1903px; height: 1072.11px;"></iframe>
            <iframe src="https://player.vimeo.com/video/713580406?h=6988e72af6&amp;app_id=122963" width="426" height="240" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="KTV Working Drone" data-ready="true" class="elementor-background-video-embed d-block d-md-none"
                style="width: 1903px; height: 1072.11px;"></iframe>
            <div class="banner-inner">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="banner-form">
                                <div class="text-box">
                                    <h3>NOW REQUEST A QUOTE FOR DRONE CLEANING</h3>
                                    <p>Are you interested in having a drone clean the windows or the facade of your building?</p>
                                    <p>You can contact us anywhere in the world for a non-binding price quote.</p>
                                </div>
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
                                                    <option>WHICH COUNTRY?</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea class="form-control" placeholder="BUILDING ADDRESS AND INFO"></textarea>
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
                                                <input type="submit" class="btn btn-default" value="SEND INQUIRY" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
                        fill="#f0f0f1"></path>
                </svg>
            </div>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
// Banner Section
.banner-sec {
    position: relative;
    margin: 0 0 -5px 0;
    .banner-inner {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        margin: 0 auto;
        transform: translate(-50%, -50%);
        max-width: 1390px;
        // padding: 120px 0 0 0;
        .banner-form {
            background-color: rgba($primary, 0.93);
            padding: 57px;
            max-width: 475px;
            width: 100%;
            @include border_radius (16px 80px 16px 80px);
            .text-box {
                margin: 0 0 35px 0;
                h3 {
                    color: $white;
                    font-size: $font28;
                    text-transform: uppercase;
                    line-height: 32px;
                    @include Al_Qabas(bold);
                    margin: 0 0 24px 0;
                }
                p {
                    color: $white;
                    font-size: $font13;
                    line-height: 15px;
                    margin-bottom: 14.4px;
                    @include Red_Hat_Display(600);
                }
            }
            form {
                .form-group {
                    margin-bottom: 10px;
                    .form-control {
                        @include border_radius(0);
                        background-color: $white;
                        box-shadow: none;
                        height: 40px;
                        font-size: $font12;
                        @include Red_Hat_Display(400);
                        text-transform: uppercase;
                        border: none;
                        &:focus {
                            border-color: transparent;
                        }
                    }
                    textarea {
                        &.form-control {
                            height: 106px;
                            resize: none;
                        }
                        &.info-field {
                            height: 58px;
                        }
                    }
                    .btn-default {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0;
                        height: 40px;
                        max-width: 237px;
                        width: 100%;
                        color: #fff;
                        text-transform: uppercase;
                        @include Al_Qabas(bold);
                        letter-spacing: 0.5px;
                        background-color: $orange;
                    }
                }
            }
        }
    }
}
</style>
