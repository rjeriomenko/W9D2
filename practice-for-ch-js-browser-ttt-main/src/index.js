import View from "./ttt-view.js"
import * as Game from "../ttt_node/game.js"

// document.addEventListener("DOMContentLoaded", () => {
  
//   console.log('index loaded')
//   console.log(View)
//   console.log(Game)
//   const tttFigure = document.querySelector('.ttt')
//   const game = new Game()
//   const view2 = new View(game, tttFigure)
//   // console.log(view)
//   window.view2 = view2  
// });


console.log('index loaded')
const tttFigure = document.querySelector('.ttt')
// const tttGrid = document.querySelector('.grid')
const game = new Game()
const view = new View(game, tttFigure)
