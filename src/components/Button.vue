<template>
    <button :class="className" @click="$emit('click')">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: 'Button',

    props: {
        className: {
            require: true,
            type: String
        },
        text: {
            default: false,
            require: true,
            type: String
        }
    }
}
</script>
