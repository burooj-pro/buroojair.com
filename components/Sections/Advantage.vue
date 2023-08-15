<template>
  <section id="advantageSection" class="advantage-sec bg-blue-50 md:py-32 py-16 font-neo-sans">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-4">
        <div class="flex items-center p-8">
            <h3 class="text-7xl font-black">{{ $t("ADVANTAGES_USING_BUROOJ_AIR_DRONES") }}</h3>
        </div>
        <div class="flex items-center p-8">
          <ul class="space-y-6 text-xl font-semibold">
              <li class="flex items-center">
                <i class="bi bi-triangle-fill text-5xl text-emerald-400 me-4"></i>
                <span>{{$t("HIGH_SPEED_AND_EFFECTIVE_SURPASSING_TRADITIONAL_METHODS")}}</span>
              </li>
              <li class="flex items-center">
                <i class="bi bi-triangle-fill text-5xl text-emerald-400 me-4"></i>
                <span>{{ $t("SIMPLIFIED_ACCESS_TO_REMOTE_OR_HARD_TO_GET_TO_PLACES") }}</span>
              </li>
              <li class="flex items-center">
                <i class="bi bi-triangle-fill text-5xl text-emerald-400 me-4"></i>
                <span>{{ $t("REINFORCED_SAFETY_AND_SECURITY") }}</span>
              </li>
              <li class="flex items-center">
                <i class="bi bi-triangle-fill text-5xl text-emerald-400 me-4"></i>
                <span>{{ $t("ACCESSING_ELEVATED_AREAS_WITHOUT_REQUIRING_HEIGHT_SPECIFIC_TOOLS") }}</span>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </section>
</template>