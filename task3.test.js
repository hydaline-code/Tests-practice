const Calculator = require('./module/task3.js')

describe('Calculator', () => {
  it('should add two numbers', () => {
    const calculator = new Calculator(10, 5);
    const result = calculator.add();
    expect(result).toBe(15);
  });

  it('should subtract two numbers when value1 > value2', () => {
    const calculator = new Calculator(15, 10); 
    const result = calculator.subtract();
    expect(result).toBe(5);
  });

  it('should subtract two numbers when value2 > value1', () => {
    const calculator = new Calculator(10, 15); 
    const result = calculator.subtract();
    expect(result).toBe(-5);
  });

  it('should divide two numbers', () => {
    const calculator = new Calculator(10, 5);
    const result = calculator.divide();
    expect(result).toBe(2);
  });
});
