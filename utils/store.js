import {reactive} from "vue";

export const store = reactive({
    openNav: window.innerWidth < 640 ? false : true,
    toggleNav: function () {
        this.openNav = !this.openNav;
        console.log(this.openNav);
    }
})