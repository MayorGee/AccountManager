<template>
    <ul class="accounts__list js-account-list">
        <template v-if="isAccountExist">
            <li 
                v-for="account in accounts"
                :key="account.id"
                class="account__list-item js-account-list-item"
            >
                <img 
                    :src="account.avatar"
                    alt="account avatar"
                    class="account__avatar js-account-avatar"
                />
                <p class="account__fullname js-account-fullname">
                    {{ fullName(account) }}
                </p>
        
                <span class="account __tag js-account-tag hide">
                    {{ account.tag }}
                </span>
        
                <Button
                    class="account__edit-button js-account-edit-button"
                    text="Edit"
                    @click="handleEditAccount(account)"
                />
                <Button 
                    class="account__delete-button js-account-delete-button"
                    text="Delete"
                    @click="handleDeleteAccount(account.id)"
                />
            </li> 
        </template>

        <p v-else>
            Accounts will be displayed here when they are available
        </p>
    </ul>                                     
</template>

<script>
import Button from '../components/Button.vue';

export default {
    name: 'AccountsList',

    components: {
        Button
    },

    props: {
        accounts: {
            default: () => [],
            require: true,
            type: Array
        }
    },

    methods: {
        fullName(account) {
            return account.firstName + ' ' + account.lastName;
        },

        handleEditAccount(account) {
            this.$root.$emit('editAccount', account);
        },

        handleDeleteAccount(accountId) {
            if (confirm('Are you sure you want to delete this account?')) {
                this.$root.$emit('deleteAccount', accountId)
            }
        },
    },

    computed: {
        isAccountExist() {
            return Array.isArray(this.accounts) && this.accounts.length
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.js-account {
    &-avatar {
        @include size(20rem, 20rem);

        display: block;
        margin: 0 auto;

        border-radius: 50%;
    }

    &-edit-button {
        margin-right: 1.5rem;
        padding: 0.5rem 1rem;

        color: $white;
        font-weight: bold;

        background-color: $grey;
                
        border: none;
        border-radius: 1rem;
    }

    &-delete-button {
        padding: 0.5rem 1rem;

        font-weight: bold;

        background-color: $red;

        border: none;
        border-radius: 1rem;
    }
}
</style>