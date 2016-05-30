'use strict';

import grange from './grange';

// Create a simple range from start to end, inclusive
const [...inclusive] = grange(3, 6); // [3, 4, 5, 6]
console.log(inclusive);

// Create a simple range from start to end, exclusive
const [...exclusive] = grange(3, 6, {inclusive: false}); // [4, 5]
console.log(exclusive);

// Increment by 2 instead of 1
const [...step] = grange(2, 6, {step: 2}); // [2, 4, 6]
console.log(step);

// Transform the output numbers with a transform function
const [...transform] = grange(1, 3, n => n * 2); // [2, 4, 6]
console.log(transform);

// Reverse the range by passing a larger value into the start position
const [...reverse] = grange(3, 1); // [3, 2, 1]
console.log(reverse);

// Create recurring loops
const loopGen = grange(1, 3, {loop: true});
const loop =
  range(0, 7).map(() => loopGen.next().value); // [1, 2, 3, 1, 2, 3, 1, 2]
console.log(loop);

// Start can be omitted -- defaults to 0
const [...omittedStart] = grange(6, n => n * 2, {step: 2}); // [0, 4, 8, 12]
console.log(omittedStart);