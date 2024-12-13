// let canvas = document.querySelector('canvas')
// let pen = canvas.getContext('2d')
// pen.fillStyle = 'brown'
// //pen.fillRect(100, 200, 50, 50)
// let cell = 50
// let snakeC = [[0, 0]]
// setInterval(() => {
//     draw()
//     update()
// }, 200)

// document.addEventListener('keydown', (e) => {
//     if (e.key === 'arroleft') {
//         direction = 'down'
        
//     }
//     else if (e.key === 'arrowup') {
//         direction='up'
//     }
//     else {
//         direction='right'
//     }
// })

// function draw() {
//     pen.clearRect(0, 0, 1200, 600)
//     for (let i of snakeC) {
//         pen.fillStyle = 'brown'
//         pen.fillRect(i[0], i[1],     cell, cell)
        
//     }
// }

// function update() {
//     let headX = snakeC[snakeC.length - 1][0]
//     let deadY = snakeC[snakeC.length - 1][1]
//     let newX = headX+ cell
//     let newY = headX
//     snakeC.push([newX, newY])
//     snakeC.shift()
// }

// let newX
// let newY
// if (direction === 'up') {
//     newX = headX
//     newY=headY-cell
// }

// else.if(direction === 'down'){
//     newX = headX
//     newY=headY+cell
// }


let canvas=  document.querySelector('canvas')
let ctx=       canvas.getContext('2d')
let snakeCells=[[0,0]]
let cell=50
let count=0
 let direction='right'
 let gameOver=false
let randomXell=generateRandomCell()
let id= setInterval(()=>{
   draw()
   update()
 },100)
document.addEventListener('keydown',(e)=>{
 if(e.key==='ArrowDown'){
   direction='down'
 }
 else if(e.key==='ArrowUp')
{
 direction='up'
}     else if(e.key==='ArrowLeft'){
direction='left'
}

else{
direction='right'
}
// console.log(e);

})

 function draw(){
    if(gameOver){
     clearInterval(id)
     ctx.font='50px sans-sarif'
     ctx.fillText('game over',100,50)
     return;
    }
   ctx.clearRect(0,0,1400,700)
   for(let i of snakeCells){
     ctx.fillStyle='brown'
     ctx.fillRect(i[0],i[1],cell,cell)
   }
       ctx.fillStyle='blue'
   ctx.fillRect(randomXell[0],randomXell[1],cell,cell)
   ctx.font='50px sans-sarif'
   ctx.fillText(`${count}`, 0,50)
 } // draw()
 function update(){  
   let headX=   snakeCells[snakeCells.length-1][0]
   let headY=   snakeCells[snakeCells.length-1][1]
   let newX
   let newY
    if(direction==='right'){
     newX=headX+cell
     newY=headY
     if(newX===1400){
       gameOver=true
     }
    }
    else if(direction==='up'){
     newX=headX
     newY=headY-cell

     if(newY<0){
       gameOver=true
     }

    }
    else if(direction==='down'){
     newX=headX
     newY=headY+cell
     if(newY===700){
       gameOver=true
     }
    }else{
     newX=headX-cell
     newY=headY
     if(newX<0){
       gameOver=true
     }
    }
   snakeCells.push([newX,newY])
   // snakeCells.shift()
   if(randomXell[0]===newX  && randomXell[1]===newY){
     randomXell=generateRandomCell()
     count++
   }
   else{
     snakeCells.shift()
   }
   // console.log(newX,newY);
   // console.log(headX,headY,"rrr");
 }
 // update()
  function generateRandomCell(){
   return[
  Math.floor(Math.random()*1400/cell)*cell   ,
  Math.floor(Math.random()*700/cell)*cell
    
   ]

  }