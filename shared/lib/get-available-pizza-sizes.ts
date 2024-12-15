import { ProductVariation } from "@prisma/client"
import { pizzaSizes, PizzaType } from '@/shared/constants/pizza';
import { Variant } from "../components/shared/group-variants";

export const getAvailablePizzaSizes = (type: PizzaType, variations: ProductVariation[]): Variant[] => {
    const filteredPizzasByType = variations.filter((variation) => variation.pizzaType === type)

    return pizzaSizes.map((item) => ({
        name: item.name,
        value: item.value,
        disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value))
    }))
}