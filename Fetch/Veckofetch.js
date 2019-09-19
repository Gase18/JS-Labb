import {veckomeny} from "./VF2.js"

fetch("http://94.46.140.3:8080/teknikumMenu/api/menu")
	.then(response => response.json())
	.then(data => {
			for(let i = 0; i<data.meals.length; i++){
				const meal = data.meals[i];		
				veckomeny(meal);
		}
	})
		


