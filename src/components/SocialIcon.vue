<template>
    <a 
        href="" 
        class="social-icon"
    >
        <img 
            :src="`assets/icons/${src}`" 
            :alt="alt"
            class="social-icon__img" 
        />
    </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SocialIcon extends Vue {
    public name: string = 'SocialIcon'

    @Prop() src: string
    @Prop() alt: string
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.social-icon {
    &__img {
        @include size(3.5rem, 3.5rem);
        margin: 1rem;
    
        border-radius: 50%;
    }
}
</style>
