var DNA = require("./DNA.js");

var gravStrength = 0.01;
var dnaStrength = 0.2;

class Rocket
{
    constructor(x, y, p5obj)
    {
        this.pos = p5obj.createVector(x, y);
        this.acceleration = p5obj.createVector();
        this.velocity = p5obj.createVector();
        this.gravity = p5obj.createVector(0, 1);
        this.gravity.setMag(gravStrength);
        this.size = 20;
        this.dna = new DNA(250, dnaStrength, p5obj);
        this.score = 0;
        this.step = 0;
        this.foundGoal = false;

        this.p5obj = p5obj;

        this.colorVal = Math.random() * 255;
    }

    update(goal)
    {
        if(this.pos.dist(goal.pos) < 20)
        {
            this.pos = this.p5obj.createVector(goal.pos.x, goal.pos.y);
            this.foundGoal = true;
            this.score = 1 + (1 / this.step);
        }
        else if(!this.foundGoal)
        {
            this.velocity = this.p5obj.createVector();
            this.velocity.add(this.gravity);
            this.velocity.add(this.dna.dna[this.step++]);
            this.acceleration.add(this.velocity);
            this.pos.add(this.acceleration);
        }
    }

    show()
    {
        this.p5obj.push();
        this.p5obj.fill(this.colorVal, 255, 255);
        this.p5obj.rect(6, this.pos.y, this.size / 2, this.size);
        this.p5obj.pop();
    }

    setDNA(newDNA)
    {
        this.dna.dna = newDNA.dna.slice();
    }

    setScore(goal)
    {
        if(!this.foundGoal)
        {
            this.score = 1 / this.pos.dist(goal.pos);            
        }
    }
}

module.exports = Rocket;