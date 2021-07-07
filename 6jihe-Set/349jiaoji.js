// 349. 两个数组的交集
// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]

// 说明：
// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。


//includes判断数组是否包含某元素方法
var intersection = function(nums1, nums2) {
    return  [...new Set(nums1)].filter(item => nums2.includes(item))
};

var dd= intersection([1,2,2,1],[2,2])
console.log('dd',dd)

var hahha= intersection([1,2,2,1,66,88],[2,2,66,88])
console.log('ddd',hahha)
