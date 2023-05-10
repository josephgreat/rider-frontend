<script setup>
    import {onMounted, onUnmounted, ref} from 'vue';

    const isSmallScreen = ref(window.innerWidth < 640);
    const openNav = ref(isSmallScreen.value
        ? false
        : true);

    const stickyNav = ref(window.scrollY > 200
        ? true
        : false);
    const theme = ref(localStorage.getItem('theme'));
    const openAuth = ref(false);
    function toggleNav() {
        openNav.value = !openNav.value;
    }
    function toggleTheme() {
        if (theme.value === 'light') {
            document.documentElement.className = 'dark';
            theme.value = 'dark';
            localStorage.setItem('theme', 'dark');
        } else {
            document
                .documentElement
                .classList
                .remove('dark');
            localStorage.setItem('theme', 'light');
            theme.value = 'light';
        }
    }
    function toggleAuth() {
        openAuth.value = !openAuth.value;
    }
    function themeUpdate() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document
                .documentElement
                .classList
                .add('dark');
            localStorage.setItem('theme', 'dark');
            theme.value = 'dark';

        } else {
            document
                .documentElement
                .classList
                .remove('dark');
            localStorage.setItem('theme', 'light');
            theme.value = 'light';
        }
    }
    onMounted(() => {
        window.addEventListener('resize', () => {
            isSmallScreen.value = window.innerWidth < 640;
            openNav.value = isSmallScreen.value
                ? false
                : true;
        });
        window.addEventListener('scroll', () => {
            stickyNav.value = window.scrollY > 200
                ? true
                : false;
        });
        window.addEventListener('load', themeUpdate);
        window.addEventListener('click', e => {
            if(!e.target.classList.contains('nav_toggle') && openNav.value && isSmallScreen.value) openNav.value = !openNav.value
            else if(!e.target.classList.contains('auth_toggle') && openAuth.value && isSmallScreen.value) openAuth.value = !openAuth.value
        })

    });
    onUnmounted(() => {
        window.removeEventListener('resize', () => {
            openNav.value = !isSmallScreen
                ? true
                : false;
        });
        window.addEventListener('scroll', () => {
            stickyNav.value = window.scrollY > 200
                ? true
                : false;
        });
        window.removeEventListener('load', themeUpdate);

    });
</script>

