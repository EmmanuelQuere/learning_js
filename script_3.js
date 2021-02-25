console.log("Hello, bienvenue dans ma super pyramide, combien d'étages veux-tu ?");

let stairs = prompt("Combien d'étages ?");
let space = " ";
let star = "*";
let turn = 0;

while(stairs > 0) {
  stairs--;
  turn++;
  console.log(space.repeat(stairs) + star.repeat(turn));
}

