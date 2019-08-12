// list out varibles

// // Number we trying to match MUST BE BETWEEN 19-120 and randomly selected
targetNumberElement = $("targetNumber");

// // The sum of the crystal click scores, will change
collectedCrystalsElements = $("collectedCrystals");

// blue crystal
blueElement = $("blue");

// green crystal
greenElement = $("green");

// yellow crystal
yellowElement = $("yellow");

// pink crystal
pinkElement = $("pink");

// total wins
winsElement = $("wins");

// total loses
losesElement = $("loses");

// game starts on page load
// wins, loses, and collected crystals are 0
// target number is randomly selected (a number between 19-120)

// each of the 4 crystals (blue, green, yellow, and pink ) are assigned a random number between 1-12, the number is hidden from the player

// on click, the number assigned to the crystal is added to collectedCrystals

// game ends when collectedCrystals=targetNumber (win) OR collectedCrystals>targetNumber (lose)

// //if win, wins +1 "you win!" delay 1 sec
// //if lose, loses+1 "you lose!" delay 1 sec

// game automatically restarts
// score stays updated
// new targetNumber is choosen
// each of the 4 crystals get a new number
