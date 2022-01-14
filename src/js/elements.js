export default class Element {
  constructor() {
    this.board = 4;
    this.container = null;
    this.cells = [];
  }

  addBoard() {
    const body = document.querySelector('body');

    body.innerHTML = `
      <div class="board-container">
      </div>
      `;

    this.container = document.querySelector('.board-container');

    for (let index = 0; index < this.board; index += 1) {
      const element = document.createElement('div');
      element.classList.add('board');
      this.container.insertAdjacentElement('beforeend', element);
    }
    this.cells = Array.from(this.container.children);
    this.cells[this.random()].classList.add('goblin');
  }

  interval() {
    const randomNum = this.random();
    const position = this.posGoblin();
    let random2 = this.random();
    console.log(`random === ${randomNum} = ${position} === position`);

    if (position !== randomNum) {
      this.cells[randomNum].classList.add('goblin');
      this.cells[position].classList.remove('goblin');
    } else {
      if (random2 === position) {
        random2 = this.random();
      }
      this.cells[position].classList.remove('goblin');

      this.cells[random2].classList.add('goblin');
    }
  }

  random() {
    return Math.floor(Math.random() * this.board);
  }

  posGoblin() {
    const goblin = document.querySelector('.goblin');
    return this.cells.indexOf(goblin);
  }
}
