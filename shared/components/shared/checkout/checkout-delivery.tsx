'use client'

import React from 'react'
import { AddressInput, ErrorText, FormTextarea, WhiteBlock } from '@/shared/components/shared';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
    className?: string
}

export const CheckoutDelivery: React.FC<Props> = ({ className }) => {

    const { control } = useFormContext()

    return (
        <WhiteBlock title='3. Delivery address' className={className}>
            <div className='flex flex-col gap-5'>
                {/* <Input name='firstName' className='text-base' placeholder='Enter address' /> */}

                <Controller
                    control={control}
                    name='address'
                    render={({ field, fieldState }) =>
                        <>
                            <AddressInput onChange={field.onChange} />
                            {fieldState.error?.message && <ErrorText text={fieldState.error.message} />}
                        </>
                    }
                />

                <FormTextarea name='comment' rows={5} className='text-base' placeholder='Comment to order' />
            </div>
        </WhiteBlock>
    )
}
