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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { FOOTER_LINKS } from '../abstracts/common';
import LinkListItem from '../components/LinkListItem.vue';

@Component({
    components: {
        LinkListItem
    }
})
export default class FooterNav extends Vue {
    public name: string = 'FooterNav';

    public footerLinks: string[] = FOOTER_LINKS;
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
