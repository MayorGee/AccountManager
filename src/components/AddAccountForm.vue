<template>
    <AccountForm 
        @submit="submit"
        info="Fill in the following details to add account"
        btnText="Add Account"
    />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Account, MessageType } from '../abstracts/common';
import AccountForm from '../components/AccountForm.vue';
import AccountModel from '../model/AccountModel';
import LoggerMixin from '../mixins/logger';

@Component({
    components: {
        AccountForm
    }
})
export default class AddAccountForm extends LoggerMixin {
    public name: string = 'AddAccountForm';

    @Action('addAccount') actionAddAccount: Function

    submit(submittedAccount: Account) {
        try {
            this.actionAddAccount(submittedAccount);
            AccountModel.resetAccount(submittedAccount);
            
            this.logger({
                type: MessageType.success,
                message: 'Account Added'
            })
        } catch(error: any) {
            this.logger({
                type: MessageType.failed,
                message: error.message
            })
        }
    }
}
</script>
