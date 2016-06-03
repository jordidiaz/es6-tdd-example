'use strict';

const grange = ({
                  start = 0,
                  end = 10,
                  maxLength = 10,
                  loop = false,
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
  let rangeFn;
  if (loop) {
    rangeFn = () => {
      function* rangeGen(start, end, length) {
        let counter = 0;
        let current = start;
        while (counter < length) {
          yield current;
          current ++;
          counter ++;
          if (current > end) {
            current = start;
          }
        }
      }
      const range = []
      const iterator = rangeGen(start, end, maxLength);
      let next = iterator.next();
      while (next.done === false) {
        range.push(next.value);
        next = iterator.next();
      }
      return range;
    }
  } else {
    rangeFn = () => Array.from({length: length}, (x, i) => i + start);
  }

  // Step filter
  const stepFilterFn = (value, index, array) => {
    if ((index == 0) || (index == array.length - 1)) {
      // Always maintain first and last values
      return true;
    } else {
      return (value % step) == 0
    }
  }

  // Range generation.
  let range = rangeFn().map(transformFn).filter(stepFilterFn);

  // Not inclusive: Omit the first and last index values.
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