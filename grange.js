'use strict';

const grange = ({
                  start = 0,
                  end = 10,
                  inclusive = true,
                  step = 1,
                  transformFn = x => x
                } = {}) => {

  let reverse = false;
  // The end is smaller than the start. Reverse range.
  let length = end - start + 1;
  if (length <= 0) {
    reverse = true;
    length = start - end + 1;
    start = end;
  }

  // Range generator function.
  const fn = (x, i) => i + start;

  // Range generation.
  let range = Array.from({length: length}, fn).map(transformFn);

  // Not inclusive: Omit, the first and las index values.
  if (!inclusive) {
    range.pop();
    range = range.slice(1, range.length);
  }

  // Obvious.
  if (reverse) {
    range = range.reverse();
  }

  return range;

};

export default grange;