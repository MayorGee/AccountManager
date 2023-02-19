<template>
    <div>
        <Header />
        <AccountsHandler />
        <Footer />
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import AccountsHandler from '../components/AccountsHandler.vue';
    import Footer from '../components/Footer.vue';

    export default {
        name: 'AccountManager',

        components: {
            Header,
            AccountsHandler,
            Footer,
        }
    }
</script>