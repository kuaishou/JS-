//归并排序方法---时间复杂度为O(n)*logn

Array.prototype.mergeSort = function () {
    //递归拆分数组
    const rcs = function (arr) {
        if (arr.length==1) { return arr }
        let minLength = Math.floor(arr.length / 2)
        let left = arr.slice(0, minLength)
        let right = arr.slice(minLength, arr.length)
        let orderLeft = rcs(left)
        let orderRight = rcs(right)
        const res = [];
        while (orderLeft.length || orderRight.length) {
            if (orderLeft.length && orderRight.length) {
                let data = orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
                res.push(data)
            } else if (orderLeft.length) {
                res.push(orderLeft.shift())
            } else if (orderRight.length) {
                res.push(orderRight.shift())
            }
        }
        return res
    }
  let resdata= rcs(this)
  resdata.forEach((item,index)=>{
    this[index]=item
})
}

const newArry = [8, 6, 5, 3, 2, 1, 9, 55, 64, 88, 22]
newArry.mergeSort()
console.log(newArry)






