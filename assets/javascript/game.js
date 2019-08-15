$(document).ready(function() {
  // // list out varibles

  let sum = 0;
  let win = 0;
  let lose = 0;

  // game starts on page load
  // function gamestart() {
  // wins, loses, and collected crystals are 0

  // goal number is randomly selected (a number between 19-120)

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  const goalNum = getRandomInt(19, 120);
  $("#goalNumber").text(goalNum);

  // each of the 4 crystals (blue, green, yellow, and pink ) are assigned a random number between 1-12, the number is hidden from the player
  function bGem(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  const blueGem = bGem(1, 12);

  function pGem(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  const pinkGem = pGem(1, 12);

  function gGem(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  const greenGem = gGem(1, 12);

  function yGem(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    //The maximum is exclusive and the minimum is inclusive
  }
  const yellowGem = yGem(1, 12);

  // on click, the number assigned to the crystal is added to collectedCrystals

  $("#blue").click(function() {
    sum = blueGem + sum;
    $("#collectedCrystals").text(sum);
  });
  $("#green").click(function() {
    sum = greenGem + sum;
    $("#collectedCrystals").text(sum);
  });
  $("#yellow").click(function() {
    sum = yellowGem + sum;
    $("#collectedCrystals").text(sum);
  });
  $("#pink").click(function() {
    sum = pinkGem + sum;
    $("#collectedCrystals").text(sum);
  });

  // game ends when collectedCrystals=targetNumber (win) OR collectedCrystals>targetNumber (lose)
  if (goalNum === sum) {
    // //if win, wins +1 "you win!" delay 1 sec
    win++;
    $("#wins").html(win);
    alert("You win!");
  } else if (goalNum < sum) {
    lose++;
    $("#losses").html(lose);
    alert("you lose!");
    // //if lose, loses+1 "you lose!" delay 1 sec
  }
  // game automatically restarts
  // score stays updated
  // new targetNumber is choosen
  // each of the 4 crystals get a new number
  // }
  // }
});
