const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');
const stringLength = require('./index.js');

test('get length of string', () => {
  exportAllDeclaration(stringLength('test')).toBe(4);
});
