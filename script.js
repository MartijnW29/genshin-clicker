function addToScore(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

function resetgame() {
  if (comfirm("are you sure you want to restart")) {
    var gamesave = {};
    localstorage.setitem("gamesave",JSON.stringify(gamesave));
    location.reload();
  }
}

  function buyAmber() {
    if (score >= Ambercost) {
      score = score - Ambercost;
      Ambers = Ambers + 1;
      Ambercost = Math.round(Ambercost * 1.15) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("Ambercost").innerHTML = Ambercost;
      document.getElementById("Ambers").innerHTML = Ambers;
      updatescorepersecond(Ambers, Lisas, Kaeyas) ;
    }
  }

  function buyLisa() {
    if (score >= Lisacost) {
      score = score - Lisacost;
      Lisas = Lisas + 1;
      Lisacost = Math.round(Lisacost * 1.15) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("Lisacost").innerHTML = Lisacost;
      document.getElementById("Lisas").innerHTML = Lisas;
      updatescorepersecond(Ambers, Lisas, Kaeyas) ;
    }

  }
  function buyKaeya() {
    if (score >= Kaeyacost) {
      score = score - Kaeyacost;
      Kaeyas = Kaeyas + 1;
      Kaeyacost = Math.round(Kaeyacost * 1.15) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("Kaeyacost").innerHTML = Kaeyacost;
      document.getElementById("Kaeyas").innerHTML = Kaeyas;
      updatescorepersecond(Ambers, Lisas, Kaeyas) ;
    }
  }

  var score = 0;
  var clickingPower = 1

  var Ambercost = 15;
  var Ambers = 0;
  var Lisacost = 100;
  var Lisas = 0;
  var Kaeyacost = 1000;
  var Kaeyas = 0;

function loadgame() {
  var savegame = JSON.parse(localstorage.getitem("gamesave"));
if (typeof savedgame.score !== "undefined") score = savedgame.score;
if (typeof savedgame.clickingPower !== "undefined") clickingPower = savedgame.clickingpower;
if (typeof savedgame.Ambercost !== "undefined") clickingPower = savedgame.Ambercost;
if (typeof savedgame.Ambers !== "undefined") clickingPower = savedgame.Ambers;
if (typeof savedgame.Lisacost !== "undefined") clickingPower = savedgame.Lisacost;
if (typeof savedgame.Lisas !== "undefined") clickingPower = savedgame.Lisas;
if (typeof savedgame.Kaeyacost !== "undefined") clickingPower = savedgame.Kaeyacost;
if (typeof savedgame.Kaeyas !== "undefined") clickingPower = savedgame.Kaeyas;

}

  function savegame() {
    var gamesave = {
      score: score,
      clickingPower: clickingPower,
      Ambercost: Ambercost,
      Ambers: Ambers,
      Lisacost: Lisacost,
      Lisas: Lisas,
      Kaeyacost: Kaeyacost,
      Kaeyas: Kaeyas
      //voeg achter elke een komma, toe maar niet de laatste
    };
    localstorage.setitem("gamesave", JSON.stringify(gamesave));
  }

  function updatescorepersecond(Ambers, Lisas, Kaeyas) {
    scorepersecond = Ambers + (Lisas * 5) + (Kaeyas * 70);
    document.getElementById("scorepersecond").innerHTML = scorepersecond;
  }

window.onload = function () {
  loadgame();
  updatescorepersecond();
  document.getElementById("score").innerHTML = score;
  document.getElementById("Ambercost").innerHTML = Ambercost;
  document.getElementById("Ambers").innerHTML = Ambers;
  document.getElementById("Lisacost").innerHTML = Lisacost;
  document.getElementById("Lisas").innerHTML = Lisas;
  document.getElementById("Kaeyacost").innerHTML = Kaeyacost;
  document.getElementById("Kaeyas").innerHTML = Kaeyas;

};

  setInterval (function() {
    score = score + Ambers;
    score = score + (Lisas * 5);
    score = score + (Kaeyas * 70);
    document.getElementById("score").innerHTML = score;

    document.title = score + "-primogems - Genshin clicker"
  }, 1000) ; //1000ms = 1 second

  setInterval(function() {
    savegame ();
  }, 30000);//30000ms = 30 secondes

  document.addeventlistener("keydows", function(event) {
    if (event.ctrlKey && event.which == 83) {//ctrl + s
    event.preventDefault();
    savegame();
  }
  }, flase);
