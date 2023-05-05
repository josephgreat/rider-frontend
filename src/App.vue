<script setup>
import LandingPage from './components/pages/LandingPage.vue';
</script>

<template>
  <div class="text-[#262626] dark:text-[#fff]">
    <LandingPage />

  </div>
</template>

<style>
* {
  font-family: 'Poppins', sans-serif;
}

.primary {
  color: #4cbbe5;
}

.primary_bg {
  background: #4cbbe5;
}
.bg-gradient {
    background: repeating-linear-gradient(-30deg, #4cbce5 5%, #262626 );
}
@keyframes smoothdrop {
  from{top: -1rem}
  to{top: 0}
}
</style>
