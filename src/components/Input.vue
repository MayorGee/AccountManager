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
            :name="name"
            :class="`input__frame ${className}`"
            :placeholder="placeholder"
            :value="value"
            @input="input"
        />
    </div>
</template>

<script>
export default {
    name: 'Input',

    props: {
        type: {
            default: 'text',
            require: true,
            type: String
        },

        className: {
            default: '',
            require: false,
            type: String
        },
        
        placeholder: {
            default: '',
            require: false,
            type: String
        },
         
        label: String,
        inputFor: String,
        name: String,
        value: String | Number
    },

    methods: {
        input(ev) {
            this.$emit('input', ev.target.value)
        }
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
