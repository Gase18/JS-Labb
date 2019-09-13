fetch("http://94.46.140.3:8080/teknikumMenu/api/menu")
	.then(response => response.json())
	.then(data => {
		for(let i = 0; i<data.meals.length; i++){
			const meal = data.meals[i];
			// console.log(meal.day);
			// console.log(meal.dish);
			// console.log(meal.alt_dish);

			let myNewMenuElement = document.createElement("li");
			let myDay = document.createElement("li");
			let myDish = document.createElement("li");
			let myAlt_dish = document.createElement("li");
			myDay.innerHTML = meal.day;
			myDish.innerHTML = meal.dish;
			myAlt_dish.innerHTML = meal.alt_dish;
			myNewMenuElement.innerHTML = "<br>" + myDay.innerHTML + ": " + "<br>" + myDish.innerHTML + "<br>" + myAlt_dish.innerHTML; 
			document.getElementById("menu").appendChild(myNewMenuElement);
			
		}
	})
		

