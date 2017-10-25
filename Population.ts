var Rocket = require("./Rocket.js");

var maxFrameTime = 300;

class Population {
    constructor(rocketNum, goal, startX, startY, p5obj) {
        this.rockets = [];
        this.rocketNum = rocketNum;
        this.goal = goal;
        this.generation = 1;
        this.startX = startX;
        this.startY = startY;

        this.p5obj = p5obj;

        for (var i = 0; i < this.rocketNum; i++) {
            this.rockets[i] = new Rocket(startX, startY, p5obj);
        }
    }

    update() {
        maxFrameTime--;
        if (maxFrameTime > 0) 
        {
            for (var i = 0; i < this.rocketNum; i++) 
            {
                this.rockets[i].update(this.goal);
            }
        }
        else 
        {
            for (var i = 0; i < this.rocketNum; i++) 
            {
                this.rockets[i].setScore(this.goal);
            }

            var rocket = this.rockets[0];

            for (var i = 1; i < this.rocketNum; i++) 
            {
                if (this.rockets[i].score > rocket.score) 
                    rocket = this.rockets[i];

                this.populate(rocket);
                maxFrameTime = 300;
                this.generation++;
            }
        }
    }

    populate(rocket)
    {
        this.rockets[0] = new Rocket(this.startX, this.startY, this.p5obj);
        this.rockets[0].setDNA(rocket.dna);

        for (var i = 1; i < this.rocketNum; i++) 
        {
            this.rockets[i] = new Rocket(this.startX, this.startY, this.p5obj);
            this.rockets[i].setDNA(rocket.dna);
            this.rockets[i].dna.mutate();
        }
    }

    show()
    {
        for (var i = 0; i < this.rocketNum; i++) 
        {
            this.rockets[i].show();
        }

        this.p5obj.text("Generation: " + this.generation, 15, 15);
    }
}

module.exports = Population;