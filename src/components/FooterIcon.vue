<template>
    <a href="" class="footer__link">
        <img 
            :src="`assets/icons/${src}`" 
            :alt="alt"
            class="footer__icon" 
        />
    </a>
</template>

<script>
export default {
    name: 'FooterIcon',

    props: {
        src:  String,
        alt:  String
    }
}
</script>
