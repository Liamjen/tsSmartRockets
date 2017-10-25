class Goal
{
    constructor(x, y, size, p5obj)
    {
        this.x = x;
        this.y = y;
        this.size = size;

        this.pos = p5obj.createVector(x, y);

        this.p5obj = p5obj;

    }

    show()
    {
        this.p5obj.rect(this.x, this.y, this.size, this.size);
    }
}

module.exports = Goal;
