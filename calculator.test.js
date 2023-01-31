const Calculator = require('./calculator.js');
describe('Tests', function () {
  it('Calculator works', function () {
    const calc = new Calculator();
    expect(calc.add(5, 4)).toBe(9);
    expect(calc.subtract(5, 4)).toBe(1);
    expect(calc.divide(5, 4)).toBe(1.25);
    expect(calc.multiply(5, 4)).toBe(20);
  });
});
