<template>
    <AccountManager />
</template>

<script>
    import AccountManager from '../components/AccountManager.vue';

    export default {
        name: 'App',

        components: {
            AccountManager
        },

        async created() {
            this.$store.dispatch('loadAccounts');
        },
    }

</script>

