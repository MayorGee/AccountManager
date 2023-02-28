<template>
    <footer class="footer">
        <h1 class="footer__title">Account Management Plc</h1>
        <p class="footer__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Officiis aperiam dolor atque ut voluptas minus 
            Necessitatibus corrupti hic velit doloremque officia facere 
            distinctio odio consectetur vel, ut impedit nihil doloribus.
        </p>
        
        <SocialIcons />
        
        <FooterNav />
    </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FooterNav from '../components/FooterNav.vue';
import SocialIcons from '../components/SocialIcons.vue';

@Component({
    components: {
        FooterNav,
        SocialIcons
    }
})
export default class Footer extends Vue {
    public name: string = 'Footer';
}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.footer {
    @include text-format($color: $white, $text-align: center);
    
    background-color: $dark-grey;

    &__title {
        @include text-format(4rem, $color: $creamy-brown);
    }

    &__description {
        width: 40%;
        margin: auto;
    }
}
</style>
