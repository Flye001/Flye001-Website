<template>
  <div class="bg-dark-black h-fit grid grid-cols-1 content-center md:flex md:flex-col md:justify-center md:items-center">

        <div class="md:flex md:justify-center md:items-center">
            <img src="@/assets/img/LogoWhite.png"
                class="image w-3/5 mx-auto md:order-3 md:scale-50 md:relative md:top-7 md:aspect-square" alt="Logo">

            <div
                class="line bg-line h-[1px] w-3/4 mx-auto drop-shadow-xl md:order-2 md:h-[450px] md:w-[1px] md:relative md:top-9 md:ml-20 md:-mr-10 md:rotate-[30deg]">
            </div>

            <div class="text mt-3 w-fit russo-one mx-auto md:order-1 md:ml-20">
                <h1 class="text-secondary text-3xl text-left px-0.5 md:text-5xl md:relative md:left-[0.2rem]">Hi I'm
                </h1>
                <h1 class="text-primary text-center text-7xl -my-2 md:text-8xl md:tracking-[0.4rem] md:-mt-3">FLYE001
                </h1>
                <h1 class="text-secondary opacity-50 text-xl text-right md:text-3xl md:-mt-2">Full Stack Developer</h1>
            </div>
        </div>

        <div class="buttons w-fit mx-auto grid grid-cols-2 mt-10 text-white roboto">
            <div class="icon-div" onclick="window.location.href='https://discord.gg/FvvYGCjJdk';">
                <i class="fab fa-discord icon"></i>
                <h1>Discord</h1>
            </div>
            <router-link to="/projects" class="icon-div">
                <i class="fas fa-microchip icon"></i>
                <h1>Projects</h1>
            </router-link>
        </div>

    </div>
</template>
