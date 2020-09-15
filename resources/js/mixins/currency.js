export default {
    methods: {
        getCurrencySymbol(currency) {
            const currencies = {
                euro: '€',
                dollar: '$'
            }

            return currencies[currency]
        },
        setCurrency(currency) {
            this.$store.commit('setCurrentCurrency', currency)
        },
        ceil(v) {
            return Math.ceil(v)
        },
        costWithCurrencyRate(cost) {
            return this.ceil(cost * this.$store.getters.rate)
        }
    }
}
