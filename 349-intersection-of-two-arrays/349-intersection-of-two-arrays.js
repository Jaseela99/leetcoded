/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let numSet1 =new Set(nums1)
  let numSet2 =new Set(nums2)
  let result=[]
  for(let num of numSet1){
     if(numSet2.has(num)){
         result.push(num)
     }
  }
    return result
};