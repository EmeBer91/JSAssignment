const readline = require('readline');

// Skapa ett gränssnitt för att läsa från terminalen
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funktion för att generera datorns val
function getComputerChoice() {
  const choices = ["sten", "sax", "påse"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Funktion för att bestämma vinnaren
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Det är oavgjort!";
  }

  if (
    (playerChoice === "sten" && computerChoice === "sax") ||
    (playerChoice === "sax" && computerChoice === "påse") ||
    (playerChoice === "påse" && computerChoice === "sten")
  ) {
    return "Grattis, du vann!";
  } else {
    return "Datorn vann!";
  }
}

// Huvudfunktion för att spela en runda
function playGame() {
  rl.question("Välj sten, sax eller påse: ", function(playerChoice) {
    playerChoice = playerChoice.toLowerCase(); // Gör valet skiftlägesokänsligt

    // Validera spelarens val
    if (!["sten", "sax", "påse"].includes(playerChoice)) {
      console.log("Ogiltigt val! Välj antingen 'sten', 'sax' eller 'påse'.");
      rl.close();
      return;
    }

    // Datorns val
    const computerChoice = getComputerChoice();
    console.log(`Datorn valde: ${computerChoice}`);

    // Bestäm vinnaren
    const result = determineWinner(playerChoice, computerChoice);
    console.log(result);

    rl.close();  // Avsluta readline-gränssnittet
  });
}

// Starta spelet
playGame();
