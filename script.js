function addToScore(amount) {
  score = score + amount;
}

function checkForStorage(thingtocheck, normal, name) {
  if (thingtocheck) {
    console.log(thingtocheck);
    return Number(localStorage.getItem(name));
  } else {
    return normal;
  }
}

function changePriceColor(price, priceID) {
  if (score < price) {
    document.getElementById(priceID).style.color = "red";
  } else {
    document.getElementById(priceID).style.color = "black";
  }
}

  function buyAmber() {
    if (score >= Ambercost) {
      score -= Ambercost;
      Ambers += 1;
      Ambercost = Math.round(Ambercost * 1.25) ;
    }
  }

  function buyAmberConstellation() {
    if (score >= AmberConstellationcost) {
      score -= AmberConstellationcost;
      AmberConstellations += 1;
      AmberConstellationcost = Math.round(AmberConstellationcost * 10) ;
    }
  }

  function buyAmberfabricator() {
    if (score >= Amberfabricatorcost) {
      score = score - Amberfabricatorcost;
      Amberfabricators = Amberfabricators + 1;
      Amberfabricatorcost = Math.round(Amberfabricatorcost * 1.25) ;
    }
  }

  function buyLisa() {
    if (score >= Lisacost) {
      score = score - Lisacost;
      Lisas = Lisas + 1;
      Lisacost = Math.round(Lisacost * 1.25) ;
    }
  }

  function buyLisaConstellation() {
    if (score >= LisaConstellationcost) {
      score -= LisaConstellationcost;
      LisaConstellations += 1;
      LisaConstellationcost = Math.round(LisaConstellationcost * 10) ;
    }
  }

  function buyKaeya() {
    if (score >= Kaeyacost) {
      score -= Kaeyacost;
      Kaeyas += 1;
      Kaeyacost = Math.round(Kaeyacost * 1.25) ;
    }
  }

  function buyKaeyaConstellation() {
    if (score >= KaeyaConstellationcost) {
      score -= KaeyaConstellationcost;
      KaeyaConstellations += 1;
      KaeyaConstellationcost = Math.round(KaeyaConstellationcost * 10) ;
    }
  }

  function buyBennett() {
    if (score >= Bennettcost) {
      score -= Bennettcost;
      Bennetts += 1;
      Bennettcost = Math.round(Bennettcost * 1.25);
    }
  }

  function buyBennettConstellation() {
    if (score >= BennettConstellationcost) {
      score -= BennettConstellationcost;
      BennettConstellations += 1;
      BennettConstellationcost = Math.round(BennettConstellationcost * 10) ;
    }
  }

  function buyRazor() {
    if (score >= Razorcost) {
      score -= Razorcost;
      Razors += 1;
      Razorcost = Math.round(Razorcost * 1.25) ;
    }
  }

  function buyRazorConstellation() {
    if (score >= RazorConstellationcost) {
      score -= RazorConstellationcost;
      RazorConstellations += 1;
      RazorConstellationcost = Math.round(RazorConstellationcost * 10) ;
    }
  }

  function buyDiona() {
    if (score >= Dionacost) {
      score -= Dionacost;
      Dionas += 1;
      Dionacost = Math.round(Dionacost * 1.25) ;
    }
  }

  function buyDionaConstellation() {
    if (score >= DionaConstellationcost) {
      score -= DionaConstellationcost;
      DionaConstellations += 1;
      DionaConstellationcost = Math.round(DionaConstellationcost * 1.25) ;
    }
  }

  function updateSavedData(){
    localStorage.setItem("primogems", score);
    localStorage.setItem("Ambercost", Ambercost);
    localStorage.setItem("Ambers", Ambers);
    localStorage.setItem("AmberConstellationcost", AmberConstellationcost);
    localStorage.setItem("AmberConstellations", AmberConstellations);
    localStorage.setItem("Amberfabricatorcost", Amberfabricatorcost);
    localStorage.setItem("Amberfabricators", Amberfabricators);
    localStorage.setItem("Lisacost", Lisacost);
    localStorage.setItem("Lisas", Lisas);
    localStorage.setItem("LisaConstellationcost", LisaConstellationcost);
    localStorage.setItem("LisaConstellations", LisaConstellations);
    localStorage.setItem("Kaeyacost", Kaeyacost);
    localStorage.setItem("Kaeyas", Kaeyas);
    localStorage.setItem("KaeyaConstellationcost", KaeyaConstellationcost);
    localStorage.setItem("KaeyaConstellations", KaeyaConstellations);
    localStorage.setItem("Bennettcost", Bennettcost);
    localStorage.setItem("Bennetts", Bennetts);
    localStorage.setItem("BennettConstellationcost", BennettConstellationcost);
    localStorage.setItem("BennettConstellations", BennettConstellations);
    localStorage.setItem("Razorcost", Razorcost);
    localStorage.setItem("Razors", Razors);
    localStorage.setItem("RazorConstellationcost", RazorConstellationcost);
    localStorage.setItem("RazorConstellations", RazorConstellations);
    localStorage.setItem("Dionacost", Dionacost);
    localStorage.setItem("Dionas", Dionas);
    localStorage.setItem("DionaConstellationcost", DionaConstellationcost);
    localStorage.setItem("DionaConstellations", DionaConstellations);
  }
    var clickingPower = 1;
    var score = checkForStorage(localStorage.primogems, 0, "primogems");
    var Ambercost = checkForStorage(localStorage.Ambercost, 15, "Ambercost");
    var Ambers = checkForStorage(localStorage.Ambers, 0, "Ambers");
    var AmberConstellationcost = checkForStorage(localStorage.AmberConstellationcost, 100, "AmberConstellationcost");
    var AmberConstellations = checkForStorage(localStorage.AmberConstellations, 0, "AmberConstellations");
    var Amberfabricatorcost = checkForStorage(localStorage.Amberfabricatorcost, 100000, "Amberfabricatorcost");
    var Amberfabricators = checkForStorage(localStorage.Amberfabricators, 0, "Amberfabricators");
    var Lisacost = checkForStorage(localStorage.Lisacost, 100, "Lisacost");
    var Lisas = checkForStorage(localStorage.Lisas, 0, "Lisas");
    var LisaConstellationcost = checkForStorage(localStorage.LisaConstellationcost, 1000, "LisaConstellationcost");
    var LisaConstellations = checkForStorage(localStorage.LisaConstellations, 0, "LisaConstellations");
    var Kaeyacost = checkForStorage(localStorage.Kaeyacost, 1000, "Kaeyacost");
    var Kaeyas = checkForStorage(localStorage.Kaeyas, 0, "Kaeyas");
    var KaeyaConstellationcost = checkForStorage(localStorage.KaeyaConstellationcost, 10000, "KaeyaConstellationcost");
    var KaeyaConstellations = checkForStorage(localStorage.KaeyaConstellations, 0, "KaeyaConstellations");
    var Bennettcost = checkForStorage(localStorage.Bennettcost, 10000, "Bennettcost");
    var Bennetts = checkForStorage(localStorage.Bennetts, 0, "Bennetts");
    var BennettConstellationcost = checkForStorage(localStorage.BennettConstellationcost, 100000, "BennettConstellationcost");
    var BennettConstellations = checkForStorage(localStorage.BennettConstellations, 0, "BennettConstellations");
    var Razorcost = checkForStorage(localStorage.Razorcost, 50000, "Razorcost");
    var Razors = checkForStorage(localStorage.Razors, 0, "Razors");
    var RazorConstellationcost = checkForStorage(localStorage.RazorConstellationcost, 1000000, "RazorConstellationcost");
    var RazorConstellations = checkForStorage(localStorage.RazorConstellations, 0, "RazorConstellations");
    var Dionacost = checkForStorage(localStorage.Dionacost, 500000, "Dionacost");
    var Dionas = checkForStorage(localStorage.Razors, 0, "Dionas");
    var DionaConstellationcost = checkForStorage(localStorage.DionaConstellationcost, 10000000, "DionaConstellationcost");
    var DionaConstellations = checkForStorage(localStorage.DionaConstellations, 0, "DionaConstellations")

