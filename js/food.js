class food{
    constructor(ctx,x,y){
        this.ctx=ctx
        this.x=x
        this.y=y
        this.img = new Image()
        this.img.src = "comida.png"
    }
    draw(){
    this.ctx.drawImage(this.img,this.x,this.y,40,40)
    }
}