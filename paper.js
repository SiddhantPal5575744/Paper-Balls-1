class Ball {
    constructor() {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.2
      }
      this.body = Bodies.rectangle(100,620,60,60, options);
      this.width = 60;
      this.height=60;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //pos.x=mouseX;
      //pos.y=mouseY;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill('white');
      rect(0, 0, this.width,this.height);
      pop();
    }
  }