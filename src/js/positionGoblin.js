export default class PositionGoblin {
  constructor(arr) {
    this.arr = arr;
  }

  posGoblin() {
    const goblin = document.querySelector('.goblin');
    return this.arr.indexOf(goblin);
  }
}
