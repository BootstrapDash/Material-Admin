'use strict';

const split = require('split-string');
const flatten = require('arr-flatten');
const union = require('union-value');
const forOwn = require('for-own');
const typeOf = require('kind-of');
const get = require('get-value');

function groupFn(arr, props) {
  if (arr == null) {
    return [];
  }

  if (!Array.isArray(arr)) {
    throw new TypeError('group-array expects an array.');
  }

  if (arguments.length === 1) {
    return arr;
  }

  let args = flatten([].slice.call(arguments, 1));
  let groups = groupBy(arr, args[0]);

  for (let i = 1; i < args.length; i++) {
    toGroup(groups, args[i]);
  }
  return groups;
}

function groupBy(arr, prop, key) {
  let groups = {};

  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    let val;

    // allow a function to modify the object
    // and/or return a val to use
    if (typeof prop === 'function') {
      val = prop.call(groups, obj, key);
    } else {
      val = get(obj, prop);
    }

    switch (typeOf(val)) {
      case 'undefined':
        break;
      case 'string':
      case 'number':
      case 'boolean':
        union(groups, escape(String(val)), obj);
        break;
      case 'object':
      case 'array':
        eachValue(groups, obj, val);
        break;
      case 'function':
        throw new Error('invalid argument type: ' + key);
    }
  }
  return groups;
}

function eachValue(groups, obj, val) {
  if (Array.isArray(val)) {
    val.forEach(key => {
      union(groups, escape(key), obj);
    });
  } else {
    forOwn(val, (v, key) => {
      union(groups, escape(key), obj);
    });
  }
}

function toGroup(groups, prop) {
  forOwn(groups, (val, key) => {
    if (!Array.isArray(val)) {
      groups[key] = toGroup(val, prop, key);
    } else {
      groups[key] = groupBy(val, prop, key);
    }
  });
  return groups;
}

function escape(str) {
  var opts = {
    strict: false,
    keepEscaping: true,
    keepDoubleQuotes: true,
    keepSingleQuotes: true
  };

  try {
    return split(str, opts).join('\\.');
  } catch (err) {
    return str;
  }
}

/**
 * Expose `groupArray`
 */

module.exports = groupFn;
