const cityNyc = "NYC";

let ride;

function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return "This one is on me!";
  }
  else if (2000 < ride && ride <= 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  return city === cityNyc ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  switch (true){
    case tip === "generous":
      return "Thank you so much.";
      break;
    case tip === "not as generous":
      return "Thank you.";
      break;
    case tip === "thanks for everything":
      return "Bye.";
      break;
  }
}