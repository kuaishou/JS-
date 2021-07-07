//二分搜索---数组必须是有序的才能二分搜索   时间复杂度Ologn

//有序数组从中间元素查找-正好查到返回该值下标;没有查到则从大于或小于中间元素的数组内查找


Array.prototype.binarySearch = function (item) {
    let low=0//最小下标
    let higt=this.length-1
    while(low<=higt){
        let mid=Math.floor((low+higt)/2)
        // console.log(this[mid])
        if(this[mid]<item){
            low=mid+1
        }else if(this[mid]>item){
            higt=mid-1
        }else{
            return mid
        }
    }

    return -1
}

const arrs = [2,3,5,6,8,9]
console.log(arrs.binarySearch(6))//下标是3
console.log(arrs.binarySearch(3))//下标是1
console.log(arrs.binarySearch(8))//下标是4
console.log(arrs.binarySearch(10))//下标是-1


