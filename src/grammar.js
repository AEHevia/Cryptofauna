const rita = require('rita')
const fs = require("fs");
const {generateText, createMarkovChain} = require('./char-markov.js');
const data = JSON.parse(fs.readFileSync('data/animals.json'));
const [state_space, beginnings] = createMarkovChain(1, data.animals);
const grammarRules = JSON.parse(fs.readFileSync('data/grammar.json'))

let generator = new rita.RiGrammar(grammarRules)




const genCreature = (state_space, beginnings) => {
    const animal_name = generateText(state_space, beginnings, 1, 7)
    const result = generator.expand();
    console.log(animal_name)
    return result.replace("GEN-ANIMAL", animal_name)
}

console.log(genCreature(state_space, beginnings))