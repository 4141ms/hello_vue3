<template>
    <input
        type="text"
        :value="modelValue"
        @input="emit('update:modelValue',(<HTMLInputElement>$event.target).value)"
    >
</template>

<script lang="ts" setup name="Wang">

    defineProps(['modelValue'])
    const emit = defineEmits(['update:modelValue'])

</script>

<style scoped>
</style>