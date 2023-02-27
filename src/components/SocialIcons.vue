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
import socialIconsData from '../data/socialIconsData';

@Component({
    components: {
        SocialIcon
    }
})
export default class SocialIcons extends Vue {
    public name = 'SocialIcons';

    public socialIcons = socialIconsData
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.social-icons {
    @include flex(row, $justify-content: center);

    margin: 0 auto;
}
</style>
