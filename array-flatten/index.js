function flatten1(arr) {
  // Imperative flatten that works by attaching elements to a resulting array
  const res = [];
  function inner(a) {
    if(Array.isArray(a)) {
      a.forEach(inner);
    } else {
      res.push(a);
    }
  }
  inner(arr);
  return res;
}

function flatten2(arr) {
  // Functional flatten. Works by recursively flattening the array, or converting non-array items into a singleton array.
  if (Array.isArray(arr)) {
    return [].concat(...arr.map(flatten2))
  } else {
    return [arr]
  }
}

function flatten3(arr) {
  // Functional flatten. Works by recursively flattening the array, or converting non-array items into a singleton array.
  return arr.reduce((acc, cval) => {
    if (Array.isArray(cval)) {
      return acc.concat(flatten3(cval));
    } else {
      return acc.concat([cval]);
    }
  }, [])
}

exports.flatten1 = flatten1
exports.flatten2 = flatten2
exports.flatten3 = flatten3
