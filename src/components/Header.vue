<template>
    <header class="header">
        <h1 class="header__title">Account Manager</h1>
    </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    public name = 'Header';
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.header {
    padding: 1rem 0;
    
    background-color: $creamy-brown;
    
    &__title {
        @include text-format(3rem, $text-align: center);
    }
}
</style>
