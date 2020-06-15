var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var au = document.getElementById("audio")
au.autoplay= true
au.loop=true

//var img = document.getElementById("fish");
//foods= new food(ctx,0,0)
let fish= []
for(let i=0;i<6;i++){
fish.push(new mover(ctx,Math.random()*c.width,Math.random()*c.height,Math.random()*Math.PI))
}
foodContainer = new Image()
foodContainer.src= "contenedor de la comida.png"
let waves = []
let foods=[]
//ctx.drawImage(img,30,23)

setInterval(function(){ 
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    //ctx.drawImage(foodContainer,c.width-foodContainer.width,c.height-foodContainer.height)
    for(let i =0;i<waves.length;i++){
        waves[i].draw()
        if(waves[i].r>2000){
            waves.splice(i,1)
        }
        }
    //console.log(rotateMode)
    
    //for(let i =0;i<foods.length;i++){
        //foods[i].draw()
        
        //}
    
   // console.log(fish.targetAngle)
   for(let i =0;i<fish.length;i++){
    fish[i].checkForBorders()
    fish[i].rotate()
    fish[i].setForce()
    fish[i].applyForces()
    fish[i].setDrag()
    fish[i].move()
    fish[i].draw()
   }
}, 1000/60);

document.addEventListener("click",(e)=>{
    if(waves.length<11){
   waves.push(new wave(ctx,e.clientX,e.clientY))

}
au.play()
    //if(e.clientX>c.width-foodContainer.width && e.clientY>c.height-foodContainer.height){
        //foods.push(new food(ctx,e.clientX-30,e.clientY-30))
    //}
})
//AND THROUGH THE GODS WILL SORROW SOWED FORTH, EVERY OUNCE OF METAL ROT AND EVERY INSIDE OF AN OX SKULL RETRACTED