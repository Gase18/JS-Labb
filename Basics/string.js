let greet = "Konnichiwa";
let person = {
	name: "Gabriel",
	hobby: "Gamer"
};

function myFakeAge(){
	return Math.random()*10 +20;
}

console.log(greet + " " + person.name);
console.log(`${greet} ${person.name}, age of ${myFakeAge()}`);