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
                    :value="tagOption"
                >
                    {{  tagOption }}
                </option>
            </select>
            <Input 
                inputFor="searchInput" 
                name="searchInput"
                placeholder="Search by name or surname"
                v-model="accountsNameFilter"
            />
        </div>
        <AccountList :accounts="accounts" /> 
        <div class="accounts-form-wrapper">
            <AddAccountForm />
            <EditAccountForm v-if="!isEditFormHidden" />
        </div>
    </div>
</template>

<script>
import AccountList from './AccountList.vue';
import Input from '../components/Input.vue';
import AddAccountForm from '../components/AddAccountForm.vue';
import EditAccountForm from '../components/EditAccountForm.vue';
import AccountModel from '../model/AccountModel';

export default {
    name: 'AccountsHandler',

    data() {
        return {            
            accountsNameFilter: '',
            accountsTagFilter: '',
            tagOptions: ['Friend', 'Relative', 'Colleague']
        }
    },

    components: {
        AccountList,
        Input,
        AddAccountForm,
        EditAccountForm
    },

    computed: {
        accounts() {
            const allAccounts = this.$store.getters.getAccounts;

            if (this.accountsNameFilter) {
                return AccountModel.filterAccountsByName(allAccounts, this.accountsNameFilter);
            }

            if (this.accountsTagFilter) {
                return AccountModel.filterAccountsByTag(allAccounts, this.accountsTagFilter);
            }

            return allAccounts;
        },

        isEditFormHidden() {
            return this.$store.state.isEditFormHidden
        }
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
