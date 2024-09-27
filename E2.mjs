import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("geef een getal "));

let minimum = 1;
let maximum = 100;

if (getal >= minimum && getal <= maximum)
{
    console.log("Je getal " + getal +  " ligt tussen " + minimum + " en " + maximum)
}
else 
    console.log("Je getal " + getal +  " ligt NIET tussen " + minimum + " en " + maximum)