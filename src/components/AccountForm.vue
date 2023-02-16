<template>
    <form 
        class="account-form"
        @submit.prevent="submit" 
    >
        <p class="account-form__info">
            {{ info }}
        </p>
        
        <Input
            label="First Name"
            inputFor="account_first_name"
            name="firstName"
            v-model="accountFormData.firstName"
        />

        <Input 
            label="Last Name"
            inputFor="account_last_name"
            name="lastName"
            v-model="accountFormData.lastName"
        />

        <Input 
            label="Avatar"
            inputFor="account_avatar"
            name="avatar"
            v-model="accountFormData.avatar"
        />

        <Input 
            label="Tag"
            inputFor="account_tag"
            name="tag"
            v-model="accountFormData.tag"
        />

        <Input 
            v-if="!hideId"
            type="hidden"
            label="Id"
            inputFor="account_id"
            name="id"
            v-model="accountFormData.id"
        />
                                 
        <button class="account-form__button">
            {{ btnText }}
        </button>
    </form>
</template>

<script>
import Input from '../components/Input.vue';
import AccountModel from '../model/AccountModel';

export default {
    name: 'AccountForm',

    data() {
        return {
            accountFormData: {
                id: '',
                firstName: '',
                lastName: '',
                avatar: '',
                tag: ''
            }
        }
    },

    props: {
        editAccountFormData: Object,
        info: String,
        btnText: String,
        hideId: {
            type: Boolean,
            default: true
        }
    },

    components: {
        Input
    },

    methods: {
        submit() {
            this.$emit('submit', this.accountFormData);

            AccountModel.resetAccountFormData(this.accountFormData)
        },
    },

    mounted() {
        if (this.editAccountFormData) {
            this.accountFormData = this.editAccountFormData
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
