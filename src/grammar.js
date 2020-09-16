const {generateText} = require('./markov-chains/char-markov.js');
const {generateArtifact, generateAdj, generatePlant} = require("./helpers/generation_helpers");

const genCreature = (state_space, beginnings, generator) => {
    const animal_name = generateText(state_space, beginnings, 1, 7)
    const result = generator.expand();
    return result
    .replace("GEN-ANIMAL", animal_name)
    .replace("GEN-ARTIFACT", "")
    .replace("GEN-PLANT", "")
    .replace("GEN-ADJ", "")
}

module.exports = {
    genCreature
}