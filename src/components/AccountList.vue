<template>
    <ul class="account-list">
        <AccountItem 
            v-for="account in accounts"
            :key="account.id"
            :account="account"
            class="account-list__item"
        />
    </ul>                                     
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Account } from '../abstracts/Interface';
import AccountItem from '../components/AccountItem.vue';

@Component({
    components: {
        AccountItem
    }
})
export default class AccountList extends Vue {
    public name: string = 'AccountList';

    @Prop({ default: () => [], required: true }) accounts: Account[]
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