// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  let copedArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    copedArr.push(arr[i]);
  }

  let sortedArr = [];
  while (copedArr.length !== 0) {
    console.log(sortedArr.join(','))
    let cur = copedArr.pop()
    sortedArr.push(cur);

    for (i = sortedArr.length - 1; i > 0; i -= 1) {
      if (sortedArr[i] < sortedArr[i - 1]) {
        [sortedArr[i], sortedArr[i - 1]] = [sortedArr[i - 1], sortedArr[i]];
      }
    }
  }

  return sortedArr;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  for (let r = 0; r < arr.length; r += 1) {
    let l = r;

    while (l > 0 && arr[l] < arr[l - 1]) {
      [arr[l], arr[l - 1]] = [arr[l - 1], arr[l]];
      l -= 1;
    }
    console.log(arr.join(','));
  }
}

module.exports = [insertionSort, insertionSortInPlace];
