//选择排序方法---时间复杂度为O(n2)比较差

Array.prototype.selectionSort = function(){
    for(let i=0; i<this.length; i++ ){
        let minIndex=i
        for(let j=i; j<this.length; j++ ){
            if(this[j]<this[minIndex]){
                minIndex=j
            }
        }
        if(i!==minIndex){
            let temp=this[i];
            this[i]=this[minIndex]
            this[minIndex]=temp
        }
    }
}

const newArry=[8,6,5,3,2,1]

newArry.selectionSort()
console.log(newArry)






