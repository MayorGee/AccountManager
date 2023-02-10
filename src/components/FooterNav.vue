<template>
    <div class="footer-nav">
        <a href="" class="footer-nav__link">AccManager</a>
        <ul class="footer-nav__list">
            <li class="footer-nav__list-item">
                <a href="" class="footer-nav__link">Home</a>
            </li>
            <li class="footer-nav__list-item">
                <a href="" class="footer-nav__link">About</a>
            </li>
            <li class="footer-nav__list-item">
                <a href="" class="footer-nav__link">Contact</a>
            </li>
            <li class="footer-nav__list-item">
                <a href="" class="footer-nav__link">Blog</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FooterNav'
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.footer-nav {
    @include flex(row, $justify-content: space-between, $align-items: center);

    width: 98%;
    margin: auto;

    &__list {
        @include flex(row);

        list-style-type: none;
    }

    &__list-item {
        margin-right: 1.5rem;
    }

    &__link {
        @include text-format($color: $creamy-brown, $text-decoration: none);
    }
}
</style>
