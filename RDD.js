'use strict';

import grange from './grange';

console.log('Create a simple range from start to end, inclusive');
const [...inclusive] = grange({start: 3, end: 6});
console.log(`grange({start: 3, end: 6}) = ${inclusive}\n`);

console.log('Create a simple range from start to end, exclusive');
const [...exclusive] = grange({start: 3, end: 6, inclusive: false});
console.log(`grange({start: 3, end: 6}) = ${exclusive}\n`);

console.log('Increment by 2 instead of 1');
const [...step2] = grange({start: 2, end: 6, step: 2});
console.log(`grange({start: 2, end: 6, step: 2}) = ${step2}\n`);

console.log('Increment by 3 instead of 1');
const [...step3] = grange({start: 1, end: 10, step: 3});
console.log(`grange({start: 1, end: 10, step: 3}) = ${step3}\n`);

console.log('Transform the output numbers with a transform function');
const [...transform] = grange({start: 1, end: 4, transformFn: n => n * 2});
console.log(`grange({start: 1, end: 4, transformFn: n => n * 2}) = ${transform}\n`);

console.log('Reverse the range by passing a larger value into the start position');
const [...reverse] = grange({start: 3, end: 1});
console.log(`grange({start: 3, end: 1}) = ${reverse}\n`);

console.log('Start can be omitted -- defaults to 0');
const [...omitStart] = grange({end: 6, inclusive: false, transformFn: n => n * 10});
console.log(`grange({end: 6, inclusive: false, transformFn: n => n * 10}) = ${omitStart}\n`);

console.log('End can be omitted -- defaults to 10');
const [...omitEnd] = grange({start: 6, inclusive: true, transformFn: n => n * 2});
console.log(`grange({start: 6, inclusive: true, transformFn: n => n * 2}) = ${omitEnd}\n`);

// // Create recurring loops
// // const loopGen = grange(1, 3, {loop: true});
// // const loop =
// //   range(0, 7).map(() => loopGen.next().value); // [1, 2, 3, 1, 2, 3, 1, 2]
// // console.log(loop);