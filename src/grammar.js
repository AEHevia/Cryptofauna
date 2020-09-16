const {generateText} = require('./markov-chains/char-markov.js');

const genCreature = (state_space, beginnings, generator) => {
    const animal_name = generateText(state_space, beginnings, 1, 7)
    const result = generator.expand();
    return result.replace("GEN-ANIMAL", animal_name)
}

module.exports = {
    genCreature
}