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
            @click="editAccount"
        >
            Edit
        </button>
        <button 
            class="account__delete-button"
            @click="deleteAccount"
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
        editAccount() {
            this.$emit('edit-account', this.account);
        },

        deleteAccount() {
            if (confirm('Are you sure you want to delete this account?')) {
                this.$emit('delete-account', this.account)
            }
        },
    },

    computed: {
        fullName() {
            return AccountModel.getAccountFullname(this.account)
        }
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