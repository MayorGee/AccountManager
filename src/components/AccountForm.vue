<template>
    <form 
        class="account-form"
        @submit.prevent="handleSubmit" 
    >
        <p class="account-form__info">
            {{ info }}
        </p>
        
        <Input
            label="First Name"
            inputFor="account_first_name"
            name="firstName"
            v-model="formValues.firstName"
        />

        <Input 
            label="Last Name"
            inputFor="account_last_name"
            name="lastName"
            v-model="formValues.lastName"
        />

        <Input 
            label="Avatar"
            inputFor="account_avatar"
            name="avatar"
            v-model="formValues.avatar"
        />

        <Input 
            label="Tag"
            inputFor="account_tag"
            name="tag"
            v-model="formValues.tag"
        />
                                 
        <button class="account-form__button">
            Add Account
        </button>
    </form>
</template>

<script>
import Input from '../components/Input.vue';

export default {
    name: 'AccountForm',

    props: {
       formValues: Object,
       info: String
    },

    components: {
        Input
    },

    methods: {
        handleSubmit(event) {
            this.$emit('submit', event)
        }
    }
}
</script>

<style lang="scss">
@import '../scss/styles';

.account-form {
    @include flex(column, $align-items:center);

    @include size(30rem, 50rem);
    
    margin: 0 1rem;
    padding: 1rem 0;

    color: $white;

    background-color: $black;
    border-radius: 1rem;

    @include screen-for($tablet) {
        margin: 1rem auto;
    }

    &__info {
        @include text-format(2rem, 600, $text-align: center);
        
        margin: 1rem;
    }

    &__button {
        color: $black;
        font-weight: 700;
            
        padding: 1rem 2rem;
    
        background-color: $creamy-brown;
        border: none;
        border-radius: 1rem;
    }
}
</style>
