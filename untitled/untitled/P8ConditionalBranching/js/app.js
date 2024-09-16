const birthYear = 2000;
const currentYear = 2024;
let age = currentYear - birthYear;

let isChild = age <= 10;
let isTeenager = age >= 11 && age <= 17;
let isAdult = age >= 18;

console.log(`You are a child: ${isChild}`);
console.log(`You are a teenager: ${isTeenager}`);
console.log(`You are an adult: ${isAdult}`);


let playerTouchGround = false;
let playerHasJetpack = true;

if (playerTouchGround) {
  console.log("Player is on the ground.");
  console.log("Player can jump.");
} else if (playerHasJetpack) {
  //Runs when playerHasJetPack
  console.log("Player can Jet Away");

} else {
  //Runs when PlayerTouchGround = false && PlayerHasJetpack
  console.log("Player is not touching the ground.");
  console.log("Player has no jetpack.");
  console.log("You cannot jump right now.");
}


