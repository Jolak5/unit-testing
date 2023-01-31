const reverseString = require('./reverse.js');

it('reverse string', () => {
  expect(reverseString('test')).toBe('tset');
});
