<template>
    <div class="father">
        <h3>父组件 实现祖孙之间直接传递，不用打扰父组件</h3>
        <h4>银子: {{ money }} 万元</h4>
        <h4>车子: 一辆{{ car.brand }}车，价值：{{ car.value }}万元</h4>
        <Child/>
    </div>
</template>

<script lang="ts" setup name="Father">
import Child from './Child.vue';
import { reactive, ref, provide} from 'vue';

    let money = ref(100)
    let car = reactive({
        brand: '奔驰',
        value: 100
    })
    function updateMoney(value:number){
        money.value -= value
    }
    
    // 向后代提供数据，注意不能用 money：money.value,这样就只是一个数据
    provide('moneyContext', {money, updateMoney})
    provide('car', car)

</script>

<style scoped>
.father{
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>