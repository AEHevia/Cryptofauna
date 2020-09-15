// Create the character level Markov chain
function createMarkovChain(assumption, data_array)
{
    let state_space = {};
    let beginnings = [];

    for(let k = 0; k < data_array.length; k++)
    {
        let subject = data_array[k];

        for (let i = 0; i < subject.length - assumption; i++) {
            let gram = subject.substring(i, i + assumption).toLowerCase();

            if (i == 0) {
                beginnings.push(gram);
            }
            
            if (!state_space[gram]) {
                state_space[gram] = [];
            } 

            state_space[gram].push(subject.charAt(i + assumption));
        }
    }

    //console.log(state_space) // Uncomment this if you want to see what the state_space looks like

    return [state_space, beginnings]
}


// Generate some text
function generateText(state_space, beginnings, assumption, generation_len)
{

        // Create a seed to "start" the generation process
        let seed = beginnings[Math.floor(Math.random() * beginnings.length)];
        let result = seed;

        for (let i = 0; i < generation_len; i++)
        {
            let possibilities = state_space[seed];

            // If our possibilities is null, stop generating, we have reached the end
            if (!possibilities)
            {
                console.log("no options for " + seed)
                break;
            }

            let next = possibilities[Math.floor(Math.random() * possibilities.length)];
            result = result + next;
            seed = result.substring(result.length - assumption, result.length);
        }

        // Print what we generated
        return result.charAt(0).toUpperCase() + result.slice(1);
}

module.exports = {
    createMarkovChain,
    generateText
}