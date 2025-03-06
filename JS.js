let listTier = [
  "Tier S",
  "Tier A"
];

// tier
let rankS = [
  "Gawr Gura",
  "Mori Calliope",
  "Kobo Kanaeru"
];

let rankA = [
  "Usada Pekora",
  "Moona Hoshinova"
];

// power
let power = [
  "Kobo Kanaeru (91)",
  "Moona Hoshinova (88)",
  "Gawr Gura (86)",
  "Mori Calliope (81)",
  "Usada Pekora (79)"
];

// character
let character = [
  "Gawr Gura",
  "Mori Calliope",
  "Kobo Kanaeru",
  "Usada Pekora",
  "Moona Hoshinova"
];

let pilihan = prompt("Pilih? (Tier, Power, Name)");

if (pilihan !== null) {
  pilihan = pilihan.toLowerCase();
  
  if (pilihan === "tier") {
      let tier = prompt("Pilih tier (Ketik 'S' atau 'A')");
      if (tier !== null) {
          tier = tier.toUpperCase();
          if (tier === "S") {
              alert("List Character Tier S:\n" + rankS.join("\n"));
          } else if (tier === "A") {
              alert("List Character Tier A:\n" + rankA.join("\n"));
          } else {
              alert("Cuma Ada 'S' Atau 'A' Pilih.");
          }
      } else {
          alert("Golput.");
      }
  } else if (pilihan === "power") {
      alert("List Power Character:\n" + power.join("\n"));
  } else if (pilihan === "name") {
      alert("List Nama Character:\n" + character.join("\n"));
  } else {
      alert("Cuma Ada 'Tier', 'Power', atau 'Name'.");
  }
} else {
  alert("Golput.");
}
