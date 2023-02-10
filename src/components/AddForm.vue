<template>
    <form 
        class="form js-add-form"
        @submit.prevent="handleAddFormSubmit" 
    >
        <p class="form__info">
            Fill in the following details to add account
        </p>
        
        <Input
            label = "First Name"
            inputFor = "account_first_name"
            name = "firstName"
            v-model = "form.firstName"
        />

        <Input 
            label = "Last Name"
            inputFor = "account_last_name"
            name = "lastName"
            v-model = "form.lastName"
        />

        <Input 
            label = "Avatar"
            inputFor = "account_avatar"
            name = "avatar"
            v-model = "form.avatar"
        />

        <Input 
            label = "Tag"
            inputFor = "account_tag"
            name = "tag"
            v-model = "form.tag"
        />
                                 
        <Button 
            class="form__button"
            text="Add Account"
        />
    </form>
</template>

<script>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

export default {
    name: 'AddForm',

    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                avatar: '',
                tag: ''
            }
        }
    },

    components: {
        Input,
        Button
    },

    methods: {
        handleAddFormSubmit(event) {
            const newAccount = this.createNewAccount(this.form)
            this.$root.$emit('submitAddForm', newAccount)
            event.target.reset()
        },

        createNewAccount(accountDbo) {
            const id = Date.now();
            const { firstName, lastName, avatar, tag } = accountDbo;

            return { id, firstName, lastName, avatar, tag };
        } 
    }
}
</script>

<style lang="scss">
@import '../scss/styles';
@import '../scss/form.scss';
</style>
