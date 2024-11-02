const array = [1, 2, 5, 10, 9, 18, 90, 100, 12, 13];
let count = 0;

const linearSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
};

console.log(linearSearch(array, 90));
console.log("count", count);
