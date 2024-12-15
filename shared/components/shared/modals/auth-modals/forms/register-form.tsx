'use client'

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Title } from '../../../title'
import { FormInput } from '../../../form'
import { Button } from '@/shared/components/ui'
import toast from 'react-hot-toast'
import { formRegisterSchema, TFormRegisterValues } from './schemas'
import { registerUser } from '@/app/actions'

interface Props {
    onClose?: VoidFunction
}

export const RegisterForm: React.FC<Props> = ({ onClose }) => {

    const form = useForm<TFormRegisterValues>({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            email: '',
            fullName: '',
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = async (data: TFormRegisterValues) => {
        try {
            await registerUser({
                email: data.email,
                fullName: data.fullName,
                password: data.password
            })

            toast.success('You have successfully registered! Confirm your email', {
                icon: '✅'
            })

            onClose?.()
        } catch (error) {
            console.error('Error [REGISTER]', error)
            toast.error('Failed to register', {
                icon: '❌'
            })
        }
    }

    return (
        <FormProvider {...form}>
            <form className='flex flex-col gap-5' onSubmit={form.handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center'>
                    <div className='mr-2'>
                        <Title text='Register' size='md' className='font-bold' />
                    </div>
                </div>

                <FormInput name='email' label='E-mail' required />
                <FormInput name='fullName' label='Full name' required />
                <FormInput name='password' label='Password' type='password' required />
                <FormInput name='confirmPassword' label='Confirm password' type='password' required />

                <Button loading={form.formState.isSubmitting} className='h-12 text-base' type='submit'>
                    Register
                </Button>
            </form>
        </FormProvider>
    )
}
