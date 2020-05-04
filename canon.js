class canon {
  constructor() {
  var options = {
  isStatic: true
}
  this.body =  Bodies.rectangle(150,520,50,50,options);
  Matter.Body.setAngle(this.body,this.body.angle); 
  }
  display(){
  fill(255); 
  rectMode(CENTER);
  rect(150,520,70,50);
  }
  }
      
