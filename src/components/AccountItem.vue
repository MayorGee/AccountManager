<template>
    <li class="account">
        <img 
            :src="account.avatar"
            alt="account avatar"
            class="account__avatar"
        />
        <p class="account__fullname">
            {{ fullName }}
        </p>
        <span class="account__tag hide">
            {{ account.tag }}
        </span>
        <button
            class="account__edit-button"
            @click="handleEditAccount"
        >
            Edit
        </button>
        <button 
            class="account__delete-button"
            @click="handleDeleteAccount"
        >
            Delete
        </button>
    </li>                                    
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { MessageType } from '../abstracts/Enum';
import { Account } from '../abstracts/Interface';
import LoggerMixin from '../mixins/logger';
import AccountModel from '../model/AccountModel';

@Component
export default class AccountItem extends LoggerMixin {
    public name: string = 'AccountItem';

    @Prop({ required: true }) account: Account

    @Action('editAccount') editAccount: Function
    @Action('deleteAccount') deleteAccount: Function

    handleEditAccount() {
        this.editAccount(this.account)
    }
    
    handleDeleteAccount() {
        try {
            if (confirm('Are you sure you want to delete this account?')) {
                this.deleteAccount(this.account)
            }
            
            this.logger({
                type: MessageType.success,
                message: 'Account Deleted'
            })
        } catch(error: any) {
            this.logger({
                type: MessageType.failed,
                message: error.message
            })
        }        
    }

    get fullName(): string {
        return AccountModel.getAccountFullname(this.account)
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.account {
    &__avatar {
        @include size(20rem, 20rem);

        display: block;
        margin: 0 auto;

        border-radius: 50%;
    }

    &__edit-button {
        margin-right: 1.5rem;
        padding: 0.5rem 1rem;

        color: $white;
        font-weight: bold;

        background-color: $grey;
                
        border: none;
        border-radius: 1rem;
    }

    &__delete-button {
        padding: 0.5rem 1rem;

        font-weight: bold;

        background-color: $red;

        border: none;
        border-radius: 1rem;
    }
}
</style>