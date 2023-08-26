const reverseString = require ('./module/task2')

// functionality test
test('return the  string correctly reversed', () => {
  expect(reverseString("Goodmorning")).toBe("gninromdooG");
});

// Edges test
test('Empty string should throw an error', () => {
  expect(() => {
    reverseString('');
  }).toThrow('String must be at least 1 character long');
});