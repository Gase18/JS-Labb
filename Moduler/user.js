

export function hello(){
	console.log("Hello World")
}

hello();

export class User{
	constructor (name) {
		this.name = name;
	} 
	greet(){
		console.log(`hello ${this.name}`);
	}
}