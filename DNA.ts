import * as p5 from "./p5/p5.js";

export default class DNA
{
    private mutateChance: number = 0.05;

    private dna: any[];
    private length: number;
    private strength: number;

    private p5obj: any;

    constructor(length: number, strength: number, p5obj: any)
    {
        this.dna = [];
        this.length = length;
        this.strength = strength;

        this.p5obj = p5obj;

        for(var i = 0; i < length; i++)
        {
            this.dna[i] = p5.Vector.random2D();
            this.dna[i].setMag(strength);
        }
    }

    getDNA()
    {
        return this.dna;
    }

    setDNA(dna: any[])
    {
        this.dna = dna;
    }

    splice(otherDNA: DNA)
    {
        for(var i = 0; i < this.length; i++)
        {
            if(Math.random() > 0.5)
            {
                var vec = this.dna[i];
                this.dna[i] = otherDNA.dna[i];
                otherDNA.dna[i] = vec;
            }
        }
    }

    mutate()
    {
        for(var i = 0; i < this.length; i++)
        {
            if(Math.random() < this.mutateChance)
            {
                this.dna[i] = p5.Vector.random2D();
                this.dna[i].setMag(this.strength);
            }
        }
    }
}
