<template>
    <div>
        <div
            class="welcome-class"
            :class="counter > 0 ? 'welcome-class_high' : 'welcome-class_low'"
        >
            <h2>{{ welcomeText }}</h2>
        </div>

        <input v-model="welcomeText" />

        <input v-model="counter" />

        <button @click="minus">
            -
        </button>

        <button @click="plus">
            +
        </button>

        <Customer
            v-for="{ firstname, surname } in customers"
            :firstname="firstname"
            :surname="surname"
            :key="`Customer ${firstname}`"
        />
    </div>
</template>

<script>
    import Customer from '../components/Customer.vue';

    export default {
        name: 'HelloWebpack',

        components: {
            Customer
        },

        data() {
            return {
                welcomeText: 'Vue Lecture',
                counter: 0,
                customers: [
                    {
                        firstname: 'Sergey',
                        surname: 'Darnopykh'
                    },
                    {
                        firstname: 'Vlad',
                        surname: 'Slesarenko'
                    }
                ]
            }
        },

        methods: {
            minus() {
                this.counter -= 1;
            },

            plus() {
                this.counter += 1;
            },

            onFullNameChange(fullname) {
                console.log('fullname', fullname);
            }
        },

        mounted() {},

        created() {
        }
    }
</script>

<style scoped lang="scss">
    .welcome-class {
        h2 {
            margin-top: 0;
            margin-bottom: 2em;
        }

        padding: 1em;
        border-radius: 4px;
        font-size: 24px;
        text-align: center;

        &_low {
            //background: antiquewhite;
        }

        &_high {
            //background: aqua;
        }
    }
</style>
