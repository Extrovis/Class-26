class Bird extends ParentClass {
    constructor(x, y) {
        super(x, y, 70, 70);

        this.friction = 1;
        this.density = 20;
        this.restitution = 0.5;

        this.image = loadImage("sprites/bird.png");
    }

    display() {
        super.display();

        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    }
}