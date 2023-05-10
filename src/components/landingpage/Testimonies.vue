<script setup>
    import {onMounted, ref} from 'vue';
    const testimonies = ref([
        {
            witness: 'John Doe',
            story: 'I ordered something from shoprite, used riderjet and got the delivery speedily'
        }, {
            witness: 'christ Doe',
            story: 'I ordered something from shoprite, used riderjet and got the delivery speedily'
        }, {
            witness: 'amada b',
            story: 'I ordered something from shoprite, used riderjet and got the delivery speedily'
        }, {
            witness: 'onyinye',
            story: 'I ordered something from shoprite, used riderjet and got the delivery speedily'
        }
    ]);
    let currentIndex = ref(0);
    let testimoniesElem,
        interval,
        divider,
        add;

    let swipe = () => {
        testimoniesElem.scroll((currentIndex.value * (testimoniesElem.clientWidth + add)) / divider, 0);
    };
    let swipeRight = () => {
        clearTimeout(interval);
        if (testimonies.value.length % 2 === 0) {
            if (currentIndex.value > testimonies.value.length / divider) {
                currentIndex.value = 0;
            }
        } else {
            if (currentIndex.value > (testimonies.value.length + 1) / divider) {
                currentIndex.value = 0;
            }
        }
        swipe();
        currentIndex.value++;
        interval = setTimeout(swipeRight, 5000);

    };
    let swipeLeft = () => {
        clearTimeout(interval);
        if (testimonies.value.length % 2 === 0) {
            if (currentIndex.value < 0) {
                currentIndex.value = testimonies.value.length/divider;
            }
        } else {
            if (currentIndex.value < 0) {
                currentIndex.value = (testimonies.value.length+1)/divider;
            }
        }
        swipe();
        currentIndex.value--;
        interval = setTimeout(swipeRight, 5000);
    };
    onMounted(() => {
        testimoniesElem = document.querySelector('.testimonies');
        window.onload = () => {
            interval = setTimeout(swipeRight, 5000);
            divider = window.innerWidth >= 768
                ? 2
                : 1;
            add = window.innerWidth >= 768
                ? 0
                : 20;
        };
        window.onresize = () => {
            divider = window.innerWidth >= 768
                ? 2
                : 1;
            add = window.innerWidth >= 768
                ? 0
                : 20;
        }

    });
</script>
<template>
    <div class="max-w-[72rem] mx-auto px-3 mb-12 sm:px-10 py-10 relative">
        <h3
            class="text-center md:text-[2.5rem] capitalize mb-4 text-[2rem] dark:text-[#ffffffb3] text-[#333333]">
            our <span class="primary">satisfied </span> customers!</h3>
        <div class="flex justify-between">
            <button class="fa fa-arrow-left hover:text-[#4cbbe5]" @click="swipeLeft"></button>
            <ul class="flex gap-5 testimonies scroll-smooth overflow-x-hidden w-3/4 dark:text-[#ffffffb3] text-[#333333]">
                <li
                    class="flex-shrink-0  bg-gray-200 dark:bg-[#323232] rounded-[3rem] px-7 py-5 w-full md:w-[calc(50%-20px)] relative "
                    v-for="(testimony, index) in testimonies"
                    :key="index">
                    <blockquote
                        class="mb-4 before:content-['❝'] before:text-[3rem] before:absolute  before:-top-3 before:dark:bg-[#121212] before:bg-white before:w-[1.3rem] before:h-[2.5rem] before:pt-[1.5rem] before:px-[1.5rem] before:indent-0 before:rounded-full before:grid before:place-content-center before:left-0 before:text-[#4cbbe5] pt-7 indent-5">
                        {{ testimony.story }}
                    </blockquote>
                    <cite class="flex justify-end">{{ testimony.witness }}</cite>
                </li>
            </ul>
            <button class="fa fa-arrow-right hover:text-[#4cbbe5]" @click="swipeRight"></button>
        </div>
    </div>
</template>

<style scoped></style>