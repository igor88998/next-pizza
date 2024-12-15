'use client'

import React from "react";

import { CheckoutSidebar, Container, Title } from "@/shared/components/shared";
import { useCart } from "@/shared/hooks";

import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutCart, CheckoutDelivery, CheckoutPersonalInfo } from "@/shared/components/shared/checkout";
import { checkoutFormSchema, CheckoutFormValues } from "@/shared/constants/checkout-form-schema";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { Api } from "@/shared/services/api-client";

export default function Checkout() {
    const [submitting, setSubmitting] = React.useState(false)
    const { totalAmount, items, disabled, loading, updateItemQuantity, removeCartItem } = useCart()

    const { data: session } = useSession()


    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            comment: ''
        },
    })

    React.useEffect(() => {
        async function fetchUserInfo() {
            const data = await Api.auth.getMe()
            const [firstName, lastName] = data.fullName.split(' ')

            form.setValue('firstName', firstName)
            form.setValue('lastName', lastName)
            form.setValue('email', data.email)
        }

        if (session) {
            fetchUserInfo()
        }
    }, [session, form])

    const onSubmit = async (data: CheckoutFormValues) => {
        try {
            setSubmitting(true)
            const url = await createOrder(data)

            toast.success('The order has been successfully placed. Redirecting to payment....', {
                icon: '✅'
            })

            if (url) {
                location.href = url
            }

        } catch (err) {
            console.log(err)
            setSubmitting(false)
            toast.error('Failed to create order', {
                icon: '❌',
            })
        } 
    }

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
        updateItemQuantity(id, newQuantity)
    }

    const onClickRemove = (id: number) => {
        removeCartItem(id)
    }

    return (
        <Container className='mt-10'>
            <Title text='Placing an order' className='font-extrabold mb-8 text-[36px]' />

            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='flex gap-10'>
                        <div className='flex flex-col gap-10 flex-1 mb-20'>
                            <CheckoutCart items={items} loading={loading} onClickCountButton={onClickCountButton} onClickRemove={onClickRemove} />

                            <CheckoutPersonalInfo className={loading ? 'opacity-50 pointer-events-none' : ''} />

                            <CheckoutDelivery className={loading ? 'opacity-50 pointer-events-none' : ''} />
                        </div>

                        <div className='w-[450px]'>
                            <CheckoutSidebar disabled={disabled || items.length <= 0} totalAmount={totalAmount} loading={loading || submitting} />
                        </div>
                    </div>
                </form>
            </FormProvider>
        </Container>
    )
}