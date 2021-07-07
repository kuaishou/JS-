// js的原型链 prototype


// obj  ->Object.prototype->null
// fun ->Function.prototype->Object.prototype->null
// arr ->Array.prototype->Object.prototype->null

let obj={};
let fun=function (params) {};
let arr=[];


console.log(obj.__proto__ === Object.prototype)//true
console.log(fun.__proto__.__proto__ === Object.prototype)//true
console.log(arr.__proto__.__proto__ === Object.prototype)//true
console.log(Object.prototype.__proto__===null)//true

console.log('instanse',obj instanceof Object)//true
console.log('instanse',arr instanceof Object)  //true
console.log('Fun-instanse',arr instanceof Function)  //false


//手写instanceof  A的原型是否是B
const MyInstance=function (A,B) {
    let p=A;
    while(p){
        if(p===B.prototype){
            return true
        }
        p=p.__proto__;
    }
    return false
}

console.log('A-B',MyInstance([],Object))
console.log('A-B',MyInstance({},Object))
console.log('A-B',MyInstance([],Array))
