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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SocialIcon from '../components/SocialIcon.vue';
import SOCIAL_ICONS from '../data/SocialIcons';

@Component({
    components: {
        SocialIcon
    }
})
export default class SocialIcons extends Vue {
    public name: string = 'SocialIcons';

    public socialIcons = SOCIAL_ICONS
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.social-icons {
    @include flex(row, $justify-content: center);

    margin: 0 auto;
}
</style>
