const array = [0, 5, 10, 4, 3, 1, 7, 6, 8, 9, 2];
let count = 0;

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      count += 1;
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
};

console.log(bubbleSort(array));
console.log("count", count);
// node 4_bubble_sort.js
