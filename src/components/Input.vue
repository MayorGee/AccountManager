<template>
    <div class="input">
        <label 
            :for="inputFor" 
            class="input__label"
            v-if="label"
        >
            {{ label }}:
        </label>
        <br />
        <input 
            :type="type" 
            id="for" 
            :name="inputName"
            :class="`input__frame ${className}`"
            :placeholder="placeholder"
            :value="value"
            @input="input"
        />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
    public name: string = 'Input';

    @Prop({ default: 'text', required: false }) type: string;
    @Prop({ default: '', required: false }) className: string;
    @Prop({ default: '', required: false }) placeholder: string;
    @Prop() label: string;
    @Prop() inputFor: string;
    @Prop() inputName: string;
    @Prop() value: Number | string;

    input(ev: Event) {
        const value = (ev.target as HTMLInputElement).value;
        this.$emit('input', value)
    }
}
</script>

<style lang="scss">
@import '../scss/styles.scss';

.input {
    &__frame {
        @include size(25rem, 4.5rem);
            
        margin-bottom: 2rem;
        padding-left: 1rem;
    
        color: $white;
    
        background-color: $black;
        border: 1px solid $creamy-brown;
        border-radius: 1rem;
        outline: 1px solid $less-faint-creamy-brown;
    }

    &__label {
        font-weight: 800;
    }
}
</style>
