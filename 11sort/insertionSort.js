//排入排序方法---时间复杂度为O(n2)比较差

Array.prototype.insertionSort = function () {
    for (let i = 1; i < this.length; i++) {
        let temp = this[i]
        let j = i
        while (j > 0) {
            if (this[j - 1] > temp) {
                this[j] = this[j - 1]
            } else {
                break
            }
            j--
        }
        this[j] = temp
    }
}

const newArry = [8, 6, 5, 3, 2, 1]

newArry.insertionSort()
console.log(newArry)






