let {genCreature} = require('./grammar')
let Twit = require('twit')
let config = require('./config')
const rita = require('rita')
const fs = require("fs");
const {createMarkovChain} = require('./markov-chains/char-markov.js');
const data = JSON.parse(fs.readFileSync('./data/animals.json'));
const [state_space, beginnings] = createMarkovChain(1, data.animals);

let generator = new rita.RiGrammar(JSON.parse(fs.readFileSync('./data/grammar.json')));

let T = new Twit(config)

const collectData = (err, data, response) => {
    if (err) { console.log("Something went wrong: " + err) }
}

// Post the tweets using the credentials and tokens you pass in config
const postTweet = () => {
    let result = genCreature(state_space, beginnings, generator);
    T.post('statuses/update', {status: result}, collectData); 
}

postTweet();

let timeBetweenTweets = 1000*60*1
//setInterval(postTweet, timeBetweenTweets)