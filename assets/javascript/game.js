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
  let goalNum = getRandomInt(19, 120);
  $("#goalNumber").text(goalNum);

  // each of the 4 crystals (blue, green, yellow, and pink ) are assigned a random number between 1-12, the number is hidden from the player
  function bGem(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  let blueGem = bGem(1, 12);

  function pGem(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  let pinkGem = pGem(1, 12);

  function gGem(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  let greenGem = gGem(1, 12);

  function yGem(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    //The maximum is exclusive and the minimum is inclusive
  }
  let yellowGem = yGem(1, 12);

  // on click, the number assigned to the crystal is added to collectedCrystals

  $("#blue").click(() => {
    sum = blueGem + sum;
    $("#collectedCrystals").html(sum);

    // //if win, wins +1 "you win!"
    if (goalNum === sum) {
      win = win + 1;
      $("#wins").text("WINS: " + win);

      goalNum = getRandomInt(19, 120);
      $("#goalNumber").text(goalNum);
      sum = 0;
      $("#collectedCrystals").html(sum);
      blueGem = bGem(1, 12);
      pinkGem = pGem(1, 12);
      greenGem = gGem(1, 12);
      yellowGem = yGem(1, 12);
    }

    //     // //if lose, loses+1 "you lose!"
    if (goalNum < sum) {
      lose = lose + 1;
      $("#losses").text("LOSSES: " + lose);
      goalNum = getRandomInt(19, 120);
      $("#goalNumber").text(goalNum);
      sum = 0;
      $("#collectedCrystals").html(sum);
      blueGem = bGem(1, 12);
      pinkGem = pGem(1, 12);
      greenGem = gGem(1, 12);
      yellowGem = yGem(1, 12);
    }
  });

  $("#green").click(() => {
    sum = greenGem + sum;
    $("#collectedCrystals").html(sum);
    // //if win, wins +1 "you win!"
    if (goalNum === sum) {
      win = win + 1;
      $("#wins").text("WINS: " + win);

      goalNum = getRandomInt(19, 120);
      $("#goalNumber").text(goalNum);
      sum = 0;
      $("#collectedCrystals").html(sum);
      blueGem = bGem(1, 12);
      pinkGem = pGem(1, 12);
      greenGem = gGem(1, 12);
      yellowGem = yGem(1, 12);
    }

    //     // //if lose, loses+1 "you lose!"
    if (goalNum < sum) {
      lose = lose + 1;
      $("#losses").text("LOSSES: " + lose);
      goalNum = getRandomInt(19, 120);
      $("#goalNumber").text(goalNum);
      sum = 0;
      $("#collectedCrystals").html(sum);
      blueGem = bGem(1, 12);
      pinkGem = pGem(1, 12);
      greenGem = gGem(1, 12);
      yellowGem = yGem(1, 12);
    }
  });
  $("#yellow").click(() => {
    sum = yellowGem + sum;
    $("#collectedCrystals").html(sum);
    // //if win, wins +1 "you win!"
    if (goalNum === sum) {
      win = win + 1;
      $("#wins").text("WINS: " + win);

      goalNum = getRandomInt(19, 120);
      $("#goalNumber").text(goalNum);
      sum = 0;
      $("#collectedCrystals").html(sum);
      blueGem = bGem(1, 12);
      pinkGem = pGem(1, 12);
      greenGem = gGem(1, 12);
      yellowGem = yGem(1, 12);
    }

    // //if lose, loses+1 "you lose!"
    if (goalNum < sum) {
      lose = lose + 1;
      $("#losses").text("LOSSES: " + lose);
      goalNum = getRandomInt(19, 120);
      $("#goalNumber").text(goalNum);
      sum = 0;
      $("#collectedCrystals").html(sum);
      blueGem = bGem(1, 12);
      pinkGem = pGem(1, 12);
      greenGem = gGem(1, 12);
      yellowGem = yGem(1, 12);
    }
  });
  $("#pink").click(() => {
    sum = pinkGem + sum;
    $("#collectedCrystals").html(sum);
    // //if win, wins +1 "you win!"
    if (goalNum === sum) {
      win = win + 1;
      $("#wins").text("WINS: " + win);

      goalNum = getRandomInt(19, 120);
      $("#goalNumber").text(goalNum);
      sum = 0;
      $("#collectedCrystals").html(sum);
      blueGem = bGem(1, 12);
      pinkGem = pGem(1, 12);
      greenGem = gGem(1, 12);
      yellowGem = yGem(1, 12);
    }

    //     // //if lose, loses+1 "you lose!"
    if (goalNum < sum) {
      lose = lose + 1;
      $("#losses").text("LOSSES: " + lose);
      goalNum = getRandomInt(19, 120);
      $("#goalNumber").text(goalNum);
      sum = 0;
      $("#collectedCrystals").html(sum);
      blueGem = bGem(1, 12);
      pinkGem = pGem(1, 12);
      greenGem = gGem(1, 12);
      yellowGem = yGem(1, 12);
    }
  });
  // blueGem = bGem(1, 12);
  // pinkGem = pGem(1, 12);
  // greenGem = gGem(1, 12);
  // yellowGem = yGem(1, 12)
  // game ends when collectedCrystals=targetNumber (win) OR collectedCrystals>targetNumber (lose)

  // game automatically restarts
  // score stays updated -  DONE
  // new targetNumber is choosen - DONE
  // each of the 4 crystals get a new number
  //sum is 0 - DONE
  // }
  // }
});
