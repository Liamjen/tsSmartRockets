import Population from "./Population"
import Goal from "./Goal"
import * as p5 from "./p5/p5.js"

let population: Population;
let rocketNum: number = 20;
let screenSize: number = 900;
let goal: Goal;

var p5functions = function(p5obj)
{    
    p5obj.setup = function()
    {
        p5obj.createCanvas(screenSize, screenSize);
        p5obj.background(95);
        p5obj.colorMode(p5obj.HSB);
        p5obj.noStroke();
    
        goal = new Goal(screenSize / 2, 20, 20, p5obj);
    
        population = new Population(rocketNum, goal, screenSize / 2, screenSize / 2, p5obj);
    }
    
    p5obj.draw = function()
    {
        p5obj.background(95);
    
        population.update();
        population.show(); 
    
        goal.show();
    }
}

let myp5 = new p5(p5functions);
