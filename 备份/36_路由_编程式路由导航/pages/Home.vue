<template>
    <div>
        home
    </div>
</template>

<script lang="ts" setup name="Home">
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router'

    let router = useRouter()

    // onMounted(()=>{
    //     setTimeout(()=>{
    //         router.push('/news') //3s后自动跳转到新闻页面，push模式
    //     }, 3000)
    // })
</script>

<style scoped>
</style>