import { cn } from '@/shared/lib/utils'
import { CountIconButton } from './count-icon-button'

export interface CountButtonProps {
    value?: number
    size?: 'sm' | 'lg'
    onClick?: (type: 'plus' | 'minus') => void
    className?: string
}

export const CountButton: React.FC<CountButtonProps> = ({ value = 1, size = 'sm', className, onClick }) => {
    return (
        <div className={cn('inline-flex items-center ju gap-3', className)}>
            <CountIconButton
                onClick={() => onClick?.('minus')}
                disabled={value === 1}
                size={size}
                type='minus'
            />

            <b className={size === 'sm' ? 'text-sm' : 'text-md'}>{value}</b>

            <CountIconButton
                onClick={() => onClick?.('plus')}
                size={size}
                type='plus'
            />

        </div>
    )
}
