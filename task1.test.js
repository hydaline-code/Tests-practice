const stringLength = require('./module/task1.js'); 

test('returns the correct length of a string', () => {
  expect(stringLength('chacha')).toBe(6);
});

test('Empty string should throw an error', () => {
  expect(() => {
    stringLength('');
  }).toThrow('String must be at least 1 character long and cannot be longer than 10 characters.');
});

test('String longer than 10 characters should throw an error', () => {
  expect(() => {
    stringLength('chachachahh');
  }).toThrow('String must be at least 1 character long and cannot be longer than 10 characters.');
});
