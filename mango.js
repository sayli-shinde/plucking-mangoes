class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            
        }

        this.body=Bodies.circle(x,y,r,options);
        this.image=loadImage("images/Plucking mangoes/mango.png")
        this.r=r
        World.add(world,this.body);
    }
    display(){

        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}