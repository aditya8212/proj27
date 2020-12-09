class ROOF{
    constructor(){
        var roof_options={
            isStatic:true
          }
        
          this.roof = Bodies.rectangle(350,200,400,20,roof_options);
          this.width = 400;
          this.height = 20;
        
          World.add(world,this.roof);
    }

    display(){
        push();
        fill("pink");
        rectMode(CENTER);
        rect(this.roof.position.x,this.roof.position.y,this.width,this.height);
        pop();
    }
}