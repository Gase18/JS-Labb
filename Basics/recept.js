let myRecipe = {
	title: "Ramen",
	rating: 4.5,
	servings: 4, 
	ingredients: [
	{
		name: "eggs",
		amount: 2,
	},
	{
		name:"nudels",
		amount: "100g",
	},
	{
		name:"ginger",
		amount:"2msk"
	},
	{
		name:"garlic",
		amount:2,
	},
	{
		name:"chicken broth",
		amount:"1L",
	},
	{
		name:"star anise",
		amount:2,
	},
	{
		name:"red chili pepper",
		amount:1,
	},
	{
		name:"raw sugar",
		amount:"2tsk",
	},
	{
		name:"pork",
		amount:"300g",
	},
	{
		name:"bean sprouts",
		amount:"150g",
	},
	{
		name:"baby spinach",
		amount:"200g",
	},
	{
		name:"rice vineger",
		amount:"2msk",
	},
	{
		name:"dark tamarisoya",
		amount:"4msk",
	},
	{
		name:"scallions",
		amount:4
	}

	],
	steps: [
		"Lägg äggen i kokande vatten, koka i 7 minuter och låt dem svalna tills de går att skala. Äggen ska inte bli kalla.",

		"Tillaga nudlarna enligt anvisningen på förpackningen, häll av vattnet och skölj dem kallt.",

		"Hacka ingefäran och vitlöksklyftorna fint.",

		"Koka upp buljongen med ingefära, vitlök, stjärnanis, piri piri och råsocker.",

		"Skiva under tiden fläsket i tunna skivor och stek i en stekpanna på medelstark värme tills fläsket är knaprigt. Skär sedan varje skiva i två delar.",

		"Fördela nudlar, en ägghalva, böngroddar och spenat i djupa portions skålar.",

		"Blanda i risvinäger och soja i buljongen och fördela den i varje skål.",

		"Toppa varje skål med fläsk och fint skivad salladslök. Servera genast!"
		]

}

console.log(myRecipe.title);
console.log(myRecipe.ingredients);
console.log("Betyg" + " " + myRecipe.rating + "/5" );


	for(let i = 0; i < myRecipe.ingredients.length; i++){
		console.log(myRecipe.ingredients[i]);
	}
	for(let i = 0; i < myRecipe.steps.length; i++){
		console.log(myRecipe.steps[i]);
	}