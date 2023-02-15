<template>
    <li class="account">
        <img 
            :src="account.avatar"
            alt="account avatar"
            class="account__avatar"
        />
        <p class="account__fullname">
            {{ getFullName(account) }}
        </p>
        <span class="account__tag hide">
            {{ account.tag }}
        </span>
        <button
            class="account__edit-button"
            @click="editAccount(account)"
        >
            Edit
        </button>
        <button 
            class="account__delete-button"
            @click="deleteAccount(account.id)"
        >
            Delete
        </button>
    </li>                                    
</template>

<script>
import AccountModel from '../model/AccountModel';

export default {
    name: 'Account',

    props: {
        account: {
            default: {},
            require: true,
            type: Object
        }
    },

    methods: {
        getFullName(account) {
            return AccountModel.getAccountFullname(account)
        },

        editAccount(account) {
            this.$parent.$emit('edit-account', account);
        },

        deleteAccount(accountId) {
            if (confirm('Are you sure you want to delete this account?')) {
                this.$parent.$emit('delete-account', accountId)
            }
        },
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