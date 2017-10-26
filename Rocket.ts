import DNA from "./DNA";
import Goal from "./Goal"

export default class Rocket
{
    private gravStrength: number = 0.01;
    private dnaStrength: number = 0.2;

    private pos: any;
    private acceleration: any;
    private velocity: any;
    private gravity: any;

    private size: number = 20;
    private dna: DNA;
    private score: number = 0;
    private step: number = 0; //TODO(Liam): rethink steps
    private foundGoal: boolean = false;
    
    private p5obj: any;
    private colorVal: number = Math.random() * 255;

    constructor(x: number, y: number, p5obj: any)
    {
        this.pos = p5obj.createVector(x, y);
        this.acceleration = p5obj.createVector();
        this.velocity = p5obj.createVector();
        this.gravity = p5obj.createVector(0, 1);
        this.gravity.setMag(this.gravStrength);
        this.size = 20;
        this.dna = new DNA(250, this.dnaStrength, p5obj);
        this.score = 0;
        this.foundGoal = false;

        this.p5obj = p5obj;
    }

    update(goal: Goal)
    {
        if(this.pos.dist(goal.getPos()) < 20)
        {
            this.pos = this.p5obj.createVector(goal.getPos().x, goal.getPos().y);
            this.foundGoal = true;
            this.score = 1 + (1 / this.step);
        }
        else if(!this.foundGoal)
        {
            this.velocity = this.p5obj.createVector();
            this.velocity.add(this.gravity);
            this.velocity.add(this.dna.getDNA()[this.step++]);
            this.acceleration.add(this.velocity);
            this.pos.add(this.acceleration);
        }
    }

    show()
    {
        this.p5obj.push();
        this.p5obj.fill(this.colorVal, 255, 255);
        this.p5obj.rect(this.pos.x, this.pos.y, this.size / 2, this.size);
        this.p5obj.pop();
    }

    getDNA()
    {
        return this.dna;
    }

    setDNA(newDNA: DNA)
    {
        this.dna.setDNA(newDNA.getDNA().slice());
    }

    getScore()
    {
        return this.score;
    }

    setScore(goal: Goal)
    {
        if(!this.foundGoal)
        {
            this.score = 1 / this.pos.dist(goal.getPos());            
        }
    }
}
