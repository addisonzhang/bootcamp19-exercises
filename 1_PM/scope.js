// Part 1:
//  - What will print and why?  
// It will print 1, 2, undefined because var is definied globally, locally in y() but not initiated in x()
//  - What will change if we delete line 5? Why?
// It will print 1, 2, 1 because it's printing the global vairable a now 

// Part 2:
// - change to ES6 syntax

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.

function x(a) {
  // const a;
  console.log(a);
}

function y() {
  const a = 2;
  console.log(a);
  x(a);
}

const a = 1;
console.log(a);
y();
