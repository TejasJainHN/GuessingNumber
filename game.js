let gameNum=25;

let userNum = prompt("Guess the game number:");
console.log(userNum); 
while (userNum!=gameNum){
    let userNum = prompt(("u entered wrong number,guess again"))
}
console.log("congratulations, you entered the right number")