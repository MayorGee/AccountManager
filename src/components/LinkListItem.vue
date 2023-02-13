<template>
    <li :class="`link-list__item ${className}`">
        <a 
            :href="`${href}`" 
            :class="`link-list__link ${linkClassname}`"
        >
            {{ textContent }}
        </a>
    </li>
</template>

<script>
export default {
    name: 'LinkListItem',

    props: {
        className: String,
        linkClassname: String,
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

.link-list {
    &__item {
        margin-right: 1.5rem;
    }

    &__link {
        @include text-format($color: $creamy-brown, $text-decoration: none);
    }
}
</style>
