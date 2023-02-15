<template>
    <ul class="account-list">
        <Account 
            v-for="account in accounts"
            :key="account.id"
            :account="account"
            class="account-list__item"
            @edit-account="emitEditAccount"
            @delete-account="emitDeleteAccount"
        />
    </ul>                                     
</template>

<script>
import Account from '../components/Account.vue';

export default {
    name: 'AccountList',

    components: {
        Account
    },

    props: {
        accounts: {
            default: () => [],
            require: true,
            type: Array
        }
    },

    methods: {
        emitEditAccount(accountToEdit) {
            this.$emit('edit-account', accountToEdit);
        },

        emitDeleteAccount(accountToDelete) {
            this.$emit('delete-account', accountToDelete)
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.account-list {
    @include flex(row, wrap, $gap: 1rem);

    padding: 0;
    text-align: center;
    list-style-type: none;
}
</style>