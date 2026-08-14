const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide -20 / 4 to equal -5', () => {
  expect(calculator.divide(-20, 4)).toBe(-5);
});

test('multiply 5 * 4 to equal 20', () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});

test('multiply -5 * -4 to equal 20', () => {
  expect(calculator.multiply(-5, -4)).toBe(20);
});

test('divide by zero throws an error', () => {
  expect(() => calculator.divide(10, 0)).toThrow();
});

test('multiply by zero returns zero', () => {
  expect(calculator.multiply(10, 0)).toBe(0);
});