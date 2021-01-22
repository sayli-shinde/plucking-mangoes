class Stone{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.body=Bodies.rectangle(x,y,w,h,options);
        this.image=loadImage("images/Plucking mangoes/stone.png")
        this.width=w;
        this.height=h;
        World.add(world,this.body);
    }
    display(){

        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}