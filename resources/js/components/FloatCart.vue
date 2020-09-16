<template>
    <transition name="bounce">
        <div v-if="cartItemsCount && showCart" class="fixed right-0 top-0 bg-orange-300 rounded-md shadow-sm p-2 mt-24 mr-1 z-50 md:mr-24">
            <a href="/cart" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                <svg style="width: 25px" class="inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span class="p-2 bg-white-200 rounded" v-html="`${cartItemsCount}`"></span>
            </a>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "FloatCart",
        computed: {
            cartItemsCount() {
                return this.$store.getters.cartItemsCount
            }
        },
        watch: {
            cartItemsCount () {
                this.showCart = false
                setTimeout(() => this.showCart = true, 100)
            }
        },
        data: () => ({
            showCart: true
        })
    }
</script>

<style scoped>
.bounce-enter-active {
    animation: bounce-in .5s;
}
.bounce-leave-active {
    animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>
