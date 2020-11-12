class Stone{
    constructor(x,y, radius){
        var options= {
            isStatic: false,
            restitution: 0,
            friction:1,
            density:1.2
        }
        this.image = loadImage("Images/stone.png")
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius
        World.add(world, this.body)
    }
    display(){
        imageMode(RADIUS)
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
}