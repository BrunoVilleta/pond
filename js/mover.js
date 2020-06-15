class mover{
    constructor(ctx,x,y,angle){
        this.ctx=ctx
        
        this.x=x
        this.y=y

        this.vx=0
        this.vy=0
        this.vMag=0

        this.ax=0
        this.ay=0
        this.aMag=0.04
        
        this.counterMove=0
        this.moveMode=true

        this.angle=angle
        this.targetAngle=0
        this.angularSpeed=0
        this.maxAngularSpeed=Math.PI/180
        this.angularAcceleration=Math.PI/4000
        this.rotateMode=false
        this.direction=true //true=right false=left(direction of the current angle relative to the target angle)
        this.counter=0

        this.dragx=0
        this.dragy=0
        this.dragConst=0.07

        this.boundaries=100

        this.frameIndex=0
        this.frameIndex2=0
        this.drawFrame=true
        
        this.img = new Image()
        this.img.src =  "swim.png"
        this.img2= new Image()
        this.img2.src = "toidle.png"
    }
    
    rotateRight(){
        if(this.angle>this.targetAngle){
            if(this.angularSpeed<this.maxAngularSpeed){
            this.angularSpeed+=this.angularAcceleration
            }
            this.angle-=this.angularSpeed
        }
        else{
            if(this.angularSpeed>0){
            this.angularSpeed-=this.angularAcceleration
            this.angle-=this.angularSpeed
            }
        }
        
    }
    rotateLeft(){
        if(this.angle<this.targetAngle){
            if(this.angularSpeed<this.maxAngularSpeed){
            this.angularSpeed+=this.angularAcceleration
            }
            this.angle+=this.angularSpeed
     }
     else{
        if(this.angularSpeed>0){
            this.angularSpeed-=this.angularAcceleration
            this.angle+=this.angularSpeed
            }
     }
    }
    
    setAngle(){
        
        if(Math.round(Math.random())==1){
            this.targetAngle=Math.random()*Math.PI/2*-1+this.angle
            this.direction=true
        }
        else{
            this.targetAngle=Math.random()*Math.PI/2+this.angle
            this.direction=false
        }

    }
    rotate(){
          if(this.moveMode){
    if(this.counter>300+Math.random()*100){
        this.setAngle()
        this.checkForBorders()
        this.counter=0
        console.log(fish.targetAngle)
    }
    if(this.direction){
        this.rotateRight()
    }
    else{
        this.rotateLeft()
    }
    this.counter++
}
    }
    //this.img.height/20*this.frameIndex-this.img.height/40

    setForce(){
    this.ax= Math.cos(this.angle)*this.aMag
    this.ay= Math.sin(this.angle)*this.aMag
    }

    applyForces(){
        //if(this.counterMove>360+Math.random()*360){
            //this.moveMode=false
        //}
        //if(this.moveMode){
            this.vx+=this.ax-this.dragx
            this.vy+=this.ay-this.dragy
        //}
        //else{
            //this.vx-=this.dragx
            //this.vy-=this.dragy
        //}
        //this.counterMove++
    }
    draw(){
        ctx.save()
        ctx.translate(this.img.width*0.5+this.x,this.img.height/40+this.y)
        ctx.rotate(this.angle)
        ctx.translate(-this.img.width*0.5-this.x,-this.img.height/40-this.y)
        //if(this.moveMode){
            this.ctx.drawImage(this.img,0,this.img.height/20*this.frameIndex,this.img.width,this.img.height/20,this.x,this.y,this.img.width,this.img.height/20)
            this.frameIndex2=0
        //}
        /*else{
            this.ctx.drawImage(this.img2,0,this.img2.height/56*this.frameIndex2,this.img2.width,this.img2.height/56,this.x,this.y,this.img2.width,this.img2.height/56)
            if(this.frameIndex2<57){
            if(this.drawFrame==3){
                this.frameIndex2++
                this.drawFrame=0
                
               } 
               this.drawFrame++
            }
        }*/
        ctx.restore()
        if(this.frameIndex<20){
           
           if(this.drawFrame==3){
            this.frameIndex++
            this.drawFrame=0
            
           } 
           this.drawFrame++
        }
        else{
            this.frameIndex=0
        }
    }
    

    move(){
        
        this.x+=this.vx
        this.y+=this.vy
    }
    setDrag(){
        this.dragx=this.vx/2*this.dragConst
        this.dragy=this.vy/2*this.dragConst

    }
    checkForBorders(){
        if(this.x>c.width){
            this.targetAngle=Math.PI

        }
        else if(this.x<0){
            this.targetAngle=0
        }
        else if(this.y>c.height){
            this.targetAngle=Math.PI/2*3
            
        }
        else if(this.y<0){
            this.targetAngle=Math.PI/2
        }
        

    }
    lookForFood(food){
        if(food.x){
            
        }
    }
}