function find_index(arr, n, K , N)
{
     
    // Traverse the array
    for(let i = 0; i < n; i++)
      
        // If K is found
        if (arr[i] == K)
            return i;
  else if(arr[i]<N)
  return i;
        // If current array element
        // exceeds K
        else if (arr[i] > K)
            return i;
        
    // If all elements are smaller
    // than K
    return n;
}
 
// Driver code
let arr = [ 1, 3, 5, 6 ];
let n = arr.length;
// Target Value either present in array or Another Value it gives next index position
//let K = 3;
let K = 7;

console.log(find_index(arr, n, K));