export default class RandomNumber {
  constructor(number) {
    this.number = number;
  }

  randNumber() {
    return Math.floor(Math.random() * this.number);
  }
}
