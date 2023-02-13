<template>
    <AccountForm 
        @submit="handleAddFormSubmit"
        :formValues="formValues"
        info="Fill in the following details to add account"
    />
</template>

<script>
import AccountForm from '../components/AccountForm.vue';
import AccountModel from '../script/AccountModel';

export default {
    name: 'AddAccountForm',

    data() {
        return {
            formValues: {
                firstName: '',
                lastName: '',
                avatar: '',
                tag: ''
            },
        }
    },

    components: {
        AccountForm
    },

    methods: {
        handleAddFormSubmit(event) {
            const newAccount = AccountModel.createNewAccount(this.formValues)
            this.$emit('submit-add-form', newAccount)
            event.target.reset()
        } 
    }
}
</script>
