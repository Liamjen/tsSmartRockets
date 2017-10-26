export default class Goal
{
    private x: number;
    private y: number;
    private size: number;

    private pos: any;
    private p5obj: any;

    constructor(x: number, y: number, size: number, p5obj: any)
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

    getPos()
    {
        return this.pos;
    }
}
