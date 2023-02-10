<template>
    <div>
        <Header />

        <Accounts />

        <div class=forms-container>
            <AddForm />
            <EditForm  />
        </div>

        <Footer />
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import Accounts from '../components/Accounts.vue';
    import AddForm from '../components/AddForm.vue';
    import EditForm from '../components/EditForm.vue';
    import Footer from '../components/Footer.vue';

    import AccountApi from '../script/AccountApi';

    export default {
        name: 'AccountManager',

        components: {
            Header,
            Accounts,
            AddForm,
            EditForm,
            Footer,
            AccountApi
        },

    }
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

    .forms-container {
        @include flex($justify-content: space-evenly);
        @include size(80%);

        @include screen-for($mobile) {
            @include flex(column);
        }

        margin: 0 auto;
    }
</style>
