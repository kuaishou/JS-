/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {

        let num=0;
        for(let i=0;i<nums.length;i++){
            num=num^nums[i];
        }
        return num;

    // res=new Set()
    // for(let i=0;i<nums.length;i++){
    //     if(res.has(nums[i])){
    //         res.delete(nums[i])
    //     }else{
    //         res.add(nums[i])
    //     }
    // }
    // return [...res][0]
};

console.log(singleNumber([2,3,8,3,8,2,9]))