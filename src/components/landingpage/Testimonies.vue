<script setup>
    import {onMounted, ref} from 'vue';
    const testimonies = ref([
        {
            witness: 'John Doe',
            story: 'I ordered something from shoprite, used riderjet and got the delivery speedily'
        }, {
            witness: 'John Doe',
            story: 'I ordered something from shoprite, used riderjet and got the delivery speedily'
        }, {
            witness: 'John Doe',
            story: 'I ordered something from shoprite, used riderjet and got the delivery speedily'
        }, {
            witness: 'John Doe',
            story: 'I ordered something from shoprite, used riderjet and got the delivery speedily'
        }
    ]);
    let currentIndex = ref(0);
    let testimoniesElem;

    let swipe = () => {
        testimoniesElem.scroll(currentIndex.value * (testimoniesElem.clientWidth + 20), 0);
    };
    let swipeRight = () => {
        clearInterval(swipeRight);

        if (currentIndex.value >= testimonies.value.length) 
            currentIndex.value = 0;
        currentIndex.value++;
        swipe();

    };
    let swipeLeft = () => {
        clearInterval(swipeRight);

        if (currentIndex.value == 0) 
            currentIndex.value = testimonies.value.length -1;
        currentIndex.value--;
        swipe();

    };
    onMounted(() => {
        testimoniesElem = document.querySelector('.testimonies');
        window.onload = () => {
            setInterval(swipeRight, 2500);
        };

    });
</script>
<template>
    <div class="max-w-[72rem] mx-auto px-3 mb-12 sm:px-10 py-10 relative">
        <div class="flex justify-between">
            <button class="fa fa-arrow-left" @click="swipeLeft"></button>
            <ul class="flex gap-5 testimonies scroll-smooth overflow-x-hidden w-3/4 ">
                <li
                    class="flex-shrink-0 shadow-[inset_0_0px_5px_0px]  bg-gray-200 dark:bg-[#323232] rounded-[3rem] px-7 py-5 w-full relative "
                    v-for="(testimony, index) in testimonies"
                    :key="index">
                    <blockquote
                        class="mb-4 before:content-['❝'] before:text-[3rem] before:absolute  before:-top-3 before:dark:bg-[#121212] before:bg-white before:w-[1.3rem] before:h-[2.5rem] before:pt-[1.5rem] before:px-[1.5rem] before:indent-0 before:rounded-full before:grid before:place-content-center before:left-0 before:text-[#4cbbe5] pt-7 indent-5">
                        {{ testimony.story }}
                    </blockquote>
                    <cite class="flex justify-end">{{ testimony.witness }}</cite>
                </li>
            </ul>
            <button class="fa fa-arrow-right" @click="swipeRight"></button>

        </div>
    </div>
</template>

<style scoped></style>