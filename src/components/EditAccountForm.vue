<template>
    <AccountForm 
        @submit="submit"
        :editAccountFormData="accountFormData"
        info="Edit account details below and update"
        btnText="Update Account"
    />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { MessageType } from '../abstracts/Enum';
import AccountForm from '../components/AccountForm.vue';
import LoggerMixin from '../mixins/logger';

@Component({
    components: {
        AccountForm
    }
})
export default class EditAccountForm extends LoggerMixin {
    public name: string = 'EditAccountForm';

    @Action('toggleEditAccountForm') toggleEditAccountForm: Function
    @Getter('editAccountFormData') accountFormData: Function;

    public submit() {
        try {
            this.toggleEditAccountForm();
            this.logger({
                type: MessageType.success,
                message: 'Account Edited'
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
