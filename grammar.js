let rita = require('rita')

let rg = new rita.RiGrammar()
rg.addRule('<start>', 'Located in the <P> the <C> <DS> | Found along the coasts of <Co> the <C> <DS>')
rg.addRule('<P>', '<PM> Canyons | <PM> Valley | <PM> Forests | <PM> Jungles')
rg.addRule('<PM>', 'Corrupted | Howling | Marble | Orsimer')
rg.addRule('<Co>', '<PM> Sea')
rg.addRule('<C>', '<NM> <N> | legendary <NM> <N> | elusive <N> <N>')
rg.addRule('<NM>', 'Majestic | Silver | <N> | Putrid | Blue | Ragged | Armored | Polite | Onion | Warrior')
rg.addRule('<N>', 'Monkeys | Zebra | Fish | Oxen | Sturgeon | Parrot | Hawk | Shark | Koala | Whale | Elephant')
rg.addRule('<DS>', 'hunts <NM> <N> | builds shelters made of <M> | can use <M> tools to construct <Obj>')
rg.addRule('<M>', 'silver | bronze | wood | rock | plant matter | sticks | coconut fibers | granite')
rg.addRule('<Obj>', 'religious sculptures | intricate mouments | totems | sacrifical burial grounds | homes')


const genCreature = () => {
    let result = rg.expand()
    return result
}

module.exports = {
    genCreature
}