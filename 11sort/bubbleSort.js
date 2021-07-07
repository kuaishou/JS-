//冒泡排序方法---时间复杂度为O(n2)比较差

Array.prototype.bubbleSort = function(){
    for(let i=0; i<this.length-1; i++ ){
        for(let j=0; j<this.length-1-i; j++ ){
            if(this[j]>this[j+1]){
                let temp=this[j];
                this[j]=this[j+1]
                this[j+1]=temp
            }
        }
    }
}

const newArry=[8,6,5,3,2,1]

newArry.bubbleSort()
console.log(newArry)






