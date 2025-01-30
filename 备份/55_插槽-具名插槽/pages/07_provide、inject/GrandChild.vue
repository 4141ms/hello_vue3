<template>
    <div class="grand-child">
        <h3>孙组件</h3>
        <h4>银子: {{ money }} 万元</h4>
        <h4>车子: 一辆{{ car.brand }}车，价值：{{ car.value }}万元</h4>
        <button @click="updateMoney(1)">花爷爷的钱</button>
    </div>
</template>

<script lang="ts" setup name="GrandChild">
import { inject } from 'vue';

    // 注入，注意需要默认值
    let {money, updateMoney} = inject('moneyContext',{money:0, updateMoney:(parmas:number)=>{}})
    let car = inject('car',{brand:'未知', value: '未知'})
</script>

<style scoped>
.grand-child{
    background-color: orange;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>