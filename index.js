const franc = require('franc');
const langs = require('langs');

const textInput = process.argv[2]
const shortOutput = franc(textInput);
const longOutput = langs.where("3", shortOutput);

if (longOutput == undefined) {
    console.log('ERROR!');
    } else {
        const newThing = longOutput.name; 
        console.log(newThing);
    }
