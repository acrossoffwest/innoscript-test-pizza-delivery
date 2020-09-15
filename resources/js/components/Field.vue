<template>
    <div>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" :for="`field-${_uid}`">
            {{ label }}
        </label>
        <input v-model="val" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" :id="`field-${_uid}`" :type="type" :placeholder="placeholder">
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
        computed: {
            val: {
                set(v) {
                    this.$emit('update:value', v)
                },
                get() {
                    return this.value
                }
            }
        }
    }
</script>

<style scoped>

</style>
