import React from 'react'
import { CheckoutItem, CheckoutItemSkeleton, Title, WhiteBlock } from '@/shared/components/shared';
import { getCartItemDetails } from '@/shared/lib';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { CartStateItem } from '@/shared/lib/get-cart-details';
import Link from 'next/link';
import { Button } from '@/shared/components/ui/';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

interface Props {
    items: CartStateItem[]
    loading?: boolean
    onClickCountButton: (id: number, quantity: number, type: "plus" | "minus") => void
    onClickRemove: (id: number) => void
    className?: string
}

export const CheckoutCart: React.FC<Props> = ({ items, loading, onClickCountButton, onClickRemove, className }) => {

    return (
        <WhiteBlock title='1. Cart' className={className}>
            <div className='flex flex-col gap-7'>

                {loading
                    ? [...Array(3)].map((_, index) => <CheckoutItemSkeleton key={index} />)
                    : items.length > 0
                        ? items.map((item) => (
                            <CheckoutItem
                                key={item.id}
                                id={item.id}
                                imageUrl={item.imageUrl}
                                details={getCartItemDetails(
                                    item.ingredients,
                                    item.pizzaType as PizzaType,
                                    item.pizzaSize as PizzaSize
                                )}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                                disabled={item.disabled}
                                onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                                onClickRemove={() => onClickRemove(item.id)}
                            />
                        ))
                        : (
                            <div className='flex flex-col items-center justify-center w-80 mx-auto'>
                                <Image src='/assets/box.png' alt='Empty cart' width={180} height={180} />
                                <Title size='sm' text='Cart is empty' className='text-center font-bold my-2' />
                                <p className='text-center text-neutral-500 mb-5'>
                                    Add at least one product to place an order
                                </p>

                                <Link href={'/'} >
                                    <Button className='w-56 h-12 text-base' size='lg'>
                                        <ArrowLeft className='w-5 mr-2' />
                                        Go back
                                    </Button>
                                </Link>
                            </div>
                        )
                }


            </div>
        </WhiteBlock>
    )
}
