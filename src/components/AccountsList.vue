<template>
    <ul class="account__list">
        <li 
            v-for="account in accounts"
            :key="account.id"
            class="account__list-item"
        >
            <img 
                :src="account.avatar"
                alt="account avatar"
                class="account__avatar"
            />
            <p class="account__fullname">
                {{ getFullName(account) }}
            </p>
            <span class="account __tag hide">
                {{ account.tag }}
            </span>
            <button
                class="account__edit-button"
                @click="handleEditAccount(account)"
            >
                Edit
            </button>
            <button 
                class="account__delete-button"
                @click="handleDeleteAccount(account.id)"
            >
                Delete
            </button>
        </li> 
    </ul>                                     
</template>

<script>
import AccountModel from '../script/AccountModel';

export default {
    name: 'AccountsList',

    props: {
        accounts: {
            default: () => [],
            require: true,
            type: Array
        }
    },

    methods: {
        getFullName(account) {
            return AccountModel.getAccountFullname(account)
        },

        handleEditAccount(account) {
            this.$emit('edit-account', account);
        },

        handleDeleteAccount(accountId) {
            if (confirm('Are you sure you want to delete this account?')) {
                this.$emit('delete-account', accountId)
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.account {
    &__list {
        @include flex(row, wrap, $gap: 1rem);

        padding: 0;

        text-align: center;

        list-style-type: none;
    }

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