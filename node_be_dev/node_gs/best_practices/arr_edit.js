// Concatenate two arrays

const concat = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

// Remove the 3rd item from an array
const cut3 = (arr) => {
  arr.splice(2, 1);
  return arr;
};

module.exports = {concat, cut3};