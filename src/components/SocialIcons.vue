<template>
    <div class="social-icons">
        <SocialIcon
            v-for="(socialIcon, index) in socialIcons" 
            :key="index"
            :src="socialIcon.src"
            :alt="socialIcon.alt"
        />               
    </div>
</template>

<script>
import SocialIcon from '../components/SocialIcon.vue';

export default {
    name: 'SocialIcons',

    data() {
        return {
            socialIcons: [
                { 
                    src: 'fb-logo.svg',
                    alt: 'Facebook icon'
                },
                { 
                    src: 'instagram-logo.svg',
                    alt: 'Instagram icon'
                },
                { 
                    src: 'whatsapp-logo.svg',
                    alt: 'Whatsapp icon'
                },
                { 
                    src: 'linkedIn-logo.svg',
                    alt: 'LinkedIn icon'
                },
            ]
        }
    },

    components: {
        SocialIcon
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.social-icons {
    @include flex(row, $justify-content: center);

    margin: 0 auto;
}
</style>
