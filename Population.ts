import Rocket from "./Rocket"
import Goal from "./Goal"

 export default class Population 
 {
    private maxFrameTime: number = 300;

    private rockets: Rocket[];
    private rocketNum: number;
    private goal: Goal;
    private generation: number = 1;
    private startX: number;
    private startY: number;
    
    private p5obj: any;

    constructor(rocketNum: number, goal: Goal, startX: number, startY: number, p5obj: any) 
    {
        this.rockets = [];
        this.rocketNum = rocketNum;
        this.goal = goal;
        this.startX = startX;
        this.startY = startY;

        this.p5obj = p5obj;

        for (var i = 0; i < this.rocketNum; i++) {
            this.rockets[i] = new Rocket(startX, startY, p5obj);
        }
    }

    update() 
    {
        this.maxFrameTime--;
        if (this.maxFrameTime > 0) 
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

            let rocket = this.rockets[0];

            for (var i = 1; i < this.rocketNum; i++) 
            {
                if (this.rockets[i].getScore() > rocket.getScore()) 
                    rocket = this.rockets[i];
            }

            this.populate(rocket);
            this.maxFrameTime = 300;
            this.generation++;
        }
    }

    populate(rocket: Rocket)
    {
        this.rockets[0] = new Rocket(this.startX, this.startY, this.p5obj);
        this.rockets[0].setDNA(rocket.getDNA());

        for (var i = 1; i < this.rocketNum; i++) 
        {
            this.rockets[i] = new Rocket(this.startX, this.startY, this.p5obj);
            this.rockets[i].setDNA(rocket.getDNA());
            this.rockets[i].getDNA().mutate();
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
