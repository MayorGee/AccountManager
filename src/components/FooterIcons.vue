<template>
    <div class="footer-icons">
        <FooterIcon 
            src="fb-logo.svg"
            alt="fb icon"
        />
        <FooterIcon 
            src="instagram-logo.svg"
            alt="instagram icon"
        />
        <FooterIcon 
            src="whatsapp-logo.svg"
            alt="whatsapp icon"
        />
        <FooterIcon 
            src="linkedIn-logo.svg"
            alt="linkedIn icon"
        />               
    </div>
</template>

<script>
import FooterIcon from '../components/FooterIcon.vue';

export default {
    name: 'FooterIcons',

    components: {
        FooterIcon
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.footer-icons {
    @include flex(row, $justify-content: center);

    margin: 0 auto;
}
</style>
