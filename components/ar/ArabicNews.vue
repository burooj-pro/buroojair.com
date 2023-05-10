<template>
  <div class="row">
    <div class="col-md-4 col-sm-6" v-for="index in 10" :key="index">
      <div class="news-box">
        <div class="image-holder">
          <a href="news-detail.html">
            <img src="~assets/images/news-img.jpg" alt="" class="img-fluid" />
          </a>
        </div>
        <div class="text-box">
          <h5>شاهد قصة KTV العامل بدون طيار</h5>
          <span>24 مارس 2023</span>
          <p>
            شاهد الفيديو حيث يشرح الرئيس التنفيذي والمؤسس كينيت نيلسن لماذا وكيف
            بدأت KTV طائرة تعمل بدون طيار ، ويتحدث عن الفرق وراء KTV عمل
          </p>
          <a href="news-detail.html">اقرأ أكثر »</a>
        </div>
      </div>
    </div>
  </div>
</template>
