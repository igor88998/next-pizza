export const categories = [
	{
		name: 'Pizzas',
	},
	{
		name: 'Breakfast',
	},
	{
		name: 'Snacks',
	},
	{
		name: 'Cocktails',
	},
	{
		name: 'Drinks',
	},
];

export const ingredients = [
	{
		name: 'Cheese border',
		price: 4,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
	},
	{
		name: 'Creamy mozzarella',
		price: 4,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
	},
	{
		name: 'Cheddar cheese',
		price: 4,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
	},
    {
		name: 'Parmesan cheese',
		price: 4,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
	},
	{
		name: 'Hot Jalapeno Pepper',
		price: 2,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
	},
	{
		name: 'Tender Chicken',
		price: 2,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
	},
	{
		name: 'Champignons',
		price: 2,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
	},
	{
		name: 'Bacon',
		price: 2,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
	},
	{
		name: 'Ham',
		price: 3,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
	},
	{
		name: 'Spicy pepperoni',
		price: 3,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
	},
	{
		name: 'Spicy Chorizo',
		price: 3,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
	},
	{
		name: 'Pickled cucumbers',
		price: 2,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
	},
	{
		name: 'Fresh tomatoes',
		price: 2,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
	},
	{
		name: 'Red onion',
		price: 2,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
	},
	{
		name: 'Juicy pineapples',
		price: 3,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
	},
	{
		name: 'Italian herbs',
		price: 3,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
	},
	{
		name: 'Sweet pepper',
		price: 3,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
	},
	{
		name: 'Cubes of feta cheese',
		price: 4,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
	},
	{
		name: 'Meatballs',
		price: 3,
		imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
	},
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
	{
		name: 'Omelette with ham and mushrooms',
		imageUrl: 'https://www.healthyfood.com/wp-content/uploads/2018/02/Basic-omelette.jpg',
		categoryId: 2,
	},
	{
		name: 'Omelette with pepperoni',
		imageUrl: 'https://kristineskitchenblog.com/wp-content/uploads/2023/02/how-to-make-an-omelet-17.jpg',
		categoryId: 2,
	},
	{
		name: 'Coffee Latte',
		imageUrl: 'https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dwae845f23/images/recipe-Images/cafe-latte1-recipe.jpg?sw=1200&sh=1200&sm=fit',
		categoryId: 5,
	},
	{
		name: 'Chicken Caesar Salad',
		imageUrl: 'https://www.jessicagavin.com/wp-content/uploads/2022/06/chicken-caesar-salad-28-1200.jpg',
		categoryId: 2,
	},
	{
		name: 'Tuna Salad',
		imageUrl: 'https://healthyfoodiegirl.com/wp-content/uploads/2024/01/Healthy-Tuna-Salad.jpg',
		categoryId: 2,
	},
	{
		name: 'Spaghetti Bolognese',
		imageUrl: 'https://images.ctfassets.net/uexfe9h31g3m/6QtnhruEFi8qgEyYAICkyS/ab01e9b1da656f35dd1a721c810162a0/Spaghetti_bolognese_4x3_V2_LOW_RES.jpg?w=2000&h=1500&fm=webp&fit=thumb&q=100',
		categoryId: 2,
	},
	{
		name: 'Fettuccine Alfredo',
		imageUrl: 'https://www.allrecipes.com/thmb/W30oi2NsDpOi1yHFJFBhhnYETyg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-23431-to-die-for-fettuccine-alfredo-DDMFS-beauty-1x2-a1f8cf17aa71419a84405afb90ca7ee3.jpg',
		categoryId: 2,
	},
	{
		name: 'Mango Smoothie',
		imageUrl: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg',
		categoryId: 5,
	},
	{
		name: 'Strawberry Banana Smoothie',
		imageUrl: 'https://www.liveeatlearn.com/wp-content/uploads/2019/07/strawberry-banana-smoothie-vert1200.jpg',
		categoryId: 5,
	},
	{
		name: 'Blueberry Muffin',
		imageUrl: 'https://stressbaking.com/wp-content/uploads/2022/07/blueberry-muffins-06.jpg',
		categoryId: 3,
	},
	{
		name: 'Chocolate Croissant',
		imageUrl: 'https://ruokala.sg/cdn/shop/articles/ruokala-gourmet-chocolate-croissants.jpg?v=1707194100&width=2048',
		categoryId: 3,
	},
	{
		name: 'Orange Juice',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Orangejuice.jpg/1200px-Orangejuice.jpg',
		categoryId: 5,
	},
	{
		name: 'Cappuccino',
		imageUrl: 'https://dairyfarmersofcanada.ca/sites/default/files/image_file_browser/conso_recipe/2022/Capuccino.jpg',
		categoryId: 5,
	},
	{
		name: 'Espresso',
		imageUrl: 'https://drishop.co.id/wp-content/uploads/2024/02/kopi-espresso.jpg',
		categoryId: 5,
	},
	{
		name: 'Grilled Chicken Sandwich',
		imageUrl: 'https://recipes.net/wp-content/uploads/2023/05/grilled-chicken-sandwich-recipe_ebd0403939d98e157fea1bd85a8c557d.jpeg',
		categoryId: 2,
	},
	{
		name: 'Turkey Club Sandwich',
		imageUrl: 'https://assets.bonappetit.com/photos/6358155c6db3ef49ffd91e97/3:2/w_2931,h_1954,c_limit/1025-turkey-club-seo-lede.jpg',
		categoryId: 2,
	},
	{
		name: 'Iced Tea',
		imageUrl: 'https://www.allrecipes.com/thmb/REETjYFdVRmMtwVHPT66VmQVmmI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/109190-smooth-sweet-tea-DDMFS-4x3-9e849a386d414cb2b852099f02b6782d.jpg',
		categoryId: 5,
	},
];

export const variations = [
    {
        pizzaType: 'Thin',
        size: 'Small',
        price: 10
    },
    {
        pizzaType: 'Thin',
        size: 'Medium',
        price: 14
    },
    {
        pizzaType: 'Thin',
        size: 'Large',
        price: 18
    },
    {
        pizzaType: 'Traditional',
        size: 'Small',
        price: 12
    },
    {
        pizzaType: 'Traditional',
        size: 'Medium',
        price: 16
    },
    {
        pizzaType: 'Traditional',
        size: 'Large',
        price: 20
    },
]
