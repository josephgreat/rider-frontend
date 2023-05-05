<script setup>
</script>
<template>
    <div class="relative max-w-[72rem] mx-auto px-3 mb-12 sm:px-10 py-10">
        <div class="absolute w-2/3 h-fit bottom-[10%] md:bottom-0 right-0 ">
            <img src="../../assets/logo/vector/default-monochrome.svg"
                class="absolute top-[30%] -translate-x-[50%] -translate-y-[30%] rotate-y w-3/6 left-[50%]"
                alt="riderjet logo">
            <img src="../../assets/bg/truck.png" class="w-full" alt="truck_image">
        </div>
        <div class="flex flex-col md:flex-row justify-between mb-8 md:items-center">
            <h1 class="text-[3rem] mb-4 md:text-[4rem] font-semibold">We will
                <span class="primary">Deliver</span>
                your
                <span class="primary">Package</span>
            </h1>
            <p class="md:w-2/6 md:text-right text-sm mb-4">Trust your package with us, we have been trusted by the whole
                world, your
                package must be safe</p>
        </div>
        <button class="primary_bg mb-8 text-white px-4 py-2 rounded-3xl">Get in touch</button>
        <ul>
            <li class="mb-4">
                <h2 class="primary text-[2rem] md:text-[2.5rem] font-semibold">10+</h2>
                <p class="primary">Years Experience</p>
            </li>
            <li class="mb-4">
                <h2 class="text-[2rem] md:text-[2.5rem] font-semibold">18k+</h2>
                <p>Offices</p>
            </li>
            <li class="mb-4">
                <h2 class="text-[2rem] md:text-[2.5rem] font-semibold">20k+</h2>
                <p>Vehicles</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>

.rotate-y {
    transform: rotateY(45deg) rotateZ(3deg);
}
</style>