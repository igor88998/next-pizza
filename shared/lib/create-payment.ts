import Stripe from 'stripe';

interface Props {
	orderId: number;
	amount: number;
	description: string;
}

export async function createPayment(details: Props) {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
		apiVersion: '2024-10-28.acacia',
		typescript: true,
	});

	try {
		const paymentData = await stripe.checkout.sessions.create({
			success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you`,
			cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/checkout`,
			payment_method_types: ['card'],
			mode: 'payment',
			shipping_address_collection: { allowed_countries: ['UA'] },

			metadata: {
				order_id: details.orderId,
			},
			line_items: [
				{
					price_data: {
						currency: 'usd',
						product_data: {
							name: `Order #${details.orderId}`,
							description: details.description,
						},
						unit_amount: (details.amount + 7) * 100, 
					},
					quantity: 1,
				},
			],
		});

		return paymentData;
	} catch (error) {
		console.error('Error creating Stripe payment session:', error);
		throw new Error('Payment session creation failed');
	}
}
