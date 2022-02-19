var findMin = function(nums) {
    let left = 0, right = nums.length - 1;
    
    while(left <= right){
        const mid = ~~((right + right) / 2); 
        if(nums[mid] < nums[mid - 1]){ 
            return nums[mid];
        } else {
            if(nums[mid] > nums[0]) { 
                                      
                left = mid + 1;
            } else {
                right =  mid - 1; 
            }
        }
    }
    
    return nums[0]; 
};