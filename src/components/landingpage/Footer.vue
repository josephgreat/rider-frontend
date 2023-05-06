<script setup>
import {ref} from 'vue'
let currentYear = ref('')
currentYear =  new Date().getFullYear()
</script>
<template>
    <footer class="bg-[#262626] rounded-t-[3rem]">
        <div class="max-w-[72rem] mx-auto px-3  sm:px-10">
            <div
                class="flex flex-col sm:flex-row py-10 md:gap-10 gap-2 mb-10 border-b border-[#464646] sm:items-center sm:justify-between font-semibold">
                <h3 class="order-2 sm:order-1 md:text-[3rem] text-[2rem] text-[#ffffffb3]">
                    <span class="primary">Let's</span>
                    start with us in
                    <br/>
                    <span class="primary">shipping</span>
                    your goods!
                </h3>
                <div class="w-fit bg-[#464646] order-1 sm:order-2 rounded-[2rem] h-fit px-8 py-4 hover:to-[#2f4750] hover:border-[1px] border-cyan-300">
                    <i class="fa fa-level-up rotate-45 primary text-[3rem] md:text-[4rem]"></i>
                </div>
            </div>
            <div>
                <div class="flex flex-col md:flex-row justify-between gap-2 md:gap-10">
                    <div class="mb-4 md:w-1/3">
                        <img
                            class="sm:w-2/6 w-1/2 mb-4 opacity-60"
                            src="../../assets/logo/vector/default-monochrome-white.svg"
                            alt="Riderjet logo"/>
                        <p class="opacity-50 mb-4 text-[#ffffffb3]">Trust your package to us, we have been trusted by the
                            whole world, your package must be safe!</p>
                        <p class="opacity-50">info@riderjet.com</p>
                    </div>
                    <ul class="flex flex-wrap sm:flex-nowrap md:justify-between md:gap-10 md:w-1/2">
                        <li class="w-1/2 sm:w-1/3 mb-4">
                            <ul class="text-[#ffffffb3]">
                                <li class="mb-2 hover:text-[#4cbbe5]">
                                    <a href="#">HOME</a>
                                </li>
                                <li class="mb-2 hover:text-[#4cbbe5]">
                                    <a href="#">ABOUT</a>
                                </li>
                                <li class="mb-2 hover:text-[#4cbbe5]">
                                    <a href="#">CAREERS</a>
                                </li>
                                <li class="mb-2 hover:text-[#4cbbe5]">
                                    <a href="#">OFFICE</a>
                                </li>
                            </ul>
                        </li>
                        <li class="w-1/2 sm:w-1/3 mb-4">
                            <ul class="text-[#ffffffb3]">
                                <li class="mb-2 hover:text-[#4cbbe5]">
                                    <a href="#" class="fa fa-instagram" aria-label="INSTAGRAM"></a>
                                </li>
                                <li class="mb-2 hover:text-[#4cbbe5]">
                                    <a href="#" class="fa fa-facebook" aria-label="facebook"></a>
                                </li>
                                <li class="mb-2 hover:text-[#4cbbe5]">
                                    <a href="#" class="fa fa-twitter" aria-label="Twitter"></a>
                                </li>
                                <li class="mb-2 hover:text-[#4cbbe5]">
                                    <a href="#" class="fa fa-envelope" aria-label="Email"></a>
                                </li>
                            </ul>
                        </li>
                        <li class="w-full sm:w-1/3 mb-4 text-[#ffffffb3]">
                            <ul>
                                <li class="mb-2 hover:text-[#4cbbe5]">
                                    <a href="#">PRIVACY POLICY</a>
                                </li>
                                <li class="mb-2 hover:text-[#4cbbe5]">
                                    <a href="#">FAQ</a>
                                </li>
                                <li class="mb-2 hover:text-[#4cbbe5]">
                                    <a href="#">TERMS & CONDITIONS</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <p class="text-xs text-center tracking-widest text-[#ffffffb3] py-2">Copyright © {{ currentYear }} RiderJet</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>

</style>