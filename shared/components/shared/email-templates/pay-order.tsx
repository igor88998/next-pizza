import React from 'react'

interface Props {
    orderId: number
    totalAmount: number
    paymentUrl: string
}

export const PayOrderTemplate: React.FC<Props> = ({ orderId, totalAmount, paymentUrl }) => {
    return (
       <div>
            <h1>Order #{orderId}</h1>

            <p>Pay for an order of <b>{totalAmount} $</b>. Follow <a href={paymentUrl}>this link</a> for payment.</p>
       </div>
    )
}
