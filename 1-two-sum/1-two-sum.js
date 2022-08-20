/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     let arr=[]
    for(let i=0;i<nums.length;i++){
       
        if(arr.includes(nums[i])){
            return [i,arr.indexOf(nums[i])]
        }else{
            arr.push(target-nums[i])
        }
    }
};