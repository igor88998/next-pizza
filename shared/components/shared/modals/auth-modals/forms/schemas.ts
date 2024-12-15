import { z } from 'zod';

export const passwordSchema = z.string().min(6, { message: 'Password must be at least 6 characters long' });

export const formLoginSchema = z.object({
	email: z.string().email({ message: 'Enter valid email' }),
	password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
	.merge(
		z.object({
			fullName: z.string().min(2, { message: 'Enter name and surname' }),
			confirmPassword: passwordSchema,
		})
	)
	.refine((data) => data.password === data.confirmPassword, {
		message: 'The passwords do not match',
		path: ['confirmPassword'],
	});

export type TFormLoginValues = z.infer<typeof formLoginSchema>
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>
