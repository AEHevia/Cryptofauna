const rita = require('rita')
const fs = require("fs");
const {createStateSpace, generateText} = require("./char-markov.js")

const data = JSON.parse(fs.readFileSync('data/animals/dinosaurs.json'));
const [state_space, beginnings] = createStateSpace(3, data.dinosaurs);
const grammarRules = JSON.parse(fs.readFileSync('data/grammar.json'))

let generator = new rita.RiGrammar(grammarRules)



const genCreature = () => {
    return generator.expand().replace(
        "GEN-ANIMAL", 
        generateText(state_space, beginnings, 15)
        );
}

console.log(genCreature())