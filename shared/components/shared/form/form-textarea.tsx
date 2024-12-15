'use client'

import { Textarea } from "../../ui"
import { ClearButton } from "../clear-button"
import { ErrorText } from "../error-text"
import { RequiredSymbol } from "../required-symbol"
import { useFormContext } from 'react-hook-form'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string
    label?: string
    required?: boolean
    className?: string
}

export const FormTextarea: React.FC<Props> = ({ name, label, required, className, ...props }) => {

    const {
        register,
        formState: { errors },
        watch,
        setValue
    } = useFormContext()

    const value = watch(name)
    const errorText = errors[name]?.message as string

    const onClickClear = () => {
        setValue(name, '', { shouldValidate: true })
    }

    return (
        <div className={className}> 
            {label && (
                <p className='font-medium mb-2'>
                    {label} {required && <RequiredSymbol />}
                </p>
            )}

            <div className='relative'>
                <Textarea className='h-12 text-md' {...register(name)} {...props} />

                {value && <ClearButton onClick={onClickClear} />}
            </div>

            {errorText && <ErrorText text={errorText} className='mt-2' />}
        </div>
    )
}