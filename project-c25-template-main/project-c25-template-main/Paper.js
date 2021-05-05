class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(x, y,r,options);
 		World.add(world, this.body);
        this.Peppy=loadImage("paper.png")
	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.Peppy,0,0,this.r, this.r);
			pop()
			
	}

}