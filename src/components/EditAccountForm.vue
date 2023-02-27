<template>
    <AccountForm 
        @submit="submit"
        :editAccountFormData="accountFormData"
        info="Edit account details below and update"
        btnText="Update Account"
    />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import AccountForm from '../components/AccountForm.vue';

@Component({
    components: {
        AccountForm
    }
})
export default class EditAccountForm extends Vue {
    public name = 'EditAccountForm';

    @Action('toggleEditAccountForm') actionToggleEditAccountForm: Function
    @Getter('editAccountFormData') getterEditAccountFormData: Function;

    public submit() {
        this.actionToggleEditAccountForm();
    }

    get accountFormData() {
        return this.getterEditAccountFormData
    }
}
</script>
