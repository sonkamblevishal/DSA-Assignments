var twoSum = function(nums, target) {
    let psum = new Map();
    for(let i=0;i<nums.length;i++) {
        const num = nums[i];
        if (psum.has(target-num)) {
            return [psum.get(target-num), i];
        }
        psum.set(num,i);
    }
    return [];
};