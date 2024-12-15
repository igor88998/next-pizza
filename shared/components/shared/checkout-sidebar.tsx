import React from 'react'

import { CheckoutItemsDetails, WhiteBlock } from '@/shared/components/shared';
import { ArrowRight, Package, Truck } from 'lucide-react';
import { Button, Skeleton } from '@/shared/components/ui/';
import { cn } from '@/shared/lib/utils';

interface Props {
    totalAmount: number
    loading?: boolean
    disabled?: boolean
    className?: string
}

const DELIVERY_PRICE = 7

export const CheckoutSidebar: React.FC<Props> = ({ totalAmount, disabled, loading, className }) => {

    const totalPrice = totalAmount + DELIVERY_PRICE

    return (
        <WhiteBlock className={cn('p-6 sticky top-4', className)}>
        <div className='flex flex-col gap-1'>
            <span className='text-xl'>Total:</span>
            {loading ? <Skeleton className='w-48 h-[51px]' /> : <span className='text-[34px] font-extrabold'>{totalPrice} $</span>}
        </div>

        <CheckoutItemsDetails
            title={
                <div className='flex items-center'>
                    <Package size={18} className='mr-2 text-gray-400' />
                    Products price:
                </div>
            }
            value={loading ? <Skeleton className='w-14 h-6' /> : `${totalAmount} $`}
        />
        <CheckoutItemsDetails
            title={
                <div className='flex items-center'>
                    <Truck size={18} className='mr-2 text-gray-400' />
                    Delivery:
                </div>
            }
            value={loading ? <Skeleton className='w-10 h-6' /> : `${DELIVERY_PRICE} $`}
        />

        <Button
            type='submit'
            loading={loading}
            disabled={disabled}
            className='w-full h-14 rounded-2xl mt-6 text-base font-bold'
        >
            Proceed to payment
            <ArrowRight className='w-5 ml-2' />
        </Button>

    </WhiteBlock>
    )
}
