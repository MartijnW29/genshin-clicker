function addToScore(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

function buyConstellation() {
  if (score >= Constellationcost) {
    score = score - Constellationcost;
    Constellations = Constellations + 1;
    Constellationcost = Math.round(Constellationcost * 10) ;
    document.getElementById("score").innerHTML = score;
    document.getElementById("Constellationcost").innerHTML = Constellationcost;
    document.getElementById("Constellations").innerHTML = Constellations;
    updatescorepersecond(Constellations, Ambers, Lisas, Kaeyas, Bennetts) ;
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
      updatescorepersecond(Constellations, Ambers, Lisas, Kaeyas, Bennetts) ;
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
      updatescorepersecond(Constellations, Ambers, Lisas, Kaeyas, Bennetts) ;
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
      updatescorepersecond(Constellations, Ambers, Lisas, Kaeyas, Bennetts) ;
    }
  }

  function buyBennett() {
    if (score >= Bennettcost) {
      score = score - Bennettcost;
      Bennetts = Bennetts + 1;
      Bennettcost = Math.round(Bennettcost * 1.15) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("Bennettcost").innerHTML = Bennettcost;
      document.getElementById("Bennetts").innerHTML = Bennetts;
      updatescorepersecond(Constellations, Ambers, Lisas, Kaeyas, Bennetts) ;
    }
  }

  var score = 0;
  var clickingPower = 1
  var Constellationcost = 1000
  var Constellations = 0
  var Ambercost = 15;
  var Ambers = 0;
  var Lisacost = 100;
  var Lisas = 0;
  var Kaeyacost = 1000;
  var Kaeyas = 0;
  var Bennettcost = 10000;
  var Bennetts =0;

  function updatescorepersecond(Constellations, Ambers, Lisas, Kaeyas, Bennetts) {
    scorepersecond = (Ambers * (Constellations + 1)) + (Lisas * 5 * (Constellations + 1)) + (Kaeyas * 40 * (Constellations + 1)) + (Bennetts * 125 * (Constellations + 1));
    document.getElementById("scorepersecond").innerHTML = scorepersecond;
  }

  setInterval (function() {
    score = score + (Ambers * (Constellation + 1));
    score = score + (Lisas * 5 * (Constellations + 1));
    score = score + (Kaeyas * 40 * (Constellations + 1));
    score = score + (Bennetts * 125 * (Constellations + 1));
    document.getElementById("score").innerHTML = score;

    document.title = score + "-primogems - Genshin clicker"
  }, 1000) ; //1000ms = 1 second
