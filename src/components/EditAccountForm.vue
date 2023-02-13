<template>
    <!-- <form 
        class="form"
        @submit.prevent="handleEditFormSubmit"
    >
        <p class="form__info">
            Edit account details below and update
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

        <Input
            label="Id"
            inputFor="account_id"
            name="id"
            v-model="formValues.id"
            className="hide"
        />
                         
        <button class="form__button">
            Update Account
        </button>
    </form> -->
    <AccountForm 
        @submit="handleEditFormSubmit"
        :formValues="formValues"
        info="Edit account details below and update"
    />
</template>

<script>
import AccountForm from '../components/AccountForm.vue';

export default {
    name: 'EditAccountForm',

    props: {
        formValues: Object
    },

    components: {
        AccountForm
    },

    methods: {
        handleEditFormSubmit(event) {
            this.$emit('submit-edit-form', this.formValues)
            event.target.reset()
        },
    },
}
</script>
