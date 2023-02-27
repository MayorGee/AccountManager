<template>
    <AccountForm 
        @submit="submit"
        info="Fill in the following details to add account"
        btnText="Add Account"
    />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Account } from '../abstracts/common';
import AccountForm from '../components/AccountForm.vue';
import AccountModel from '../model/AccountModel';

@Component({
    components: {
        AccountForm
    }
})
export default class AddAccountForm extends Vue {
    public name = 'AddAccountForm';

    @Action('addAccount') actionAddAccount: Function

    submit(submittedAccount: Account) {
        this.actionAddAccount(submittedAccount);
        AccountModel.resetAccount(submittedAccount);
    }
}
</script>
