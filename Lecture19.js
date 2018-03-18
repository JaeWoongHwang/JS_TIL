var count = 0;

while(true){
  var asw = "null";
  asw = parseInt(prompt("Question1. 1+1 = ?"));
  if(asw !=2){
    console.log("You failed" + (++count) + "times. Try again bro");
    continue;
  }
  asw = parseInt(prompt("Question2. 2+3 = ?"));
  if(asw !=5){
    console.log("You failed" + (++count) + "times. Try again bro");
    continue;
  }
  asw = parseInt(prompt("Question3. 7+9 = ?"));
  if(asw != 16){
    console.log("You failed" + (++count) + "times. Try again bro");
    continue;
  }
  break;
}
console.log("Great result bro");
