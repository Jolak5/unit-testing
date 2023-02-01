const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');
const { string } = require('yargs');

const stringLength = require('./index.js');

it('get length of string', () => {
  expect(stringLength('kayode')).toBe(6);
});

it('greater than', () => {
  expect(stringLength('kayode')).toBeGreaterThanOrEqual(1);
});

it('greater than', () => {
  expect(stringLength('kayode')).toBeLessThanOrEqual(10);
});
