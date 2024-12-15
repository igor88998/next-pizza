import React from 'react'
import { cn } from '@/shared/lib/utils';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
    imageUrl?: string
    name: string
    price: number
    className?: string
    loading?: boolean
    onSubmit?: VoidFunction
}


export const ChooseProductForm: React.FC<Props> = ({ imageUrl, name, price, loading, onSubmit, className }) => {

    return (
        <div className={cn(className, 'flex flex-1')}>
            <div className='flex items-center justify-center flex-1 relative w-full'>
                <img 
                    src={imageUrl}
                    alt={name}
                    className='relative transition-all z-10 duration-300 w-[350px] h-[350px] object-cover'
                />
            </div>

            <div className='w-[490px] bg-[#F7F6F5] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1' />

                <Button
                    loading={loading}
                    onClick={() => onSubmit?.()}
                    className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
                >
                    Add to cart {price}$
                </Button>
            </div>
        </div>
    )
}
