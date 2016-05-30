'use strict';

const grange = (start, end, {
    inclusive = true,
    step = 1,
    transformFn = x => x
  } = {}) => {

  let reverse = false;

  let length = end - start + 1;
  if (length <= 0) {
    reverse = true;
    length = start - end + 1;
    start = end;
  }
  const fn = (x, i) => i + start;

  let range = Array.from({length: length}, fn).map(transformFn);

  if (!inclusive) {
    range.pop();
    range = range.slice(1, range.length);
  }

  if (reverse) {
    range = range.reverse();
  }

  return range;

};

export default grange;