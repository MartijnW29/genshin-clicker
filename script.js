function addToScore(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

  function buyAmber() {
    if (score >= Ambercost) {
      score = score - Ambercost;
      Ambers = Ambers + 1;
      Ambercost = Math.round(Ambercost * 1.25) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("Ambercost").innerHTML = Ambercost;
      document.getElementById("Ambers").innerHTML = Ambers;
    }
  }

  function buyAmberConstellation() {
    if (score >= AmberConstellationcost) {
      score = score - AmberConstellationcost;
      AmberConstellations = AmberConstellations + 1;
      AmberConstellationcost = Math.round(AmberConstellationcost * 10) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("AmberConstellationcost").innerHTML = AmberConstellationcost;
      document.getElementById("AmberConstellations").innerHTML = AmberConstellations;
    }
  }

  function buyAmberfabricator() {
    if (score >= Amberfabricatorcost) {
      score = score - Amberfabricatorcost;
      Amberfabricators = Amberfabricators + 1;
      Amberfabricatorcost = Math.round(Amberfabricatorcost * 1.25) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("Amberfabricatorcost").innerHTML = Amberfabricatorcost;
      document.getElementById("Amberfabricators").innerHTML = Amberfabricators;
    }
  }

  function buyLisa() {
    if (score >= Lisacost) {
      score = score - Lisacost;
      Lisas = Lisas + 1;
      Lisacost = Math.round(Lisacost * 1.25) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("Lisacost").innerHTML = Lisacost;
      document.getElementById("Lisas").innerHTML = Lisas;
    }
  }

  function buyLisaConstellation() {
    if (score >= LisaConstellationcost) {
      score = score - LisaConstellationcost;
      LisaConstellations = LisaConstellations + 1;
      LisaConstellationcost = Math.round(LisaConstellationcost * 10) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("LisaConstellationcost").innerHTML = LisaConstellationcost;
      document.getElementById("LisaConstellations").innerHTML = LisaConstellations;
    }
  }

  function buyKaeya() {
    if (score >= Kaeyacost) {
      score = score - Kaeyacost;
      Kaeyas = Kaeyas + 1;
      Kaeyacost = Math.round(Kaeyacost * 1.25) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("Kaeyacost").innerHTML = Kaeyacost;
      document.getElementById("Kaeyas").innerHTML = Kaeyas;
    }
  }

  function buyKaeyaConstellation() {
    if (score >= KaeyaConstellationcost) {
      score = score - KaeyaConstellationcost;
      KaeyaConstellations = KaeyaConstellations + 1;
      KaeyaConstellationcost = Math.round(KaeyaConstellationcost * 10) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("KaeyaConstellationcost").innerHTML = KaeyaConstellationcost;
      document.getElementById("KaeyaConstellations").innerHTML = KaeyaConstellations;
    }
  }

  function buyBennett() {
    if (score >= Bennettcost) {
      score = score - Bennettcost;
      Bennetts = Bennetts + 1;
      Bennettcost = Math.round(Bennettcost * 1.25) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("Bennettcost").innerHTML = Bennettcost;
      document.getElementById("Bennetts").innerHTML = Bennetts;
    }
  }

  function buyBennettConstellation() {
    if (score >= BennettConstellationcost) {
      score = score - BennettConstellationcost;
      BennettConstellations = BennettConstellations + 1;
      BennettConstellationcost = Math.round(BennettConstellationcost * 10) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("BennettConstellationcost").innerHTML = BennettConstellationcost;
      document.getElementById("BennettConstellations").innerHTML = BennettConstellations;
    }
  }

  function buyRazor() {
    if (score >= Razorcost) {
      score = score - Razorcost;
      Razors = Razors + 1;
      Razorcost = Math.round(Razorcost * 1.25) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("Razorcost").innerHTML = Razorcost;
      document.getElementById("Razors").innerHTML = Razors;
    }
  }

  function buyRazorConstellation() {
    if (score >= RazorConstellationcost) {
      score = score - RazorConstellationcost;
      RazorConstellations = RazorConstellations + 1;
      RazorConstellationcost = Math.round(RazorConstellationcost * 10) ;
      document.getElementById("score").innerHTML = score;
      document.getElementById("RazorConstellationcost").innerHTML = RazorConstellationcost;
      document.getElementById("RazorConstellations").innerHTML = RazorConstellations;
    }
  }

  function changePriceColor(price, priceID) {
    if (score < price) {
      document.getElementById(priceID).style.color = "red";
    } else {
      document.getElementById(priceID).style.color = "black";
    }
  }

  var score = 0;
  var clickingPower = 1;
  var Ambercost = 15;
  var Ambers = 0;
  var AmberConstellationcost = 100;
  var AmberConstellations = 0;
  var Amberfabricatorcost = 100000;
  var Amberfabricators = 0;
  var Lisacost = 100;
  var Lisas = 0;
  var LisaConstellationcost = 1000;
  var LisaConstellations = 0;
  var Kaeyacost = 1000;
  var Kaeyas = 0;
  var KaeyaConstellationcost = 10000;
  var KaeyaConstellations = 0;
  var Bennettcost = 10000;
  var Bennetts = 0;
  var BennettConstellationcost = 100000;
  var BennettConstellations = 0;
  var Razorcost = 50000;
  var Razors = 0;
  var RazorConstellationcost = 1000000;
  var RazorConstellations = 0;

  setInterval (function() {
    changePriceColor(Ambercost, "Ambercost");
    changePriceColor(AmberConstellationcost, "AmberConstellationcost");
    changePriceColor(Amberfabricatorcost, "Amberfabricatorcost");
    changePriceColor(Lisacost, "Lisacost");
    changePriceColor(LisaConstellationcost, "LisaConstellationcost");
    changePriceColor(Kaeyacost, "Kaeyacost");
    changePriceColor(KaeyaConstellationcost, "KaeyaConstellationcost");
    changePriceColor(Bennettcost, "Bennettcost");
    changePriceColor(BennettConstellationcost, "BennettConstellationcost");
    changePriceColor(Razorcost, "Razorcost");
    changePriceColor(RazorConstellationcost, "RazorConstellationcost");
  }, 10);//10ms = 0.01sec

  setInterval (function updatescorepersecond() {
      scorepersecond = (Ambers * (AmberConstellations + 1)) + (Lisas * 5 * (LisaConstellations + 1)) + (Kaeyas * 20 * (KaeyaConstellations + 1)) + (Bennetts * 100 * (BennettConstellations + 1)) + (Razors * 300 * (RazorConstellations + 1));
      document.getElementById("scorepersecond").innerHTML = scorepersecond;

  }, 10) ; //10ms = 0.01 second

  setInterval (function() {
    score = score + (Ambers * (AmberConstellations + 1));
    score = score + (Lisas * 5 * (LisaConstellations + 1));
    document.getElementById("score").innerHTML = score;

    document.title = score + "-primogems - Genshin clicker"

  }, 1000) ; //1000ms = 1 second

  setInterval (function() {
    score = score + (0.1 * Kaeyas * 20 * (KaeyaConstellations + 1));
    document.getElementById("score").innerHTML = score;

    document.title = score + "-primogems - Genshin clicker"

  }, 100) ; //100ms = 0.1 second
  setInterval (function() {
    score = score + (0.01 * Bennetts * 100 * (BennettConstellations + 1));
      score = score + (0.01 * Razors * 300 * (RazorConstellations + 1));
    document.getElementById("score").innerHTML = score;

    document.title = score + "-primogems - Genshin clicker"

  }, 10) ; //10ms = 0.01 second

  setInterval (function() {
    Ambers = Ambers + Amberfabricators;
    document.getElementById("Ambercost").innerHTML = Ambercost;
    document.getElementById("Ambers").innerHTML = Ambers;
  }, 1000) ; //1000ms = 1 second
