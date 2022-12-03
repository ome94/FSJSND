const getItem = <T>(arr: T[]): T => {
  return arr[1];
};

const arr1 = [2, 3, 4];
const arr2 = ['one', 'two', 'three'];

const one = getItem(arr1);
const one_generic = <number>getItem(arr1);
const two = getItem(arr2);
const two_generic = <string>getItem(arr2);

console.log(one, typeof one);
console.log(one_generic, typeof one_generic);
console.log(two, typeof two);
console.log(two_generic, typeof two_generic);