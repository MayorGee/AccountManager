<template>
    <div class="accounts-handler">
        <div class="accounts-handler__search">
            <select 
                name="tags" 
                id="tags"
                class="accounts-handler__select-tag"
                v-model="accountsTagFilter"
            >
                <option 
                    value="" 
                    selected=true 
                >
                    None
                </option>
                <option 
                    v-for="(tagOption, index) in tagOptions"
                    :key="index"
                    value="tagOption"
                >
                    {{  tagOption }}
                </option>
            </select>
            <Input 
                inputFor="searchInput" 
                name="searchInput"
                placeholder="Search by name, surname, or tag(s)"
                v-model="accountsNameFilter"
            />
        </div>

        <AccountList 
            :accounts="computedAccounts"
            @edit-account="editAccount"
            @delete-account="deleteAccount" 
        /> 

        <div class="accounts-form-wrapper">
            <AddAccountForm 
                @submit="addAccount"
            />
            <EditAccountForm 
                v-if="!isEditFormHidden"
                :accountFormData="editAccountFormData"
                @submit="editFormSubmit" 
            />
        </div>
    </div>
</template>

<script>
import AccountList from './AccountList.vue';
import Input from '../components/Input.vue';
import AddAccountForm from '../components/AddAccountForm.vue';
import EditAccountForm from '../components/EditAccountForm.vue';

import AccountModel from '../model/AccountModel';
import AccountApi from '../model/AccountApi';

export default {
    name: 'AccountsHandler',

    data() {
        return {
            accounts: [],
            accountsNameFilter: '',
            accountsTagFilter: '',
            
            isEditFormHidden: {
                type: Boolean,
                default: true,
            },
            
            editAccountFormData: {
                type: Object,
                default: {},
            },

            tagOptions: ['Friend', 'Relative', 'Colleague']
        }
    },

    components: {
        AccountList,
        Input,
        AddAccountForm,
        EditAccountForm
    },

    methods: {
        editAccount(accountToEdit) {
            this.isEditFormHidden = false;

            this.editAccountFormData = accountToEdit;
        },

        addAccount(newAccount) {
            AccountModel.addAccount(this.accounts, newAccount);
        },

        deleteAccount(accountToDelete) {
            this.accounts = AccountModel.deleteAccount(this.accounts, accountToDelete.id);
        },

        editFormSubmit() {
            this.isEditFormHidden = true;
        }
    },

    computed: {
        computedAccounts() {
            if (this.accountsNameFilter) {
                return AccountModel.filterAccountsByName(this.accounts, this.accountsNameFilter);
            }

            if (this.accountsTagFilter) {
                return AccountModel.filterAccountsByTag(this.accounts, this.accountsTagFilter);
            }

            return this.accounts;
        }
    },

    async created() {
        this.accounts = await AccountApi.getAccounts();
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.accounts-handler {
    @include flex(column, $align-items: center);
    
    @include size(80%, $max-height: 60rem);
    
    overflow-y: scroll;
    
    margin: 3rem auto;
    padding: 2rem 1rem;    

    color: $white;

    background-color: $black;
    border-radius: 1rem;

    @media (max-width: 1025px) {
        width: 90%;
    }

    &__select-tag {
        @include size(25rem, 4.5rem);
            
        margin-top: 2.2rem;
        padding-left: 1rem;
    
        color: $white;
    
        background-color: $black;
        border: 1px solid $creamy-brown;
        border-radius: 1rem;
        outline: 1px solid $less-faint-creamy-brown;
    }

    &__search {
        @include flex($justify-content: space-evenly);
        @include size(80%);

        @include screen-for($mobile) {
            @include flex(column);
        }
    }
}

.accounts-form-wrapper {
    @include flex($justify-content: space-evenly);
    @include size(100%);

    @include screen-for($mobile) {
        @include flex(column);
    }
    
    margin: 0 auto;
    padding: 2rem 0;

    background: $faint-creamy-brown;
}
</style>
