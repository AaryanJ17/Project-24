class stone{
    constructor(x,y,width,height){
  var options={
    'restitution':1,
    'density':10,
    'friction':5
  }
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width;
      this.height=height;
      World.add(world,this.body)
    }
  }
     