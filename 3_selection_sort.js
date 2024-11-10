const array = [0, 5, 10, 4, 3, 1, 7, 6, 8, 9, 2];
let count = 0;

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
};

console.log(selectionSort(array));
console.log("count", count);
// node 3_selection_sort.js
