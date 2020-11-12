class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.sling = Constraint.create(options)
        this.pointB = pointB
        World.add(world, this.sling)
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB
        stroke("pink")
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}