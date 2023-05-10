<template>
            <section class="advantage-sec">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="text-box">
                            <h3>مزايا استخدام KTV العامل بدون طيار</h3>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="text-list">
                            <ul>
                                <li><span><img src="~assets/images/check-icon.png" alt="" /></span>
                                    <p> سريع وفعال - 5 - 10 مرات أسرع من الطرق التقليدية</p>
                                </li>
                                <li><span><img src="~assets/images/check-icon.png" alt="" /></span>
                                    <p>سهولة الوصول إلى المناطق التي يصعب الوصول إليها</p>
                                </li>
                                <li><span><img src="~assets/images/check-icon.png" alt="" /></span>
                                    <p>أكثر أمانًا وأمانًا</p>
                                </li>
                                <li><span><img src="~assets/images/check-icon.png" alt="" /></span>
                                    <p>لا توجد معدات ارتفاع مطلوبة للوصول </p>
                                </li>
                                <li><span><img src="~assets/images/check-icon.png" alt="" /></span>
                                    <p> حل لا تلامس</p>
                                </li>
                            </ul>
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
    font-size: $font62;
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

/***** ADVANTAGE DRONE *****/

.advantage-sec {
    background-color: rgba($secondary, 0.1);
    padding: 130px 0;
    .text-box {
        height: 100%;
        display: flex;
        align-items: center;
        h3 {
            max-width: 432px;
        }
    }
    .text-list {
        ul {
            li {
                display: flex;
                align-items: center;
                margin: 0 0 24px 0;
                &:last-child {
                    margin: 0;
                }
                span {
                    max-width: 46px;
                    width: 100%;
                    margin: 0 0 0 16px;
                }
                p {
                    flex: 1;
                    @include Red_Hat_Display(600);
                    font-size: $font20;
                    line-height: 24px;
                }
            }
        }
    }
}

@import '~assets/scss/pages.scss/responsive_ar.scss';


</style>