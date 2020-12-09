class CHAIN1{
    constructor(a,b,offsetX,offsetY){
        
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var option={
            bodyA : a,
            bodyB : b,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:0.03,
            length:300

        }
        

    this.body = Matter.Constraint.create(option);
    World.add(world,this.body);

    }

    display(){

        var posa = this.body.bodyA.position;
        var posb = this.body.bodyB.position;

        push();
        strokeWeight(4);
        line(posa.x,posa.y,posb.x+this.offsetX,posb.y+this.offsetY);
        pop();
    }

}