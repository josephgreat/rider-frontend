<script setup>
    import {onMounted, onUnmounted, ref} from 'vue';

    const openNav = ref(window.innerWidth < 640
        ? false
        : true);

    const stickyNav = ref(window.scrollY > 200
        ? true
        : false);
    const theme = ref(localStorage.getItem('theme'));
    function toogleNav() {
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
    onMounted(() => {
        window.addEventListener('resize', () => {
            openNav.value = window.innerWidth > 640
                ? true
                : false;
        });
        window.addEventListener('scroll', () => {
            stickyNav.value = window.scrollY > 200
                ? true
                : false;
        });
        window.addEventListener('load', () => {
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
        });
    });
    onUnmounted(() => {
        window.removeEventListener('resize', () => {
            openNav.value = window.innerWidth > 640
                ? true
                : false;
        });
        window.addEventListener('scroll', () => {
            stickyNav.value = window.scrollY > 200
                ? true
                : false;
        });
    });
</script>

<template>
    <div
        class="shadow dark:shadow-[#aaa] top-0 left-0 z-20 w-full transition-[all .4s ease] bg-white dark:bg-[#121212]"
        :class="stickyNav ? 'sticky animate-smoothdrop' : 'relative'">
        <div class="max-w-[72rem] mx-auto relative px-3 sm:px-10 ">
            <nav class="flex justify-between items-center py-5 relative">
                <div class="flex ">
                    <button class="w-8 sm:hidden " @click="toogleNav">
                        <span
                            class="w-5 h-[2px] bg-[#4cbbe5] block mb-1 transition-all duration-300 ease-in-out"
                            :class="openNav ? 'translate-x-[5px]' : ''"></span>
                        <span
                            class="w-5 h-[2px] bg-[#4cbbe5] block mb-1 transition-all duration-300 ease-in-out"
                            :class="openNav ? 'translate-x-0' : 'translate-x-[5px]'"></span>
                    </button>
                    <div>
                        <img
                            class="w-full max-w-[7rem] md:max-w-[10rem]"
                            v-if="theme==='dark'"
                            src="../assets/logo/vector/default-monochrome-white.svg"                            
                            alt="Riderjet logo"/>
                        <img
                            class="w-full max-w-[7rem] md:max-w-[10rem]"
                            v-else
                            src="../assets/logo/vector/default-monochrome.svg"                            
                            alt="Riderjet logo"/>
                    </div>
                </div>
                <div
                    class="flex flex-col transition-all z-10 duration-500 ease-in-out sm:relative w-1/2 absolute top-[75%] rounded-tr-2xl rounded-bl-2xl left-3 sm:left-0 sm:bottom-0 bg-[#4cbbe5] text-white sm:bg-transparent dark:sm:text-white sm:text-[#262626] sm:flex-row justify-between sm:w-2/5"
                    :class="openNav ? 'showmenu' : 'closemenu'">
                    <a
                        href="#"
                        class="block p-2 sm:p-0 w-full sm:w-auto before:absolute before:w-full before:rounded-[5rem] before:h-1 overflow-hidden before:bg-[#4cbbe5] before:-bottom-1 relative hover:before:bottom-0">Home</a>
                    <a
                        href="#"
                        class="block p-2 sm:p-0 w-full sm:w-auto before:absolute before:w-full before:rounded-[5rem] before:h-1 overflow-hidden before:bg-[#4cbbe5] before:-bottom-1 relative hover:before:bottom-0">About</a>
                    <a
                        href="#"
                        class="block p-2 sm:p-0 w-full sm:w-auto before:absolute before:w-full before:rounded-[5rem] before:h-1 overflow-hidden before:bg-[#4cbbe5] before:-bottom-1 relative hover:before:bottom-0">Services</a>
                    <a
                        href="#"
                        class="block p-2 sm:p-0 w-full sm:w-auto before:absolute before:w-full before:rounded-[5rem] before:h-1 overflow-hidden before:bg-[#4cbbe5] before:-bottom-1 relative hover:before:bottom-0">Offices</a>
                </div>
                <div>
                    <button>
                        <a
                            href="#"
                            class="block px-3 pb-[.5rem] pt-[.3rem] border-[#4cbbe5] text-[#4cbbe5] border rounded-3xl">Order Now</a>
                    </button>
                </div>
            </nav>
            <div
                class="absolute flex flex-col top-[4.9rem]  transition-all duration-300 rounded-b-3xl right-2 bg-gray-200 dark:bg-[#323232] px-4 py-2">
                <div
                    class="inline-block ml-auto cursor-pointer hover:scale-125 transition-all origin-center duration-300"
                    @click="toggleTheme">
                    <i class="fa" :class="theme === 'dark' ? 'fa-moon-o' : 'fa-sun-o'"></i>
                </div>

            </div>
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