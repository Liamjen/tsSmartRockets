var Population = require("./Population.js");
var Goal = require("./Goal.js");
var p5 = require("./p5/p5.js");

var population;
var rocketNum = 20;
var screenSize = 900;
var goal;

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

var myp5 = new p5(p5functions);
window.myp5 = myp5;