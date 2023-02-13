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
                <option value="Friend">Friend</option>
                <option value="Relative">Relative</option>
                <option value="Colleague">Colleague</option>
            </select>
            <Input 
                inputFor="searchInput" 
                name="searchInput"
                placeholder="Search by name, surname, or tag(s)"
                v-model="accountsNameFilter"
            />
        </div>

        <AccountsList 
            :accounts="computedAccounts"
            @edit-account="handleEditAccount"
            @delete-account="handleDeleteAccount" /> 

        <div class="custom-wrapper">
            <AddAccountForm 
                @submit-add-form="handleAddAccount"
            />
            <EditAccountForm 
                :v-if="!isEditFormHidden"
                :formValues="editFormValues"
                @submit-edit-form="handleEditFormSubmit" 
            />
        </div>
    </div>
</template>

<script>
import AccountsList from './AccountsList.vue';
import Input from '../components/Input.vue';
import AccountModel from '../script/AccountModel';
import AddAccountForm from '../components/AddAccountForm.vue';
import EditAccountForm from '../components/EditAccountForm.vue';

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
            
            editFormValues: {
                id: '',
                firstName: '',
                lastName: '',
                avatar: '',
                tag: ''
            }
        }
    },

    components: {
        AccountsList,
        Input,
        AddAccountForm,
        EditAccountForm
    },

    methods: {
        handleEditAccount(accountToEdit) {
            this.isEditFormHidden = false;

            AccountModel.setFormValues(this.editFormValues, accountToEdit);
        },

        handleAddAccount(newAccount) {
            AccountModel.addAccount(this.accounts, newAccount);
        },

        handleDeleteAccount(accountId) {
            this.accounts = AccountModel.deleteAccount(this.accounts, accountId);
        },

        handleEditFormSubmit(edittedAccount) {
            this.isEditFormHidden = true;

            AccountModel.updateAccount(this.accounts, edittedAccount);
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
        this.accounts = await AccountModel.getAccounts();
    }
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

.custom-wrapper {
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
