<template>
    <AccountForm 
        @submit="editFormSubmit"
        :editAccountFormData="accountFormData"
        info="Edit account details below and update"
        btnText="Update Account"
    />
</template>

<script>
import AccountForm from '../components/AccountForm.vue';

export default {
    name: 'EditAccountForm',

    components: {
        AccountForm
    },

    methods: {
        editFormSubmit() {
            this.$store.dispatch('hideEditAccountForm')
        },
    },

    computed: {
        accountFormData() {
            return this.$store.getters.getEditAccountFormData
        }
    }
}
</script>
