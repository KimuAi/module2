import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let nummer1 = parseFloat(await userInput.question('Geef een nummer in '));

if (nummer1 % 2 == 0  ){
    console.log("Het getal is even")
}
else  
    (console.log("Het getal is oneven."))