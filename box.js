class Box {
    constructor(x, y,width,height) {
     
    var options = {
         isStatic: false,
         restitution :0.3,
         friction :0.5,
         density :1.2
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height= height;
    
    
    World.add(world, this.body);
    }
    
    display(){

        if(this.body.speed<3){
            var pos= this.body.position;
            rectMode(CENTER);
            fill(225);
            rect(pos.x,pos.y,this.width,this.height);
      
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility - 5
            tint(255,this.visibility);
            pop();
        }


      }
    
    }