
export function veckomeny(meal){
	
			// const meal = data.meals[i];
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