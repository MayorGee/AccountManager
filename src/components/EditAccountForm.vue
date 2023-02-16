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

    props: {
        accountFormData: Object
    },

    components: {
        AccountForm
    },

    methods: {
        editFormSubmit(submittedAccount) {
            this.$emit('submit', submittedAccount)
        },
    }
}
</script>
