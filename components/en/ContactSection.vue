<template>
            <section class="contact-sec">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="contact-left">
                            <div class="text-box">
                                <h3>CONTACT US</h3>
                                <p>Please send us a message if you have any questions or want more info. We will respond or get in touch as soon as possible.</p>
                            </div>
                            <ul>
                                <li>
                                    <p><strong>KTV Working Drone</strong></p>
                                    <p>Hanøytangen 111</p>
                                    <p>5310 Hauglandshella</p>
                                    <p>Norway</p>
                                </li>
                                <li>
                                    <p>E-mail: post@ktvworkingdrone.com</p>
                                    <p>Phone: +47 56 15 66 00</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="contact-right">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="name" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="E-mail" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="message" />
                                </div>
                                <div class="form-group">
                                    <input type="submit" class="btn btn-secondary" value="SEND MESSAGE" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
h3 {
    color: $mainly_blue;
    font-size: $font50;
    text-transform: uppercase;
    line-height: 68px;
    @include Red_Hat_Display(900);
}

p {
    font-size: $font16;
    line-height: 24px;
    @include Red_Hat_Display(400);
    color: $charcoal;
}

.btn-secondary {
    background-color: $orange;
    padding: 0;
    border: 1px solid $orange;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: $white;
    text-transform: uppercase;
    @include Red_Hat_Display(800);
    @include border_radius(4px);
    height: 54px;
    padding: 0 29px;
    span {
        display: block;
        margin-right: 10px;
        svg {
            width: 20px;
            height: 20px;
            display: block;
        }
    }
}

.btn-white {
    background-color: $white;
    color: $black;
}

/***** CONTACT SEC ******/

.contact-sec {
    background-color: $primary;
    padding: 130px 0;
    .contact-left {
        .text-box {
            padding-bottom: 43px;
            h3 {
                color: $white;
                margin: 0 0 21px 0;
            }
            p {
                color: $white;
                max-width: 510px;
                width: 100%;
            }
        }
        ul {
            border-top: 1px dotted $white;
            padding-top: 30px;
            max-width: 302px;
            width: 100%;
            li {
                margin: 0 0 20px 0;
                &:last-child {
                    margin: 0;
                }
                p {
                    color: $white;
                    margin: 0 0 3px 0;
                    line-height: 1;
                }
            }
        }
    }
    .contact-right {
        margin: 20px 0 0 0;
        form {
            .form-group {
                margin-bottom: 15px;
                .form-control {
                    border: none;
                    background-color: $white;
                    @include Red_Hat_Display(300);
                    font-size: $font14;
                    text-transform: uppercase;
                    height: 59px;
                    color: $black;
                    @include border_radius(5px);
                    padding: 7px 20px;
                    &::placeholder {
                        color: $black;
                    }
                }
            }
        }
    }
}
</style>