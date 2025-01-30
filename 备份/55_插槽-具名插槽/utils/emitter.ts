//引入mitt
import mitt from "mitt";

//调用mitt得到emitter，emitter能：绑定事件、触发事件
const emitter = mitt()

/* 
    // 绑定事件
    emitter.on('test1', (value)=>{
        console.log('test1', value);
    })
    // 触发事件
    emitter.emit('test1', 2)
    // 解绑事件
    emitter.off('test1')
    // 清除所有事件
    emitter.all.clear()
*/

//暴露事件
export default emitter