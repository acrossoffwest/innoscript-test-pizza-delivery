<template>
    <div class="flex justify-center my-6">
        <div class="flex flex-col w-full p-8 text-gray-800 bg-white pin-r pin-y md:w-4/5 lg:w-4/5">
            <div class="flex-1">
                <div class="p-4 mb-5 bg-gray-100 rounded-full">
                    <h1 class="ml-2 font-bold uppercase">Cart</h1>
                </div>
                <table class="w-full text-sm lg:text-base" cellspacing="0">
                    <thead>
                    <tr class="h-12 uppercase">
                        <th class="hidden md:table-cell"></th>
                        <th class="text-left">Product</th>
                        <th class="lg:text-right text-left pl-5 lg:pl-0">
                            <span class="lg:hidden" title="Quantity">Qtd</span>
                            <span class="hidden lg:inline">Quantity</span>
                        </th>
                        <th class="hidden text-right md:table-cell">Unit price</th>
                        <th class="text-right">Total price</th>
                    </tr>
                    </thead>
                    <tbody v-if="$store.getters.cartItemsCount" :key="updateTable">
                    <tr v-for="orderItem in $store.getters.cart.items" :key="orderItem.item.id">
                        <td class="hidden pb-4 md:table-cell">
                            <a href="#">
                                <img :src="orderItem.item.image.publicPath" class="w-20 rounded" alt="Thumbnail">
                            </a>
                        </td>
                        <td>
                            <a href="#">
                                <p class="mb-2 md:ml-4">{{ orderItem.item.name }}</p>
                                <button @click="$store.commit('removeAllItem', orderItem.item.id); ++updateTable;" type="submit" class="text-gray-700 md:ml-4">
                                    <small>(Remove item)</small>
                                </button>
                            </a>
                        </td>
                        <td class="justify-center md:justify-end md:flex mt-6">
                            <div class="w-24 h-10">
                                <div class="relative flex flex-row w-full h-8">
                                    <input type="number" v-model="orderItem.count"
                                           class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" disabled/>
                                    <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" @click="$store.commit('addItem', orderItem.item)">+</button>
                                    <button v-if="orderItem.count" class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" @click="$store.commit('removeItem', orderItem.item.id)">-</button>
                                </div>
                            </div>
                        </td>
                        <td class="hidden text-right md:table-cell">
                              <span class="text-sm lg:text-base font-medium">
                                 {{ costWithCurrencyRate(orderItem.item.cost) }}{{ getCurrencySymbol($store.getters.currentCurrency) }}
                              </span>
                        </td>
                        <td class="text-right">
                              <span class="text-sm lg:text-base font-medium">
                                {{ costWithCurrencyRate(orderItem.item.cost * orderItem.count) }}{{ getCurrencySymbol($store.getters.currentCurrency) }}
                              </span>
                        </td>
                    </tr>
                    <tr v-if="$store.getters.cartItemsCount">
                        <td colspan="3">
                        </td>
                        <td  colspan="2" class="text-right">
                            <a href="#" @click.prevent="clearCart(false, true)">Clear cart</a>
                        </td>
                    </tr>
                    </tbody>
                    <tbody v-else>
                    <tr>
                        <td colspan="5" class="text-center">
                            <p>You don't have items in your cart.</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr class="pb-6 mt-6">
                <div class="p-4 mb-5 bg-gray-100 rounded-full">
                    <h1 class="ml-2 font-bold uppercase">Contact info</h1>
                </div>
                <div class="flex">
                    <div class="w-full px-10">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <field
                                class="w-full px-3 mb-6 md:mb-0"
                                label="Name"
                                placeholder="Enter your name"
                                :value.sync="contactInfo.name"
                                :errors="errors['contact_info.name']"
                            />
                            <field
                                class="w-full px-3"
                                label="Phone"
                                type="mask"
                                :mask="['+#(###) ###-#####']"
                                placeholder="Enter your phone number"
                                :value.sync="contactInfo.phone"
                                :errors="errors['contact_info.phone']"
                            />
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <field
                                class="w-full px-3"
                                label="Email"
                                type="email"
                                placeholder="Enter your E-mail address"
                                :value.sync="contactInfo.email"
                                :errors="errors['contact_info.email']"
                            />
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <field
                                class="w-full px-3"
                                label="Address"
                                type="places"
                                placeholder="Enter your address for delivery"
                                :value.sync="contactInfo.address"
                                :errors="errors['contact_info.address']"
                            />
                        </div>
                    </div>
                </div>
                <hr class="pb-6 mt-6">
                <div class="my-4 mt-6 -mx-2 lg:flex">
                    <div class="lg:px-2 lg:w-1/2">
                        <div class="p-4 bg-gray-100 rounded-full">
                            <h1 class="ml-2 font-bold uppercase">Order note</h1>
                        </div>
                        <div class="p-4">
                            <p class="mb-4 italic">If you have some information for the courier you can leave them in the box below</p>
                            <textarea v-model="note" class="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
                        </div>
                    </div>
                    <div class="lg:px-2 lg:w-1/2">
                        <div class="p-4 bg-gray-100 rounded-full">
                            <h1 class="ml-2 font-bold uppercase">Order Details</h1>
                        </div>
                        <div class="p-4">
                            <p class="mb-6 italic">Shipping cost fixed</p>
                            <div class="flex justify-between pt-4 border-b">
                                <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                    Shipping cost
                                </div>
                                <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                    {{ costWithCurrencyRate($store.getters.shippingCost) }}{{ getCurrencySymbol($store.getters.currentCurrency) }}
                                </div>
                            </div>
                            <div class="flex justify-between pt-4 border-b">
                                <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                    Total
                                </div>
                                <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                    {{ costWithCurrencyRate($store.getters.totalCost) }}{{ getCurrencySymbol($store.getters.currentCurrency) }}
                                </div>
                            </div>
                            <button @click.prevent="order" :disabled="disabledOrderButton" class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                                <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                                <span class="ml-2 mt-5px">ORDER</span>
                                <span v-if="disabledOrderButton">
                                    <img src="https://samherbert.net/svg-loaders/svg-loaders/puff.svg" alt="" width="25">
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CurrencyMixin from '../mixins/currency'
    import CartMixin from '../mixins/cart'

    export default {
        name: "Cart",
        props: {
            user: {
                required: false,
                type: Object
            }
        },
        mixins: [CurrencyMixin, CartMixin],
        created() {
            if (!this.$store.getters.cartItemsCount) {
                window.location.href = '/'
            }
            this.contactInfo = this.user || {}
        },
        watch: {
            '$store.getters.cartItemsCount'(newVal) {
                if (!newVal) {
                    window.location.href = '/'
                }
            }
        },
        data() {
            return {
                contactInfo: null,
                note: null,
                disabledOrderButton: false,
                errors: {},
                updateTable: 0
            }
        },
        methods: {
            async order() {
                this.errors = {}
                this.disabledOrderButton = true
                try {
                    const items = this.$store.getters.items
                    const {data: {data}} = await axios.post('/api/orders', {
                        items: this.prepareItemsForOrder(items),
                        contact_info: this.contactInfo,
                        currency: this.$store.getters.currentCurrency,
                        note: this.note,
                    })
                    this.clearCart(true)
                    this.$swal('Thank you for your choice. You will get order details by email.').then(() => {
                        window.location.href = data.status_link
                    })
                } catch ({response: {data: {errors}}}) {
                    this.errors = errors || {}
                    console.log(this.errors)
                } finally {
                    this.disabledOrderButton = false
                }
            },
            prepareItemsForOrder(items) {
                const resultItems = {}
                Object.keys(items).map(k => {
                    resultItems[k] = items[k].count
                })
                return resultItems
            }
        }
    }
</script>

<style scoped>

</style>
