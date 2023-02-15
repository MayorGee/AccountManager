<template>
    <div class="footer-nav">
        <a href="" class="footer-nav__link">AccManager</a>
        <ul class="footer-nav__list">
            <LinkListItem 
                v-for="(footerLink, index) in footerLinks"
                :key="index"
                class="footer-nav__list-item"
                linkClass="footer-nav__link"
                :textContent="footerLink"
            />
        </ul>
    </div>
</template>

<script>
import LinkListItem from '../components/LinkListItem.vue';

export default {
    name: 'FooterNav',

    components: {
        LinkListItem
    },

    data() {
        return  {
            footerLinks: ['Home', 'About', 'Contact', 'Blog']
        }
    }
}
</script>

<style lang="scss">
@import '../scss/styles.scss';

.footer-nav {
    @include flex(row, $justify-content: space-between, $align-items: center);

    width: 98%;
    margin: auto;

    &__list {
        @include flex(row);

        list-style-type: none;
    }

    &__link {
        @include text-format($color: $creamy-brown, $text-decoration: none);
    }
}
</style>
