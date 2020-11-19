'use strict';

const get = require('get-value');
const set = require('set-value');

const isObject = val => {
  return val != null && typeof val === 'object' && !Array.isArray(val);
};

const flatten = (...args) => {
  let res = [];
  let flat = arr => {
    for (let ele of arr) Array.isArray(ele) ? flat(ele, res) : res.push(ele);
  };
  flat(args);
  return res;
};

const unique = arr => arr.filter((v, i) => arr.indexOf(v) === i);
const union = (...args) => unique(flatten(...args));
const first = (...args) => args.find(v => v != null);

module.exports = (obj, prop, value) => {
  if (!isObject(obj)) {
    throw new TypeError('expected the first argument to be an object');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('expected the second argument to be a string');
  }

  let arr = [].concat(first(get(obj, prop), []));
  set(obj, prop, union(arr, [].concat(first(value, []))));
  return obj;
};
