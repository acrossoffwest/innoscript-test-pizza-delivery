<template>
    <div>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" :for="`field-${_uid}`">
            {{ label }}
        </label>
        <vue-google-autocomplete
            v-if="type === 'places'"
            id="map"
            :class="defaultClass"
            placeholder="Start typing"
            v-on:placechanged="getAddressData"
        />
        <the-mask v-else-if="type === 'mask'" v-model="val" :class="defaultClass" :id="`field-${_uid}`" :mask="mask" />
        <input v-else v-model="val"  :class="defaultClass" :type="type" :placeholder="placeholder">
        <p class="text-red-500 text-xs italic" v-if="errors"  v-for="error in errors">{{ error }}</p>
    </div>
</template>

<script>
    export default {
        name: "Field",
        props: {
            value: {
                required: false
            },
            label: {
                required: true,
                type: String
            },
            mask: {
                required: false,
                type: Array
            },
            type: {
                required: false,
                type: String,
                default: 'text'
            },
            placeholder: {
                required: false,
                type: String,
                default: 'Enter'
            },
            errors: {
                required: false,
                type: Array
            }
        },
        data: () => ({
            defaultClass: 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        }),
        computed: {
            val: {
                set(v) {
                    this.$emit('update:value', v)
                },
                get() {
                    return this.value
                }
            }
        },
        methods: {
            /**
             * When the location found
             * @param {Object} addressData Data of the found location
             * @param {Object} placeResultData PlaceResult object
             * @param {String} id Input container ID
             */
            getAddressData: function (addressData, placeResultData, id) {
                this.$emit('update:value', addressData.route)
            }
        }
    }
</script>

<style scoped>

</style>
