import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';
import { categories, ingredients, products, variations } from './constants';
import { Prisma } from '@prisma/client';

const randomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
	productId,
	pizzaType,
	size,
}: {
	productId: number;
	pizzaType?: 1 | 2;
	size?: 20 | 30 | 40;
}) => {
	return {
		productId,
		price: randomNumber(8, 25),
		pizzaType,
		size,
	} as Prisma.ProductVariationUncheckedCreateInput;
};

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'User Test',
				email: 'igor@gmail.com',
				password: hashSync('', 10),
				verified: new Date(),
				role: 'USER',
			},
			{
				fullName: 'Admin Admin',
				email: 'admin@gmail.com',
				password: hashSync('', 10),
				verified: new Date(),
				role: 'ADMIN',
			},
		],
	});

	await prisma.category.createMany({
		data: categories,
	});

	await prisma.ingredient.createMany({
		data: ingredients,
	});

	await prisma.product.createMany({
		data: products,
	});

	const pizza1 = await prisma.product.create({
		data: {
			name: 'Pepperoni fresh',
			imageUrl: 'https://prontopizza.ua/chernivtsi/wp-content/uploads/sites/10/2021/07/paperoni-300x300.webp',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(0, 5),
			},
		},
	});

	const pizza2 = await prisma.product.create({
		data: {
			name: 'Cheese pizza',
			imageUrl: 'https://prontopizza.ua/chernivtsi/wp-content/uploads/sites/10/2021/07/4-syry-300x300.webp',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(5, 10),
			},
		},
	});

	const pizza3 = await prisma.product.create({
		data: {
			name: 'Chorizo fresh',
			imageUrl: 'https://prontopizza.ua/chernivtsi/wp-content/uploads/sites/10/2021/07/kozaczka-300x300.webp',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(10, 40),
			},
		},
	});

	await prisma.productVariation.createMany({
		data: [
			generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
			generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
			generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),

			generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

			generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
			generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
			generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),

			generateProductItem({ productId: 1 }),
			generateProductItem({ productId: 2 }),
			generateProductItem({ productId: 3 }),
			generateProductItem({ productId: 4 }),
			generateProductItem({ productId: 5 }),
			generateProductItem({ productId: 6 }),
			generateProductItem({ productId: 7 }),
			generateProductItem({ productId: 8 }),
			generateProductItem({ productId: 9 }),
			generateProductItem({ productId: 10 }),
			generateProductItem({ productId: 11 }),
			generateProductItem({ productId: 12 }),
			generateProductItem({ productId: 13 }),
			generateProductItem({ productId: 14 }),
			generateProductItem({ productId: 15 }),
			generateProductItem({ productId: 16 }),
			generateProductItem({ productId: 17 }),
		],
	});

	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: '121212',
			},
			{
				userId: 2,
				totalAmount: 0,
				token: '212121',
			},
		],
	});

	await prisma.cartItem.create({
		data: {
			productItemId: 1,
			cartId: 1,
			quantity: 2,
			ingredients: {
				connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
			},
		},
	});

	await prisma.story.createMany({
		data: [
			{
				previewImageUrl: 'https://bonduelle.ru/storage/recipes/8ec67f9adbbea5b1a3db330c5e44c185.jpeg',
			},
			{
				previewImageUrl: 'https://s9.travelask.ru/uploads/post/000/025/157/main_image/full-9f1992b8096aad0765a0eed80833068f.jpg',
			},
			{
				previewImageUrl: 'https://cdnn21.img.ria.ru/images/98976/61/989766135_0:105:2000:1230_1920x0_80_0_0_16a8fff0f23e9297155772f93b403aed.jpg',
			},
			{
				previewImageUrl: 'https://shuba.life/static/content/thumbs/1905x884/c/f1/y2melu---c1905x884x50px50p-up--485a9d57de69c26056e6b64e9390ef1c.jpg',
			},
			{
				previewImageUrl: 'https://cappiadmin.com.ua/storage/uploads/blog/hyNIr9MSpC3S7TfEpKdKA8Xciyky3jmwb60wxF7C.jpg',
			},
			{
				previewImageUrl: 'https://biscotti.com.ua/storage/products/photo_313986.jpg',
			},
		],
	});

	await prisma.storyItem.createMany({
		data: [
			{
				storyId: 1,
				sourceUrl: 'https://zira.uz/wp-content/uploads/2024/03/zavtrak-iz-lavasha.jpg',
			},
			{
				storyId: 2,
				sourceUrl: 'https://static.1000.menu/img/content-v2/29/44/11998/kartofel-fri-v-duxovke_1620886770_10_max.jpg',
			},
			{
				storyId: 3,
				sourceUrl: 'https://roll-club.dp.ua/wp-content/uploads/2024/02/pizza-recipe.jpg',
			},
			{
				storyId: 3,
				sourceUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/1200px-Supreme_pizza.jpg',
			},
			{
				storyId: 4,
				sourceUrl: 'https://www.spoonforkbacon.com/wp-content/uploads/2023/04/milshake-recipe-card.jpg',
			},
			{
				storyId: 5,
				sourceUrl: 'https://www.kikkoman.ru/fileadmin/_processed_/4/2/csm_sushi-kakkoii_df3fecf1b7.webp',
			},
			{
				storyId: 6,
				sourceUrl: 'https://bromabakery.com/wp-content/uploads/2023/03/Single-Serve-Vanilla-Cupcake.jpg',
			},
		],
	});
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "ProductVariation" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "Story" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "StoryItem" RESTART IDENTITY CASCADE;`;
}

async function main() {
	try {
		await down();
		await up();
	} catch (e) {
		console.error(e);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