<template>
    <div
        class="shadow dark:shadow-[#aaa] top-0 left-0 z-20 w-full transition-[all .4s ease] bg-white dark:bg-[#121212]"
        :class="stickyNav ? 'sticky animate-smoothdrop' : 'relative'">
        <div class="max-w-[72rem] mx-auto relative px-3 sm:px-10 ">
            <nav class="flex justify-between items-center py-5 relative">
                <div class="flex ">
                    <button class="w-8 sm:hidden nav_toggle" @click="toggleNav">
                        <span
                            class="w-5 h-[2px] nav_toggle bg-[#4cbbe5] block mb-1 transition-all duration-300 ease-in-out"
                            :class="openNav ? 'translate-x-[5px]' : ''"></span>
                        <span
                            class="w-5 h-[2px] nav_toggle bg-[#4cbbe5] block mb-1 transition-all duration-300 ease-in-out"
                            :class="openNav ? 'translate-x-0' : 'translate-x-[5px]'"></span>
                    </button>
                    <div>
                        <img
                            class="w-full max-w-[7rem] md:max-w-[10rem] opacity-70"
                            v-if="theme === 'dark'"
                            src="../../assets/logo/vector/default-monochrome-white.svg"
                            alt="Riderjet logo"/>
                        <img
                            class="w-full max-w-[7rem] md:max-w-[10rem]"
                            v-else
                            src="../../assets/logo/vector/default-monochrome.svg"
                            alt="Riderjet logo"/>
                    </div>
                </div>
                <div
                    class="flex flex-col transition-all z-10 duration-500 ease-in-out sm:relative w-1/2 absolute top-[75%] border-[1px] border-[#4cbbe5] sm:border-0 rounded-tr-2xl rounded-bl-2xl left-3 sm:left-0 sm:bottom-0 bg-white text-[#4cbbe5] dark:bg-[#121212] shadow-[#4cbbe5] sm:bg-transparent dark:text-[#ffffffb3] sm:text-[#333333] sm:flex-row justify-between sm:w-2/5"
                    :class="openNav ? 'showmenu' : 'closemenu'">
                    <a
                        href="#"
                        class="block p-2 sm:p-0 tracking-wider w-full sm:w-auto before:absolute before:w-full before:rounded-[5rem] before:h-1 overflow-hidden before:bg-[#4cbbe5] before:-bottom-1 relative hover:scale-105 hover:pl-4 sm:hover:pl-0 transition-all dur ease-linear origin-center sm:hover:before:bottom-0">Home</a>
                    <a
                        href="#"
                        class="block p-2 sm:p-0 tracking-wider  w-full sm:w-auto before:absolute before:w-full before:rounded-[5rem] before:h-1 overflow-hidden before:bg-[#4cbbe5] before:-bottom-1 relative hover:scale-105 hover:pl-4 sm:hover:pl-0 transition-all dur ease-linear origin-center sm:hover:before:bottom-0">About</a>
                    <a
                        href="#"
                        class="block p-2 sm:p-0 tracking-wider  w-full sm:w-auto before:absolute before:w-full before:rounded-[5rem] before:h-1 overflow-hidden before:bg-[#4cbbe5] before:-bottom-1 relative hover:scale-105 hover:pl-4 sm:hover:pl-0 transition-all dur ease-linear origin-center sm:hover:before:bottom-0">Careers</a>
                    <a
                        href="#"
                        class="block p-2 sm:p-0 tracking-wider  w-full sm:w-auto before:absolute before:w-full before:rounded-[5rem] before:h-1 overflow-hidden before:bg-[#4cbbe5] before:-bottom-1 relative hover:scale-105 hover:pl-4 sm:hover:pl-0 transition-all dur ease-linear origin-center sm:hover:before:bottom-0">Offices</a>
                </div>
                <div class="flex items-center gap-4">
                    <button @click="toggleAuth" class="relative">
                        <a
                            href="#"
                            class="block auth_toggle px-3 pb-[.45rem] pt-[.3rem] border-[#4cbbe5] text-[#4cbbe5] border rounded-3xl">Order Now</a>
                        <ul
                            class="absolute top-[63%] dark:bg-[#121212] bg-white z-20  w-full  py-4 transition-all duration-500 border-[#4cbbe5] border border-t-0 rounded-b-full"
                            :class="openAuth ? 'showmenu' : 'closemenu'">
                            <li class="mb-2 primary hover:scale-110 transition-all duration-300 ease-in-out px-5 border-[#4cbbe5]">
                                <a href="#">Register</a>
                            </li>
                            <li class="mb-2 primary hover:scale-110 transition-all duration-300 ease-in-out px-5 border-[#4cbbe5]">
                                <a href="#">Sign In</a>
                            </li>
                        </ul>
                    </button>
                    <span v-if="!isSmallScreen" class="dark:sm:text-[#ffffffb3]">|</span>
                    <div
                        v-if="isSmallScreen"
                        class="absolute flex flex-col top-[4.9rem]  transition-all duration-300 rounded-b-3xl right-0 bg-gray-200 dark:bg-[#323232] px-4 py-2">
                        <div
                            class="inline-block hover:rotate-[360deg] ml-auto cursor-pointer hover:scale-125 transition-all origin-center duration-300 dark:text-[#ffffffb3]"
                            @click="toggleTheme">
                            <i class="fa" :class="theme === 'dark' ? 'fa-moon-o' : 'fa-sun-o'"></i>
                        </div>
                    </div>
                    <div
                        v-else
                        class="inline-block hover:rotate-[360deg] ml-auto cursor-pointer hover:scale-125 transition-all origin-center duration-300 dark:sm:text-[#ffffffb3]"
                        @click="toggleTheme">
                        <i class="fa text-xl" :class="theme === 'dark' ? 'fa-moon-o' : 'fa-sun-o'"></i>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<style>
    .showmenu {
        clip-path: circle(1000px at 0 0);
    }

    .closemenu {
        clip-path: circle(0px at 0 0);
    }

    /* .closeThemeBox {
    clip-path: circle(40% at 100% 0);
} */

</style>