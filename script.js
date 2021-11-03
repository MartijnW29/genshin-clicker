function addToScore(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = score;
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

  function updatescorepersecond(Ambers, Lisas, Kaeyas) {
    scorepersecond = Ambers + (Lisas * 5) + (Kaeyas * 70);
    document.getElementById("scorepersecond").innerHTML = scorepersecond;
  }

  setInterval (function() {
    score = score + Ambers;
    score = score + (Lisas * 5);
    score = score + (Kaeyas * 70);
    document.getElementById("score").innerHTML = score;

    document.title = score + "-primogems - Genshin clicker"
  }, 1000) ; //1000ms = 1 second
