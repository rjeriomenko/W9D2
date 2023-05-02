import * as Game from "../ttt_node/game.js"

class View {
  constructor(game, el) {
    this.setupBoard(el)
    this.board = game.board
    this.game = game
  }
  
  setupBoard(el) {
    // const figure = document.querySelector('.ttt')
    const ul = document.createElement('ul')
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement('li')
        li.dataset.pos = [i, j] //<li data-pos="i"></li>
        console.log(typeof li.dataset.pos)
        ul.append(li)
      }
    }
    ul.className = 'grid'

    // ul.addEventListener( "mouseover", e => {
    //   e.dataset.color = e.target.style.backgroundColor
    //   e.target.style.backgroundColor = "red"
    // })
    
    // ul.addEventListener( "mouseout", e => {
    //   e.target.style.backgroundColor = e.dataset.color
    //   delete e.dataset.color
    // })

    el.append(ul)

    ul.addEventListener('click', e=>this.handleClick(e))

    // this.handleClick(el)
  }
  
  handleClick(e) {
    console.log(e)
    console.log(e.target)
    let stringPos = e.target.dataset.pos
    let pos = [parseInt(stringPos[0]), parseInt(stringPos[2])]
    console.log(pos)
    console.log(this.game.board)
    this.game.playMove(pos)
    console.log(this.game.board)
    // const ul = document.querySelector('.grid')
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;