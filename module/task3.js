class Calculator {
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  }

  add() {
   return this.value1 + this.value2 ;
  }
  subtract() {
    if (this.value2 > this.value1) {
      return this.value1 - this.value2;
    } else {
      return this.value1 - this.value2
  }
}
   divide() {
    return this.value1 / this.value2 ;
   }
}

module.exports = Calculator;