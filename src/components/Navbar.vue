<script>
    import {store} from '../../utils/store';

    export default {
        data() {
            return {store}
        },
        created : function () {
            window.addEventListener('resize', () => {
                window.innerWidth > 640
                    ? (store.openNav = true)
                    : (store.openNav = false)
            })
        },
        destroyed : function () {
            window.removeEventListener('resize', () => {
                window.innerWidth > 640
                    ? (store.openNav = true)
                    : (store.openNav = false)
            })
        }
    }
</script>

<template>
    <div class="max-w-[72rem] mx-auto px-3 sm:px-10 shadow">
        <nav class="flex justify-between items-center py-5 relative">
            <div class="flex ">
                <button class="w-8 sm:hidden " @click="store.toggleNav">
                    <span
                        class="w-5 h-[2px] bg-[#4cbbe5] block mb-1 transition-all duration-300 ease-in-out"
                        :class="store.openNav ? 'translate-x-[5px]' : ''"></span>
                    <span
                        class="w-5 h-[2px] bg-[#4cbbe5] block mb-1 transition-all duration-300 ease-in-out"
                        :class="store.openNav ? 'translate-x-0' : 'translate-x-[5px]'"></span>
                </button>
                <div>
                    <img
                        class="w-full max-w-[7rem] md:max-w-[10rem]"
                        src="../assets/logo/vector/default-monochrome.svg"
                        alt="Riderjet logo"/>
                </div>
            </div>
            <div
                class="flex flex-col transition-all duration-500 ease-in-out sm:relative w-1/2 absolute top-[75%] rounded-tr-2xl rounded-bl-2xl left-3 sm:left-0 sm:bottom-0 bg-[#4cbbe5] text-white sm:bg-transparent sm:text-black sm:flex-row justify-between sm:w-2/5"
                :class="store.openNav ? 'showmenu' : 'closemenu'">
                <a
                    href="#"
                    class="block p-2 sm:p-0 w-full before:absolute before:w-full before:rounded-[5rem] before:h-1 overflow-hidden before:bg-[#4cbbe5] before:-bottom-1 relative hover:before:bottom-0">Home</a>
                <a
                    href="#"
                    class="block p-2 sm:p-0 w-full before:absolute before:w-full before:rounded-[5rem] before:h-1 overflow-hidden before:bg-[#4cbbe5] before:-bottom-1 relative hover:before:bottom-0">About</a>
                <a
                    href="#"
                    class="block p-2 sm:p-0 w-full before:absolute before:w-full before:rounded-[5rem] before:h-1 overflow-hidden before:bg-[#4cbbe5] before:-bottom-1 relative hover:before:bottom-0">Services</a>
                <a
                    href="#"
                    class="block p-2 sm:p-0 w-full before:absolute before:w-full before:rounded-[5rem] before:h-1 overflow-hidden before:bg-[#4cbbe5] before:-bottom-1 relative hover:before:bottom-0">Offices</a>
            </div>
            <div>
                <button>
                    <a
                        href="#"
                        class="block px-3 pb-[.5rem] pt-[.3rem] border-[#4cbbe5] text-[#4cbbe5] border rounded-3xl">Order Now</a>
                </button>
            </div>
        </nav>
    </div>
</template>

<style>
    .showmenu {
        clip-path: circle(1000px at 0 0);
    }
    .closemenu {
        clip-path: circle(0px at 0 0);
    }

</style>