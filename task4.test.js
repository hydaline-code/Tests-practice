const capitalize  = require('./module/task4.js')

describe('capitalize', () => {
  // Normal Test Case: Empty String
  it('should throw an error for an empty string', () => {
    expect(() => {
      capitalize('');
    }).toThrow('String must be  of type string and be at least 2 character long');
  });

  // Functionality Test Case: Capitalize First Letter
  it('should capitalize the first letter of a string', () => {
    const result = capitalize('hello');
    expect(result).toBe('Hello');
  });

  // Edge Case: Non-String Input
  it('should throw an error for non-string input', () => {
    expect(() => {
      capitalize(123);
    }).toThrow('String must be  of type string and be at least 2 character long');
  });
});
