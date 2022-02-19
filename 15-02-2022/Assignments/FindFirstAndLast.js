 function findFirstAndLast(arr,x)
    {
        let n = arr.length;
        let first = -1, last = -1;
        for (let i = 0; i < n; i++) {
            if (x != arr[i])
                continue;
            if (first == -1)
                first = i;
            last = i;
        }
        if (first != -1) {
            console.log("First Occurrence = " + first );
            console.log("Last Occurrence = " + last );
        }
        else
            console.log("Not Found");
    }
     
    let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8 ];
    let x = 8;
    findFirstAndLast(arr, x);