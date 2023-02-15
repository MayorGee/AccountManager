<template>
    <li class="list-item">
        <a 
            :href="`${href}`" 
            :class="`list-item__link ${linkClass}`"
        >
            {{ textContent }}
        </a>
    </li>
</template>

<script>
export default {
    name: 'LinkListItem',

    props: {
        linkClass: String,

        href: {
            default: '',
            require: false,
            type: String
        },

        textContent: {
            default: 'link',
            require: true,
            type: String
        }
    },
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
