import axios from 'axios';
import { reactive, ref } from 'vue';

// 默认导出不需要方法名
export default function (){

    let dogList = reactive([
        'https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_6226.jpg'
        
    ])

    async function getDog(){
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        } catch(error) {
            alert(error)
        }
        
    }
    
    //需要返回东西，值、方法都行
    return {dogList, getDog}
}