import './bootstrap';
import Vue from 'vue';
import store from './store/index';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2)

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
    el: '#app',
    store,
    mixins: [require('./mixins/cart').default, require('./mixins/currency').default],
    data() {
        return {
            showMobileMenu: false
        }
    },
    methods: {

    }
});
