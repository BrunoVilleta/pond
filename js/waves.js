class wave {
    constructor(ctx,x,y){
        this.ctx=ctx
        this.x=x
        this.y=y
        this.r=0
        this.v=0
    }


    draw(){
        this.r++
this.ctx.beginPath()
this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI)
ctx.stroke();

}


}