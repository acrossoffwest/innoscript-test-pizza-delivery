<template>
    <div>
        <img class="z-40 absolute" src="/images/pizza.svg" ref="fly-pizza" :id="`fly-pizza-${_uid}`" alt="" width="50">
    </div>
</template>

<script>
    import { gsap, Back } from "gsap";

    export default {
        name: "FlyPizza",
        props: {
            target: {
                required: true
            },
            firstShoot: {
                required: false,
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.animate()
        },
        methods: {
            animate() {
                const targetCoordinates = this.cumulativeOffset(this.target)
                const flyPizzaCoordinates = this.cumulativeOffset(this.$refs[`fly-pizza`])
                console.log(this.$store.getters.cartItemsCount === 1)
                targetCoordinates.x = targetCoordinates.x - flyPizzaCoordinates.x - (this.$store.getters.cartItemsCount === 1 ? 100 : 0)
                targetCoordinates.y = targetCoordinates.y - flyPizzaCoordinates.y + 50

                if (window.pageYOffset || document.clientTop || document.clientTop) {
                    targetCoordinates.y += (window.pageYOffset || document.scrollTop) - (document.clientTop || 0)
                }
                targetCoordinates.onComplete = () => {
                    this.$emit('done')
                }
                targetCoordinates.opacity = 0
                gsap.to(`#fly-pizza-${this._uid}`, .8, targetCoordinates)
            },
            getCoordinates(element) {
                return {
                    x: window.scrollX + element.getBoundingClientRect().left,
                    y: window.scrollY + element.getBoundingClientRect().top
                }
            },
            cumulativeOffset(element) {
                var top = 0, left = 0;
                do {
                    top += element.offsetTop  || 0;
                    left += element.offsetLeft || 0;
                    element = element.offsetParent;
                } while(element);

                return {
                    y: top,
                    x: left
                };
            },
        }
    }
</script>

<style scoped>

</style>
