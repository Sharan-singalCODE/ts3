
class Block  {
    constructor(x, y, width, height){
     
      var options = {
        restitution:0.4,
        friction:0.0,
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.Visiblity = 255;
      World.add(world,this.body)
    }

    display(){
     
        if(this.body.speed<3){
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          strokeWeight(1);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop()
        }else{
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            
            strokeWeight(1);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();}
    }
    
  
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }
}
