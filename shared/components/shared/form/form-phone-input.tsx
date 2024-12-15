import { IMaskInput } from "react-imask";
import { useFormContext } from 'react-hook-form'
import { RequiredSymbol } from "../required-symbol";
import { ClearButton } from "../clear-button";
import { ErrorText } from "../error-text";

// extends IMaskInputProps<HTMLInputElement>

interface Props  {
    name: string;
    label?: string;
    required?: boolean;
    placeholder: string;
    className?: string;
}

export const FormPhoneInput: React.FC<Props> = ({ name, label, required, placeholder, className, ...props }) => {

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
                <IMaskInput
                    mask="(#00) 000-0000" 
                    {...register(name)}
                    unmask={true}
                    name={name}
                    placeholder={placeholder}
                    {...props}
                />

                {value && <ClearButton onClick={onClickClear} />}
            </div>

            {errorText && <ErrorText text={errorText} className='mt-2' />}
        </div>

    );
};
