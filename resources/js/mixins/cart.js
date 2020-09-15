export default {
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
        },
        clearCart() {
            if (!confirm('Do you want clear your cart?')) {
                return
            }
            this.$store.commit('clearCart')
            ++this.updateDetailedCounts
        }
    }
}
