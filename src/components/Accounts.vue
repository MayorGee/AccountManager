<template>
    <div class="accounts">
        <div class="accounts__search">
            <select 
                name="tags" 
                id="tags"
                class="accounts__select-tag js-select-tag"
                v-model="accountsFilterByTag"
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
                v-model="accountsFilterByInput"
            />
        </div>

        <template v-if="accountsFilterByInput">
            <AccountsList :accounts="filteredAccountsByInput" /> 
        </template>

        <template v-else-if="accountsFilterByTag">
            <AccountsList :accounts="filteredAccountsByTag" /> 
        </template>

        <template v-else>
            <AccountsList :accounts="accounts" /> 
        </template>
    </div>
</template>

<script>
import AccountsList from './AccountsList.vue';
import Input from '../components/Input.vue';
import AccountApi from '../script/AccountApi';

export default {
    name: 'Accounts',

    data() {
        return {
            accounts: [],
            accountsFilterByInput: '',
            accountsFilterByTag: ''
        }
    },

    components: {
        AccountsList,
        Input,
        AccountApi
    },

    methods: {
        addAccount(newAccount) {
            this.accounts.push(newAccount);
        },

        updateAccount(edittedAccount) {
            const targetAccount = this.accounts.find(account => account.id === edittedAccount.id);
            Object.assign(targetAccount, edittedAccount);
        }
    },

    computed: {
        filteredAccountsByInput() {
            return this.accounts.filter(account => {
                const { firstName, lastName, tag } = account;

                return firstName.includes(this.accountsFilterByInput) 
                    || lastName.includes(this.accountsFilterByInput)
                    || tag.includes(this.accountsFilterByInput);
            });
        },

        filteredAccountsByTag() {
            return this.accounts.filter(account => {
                const { tag } = account;

                return tag.includes(this.accountsFilterByTag);
            });
        },
    },

    async created() {
        this.accounts = await AccountApi.getInitialAccounts();
    },

    mounted() {
        this.$root.$on('submitAddForm', (newAccount) => {
            this.addAccount(newAccount)
        }),

        this.$root.$on('deleteAccount', (accountId) => {
            this.accounts = this.accounts.filter(account => account.id !== accountId);
        }),

        this.$root.$on('submitEditForm', (edittedAccount) => {
            this.updateAccount(edittedAccount)
        })
    }
}
</script>

<style lang="scss">
@import '../scss/styles.scss';

.accounts {
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

    &__list {
        @include flex(row, wrap, $gap: 1rem);

        padding: 0;

        text-align: center;

        list-style-type: none;
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
</style>
