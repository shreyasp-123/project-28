class Mango{
    constructor(x,y, radius){
        var options= {
            isStatic: true,
            restitution: 0,
            friction:1
        }
        this.image = loadImage("Images/mango.png")
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius
        World.add(world, this.body)
    }
    display(){
        imageMode(RADIUS)
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
}