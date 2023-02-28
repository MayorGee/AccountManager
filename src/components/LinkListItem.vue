<template>
    <li class="list-item">
        <a 
            :href="href" 
            :class="`list-item__link ${linkClass}`"
        >
            {{ textContent }}
        </a>
    </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class LinkListItem extends Vue {
    public name: string = 'LinkListItem';

    @Prop() linkClass: string;
    @Prop({ default: '', required: false }) href: string
    @Prop({ default: 'link', required: true }) textContent: string
}

</script>

<style lang="scss">
@import '../scss/styles.scss';

.list-item {
    margin-right: 1.5rem;
    
    &__link {
        @include text-format($color: $creamy-brown, $text-decoration: none);
    }
}
</style>
