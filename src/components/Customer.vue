<template>
    <div class="customer">
        <div class="customer__top">
            Customer name:

            {{ firstname }}
        </div>

        <div class="customer__bottom">
            Customer surname:

            {{ surname }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Customer',

        props: {
            firstname: {
                default: '',
                require: true,
                type: String
            },
            surname: {
                default: false,
                require: true,
                type: String
            }
        },

        computed: {
            fullname() {
                return this.firstname + ' ' + this.surname;
            }
        },

        watch: {
            fullname(fullname) {
                this.$emit('fullname-changed', fullname);
            },
        }
    }
</script>

<style lang="scss" scoped>
    .customer {
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>
