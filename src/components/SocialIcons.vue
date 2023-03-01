<template>
    <div class="social-icons">
        <SocialIcon
            v-for="(socialIcon, index) in socialIcons" 
            :key="index"
            :iconAttributes="socialIcon"
        />               
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { SOCIAL_ICONS } from '../abstracts/common';
import { IconAttributes } from '../abstracts/Interface';
import SocialIcon from '../components/SocialIcon.vue';

@Component({
    components: {
        SocialIcon
    }
})
export default class SocialIcons extends Vue {
    public name: string = 'SocialIcons';

    public socialIcons: IconAttributes[] = SOCIAL_ICONS
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.social-icons {
    @include flex(row, $justify-content: center);

    margin: 0 auto;
}
</style>
