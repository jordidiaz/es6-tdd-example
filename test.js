'use strict';

import tape from 'tape';
import grange from './grange';

tape('grange module exports a function', function (assert) {
  assert.plan(1);
  assert.equal(typeof grange, 'function');
  assert.end();
});

tape('Create a simple range from start to end, inclusive', function (assert) {
  assert.plan(1);
  assert.deepEqual(grange({start: 3, end: 6}), [3, 4, 5, 6]);
  assert.end();
});

tape('Create a simple range from start to end, exclusive', function (assert) {
  assert.plan(1);
  assert.deepEqual(grange({start: 3, end: 6, inclusive: false}), [4, 5]);
  assert.end();
});

tape('Increment by 2 instead of 1', function (assert) {
  assert.plan(1);
  assert.deepEqual(grange({start: 2, end: 6, step: 2}), [2, 4, 6]);
  assert.end();
});

tape('Increment by 3 instead of 1', function (assert) {
  assert.plan(1);
  assert.deepEqual(grange({start: 1, end: 10, step: 3}), [1, 3, 6, 9, 10]);
  assert.end();
});

tape('Transform the output numbers with a transform function', function (assert) {
  assert.plan(1);
  assert.deepEqual(grange({start: 1, end: 4, transformFn: n => n * 2}), [2, 4, 6, 8]);
  assert.end();
});

tape('Reverse the range by passing a larger value into the start position', function (assert) {
  assert.plan(1);
  assert.deepEqual(grange({start: 3, end: 1}), [3, 2, 1]);
  assert.end();
});

tape('Start can be omitted -- defaults to 0', function (assert) {
  assert.plan(1);
  assert.deepEqual(grange({end: 6, inclusive: false, transformFn: n => n * 10}), [10, 20, 30, 40, 50]);
  assert.end();
});

tape('End can be omitted -- defaults to 10', function (assert) {
  assert.plan(1);
  assert.deepEqual(grange({start: 6, inclusive: true, transformFn: n => n * 2}), [12, 14, 16, 18, 20]);
  assert.end();
});

tape('Recurring loop', function (assert) {
  assert.plan(1);
  assert.deepEqual(grange({start: 2, end: 5, loop: true, maxLength: 10}), [2, 3, 4, 5, 2, 3, 4, 5, 2, 3]);
  assert.end();
});