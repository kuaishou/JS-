//sequentialSearch顺序搜索---性能比较差  时间复杂度On
//查询字符在数组里的下标，没有返回-1

Array.prototype.sequentialSearch = function (item) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == item) {
            return i
        }
    }
    return -1
}

const arrs = [5, 6, 9, 4, 7, 8, 6, 3]
console.log(arrs.sequentialSearch(6))//下标是1
console.log(arrs.sequentialSearch(3))//下标是7
console.log(arrs.sequentialSearch(8))//下标是5



