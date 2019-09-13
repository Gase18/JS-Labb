//skriv om med arrow syntax, 
//använd kortformer där det är möjligt

const add = (a,b) =>{
  return a+b;
}

 let double(value) =>{
  return value*2;
}

let greet = (name, isDoctor) =>{
  if(isDoctor)
    return `Hello Dr ${name}`;
  else
    return `Hello name`;
}

const shout = (message) =>{
  return message.toUpperCase();
}

let curse = () => {
  const randomNumber = Math.random()*4;
  if(randomNumber < 1)
    return "Järnspikar";
  if(randomNumber < 2)
    return "Helvete!";
  else if(randomNumber < 3)
    return "Satans jävlar!"
  else
    return "#!?@¡#@?!!!!"
}

 let rollDice = (sides) =>{
  return 1+Math.floor(Math.random()*sides);
}
let d20 = () =>{
  return rollDice(20);
}