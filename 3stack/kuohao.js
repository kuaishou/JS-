var kuohao=function(value){
    const stack=[];
    //value=value.split('')
    for(let i=0;i<value.length;i++){
        let item=value[i];
        if(item==='('||item==='{'||item==='['){
            stack.push(item)
        }else{
            let last=stack[stack.length-1]
            if((last==='('&&item===')')||(last==='{'&&item==='}')||(last==='['&&item===']')){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length===0
}

console.log(kuohao('((({{{}}})))'))
console.log(kuohao('{{{}}})))'))
