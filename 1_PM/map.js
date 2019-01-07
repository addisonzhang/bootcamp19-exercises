// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = (el) => {
  // TODO
  return 3*el;
};

Array.prototype.map = function(fun) {
  // TODO
  let ret = [];
  for(i = 0; i < this.length; i++) {
    ret.push(fun(this[i]));
  }
  return ret;
};

console.log(arr.map(triple));
