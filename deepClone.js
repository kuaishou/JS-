//深度拷贝

const dd={
    name:'李白',
    dou:{
        babay:'李信',
        age:18
    },
    children:['李牧','李华']
}

const deepClone=(obj)=>{
    if(typeof obj !=='object' || obj==null){
        return obj
    }
    let res;
    if(obj instanceof Array){
        res=[]
    }else{
        res={}
    }
    for(k in obj){
        if(obj.hasOwnProperty(k)){
            res[k]=deepClone(obj[k])
        }
    }
    return res
}

const ha=deepClone(dd)

console.log('旧',dd)
ha.name='刑天'
console.log('新',ha)