// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     for(var i = 0; i < nums.length - 1; i++){
//     for(var j = i + 1; j < nums.length - 1; j++){
//         if(target - nums[i] === nums[j]){
//             return[i, j];
//         }
        
// }    
        
// }
// };
//==========================================================
// var twoSum = function(nums, target) {
//     var difference = {};
//     for(var i = 0; i < nums.length; i++){
//         if(difference.hasOwnProperty(nums[i])){
//             return[difference[nums[i]], i];
// }
//     difference[target - nums[i]] = i;
        
        
// }    
        
// }

//console.log(twoSum([3,2,4], 6));
//==========================================================
//best
// var maxSubArray = function(nums) {
//     var prev = 0;
//     var max = -Number.MAX_VALUE;
  
//     for (var i = 0; i < nums.length; i++) {
//       prev = Math.max(prev + nums[i], nums[i]);
//       max = Math.max(max, prev);
//     }
//     return max;
// }
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0];
   var runningMax = nums[0];
    var maxAtCurrentIndex = nums[0];
  
    for(var i = 1; i < nums.length;i++){
        
        maxAtCurrentIndex = Math.max(maxAtCurrentIndex + nums[i], nums[i]);
        
        runningMax = Math.max(runningMax, maxAtCurrentIndex)
    }
    return runningMax
}

console.log(maxSubArray([5,5,-10,5,6]));