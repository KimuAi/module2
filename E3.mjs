import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question('Kies een maand ' );

switch(maand){
    case "january":
        console.log("31 dagen")
    break;

    case "februari":
         console.log("28 dagen of 29 dagen met een schrikkeljaar")
    break;

    case "maart":
        console.log("31 dagen")
    break;

    case "april":
        console.log("30 dagen")
    break;

    case "mei":
         console.log("31 dagen")
    break;

     case "juni":
         console.log("30 dagen")
    break;

     case "juli":
         console.log("31 dagen")
    break;

    case "augustus":
        console.log("31 dagen")
   break;

   case "september":
    console.log("30 dagen")
    break;

    case "oktober":
    console.log("31 dagen")
    break;

    case "november":
    console.log("30 dagen")
    break;

    case "december":
    console.log("31 dagen")
    break;

}