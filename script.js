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
      updatescorepersecond(Ambers, AmberConstellations, Lisas, LisaConstellations, Kaeyas, KaeyaConstellations, Bennetts, BennettConstellations, Razors, RazorConstellations) ;
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
      updatescorepersecond(Ambers, AmberConstellations, Lisas, LisaConstellations, Kaeyas, KaeyaConstellations, Bennetts, BennettConstellations, Razors, RazorConstellations) ;
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
      updatescorepersecond(Ambers, AmberConstellations, Lisas, LisaConstellations, Kaeyas, KaeyaConstellations, Bennetts, BennettConstellations, Razors, RazorConstellations) ;
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
      updatescorepersecond(Ambers, AmberConstellations, Lisas, LisaConstellations, Kaeyas, KaeyaConstellations, Bennetts, BennettConstellations, Razors, RazorConstellations) ;
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
      updatescorepersecond(Ambers, AmberConstellations, Lisas, LisaConstellations, Kaeyas, KaeyaConstellations, Bennetts, BennettConstellations, Razors, RazorConstellations) ;
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
      updatescorepersecond(Ambers, AmberConstellations, Lisas, LisaConstellations, Kaeyas, KaeyaConstellations, Bennetts, BennettConstellations, Razors, RazorConstellations) ;
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
      updatescorepersecond(AmberConstellations, Ambers, Lisas, LisaConstellations, Kaeyas, KaeyaConstellations, Bennetts, BennettConstellations, Razors, RazorConstellations) ;
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
      updatescorepersecond(Ambers, AmberConstellations, Lisas, LisaConstellations, Kaeyas, KaeyaConstellations, Bennetts, BennettConstellations, Razors, RazorConstellations) ;
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
      updatescorepersecond(Ambers, AmberConstellations, Lisas, LisaConstellations, Kaeyas, KaeyaConstellations, Bennetts, BennettConstellations, Razors, RazorConstellations) ;
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
      updatescorepersecond(Ambers, AmberConstellations, Lisas, LisaConstellations, Kaeyas, KaeyaConstellations, Bennetts, BennettConstellations, Razors, RazorConstellations) ;
    }
  }

  var score = 0;
  var clickingPower = 1
  var Ambercost = 15;
  var Ambers = 0;
  var AmberConstellationcost = 100
  var AmberConstellations = 0
  var Lisacost = 100;
  var Lisas = 0;
  var LisaConstellationcost = 1000
  var LisaConstellations = 0
  var Kaeyacost = 1000;
  var Kaeyas = 0;
  var KaeyaConstellationcost = 10000
  var KaeyaConstellations = 0
  var Bennettcost = 10000;
  var Bennetts = 0;
  var BennettConstellationcost = 100000
  var BennettConstellations = 0
  var Razorcost = 50000;
  var Razors = 0;
  var RazorConstellationcost = 1000000
  var RazorConstellations = 0

  function updatescorepersecond(Ambers, AmberConstellations, Lisas, LisaConstellations, Kaeyas, KaeyaConstellations, Benetts, BennettConstellations, Razors, RazorConstellations) {
    scorepersecond = (Ambers * (AmberConstellations + 1)) + (Lisas * 5 * (LisaConstellations + 1)) + (Kaeyas * 20 * (KaeyaConstellations + 1)) + (Bennetts * 100 * (BennettConstellations + 1)) + (Razors * 250 * (RazorConstellations + 1));
    document.getElementById("scorepersecond").innerHTML = scorepersecond;
  }

  setInterval (function() {
    score = score + (Ambers * (AmberConstellations + 1));
    score = score + (Lisas * 5 * (LisaConstellations + 1));
    score = score + (Kaeyas * 20 * (KaeyaConstellations + 1));
    score = score + (Bennetts * 100 * (BennettConstellations + 1));
    score = score + (Razors * 250 * (RazorConstellations + 1));
    document.getElementById("score").innerHTML = score;

    document.title = score + "-primogems - Genshin clicker"
  }, 1000) ; //1000ms = 1 second
