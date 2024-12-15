import { CartItemDTO } from '@/shared/services/dto/cart.dto'
import React from 'react'

interface Props {
    orderId: number
    totalAmount: number
    items: CartItemDTO[]
}

export const OrderSuccessTemplate: React.FC<Props> = ({ orderId, totalAmount, items }) => {
    return (
        <div>
            <h1>Thank you for your purchase!</h1>

            <p>Your order #{orderId} has been paid. List of products:</p>

            <hr />

            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.productItem.product.name} | {item.productItem.price} $ 
                        X {item.quantity} {item.quantity > 1 ? 'units' : 'unit'} = 
                        {item.productItem.price * item.quantity} $
                    </li>
                ))}
            </ul>

            <p>Total amount {totalAmount}</p>
        </div>
    )
}
