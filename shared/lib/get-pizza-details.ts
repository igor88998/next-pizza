import { PizzaSize, PizzaType } from '../constants/pizza';

import { Ingredient, ProductVariation } from '@prisma/client';

import { formatPizzaDetails, calcTotalPizzaPrice } from '@/shared/lib';

export const getPizzaDetails = (
	type: PizzaType,
    size: PizzaSize, 
    variations: ProductVariation[], 
    ingredients: Ingredient[],
    selectedIngredients: Set<number>
) => {
    const totalPrice = calcTotalPizzaPrice(
        type,
        size,
        variations,
        ingredients,
        selectedIngredients
    )

    const textDetails = formatPizzaDetails(
        ingredients,
        size,
        type,
        selectedIngredients
    )

    return { totalPrice, textDetails }
}