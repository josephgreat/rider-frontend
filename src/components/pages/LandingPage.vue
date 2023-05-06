<script setup>
    import Navbar from '../landingpage/Navbar.vue';
    import LandingJumbotron from '../landingpage/LandingJumbotron.vue';
    import Promote from '../landingpage/Promote.vue';
    import Features from '../landingpage/Features.vue';
    import Services from '../landingpage/Services.vue';
    import Clients from '../landingpage/Clients.vue';
    import Testimonies from '../landingpage/Testimonies.vue';
    import Footer from '../landingpage/Footer.vue';
</script>

<template>
    <div class="transition-[all .3s ease]">
        <Navbar/>
        <LandingJumbotron/>
        <Promote/>
        <Features/>
        <Services/>
        <Clients/>
        <Testimonies/>
        <Footer />
    </div>
</template>

<style scoped></style>