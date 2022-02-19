function leftRotate(arr , d , n) {
        for (i = 0; i < d; i++)
            leftRotatebyOne(arr, n);
    }
 
    function leftRotatebyOne(arr , n) {
        var i, temp;
        temp = arr[0];
        for (i = 0; i < n - 1; i++)
            arr[i] = arr[i + 1];
        arr[n - 1] = temp;
    }
 
    /* utility function to print an array */
    function printArray(arr , n) {
        for (i = 0; i < n; i++)
            console.log(arr[i] + " ");
    }
 
    // Driver program to test above functions
     
        var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
        leftRotate(arr, 2, 7);
        printArray(arr, 7);