'use client'

import React from 'react'
import { useIntersection } from 'react-use';

import { ProductCard, Title } from '@/shared/components/shared';

import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
    title: string;
    variations: ProductWithRelations[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ title, variations, categoryId, className, listClassName }) => {

    const setACategoryActiveId = useCategoryStore(state => state.setActiveId)
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    })

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setACategoryActiveId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, setACategoryActiveId])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {variations.map((item) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        price={item.variations[0].price}
                        ingredients={item.ingredients}
                    />
                ))}
            </div>
        </div>
    )
}
