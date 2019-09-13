fetch("https://jsonplaceholder.typicode.com/users")
	.then(response => response.json())
	.then(data => {
		let users = "";
		for(let userIndex = 0; userIndex < data.length; ++userIndex){
			const user = data[userIndex];

			let myNewUSerElement = document.createElement("li");
			myNewUSerElement.innerHTML = user.name;
			document.getElementById("users").appendChild(myNewUSerElement);

			// users += user.name + ", ";
			// console.log(users);
		}
		// document.body.innerHTML = users;
	})
		

