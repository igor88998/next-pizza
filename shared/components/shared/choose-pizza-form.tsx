'use client'

import React from 'react'

import { cn } from '@/shared/lib/utils';

import { Title } from './title';
import { Button } from '../ui';

import { PizzaImage, GroupVariants, IngredientItem } from "@/shared/components/shared"
import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza';

import { Ingredient, ProductVariation } from '@prisma/client';

import { usePizzaOptions } from '@/shared/hooks';
import { getPizzaDetails } from '@/shared/lib/get-pizza-details';

interface Props {
    imageUrl?: string
    name: string
    className?: string
    ingredients: Ingredient[]
    variations: ProductVariation[]
    loading: boolean
    onSubmit: (itemId: number, ingredients: number[]) => void
}

export const ChoosePizzaForm: React.FC<Props> = ({ imageUrl, name, ingredients, variations, loading, onSubmit, className }) => {

    const { size, type, selectedIngredients, availableSizes, currentItemId, setSize, setType, addIngredient } = usePizzaOptions(variations)

    const { totalPrice, textDetails } = getPizzaDetails(type, size, variations, ingredients, selectedIngredients)

    const handleClickAdd = () => {
        if (currentItemId) {
            onSubmit(currentItemId, Array.from(selectedIngredients))
        }
    }

    return (
        <div className={cn(className, 'flex flex-1')}>
            <PizzaImage imageUrl={imageUrl} size={size} />

            <div className='w-[490px] bg-[#f9f9f9] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1' />

                <div className='bg-gray-50 h-12 overflow-auto scrollbar'>
                    <p className='text-gray-400'>{textDetails}</p>
                </div>

                <div className='flex flex-col gap-3 mt-5'>
                    <GroupVariants variants={availableSizes} value={String(size)} onClick={value => setSize(Number(value) as PizzaSize)} />
                    <GroupVariants variants={pizzaTypes} value={String(type)} onClick={value => setType(Number(value) as PizzaType)} />
                </div>

                <div className='bg-gray-50 p-2 rounded-md h-[270px] overflow-auto scrollbar mt-5'>
                    <div className='grid grid-cols-3 gap-3'>
                        {ingredients.map((ingredient) => (
                            <IngredientItem
                                key={ingredient.id}
                                name={ingredient.name}
                                price={ingredient.price}
                                imageUrl={ingredient.imageUrl}
                                onClick={() => addIngredient(ingredient.id)}
                                active={selectedIngredients.has(ingredient.id)}
                            />
                        ))}
                    </div>
                </div>

                <Button
                    loading={loading}
                    className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
                    onClick={handleClickAdd}
                >
                    Add to cart {totalPrice} $
                </Button>
            </div>
        </div>
    )
}
