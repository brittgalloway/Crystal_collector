$( document ).ready(){


// list out varibles

// // Number we trying to match MUST BE BETWEEN 19-120 and randomly selected
const goalNumberElement = $("#goalNumber");

// // The sum of the crystal click scores, will change
let collectedCrystalsElements = $("#collectedCrystals");

// blue crystal
const blueElement = $("#blue");

// green crystal
let greenElement = $("#green");

// yellow crystal
let yellowElement = $("#yellow");

// pink crystal
let pinkElement = $("#pink");

// total wins
let winsElement = $("#wins");

// total loses
let losesElement = $("#loses");

let sum = 0;
let win = 0;
let lose = 0;

// game starts on page load
function gamestart() {
  // wins, loses, and collected crystals are 0

  // goal number is randomly selected (a number between 19-120)
  const goalNum = Math.floor(Math.random() * (19 - 120));
  console.log(goalNum);
  // each of the 4 crystals (blue, green, yellow, and pink ) are assigned a random number between 1-12, the number is hidden from the player

  // on click, the number assigned to the crystal is added to collectedCrystals

  // game ends when collectedCrystals=targetNumber (win) OR collectedCrystals>targetNumber (lose)

  // //if win, wins +1 "you win!" delay 1 sec
  // //if lose, loses+1 "you lose!" delay 1 sec

  // game automatically restarts
  // score stays updated
  // new targetNumber is choosen
  // each of the 4 crystals get a new number
// }
// };
