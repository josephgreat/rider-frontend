<script setup>
    import Navbar from '../Navbar.vue';
    import LandingJumbotron from '../landingpage/LandingJumbotron.vue';
    import Promote from '../landingpage/Promote.vue';
    import Features from '../landingpage/Features.vue';
</script>

<template>
    <Navbar/>
    <LandingJumbotron/>
    <Promote/>
    <div
        class="flex justify-between items-center flex-col gap-2 md:gap-10 md:flex-row max-w-[72rem] mx-auto px-3 sm:px-10 mb-12 ">
        <h3
            class=" font-semibold text-[3rem] leading-[3rem] md:text-[4rem] md:leading-[4rem]">
            <span class="primary">Everything</span>
            you need we have!</h3>
        <p>We treat customers like KING, everything you need, everything in us. Come
            with Riderjet, guaranteed fast!</p>
    </div>
    <Features/>
</template>

<style scoped></style>