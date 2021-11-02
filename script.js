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
      updatescorepersecond(Ambers, Grandmas, Kaeyas) ;
    }
  }

  function buyGrandma() {
    if (score >= Grandmacost) {
      score = score - Grandmacost;
      Grandmas = Grandmas + 1;
      Grandmacost = Math.round(Grandmacost * 1.15) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("Grandmacost").innerHTML = Grandmacost;
      document.getElementById("Grandmas").innerHTML = Grandmas;
      updatescorepersecond(Ambers, Grandmas, Kaeyas) ;
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
      updatescorepersecond(Ambers, Grandmas, Kaeyas) ;
    }
  }

  var score = 0;
  var clickingPower = 1

  var Ambercost = 15;
  var Ambers = 0;
  var Grandmacost = 100;
  var Grandmas = 0;
  var Kaeyacost = 1000;
  var Kaeyas = 0;

  function updatescorepersecond(Cursors, Grandmas, Kaeyas) {
    scorepersecond = Ambers + (Grandmas * 5) + (Kaeyas * 70);
    document.getElementById("scorepersecond").innerHTML = scorepersecond;
  }

  setInterval (function() {
    score = score + Ambers;
    score = score + (Grandmas * 5);
    score = score + (Kaeyas * 70);
    document.getElementById("score").innerHTML = score;

    document.title = score + "-primogems - Genshin clicker"
  }, 1000) ; //1000ms = 1 second
