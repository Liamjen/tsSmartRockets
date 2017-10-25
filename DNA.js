var mutateChance = 0.05;

class DNA
{
    constructor(length, strength, p5obj)
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

    splice(otherDNA)
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
            if(Math.random() < mutateChance)
            {
                this.dna[i] = p5.Vector.random2D();
                this.dna[i].setMag(this.strength);
            }
        }
    }
}

module.exports = DNA;