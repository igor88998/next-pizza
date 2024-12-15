import { Ingredient } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";

export const formatPizzaDetails = (
    ingredients: Ingredient[],
    size: PizzaSize, 
	type: PizzaType,
    selectedIngredients: Set<number>
) => {
	const selectedIngredientsNames = ingredients
		.filter((ingredient) => selectedIngredients.has(ingredient.id))
		.map((ingredient) => ingredient.name)
		.join(', ');

	return `${size}cm, ${mapPizzaType[type]} dough${
		selectedIngredients.size > 0 ? `, ingredients: ${selectedIngredientsNames}` : ''
	}`;
};
