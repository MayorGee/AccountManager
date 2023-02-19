<template>
    <AccountForm 
        @submit="submit"
        info="Fill in the following details to add account"
        btnText="Add Account"
    />
</template>

<script>
import AccountForm from '../components/AccountForm.vue';

export default {
    name: 'AddAccountForm',

    components: {
        AccountForm
    },

    methods: {
        submit(submittedAccount) {
            this.$store.dispatch('addAccount', submittedAccount);
        }
    }
}
</script>
