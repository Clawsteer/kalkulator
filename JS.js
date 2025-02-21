let rankS = [
    "Gawr Gura (Water-type, S-tier, Shark Bite special)",
    "Mori Calliope (Reaper-type, S-tier, Death special)",
    "Kobo Kanaeru (Storm-type, S-tier, Lightning special)"
  ];
  
  let rankA = [
    "Usada Pekora (Trickster-type, A-tier, Peko Bomb special)",
    "Moona Hoshinova (Space-type, A-tier, Gravity special)"
  ];
  
  let tier = prompt("Tier apa yang mau dipilih? (Ketik 'S' atau 'A')");

  if (tier !== null) {
    tier = tier.trim().toUpperCase();
  
    if (tier === "S") {
      alert("List Karakter Tier S:\n" + rankS.join("\n"));
    } else if (tier === "A") {
      alert("List Karakter Tier A:\n" + rankA.join("\n"));
    } else {
      alert("Tier yang dimasukkan tidak valid! Silakan pilih 'S' atau 'A'.");
    }
  } else {
    alert("Input dibatalkan.");
  }