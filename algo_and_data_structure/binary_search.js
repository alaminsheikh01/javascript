const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binary_search(num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor(start + end) / 2;

  while (arr[middle] !== num && start <= end) {
    if (num < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle - 1;
    }
    middle = Math.floor(start + end) / 2;
  }
  return arr[middle] === num ? middle : -1;
}

console.log(binary_search(5));
