import React from 'react';

const Home = () => {
  return (
    <div class="w-full h-screen bg-black overflow-hiddden">
      <div class="absolute hidden sm:block md:top-20 sm:top-[8%] xs:top-[10%] xxl:top-4 xxl:left-[30%] lg:left-[35%] md:right-[20%] sm:left-[18%] xs:left-[10%]">
        <img
          class="xxl:h-[880px] xl:h-[700px] md:h-[450px] sm:h-[480px]"
          src="https://techakim.com/sam/tg/7268/li/imgs/2.png"
          alt="Incognito Image"
        />
      </div>

      <div class="lg:px-16 xs:px-4 px-8 pb-4 h-full flex xs:flex-col sm:flex-row sm:items-center xs:mt-10 sm:mt-0 text-white">
        <div class="w-full flex flex-col z-10">
          <h4 class="text-lg font-semibold text-white xl:text-2xl">
            Hey There
          </h4>
          <h1 class="xl:text-8xl sm:text-6xl xs:text-3xl font-semibold font-serif mt-2">
            I'm
            <span class="">Samuel</span>
          </h1>
          <h1 class="sm:text-6xl xs:text-3xl font-semibold font-serif">
            Abera
          </h1>
          <h4 class="text-rose-500 mt-4 lg:text-2xl xl:3xl">
            --FullStack Developer
          </h4>

          <p class="lg:w-[70%] xs:w-full text-white text-sm mt-4 xl:text-2xl">
            Experienced full-stack developer with 4+ years of expertise in
            Laravel, NestJS, Nuxt.js, Next.js, Android, and some Flutter
            experience.
          </p>

          <div>
            <button class="mt-6 px-6 py-1 bg-rose-500 text-lg text-white rounded-sm lg:text-2xl">
              Get In Touch
            </button>
          </div>
        </div>

        <div class="w-full flex sm:flex-col xs:justify-center xs:mt-4 sm:mt-0 sm:gap-8 xs:gap-2 xs:bg-gray-700/60 sm:bg-transparent p-4 rounded-lg z-10">
          <div class="flex flex-col sm:items-end xs:items-center">
            <div class="inline-flex gap-1 items-center">
              <h2 class="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">
                5
              </h2>
              <h2 class="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">
                +
              </h2>
            </div>
            <h4 class="xs:text-sm sm:text-lg xl:text-2xl xs:text-center">
              Years of Expireance
            </h4>
          </div>
          <div class="flex flex-col sm:items-end xs:items-center">
            <div class="inline-flex gap-1 items-center">
              <h2 class="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">
                35
              </h2>
              <h2 class="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">
                +
              </h2>
            </div>
            <h4 class="xs:text-sm sm:text-lg xl:text-2xl xs:text-center">
              Component Contribution
            </h4>
          </div>
          <div class="flex flex-col sm:items-end xs:items-center">
            <div class="inline-flex gap-1 items-center">
              <h2 class="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">
                100K
              </h2>
              <h2 class="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">
                +
              </h2>
            </div>
            <h4 class="xs:text-sm sm:text-lg xl:text-2xl xs:text-center">
              User's Got Help
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
