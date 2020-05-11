import isItNumber from '../app';

test('Если даём десятичное число, то должно быть число', () => {
  const result = isItNumber(1);
  expect(result).toBe(1);
});

test('Если даём десятичное число, то должно быть число', () => {
  const result = isItNumber('1');
  expect(result).toBe(1);
});

test('Если даём десятичное число, то должно быть число', () => {
  const result = isItNumber('10');
  expect(result).toBe(10);
});

test('Если даём десятичное число, то должно быть число', () => {
  const result = isItNumber('500');
  expect(result).toBe(500);
});

test('Если даём десятичное число, то должно быть число', () => {
  function result() {
    isItNumber('5j');
  }
  expect(result).toThrow();
});

test('Если даём десятичное число, то должно быть число', () => {
  function result() {
    isItNumber('1j0');
  }
  expect(result).toThrow();
});

test('Если даём десятичное число, то должно быть число', () => {
  function result() {
    isItNumber('0o377');
  }
  expect(result).toThrow();
});
