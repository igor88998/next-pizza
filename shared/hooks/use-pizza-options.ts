import React from 'react';

import { PizzaType, PizzaSize } from '@/shared/constants/pizza';

import { useSet } from 'react-use';
import { ProductVariation } from '@prisma/client';
import { getAvailablePizzaSizes } from '@/shared/lib';
import { Variant } from '../components/shared/group-variants';

interface ReturnProps {
	size: PizzaSize;
	type: PizzaType;
	selectedIngredients: Set<number>
	availableSizes: Variant[]
	currentItemId?: number
	setSize: (size: PizzaSize) => void;
	setType: (type: PizzaType) => void;
	addIngredient: (id: number) => void
}

export const usePizzaOptions = (variations: ProductVariation[]): ReturnProps => {
	const [size, setSize] = React.useState<PizzaSize>(20);
	const [type, setType] = React.useState<PizzaType>(1);

    const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]))

    const availableSizes = getAvailablePizzaSizes(type, variations)

	const currentItemId = variations.find((variation) => variation.pizzaType === type && variation.size === size)?.id

	React.useEffect(() => {
		const isAvailableSize = availableSizes?.find((item) => Number(item.value) === size && !item.disabled);
		const availableSize = availableSizes?.find((item) => !item.disabled);

		if (!isAvailableSize && availableSize) {
			setSize(Number(availableSize.value) as PizzaSize);
		}
	}, [type]);

    return {
        size,
        type,
		selectedIngredients,
		availableSizes,
		currentItemId,
        setSize,
        setType,
		addIngredient,
    }
};
