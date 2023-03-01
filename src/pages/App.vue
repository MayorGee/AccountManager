<template>
    <AccountManager />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import AccountManager from '../components/AccountManager.vue';

@Component({
    components: {
        AccountManager
    }
})
export default class App extends Vue {
    public name = 'App';

    @Action('loadAccounts') loadAccounts: Function;

    async created() {
        this.loadAccounts();
    }
}

</script>

