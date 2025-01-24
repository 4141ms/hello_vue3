//定义一个接口,用于限制person对象的额具体属性
export interface PersonInter {
    id: string,
    name: string,
    age: number
    x?:number //加？表示可有可无
}

// 一个自定义类型的两种写法，泛型
// export type Persons = Array<PersonInter>
export type Persons = PersonInter[]