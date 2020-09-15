import Storage from "./helpers/Storage";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue';
import store from './store/index';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store,
    created() {
        this.$store.commit('freshCartItemsCount')
        this.updateCosts()
    },
    computed: {
        cartItemsCount () {
            return this.$store.getters.cartItemsCount
        }
    },
    data() {
        return {
            showMobileMenu: false,
            updateDetailedCounts: 0
        }
    },
    methods: {
        async updateCosts() {
            const items = this.$store.getters.items
            const itemsKeys = Object.keys(items)
            if (!itemsKeys.length) {
                return
            }

            itemsKeys.map(async cartItemKey => {
                const cartItem = items[cartItemKey]
                const {data: {data}} = await axios.get(`/api/products/${cartItem.item.id}`)
                this.$store.commit('updateItem', data)
            })
        }
    }
});
