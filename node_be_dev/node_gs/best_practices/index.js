const { sum, lgNum } = require('./utilities/arr_aggr');

const arr_edit = require('./utilities/arr_edit');

arr1 = [1, 3, 5, 7];
arr2 = [2, 4, 6];

arr1_sum = sum(arr1);
cut_arr1 = arr_edit.cut3(arr1);

console.log(arr1_sum);
console.log(cut_arr1);