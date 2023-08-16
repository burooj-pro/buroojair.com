<template>
    <section id="developmentSection" class="font-neo-sans py-20 lg:py-60 bg-blue-100 text-gray-700">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-2">
          
          <div class="p-8 lg:p-8">
            <h2 class="text-4xl lg:text-7xl font-bold mb-2">{{ $t("A_LOOK_TOWARDS_FUTURE_INVENTIONS") }}</h2>
            <p class="text-4xl lg:text-5xl ">{{ $t("WHATS_NEXT") }}</p>
          </div>

          <div class="p-8 lg:p-8">
            <ul class="lg:ps-14 text-base font-thin space-y-5">
                <li>
                    <h3 class="uppercase block text-2xl font-bold">{{ $t("SPRAY_PAINTING") }}</h3>
                    {{ $t("WITH_CONTINUED_DEVELOPMENT") }}
                </li>
                <li>
                    <h3 class="uppercase block text-2xl font-bold">{{ $t("HIGHER_ALTITUDES") }}</h3>
                    {{ $t("WE_HAVE_SOLVED_THE_OPERATING_HEIGHT") }}
                </li>
                <li>
                    <h3 class="uppercase block text-2xl font-bold">{{ $t("USE_LATEST_DRONE_CONTROL_TECHNOLOGIES") }}</h3>
                    {{ $t("RESULT_OPERATING_IN_HIGHER_ALTITUDES") }}
                </li>
                   <li>
                    <h3 class="uppercase block text-2xl font-bold">{{ $t("LONG_DISTANCE_DRONE_CONTROL") }}</h3>
                    {{ $t("AFTER_EVALUATION") }}
                </li>
                <li>
                    <h3 class="uppercase block text-2xl font-bold">{{ $t("CONTROLLING_THE_DRONE_ANYWHERE") }}</h3>
                    {{ $t("LOOKING_BEYOND_2023") }}
                </li>
                <li class="mt-3 text-4xl font-bold underline decoration-double decoration-emerald-400">
                  {{ $t("REMOTE_CONTROL_ROOMS_WOULD_BE") }}
                </li>
              </ul>
          </div>

        </div>
      </div>
    </section>
</template>