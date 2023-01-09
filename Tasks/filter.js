// Filter array by type name

'use strict'

const filter = (arr, type) => {
  const remove = [];
  const result = [];
  for (const object of arr) {
    const index = arr.indexOf(object);
    if (typeof arr[index] !== type) {
      remove.unshift(index);
    }
  }
  for (const index of remove) arr.splice(index, 1);
  return arr;
};

require('../Tests/filter.js')(filter);
