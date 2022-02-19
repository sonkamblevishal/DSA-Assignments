   function findSmallestMissingNumber(array, start, end)
    {
        if (start > end)
            return end + 1;
   
        if (start != array[start])
            return start;
   
        let mid = parseInt((start + end) / 2, 10);
   
        // Left half has all elements from 0 to mid
        if (array[mid] == mid)
            return findSmallestMissingNumber(array, mid+1, end);
   
        return findSmallestMissingNumber(array, start, mid);
    }
     
    let nums = [0, 1, 2, 6, 9, 11, 15];

    var n = nums.length;
   
 
    document.write("The smallest missing element is " +
    findSmallestMissingNumber(nums,0, n - 1));