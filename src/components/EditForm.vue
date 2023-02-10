<template>
    <form 
        class="form js-update-form"
        @submit.prevent="handleEditFormSubmit" 
        v-if="!isHidden"
    >
        <p class="form__info">
            Edit account details below and update
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

        <Input
            label = "Id"
            inputFor = "account_id"
            name = "id"
            v-model = "form.id"
            hide
        />
                         
        <Button 
            class="form__button"
            text="Update Account" 
        />
    </form>
</template>

<script>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

export default {
    name: 'EditForm',

    data() {
        return {
            form: {
                id: '',
                firstName: '',
                lastName: '',
                avatar: '',
                tag: ''
            },

            hide: true
        }
    },

    components: {
        Input,
        Button
    },

    methods: {
        handleEditFormSubmit(event) {
            this.$root.$emit('submitEditForm', this.form)
            event.target.reset()
        },

        resetForm(accountToEdit) {
            const { id, firstName, lastName, avatar, tag } = accountToEdit;

            this.form.id = id;
            this.form.firstName = firstName;
            this.form.lastName = lastName;
            this.form.avatar = avatar;
            this.form.tag = tag;
        },
    },

    computed: {
        isHidden() {
            return this.hide
        }
    },

    mounted() {
        this.$root.$on('editAccount', (accountToEdit) => {
            this.hide = false;

            this.resetForm(accountToEdit);
        })
    }
}
</script>

<style lang="scss">
@import '../scss/styles';
@import '../scss/form.scss';
</style>
