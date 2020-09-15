let {genCreature} = require('./src/grammar')
let Twit = require('twit')
let config = require('./config')

let T = new Twit(config)

const collectData = (err, data, response) =>{
    if (err) { console.log("Something went wrong!") }
    else { console.log("It worked!") }
}

// Post the tweets using the credentials and tokens you pass in config
const postTweet = () => {
    let result = genCreature()
    const tweet = {status: result}
    T.post('statuses/update', tweet, collectData) 
}

postTweet()

let timeBetweenTweets = 1000*60*1
//setInterval(postTweet, timeBetweenTweets)