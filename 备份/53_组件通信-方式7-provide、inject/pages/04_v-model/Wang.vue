<template>
    <input
        type="text"
        :value="ming"
        @input="emit('update:ming',(<HTMLInputElement>$event.target).value)"
    ><br>
    <input
        type="text"
        :value="mima"
        @input="emit('update:mima',(<HTMLInputElement>$event.target).value)"
    >
</template>

<script lang="ts" setup name="Wang">

    defineProps(['ming','mima'])
    // 注意要加 update
    const emit = defineEmits(['update:ming', 'update:mima'])

</script>

<style scoped>
</style>