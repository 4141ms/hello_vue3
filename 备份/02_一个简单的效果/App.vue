<template>
    <div class="app">
        <h1>haha</h1>
        <Person/>
    </div>
</template>

<script lang="ts">
import Person from './components/Person.vue';
    export default {
        name: 'App',
        components: {Person}
    }
</script>

<style scoped>
.app {
        background-color: grey;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>