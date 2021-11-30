const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];

//Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];

//Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
var counts={};
function countNums(nums){
  function unique(arr) {
    return Array.from(new Set(arr)) 
  }
  for(var i =0; i<nums.length;i++){
    var num = nums[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  for(var i=0; i<unique(nums).length;i++){
    console.log("Số "+ unique(nums)[i]+" xuất hiện "+counts[unique(nums)[i]] +" lần");
  }
  
}
countNums(nums);
countNums(nums1);
countNums(nums2);


