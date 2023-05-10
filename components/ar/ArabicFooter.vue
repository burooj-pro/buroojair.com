<template>
            <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="footer-left">
                            <span><img src="~assets/images/footer-logo.png" alt="" class="img-fluid" /></span>
                            <p>KTV ® هي علامة تجارية مسجلة.<br>للاستفسارات الرجاء استخدام معلومات الاتصال المدرجة لدينا.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="footer-right">
                            <p>حقوق الطبع والنشر © جميع الحقوق محفوظة</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
 footer {
     background-color: $blue;
     padding: 22px 0;
     .footer-left {
         display: flex;
         align-items: center;
         p {
             color: $white;
             @include Red_Hat_Display(600);
             font-size: $font16;
             line-height: 1;
             padding-right: 10px;
         }
     }
     .footer-right {
         height: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
         p {
             color: $white;
             @include Red_Hat_Display(500);
             font-size: $font15;
         }
     }
 }

 // responsive

@import '~assets/scss/pages.scss/responsive_ar.scss';
</style>