$(document).ready(function() {
  // // list out varibles

  // wins, loses, and collected crystals are 0
  let sum = 0;
  let win = 0;
  let lose = 0;

  // game starts on page load

  // goal number is randomly selected (a number between 19-120)
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    //the goalNumber
  }
  let goalNum = getRandomInt(19, 120);
  $("#goalNumber").text(goalNum);

  // each of the 4 crystals (blue, green, yellow, and pink ) are assigned a random number between 1-12, the number is hidden from the player
  function gem(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  // variables for each gem
  let blueGem = gem(1, 12);
  let pinkGem = gem(1, 12);
  let greenGem = gem(1, 12);
  let yellowGem = gem(1, 12);

  // function to redifine the gems per round
  function redifineGems() {
    blueGem = gem(1, 12);
    pinkGem = gem(1, 12);
    greenGem = gem(1, 12);
    yellowGem = gem(1, 12);
  }

  //function for wins
  // // win +1, prints score. new goalNum chosen
  // // // new gem number chosen
  function winz() {
    win = win + 1;
    $("#wins").text("WINS: " + win);

    goalNum = getRandomInt(19, 120);
    $("#goalNumber").text(goalNum);
    sum = 0;
    $("#collectedCrystals").html(sum);
    redifineGems();
  }

  //function for losses
  // // losses +1, prints score. new goalNum chosen
  // // // new gem number chosen
  function losez() {
    lose = lose + 1;
    $("#losses").text("LOSSES: " + lose);
    goalNum = getRandomInt(19, 120);
    $("#goalNumber").text(goalNum);
    sum = 0;
    $("#collectedCrystals").html(sum);
    redifineGems();
  }
  // on click, the number assigned to the crystal is added to collectedCrystals

  $("#blue").click(() => {
    sum = blueGem + sum;
    $("#collectedCrystals").html(sum);

    // //if win
    if (goalNum === sum) {
      winz();
    }

    //     // //if lose
    if (goalNum < sum) {
      losez();
    }
  });

  $("#green").click(() => {
    sum = greenGem + sum;
    $("#collectedCrystals").html(sum);
    // //if win
    if (goalNum === sum) {
      winz();
    }

    //     // //if lose
    if (goalNum < sum) {
      losez();
    }
  });
  $("#yellow").click(() => {
    sum = yellowGem + sum;
    $("#collectedCrystals").html(sum);
    // //if win
    if (goalNum === sum) {
      winz();
    }

    // //if lose
    if (goalNum < sum) {
      losez();
    }
  });
  $("#pink").click(() => {
    sum = pinkGem + sum;
    $("#collectedCrystals").html(sum);
    // //if win
    if (goalNum === sum) {
      winz();
    }
    // if lose
    if (goalNum < sum) {
      losez();
    }
  });
});
