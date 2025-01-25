<template>
    <div class="person">
        <h1> sum+1 : {{ sum }}; sum * 10 = {{ bigData }}</h1>
        <button @click="changeSum">点我sum+1</button><br>
        <img v-for="(dog, index) in dogList" :src="dog" alt="" :key="index"><br>
        <button @click="getDog">点我增加一只狗</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import useDog from '@/hooks/useDog';
    import useSum from '@/hooks/useSum';

    //注意是方法，要加（）
    const {sum, bigData, changeSum} = useSum()
    const {dogList, getDog} = useDog()

</script>
<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 0 5px;
    }
    li {
        font-size: 20px;
    }
    img {
        width: 100px;
        margin-right: 5px;
    }
</style>