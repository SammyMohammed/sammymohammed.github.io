// let name = "Sammy";
// alert("Hello, " + name + "!");
// let age = 15;
// console.log("You are " + age + " years old!");
// if (age >= 18) {
//   console.log("Woohoo, you can get your driver's permit and vote!");
// } else if (age >= 16) {
//   console.log("You can drive!")
// } else {
//   console.log("Sorry, you cannot drive or vote.")
// }


// THIS IS THE STUFF THAT ALLOWS ME TO DO THE FAMILY ALARM CLOCK BOYS


// function family_Alarm(time, name) {
//   if (!isNaN(time)) {
//     return "Hey, " + name + ", time to wake up! It's " + time + "!";
// } else {
//     return "Not a number.";
//   }
// }
// function importantAlarm(message) {
//   return message.toUpperCase();
// }
// function snoozeAlarm(snooze, time) {
//   if (isNaN(snooze) || isNaN(time)) {
//     return "Not a number";
//   } else {
//     let temp = snooze + time;
//     return "The alarm for " + time + " has been changed to " + temp + ".";
//   }
// }
let button = document.querySelector("#button");

function lovelies(name1, name2){
  console.log("Running");
  let temp = name1 + name2;
  let level = 0;
  for (let i = 0; i < temp.length-1; i++) {
    if (temp.substring(i, i+1) == "a")
      level += 6;
    if (temp.substring(i, i+1) == "b")
    level += 7;
    if (temp.substring(i, i+1) == "c")
    level += 2;
    if (temp.substring(i, i+1) == "d")
    level += 8;
    if (temp.substring(i, i+1) == "e")
    level += 2;
    if (temp.substring(i, i+1) == "f")
    level += 6;
    if (temp.substring(i, i+1) == "g")
    level += 2;
    if (temp.substring(i, i+1) == "h")
    level += 0;
    if (temp.substring(i, i+1) == "i")
    level += 1;
    if (temp.substring(i, i+1) == "j")
    level += 6;
    if (temp.substring(i, i+1) == "k")
    level += 4;
    if (temp.substring(i, i+1) == "l")
    level += 2;
    if (temp.substring(i, i+1) == "m")
    level += 10;
    if (temp.substring(i, i+1) == "n")
    level += 2;
    if (temp.substring(i, i+1) == "o")
    level += 3;
    if (temp.substring(i, i+1) == "p")
    level += 6;

  }
  if (level > 100) {
    return 100;
  } else {
    return level;
  }
}

button.addEventListener('click', function(name1, name2) {
     console.log("Running");
     name1 = document.querySelector("#person1").value;
     name2 = document.querySelector("#person2").value;
  let temp = name1 + name2;
  let level = 0;
  if (temp.toLowerCase() == "kanye westkanyewest" || "kanyekanye" == temp.toLowerCase() || name1.toLowerCase() == name2.toLowerCase()) {
    level = 100;
  }
  console.log(temp);
  console.log("Step1 done");
  if (temp.length > 15) {
    temp = temp.substring(0, 15);
  }
  for (let i = 0; i < temp.length; i++) {
    console.log(i + " and level is at: " + level + " and names are " + name1 + name2);
    if (temp.substring(i, i+1) == "a")
      level += 6;
    if (temp.substring(i, i+1) == "b")
    level += 7;
    if (temp.substring(i, i+1) == "c")
    level += 3;
    if (temp.substring(i, i+1) == "d")
    level += 8;
    if (temp.substring(i, i+1) == "e")
    level += 7;
    if (temp.substring(i, i+1) == "f")
    level += 6;
    if (temp.substring(i, i+1) == "g")
    level += 3;
    if (temp.substring(i, i+1) == "h")
    level += 3;
    if (temp.substring(i, i+1) == "i")
    level += 8;
    if (temp.substring(i, i+1) == "j")
    level += 6;
    if (temp.substring(i, i+1) == "k")
    level += 4;
    if (temp.substring(i, i+1) == "l")
    level += 2;
    if (temp.substring(i, i+1) == "m")
    level += 10;
    if (temp.substring(i, i+1) == "n")
    level += 7;
    if (temp.substring(i, i+1) == "o")
    level += 3;
    if (temp.substring(i, i+1) == "p")
    level += 6;
    if (temp.substring(i, i+1) == "q")
    level += 9;
    if (temp.substring(i, i+1) == "r")
    level += 6;
    if (temp.substring(i, i+1) == "s")
    level += 8;
    if (temp.substring(i, i+1) == "t")
    level += 9;
    if (temp.substring(i, i+1) == "u")
    level += 6;
    if (temp.substring(i, i+1) == "v")
    level += 13;
    if (temp.substring(i, i+1) == "w")
    level += 3;


  }
  if (name1.toLowerCase() == "hitomi" || name2.toLowerCase() == "hitomi" ||
name1.toLowerCase() == "hitomi torng" || name2.toLowerCase() == "hitomi torng"
|| name1.toLowerCase() == "tong torng" || name2.toLowerCase() == "tong torng" ) {
  document.querySelector("#score").innerHTML = "Compatibility of 0%. :) Get pranked."
} else  if (level > 100) {
    document.querySelector("#score").innerHTML = "Compatibility of 100%"
  } else {
    document.querySelector("#score").innerHTML = ("Compatibility of " + level + "%" );
  }
  return level;

})
