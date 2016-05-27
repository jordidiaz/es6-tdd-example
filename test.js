'use strict';

import tape from 'tape';
import grange from './grange';

tape('grange module exports a function', function (assert) {
  assert.plan(1);
  assert.equal(typeof grange, 'function');
  assert.end();
});