//快速排序方法---时间复杂度为O(n*logN)

Array.prototype.quickSort = function () {
    const rec = function (arr) {
        if(arr.length <=1 ){return arr}
        const left = []
        const right = []
        const mid = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < mid) {
                left.push(arr[i])
            } else if (arr[i] > mid) {
                right.push(arr[i])
            }
        }
        return [...rec(left), mid, ...rec(right)]
    }
    let resdata = rec(this)
    resdata.forEach((item, index) => {
        this[index] = item
    });
}

const newArry = [8, 6, 5, 3, 2, 1]
newArry.quickSort()
console.log(newArry)






