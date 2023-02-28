<template>
    <div>
        <Header />
        <AccountsHandler />
        <Footer />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Header from '../components/Header.vue';
import AccountsHandler from '../components/AccountsHandler.vue';
import Footer from '../components/Footer.vue';

@Component({
    components: {
        Header,
        AccountsHandler,
        Footer,
    }
})
export default class AccountManager extends Vue {
    public name: string = 'AccountManager';
}
</script>