class BOB{
constructor(x){
   var options={
    isStatic:false,
    
      
   }

this.body = Bodies.circle(x,400,30,options);
this.radius = 30;
World.add(world,this.body);

}

display(){
var sa = this.body.position

push();
strokeWeight(5);
stroke("black");
fill("pink");
ellipseMode(RADIUS);
ellipse(sa.x,sa.y,this.radius,this.radius);
pop();

}




}