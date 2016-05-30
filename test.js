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
  assert.deepEqual(grange(3, 6), [3, 4, 5, 6]);
  assert.end();
});

tape('Create a simple range from start to end, exclusive', function (assert) {
  assert.plan(1);
  assert.deepEqual(grange(3, 6, {inclusive: false}), [4, 5]);
  assert.end();
});

tape('Increment by 2 instead of 1', function (assert) {
  assert.plan(1);
  assert.deepEqual(grange(2, 6, {step: 2}), [2, 4, 6]);
  assert.end();
});

tape('Transform the output numbers with a transform function', function (assert) {
  assert.plan(1);
  assert.deepEqual(grange(1, 4, {transformFn: n => n * 2}), [2, 4, 6, 8]);
  assert.end();
});

tape('Reverse the range by passing a larger value into the start position', function (assert) {
  assert.plan(1);
  assert.deepEqual(grange(3, 1), [3, 2, 1]);
  assert.end();
});