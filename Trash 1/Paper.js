class Paper {
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(80,80,30/2,options);

        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
       var angle = this.body.angle;

       push();
       translate(pos.x, pos.y);
       rotate(angle);
        fill(225);
        ellipse(0, 0, 30, 30);
        pop();

    }
}