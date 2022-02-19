function BinarySearch(arr, TargetLetter) {
  let start = 0;
  let end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === TargetLetter) {
      return mid;
    } else if (arr[mid] < TargetLetter) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // if we reach here, then element was
  return false; // any INVALID value is correct.
}

// Driver code
let arr = ["a", "b", "d", "e", "f", "g", "h", "i", "x", "z"];
let TargetLetter = "z";
console.log(BinarySearch(arr, TargetLetter));
