//括号是否完全闭合
const kuohao = (str) => {
  let arr=[]
  str=str.split('')
  str.forEach(item => {
    if(item=='('||item=='['){
      arr.push(item)
    }else{
      if(item==')' && arr[arr.length-1]=='('){
        arr.shift()
      }
    }
  });
  if(arr.length===0){
    return true
  }else{
    return false
  }
}

let dd=kuohao("([)")
console.log(dd)
