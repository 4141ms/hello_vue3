import axios from 'axios';
import { computed, reactive, ref } from 'vue';

export default function () {

    let sum = ref(0)
    let bigData = computed(()=>{
        return sum.value * 10
    })

    function changeSum(){
        sum.value += 1 
    }

    return {sum, bigData, changeSum}
    
}