class hammer{
    constructor(x,y,width,height){
  var options={
    'restitution':1,
    'density':2,
    'friction':0.5
  }
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width;
      this.height=height;
      World.add(world,this.body)
    }
  }
     
  