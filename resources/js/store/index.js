import Vue from 'vue';
import Vuex from 'vuex';
import Storage from "../helpers/Storage"

Vue.use(Vuex)

const storage = new Storage()
const cart = storage.get('cart') || {items: {}}
const getCartItemsCountsSum = (items = {}) => {
    return Object.keys(items).map(i => items[i].count).reduce((a, b) => a + b)
}

const defaultCurrency = 'euro'
if (!storage.get('currentCurrency')) {
    storage.set('currentCurrency', defaultCurrency)
}

export default new Vuex.Store({
    state: {
        cart: cart,
        cartItemsCount: 0,
        shippingCost: 15,
        currentCurrency: storage.get('currentCurrency'),
        currencies: {
            euro: 1,
            dollar: 1.19
        }
    },
    mutations: {
        freshCartItemsCount(state){
            if (!Object.keys(state.cart.items).length) {
                return
            }
            state.cartItemsCount = getCartItemsCountsSum(state.cart.items)
        },
        addItem(state, item){
            if (!state.cart.items) {
                state.cart.items = {}
            }
            ++state.cartItemsCount
            if (state.cart.items[item.id]) {
                ++state.cart.items[item.id].count
                storage.set('cart', state.cart)
                return
            }
            state.cart.items[item.id] = {
                count: 1,
                item: item
            }
            storage.set('cart', state.cart)
        },
        updateItem(state, item){
            if (!state.cart.items) {
                state.cart.items = {}
            }
            if (!state.cart.items[item.id]) {
                return
            }
            state.cart.items[item.id] = {
                count: state.cart.items[item.id].count,
                item: item
            }
            storage.set('cart', state.cart)
        },
        removeItem(state, itemId){
            if (!state.cart.items) {
                return
            }
            const item = state.cart.items[itemId]
            if (!item) {
                return
            }
            --item.count
            --state.cartItemsCount
            if (item.count !== 0) {
                storage.set('cart', state.cart)
                return;
            }
            delete state.cart.items[itemId]
            storage.set('cart', state.cart)
        },
        removeAllItem(state, itemId){
            if (!state.cart.items || !state.cart.items[itemId]) {
                return
            }
            delete state.cart.items[itemId]
            storage.set('cart', state.cart)
        },
        clearCart(state){
            storage.delete('cart')
        },
        setCurrentCurrency(state, currency){
            state.currentCurrency = currency
            storage.set('currentCurrency', currency)
        }
    },
    getters: {
        cart(state){
            return state.cart
        },
        items(state){
            return state.cart.items
        },
        cartItemsCount(state){
            return state.cartItemsCount
        },
        shippingCost(state){
            return state.shippingCost
        },
        currencies(state){
            return state.currencies
        },
        rate(state){
            return state.currencies[state.currentCurrency]
        },
        currentCurrency(state){
            return state.currentCurrency
        },
        totalCost(state){
            const items = state.cart.items
            const keys = Object.keys(items)
            if (!keys.length) {
                return 0 + state.shippingCost
            }
            return keys.map(i => items[i].count * items[i].item.cost).reduce((a, b) => a + b) + state.shippingCost
        }
    }
})