function ResetProgress() {
  localStorage.setItem("primogems", 0);
  localStorage.setItem("Ambercost", 15);
  localStorage.setItem("Ambers", 0);
  localStorage.setItem("AmberConstellationcost", 100);
  localStorage.setItem("AmberConstellations", 0);
  localStorage.setItem("Amberfabricatorcost", 100000);
  localStorage.setItem("Amberfabricators", 0);
  localStorage.setItem("Lisacost", 100);
  localStorage.setItem("Lisas", 0);
  localStorage.setItem("LisaConstellationcost", 1000);
  localStorage.setItem("LisaConstellations", 0);
  localStorage.setItem("Kaeyacost", 1000);
  localStorage.setItem("Kaeyas", 0);
  localStorage.setItem("KaeyaConstellationcost", 10000);
  localStorage.setItem("KaeyaConstellations", 0);
  localStorage.setItem("Bennettcost", 10000);
  localStorage.setItem("Bennetts", 0);
  localStorage.setItem("BennettConstellationcost", 100000);
  localStorage.setItem("BennettConstellations", 0);
  localStorage.setItem("Razorcost", 50000);
  localStorage.setItem("Razors", 0);
  localStorage.setItem("RazorConstellationcost", 1000000);
  localStorage.setItem("RazorConstellations", 0);
  localStorage.setItem("Dionacost", 500000);
  localStorage.setItem("Dionas", 0);
  localStorage.setItem("DionaConstellationcost", 10000000);
  localStorage.setItem("DionaConstellations", 0);
  window.location.reload(true);
}

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
    changePriceColor(Dionacost, "Dionacost");
    changePriceColor(DionaConstellationcost, "DionaConstellationcost");
  }, 100); //100ms = 0.1 second

  setInterval (function updatescorepersecond() {
      scorepersecond = (Ambers * (AmberConstellations + 1)) +
      (Lisas * 5 * (LisaConstellations + 1)) +
      (Kaeyas * 20 * (KaeyaConstellations + 1)) +
      (Bennetts * 100 * (BennettConstellations + 1)) +
      (Razors * 300 * (RazorConstellations + 1)) +
      (Dionas * 1600 * (DionaConstellations + 1));

      document.getElementById("scorepersecond").innerHTML = scorepersecond;
      document.getElementById("score").innerHTML = score;
      document.getElementById("Ambercost").innerHTML = Ambercost;
      document.getElementById("Ambers").innerHTML = Ambers;
      document.getElementById("AmberConstellationcost").innerHTML = AmberConstellationcost;
      document.getElementById("AmberConstellations").innerHTML = AmberConstellations;
      document.getElementById("Amberfabricatorcost").innerHTML = Amberfabricatorcost;
      document.getElementById("Amberfabricators").innerHTML = Amberfabricators;
      document.getElementById("Lisacost").innerHTML = Lisacost;
      document.getElementById("Lisas").innerHTML = Lisas;
      document.getElementById("LisaConstellationcost").innerHTML = LisaConstellationcost;
      document.getElementById("LisaConstellations").innerHTML = LisaConstellations;
      document.getElementById("Kaeyacost").innerHTML = Kaeyacost;
      document.getElementById("Kaeyas").innerHTML = Kaeyas;
      document.getElementById("KaeyaConstellationcost").innerHTML = KaeyaConstellationcost;
      document.getElementById("KaeyaConstellations").innerHTML = KaeyaConstellations;
      document.getElementById("Bennettcost").innerHTML = Bennettcost;
      document.getElementById("Bennetts").innerHTML = Bennetts;
      document.getElementById("BennettConstellationcost").innerHTML = BennettConstellationcost;
      document.getElementById("BennettConstellations").innerHTML = BennettConstellations;
      document.getElementById("Razorcost").innerHTML = Razorcost;
      document.getElementById("Razors").innerHTML = Razors;
      document.getElementById("RazorConstellationcost").innerHTML = RazorConstellationcost;
      document.getElementById("RazorConstellations").innerHTML = RazorConstellations;
      document.getElementById("Dionacost").innerHTML = Dionacost;
      document.getElementById("Dionas").innerHTML = Dionas;
      document.getElementById("DionaConstellationcost").innerHTML = DionaConstellationcost;
      document.getElementById("DionaConstellations").innerHTML = DionaConstellations;
      document.title = score + "-primogems - Genshin clicker";
  }, 100) ; //100ms = 0.1 second

  setInterval (function() {
    score = score + (Ambers * (AmberConstellations + 1));
    score = score + (Lisas * 5 * (LisaConstellations + 1));
  }, 1000) ; //1000ms = 1 second

  setInterval (function() {
    score = score + (0.1 * Kaeyas * 20 * (KaeyaConstellations + 1));
  }, 100) ; //100ms = 0.1 second
  setInterval (function() {
    score = score + (0.01 * Bennetts * 100 * (BennettConstellations + 1));
    score = score + (0.01 * Razors * 300 * (RazorConstellations + 1));
    score = score + (0.01 * Dionas * 1600 * (DionaConstellations + 1));
  }, 10) ; //10ms = 0.01 second

  setInterval (function() {
    Ambers = Ambers + Amberfabricators;
  }, 1000) ; //1000ms = 1 second

  setInterval (function() {
    updateSavedData();
  }, 300000); //300000ms = 5 minutes
