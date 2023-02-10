<template>
    <form 
        :class="className"
        @submit.prevent="onSubmit" 
    >
        <p class="form__info">
            {{ info }}
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
            :text="buttonText"
        />
    </form>
</template>

<script>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

export default {
    name: 'Form',

    data() {
        return {
            form: {
                id: '',
                firstName: '',
                lastName: '',
                avatar: '',
                tag: ''
            },
        }
    },

    props: {
        onSubmit: Function,
        className: String,
        info: String,
        buttonText: String
    },

    components: {
        Input,
        Button
    },

    watch: {
        form(odlForm, newForm) {
            this.$emit('updateForm', newForm);
        }
    },
}
</script>
