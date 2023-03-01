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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import { ACCOUNT_TAGS } from '../abstracts/common';
import AccountList from '../components/AccountList.vue';
import Input from '../components/Input.vue';
import AddAccountForm from '../components/AddAccountForm.vue';
import EditAccountForm from '../components/EditAccountForm.vue';
import { Account } from '../abstracts/Interface';

@Component({
    components: {
        AccountList,
        Input,
        AddAccountForm,
        EditAccountForm
    }
})
export default class AccountsHandler extends Vue {
    public name: string = 'AccountsHandler';

    @Getter('accounts') accounts: Account[];
    @Getter('accountsNameFilter') getAccountsNameFilter: string;
    @Getter('accountsTagFilter') getAccountsTagFilter: string;
    @Getter('isEditFormHidden') isEditFormHidden: Boolean;

    @Mutation('setAccountsNameFilter') setAccountsNameFilter: any
    @Mutation('setAccountsTagFilter') setAccountsTagFilter: any

    get tagOptions(): string[] {
        return ACCOUNT_TAGS;
    } 

    get accountsNameFilter(): string {
       return this.getAccountsNameFilter;
    }

    set accountsNameFilter(filterValue) {
        this.setAccountsNameFilter(filterValue)
    }

    get accountsTagFilter(): string {
        return this.getAccountsTagFilter
    }

    set accountsTagFilter(filterValue) {
        this.setAccountsTagFilter(filterValue)
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
