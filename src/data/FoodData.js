const FoodData = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5",
    name: "Onion Pizza",
    price: 149,
    desc: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience.",
    category: "pizza",
    rating: 4.1,
    isVeg : true
  },
  {
    id: 2,
    img: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
    name: "Margherita Pizza",
    price: 149,
    desc: "A classic Margherita pizza topped with mozzarella cheese and pizza sauce. Simple yet bursting with flavors.",
    category: "pizza",
    rating: 4.2,
    isVeg : true
  },
  {
    id: 3,
    img: "https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png",
    name: "Pepperoni Pizza",
    price: 199,
    desc: "Indulge in the savory delight of this Pepperoni Pizza, loaded with slices of spicy pepperoni, melted cheese, and a tangy tomato sauce.",
    category: "pizza",
    rating: 4.2,
    isVeg : true
  },
  {
    id: 4,
    img: "https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png",
    name: "Mushroom and Spinach Pizza",
    price: 219,
    desc: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. ",
    category: "pizza",
    rating: 4.0,
    isVeg : true
  },
  {
    id: 5,
    img: "https://w7.pngwing.com/pngs/843/171/png-transparent-pizza-73-restaurant-catupiry-chicken-as-food-pizza-baked-goods-food-recipe-thumbnail.png",
    name: "BBQ Chicken Pizza",
    price: 220,
    desc: "Savor the smoky goodness of this BBQ Chicken Pizza, featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses.",
    category: "pizza",
    rating: 3.6,
    isVeg : false
  },
  {
    id: 6,
    img: "https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png",
    name: "Classic Pancakes",
    price: 180,
    desc: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter.",
    category: "Breakfast",
    rating: 3.9,
    isVeg : true
  },
  {
    id: 7,
    img: "https://w7.pngwing.com/pngs/645/475/png-transparent-croissant-bread-croissant-muffin-brunch-bacon-egg-and-cheese-sandwich-bread-croissants-baked-goods-food-baking-thumbnail.png",
    name: "Egg and Bacon Croissant",
    price: 229,
    desc: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. Satisfying breakfast for on-the-go mornings.",
    category: "Breakfast",
    rating: 4.1,
    isVeg : false
  },
  {
    id: 8,
    img: "https://w7.pngwing.com/pngs/683/103/png-transparent-frozen-yogurt-parfait-breakfast-yoghurt-fruit-salad-yogurt-frutti-di-bosco-food-breakfast-thumbnail.png",
    name: "Greek Yogurt Parfait",
    price: 199,
    desc: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola.",
    category: "Breakfast",
    rating: 4.6,
    isVeg : true
  },
  {
    id: 9,
    img: "https://w7.pngwing.com/pngs/400/603/png-transparent-toast-tostytosty-la-tosteria-menu-food-dish-avocado-toast-food-toast-avocado-toast-thumbnail.png",
    name: "Avocado Toast",
    price: 189,
    desc: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes.",
    category: "sandwich",
    rating: 3.5,
    isVeg : true
  },
  {
    id: 10,
    img: "https://w7.pngwing.com/pngs/20/725/png-transparent-grain-bowl-breakfast-cereal-muesli-corn-flakes-bowl-granola-food-breakfast-recipe-thumbnail.png",
    name: "Fruit and Nut Oatmeal",
    price: 185,
    desc: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
    category: "Breakfast",
    rating: 4.1,
    isVeg : true
  },
  {
    id: 11,
    img: "https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png",
    name: "Grilled Salmon",
    price: 199,
    desc: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables.",
    category: "sandwich",
    rating: 3.8,
    isVeg : true
  },
  {
    id: 12,
    img: "https://w7.pngwing.com/pngs/756/828/png-transparent-taglierini-carbonara-fettuccine-alfredo-chicken-pasta-chicken-fillet-thumbnail.png",
    name: "Chicken Alfredo Pasta",
    price: 269,
    desc: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta.",
    category: "pasta&noodles",
    rating: 3.8,
    isVeg : false
  },
  {
    id: 13,
    img: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
    name: "Vegetable Stir-Fry",
    price: 149,
    desc: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice.",
    category: "Dinner",
    rating: 4.2,
    isVeg : true
  },
  {
    id: 14,
    img: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
    name: "Grilled Chicken Burrito Bowl",
    price: 399,
    desc: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing.",
    category: "Dinner",
    rating: 3.0,
    isVeg : false
  },
  {
    id: 15,
    img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
    name: "Mushroom Risotto",
    price: 179,
    desc: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese.",
    category: "pasta&noodles",
    rating: 4.0,
    isVeg : true
  },
  {
    id: 16,
    img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
    name: "Cheese and Crackers Platter",
    price: 269,
    desc: "Enjoy a variety of artisan cheeses, paired with an assortment of crispy crackers and complemented by fresh fruits and nuts.",
    category: "pasta&noodles",
    rating: 4.1,
    isVeg : true
  },
  {
    id: 17,
    img: "https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png",
    name: "Crispy Chicken Wings",
    price: 229,
    desc: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection.The flavorful snacking experience.",
    category: "Snacks",
    rating: 3.8,
    isVeg : false
  },
  {
    id: 18,
    img: "https://w7.pngwing.com/pngs/816/163/png-transparent-grilled-skewered-meat-bakery-paneer-tikka-indian-cuisine-vegetarian-cuisine-cake-food-baking-cake-decorating-thumbnail.png",
    name: "Paneer Tikka Skewers",
    price: 259,
    desc: "Enjoy succulent pieces of marinated paneer (Indian cottage cheese) skewered and grilled to perfection. Served with mint chutney.",
    category: "Snacks",
    rating: 4.9,
    isVeg : true
  },
  {
    id: 19,
    img: "https://w7.pngwing.com/pngs/356/675/png-transparent-falafel-lebanese-cuisine-take-out-mediterranean-cuisine-hummus-bed-miscellaneous-furniture-food-thumbnail.png",
    name: "Hummus and Veggie Platter",
    price: 290,
    desc: "Relish the smooth and flavorful hummus accompanied by a variety of fresh vegetable sticks and pita bread.",
    category: "Snacks",
    rating: 4.0,
    isVeg : true
  },
  {
    id: 20,
    img: "https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png",
    name: "Fruit Skewers",
    price: 170,
    desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple.",
    category: "Snacks",
    rating: 4.2,
    isVeg : true
  },
  {
    id: 21,
    img:" https://img.freepik.com/free-photo/pizza-food_144627-38495.jpg?w=996&t=st=1714299713~exp=1714300313~hmac=0ff7bc61098cf42af8ff00a03a1847c6abcd1767f7135faf5c8575e1de0ff2f2",
    name: "Italian Pizza",
    price: 149,
    desc: "Traditional Italian pizza features thin crust topped with fresh ingredients like mozzarella,tomatoes,basil,and olive oil,baked in a wood-fired oven.",
    category: "pizza",
    rating: 4.8,
    isVeg : true
  },
  {
    id: 22,
    img:"https://img.freepik.com/free-psd/quiche-isolated-transparent-background_191095-24886.jpg?t=st=1714300228~exp=1714303828~hmac=940dc834e6adc91df659eba5df2c7ae4f021ee7b8168ccdccfaed27710f0553d&w=740",
    name: "Farm House Pizza",
    price: 470,
    desc: "Rustic crust piled high with fresh vegetables, savory meats, and gooey cheese, baked to perfection for a taste of countryside comfort.",
    category: "pizza",
    rating: 4.3,
    isVeg : true
  },
  {
    id: 23,
    img:"https://img.freepik.com/free-psd/top-view-pizza-isolated_23-2151361771.jpg?t=st=1714300334~exp=1714303934~hmac=0ee28f3d26091cd6ca3425d5fb84f6446b8b8c83c646e24a236eccacc959dec9&w=740",
    name: "Top Loaded Veggies Pizza",
    price: 370,
    desc: "Bursting with a colorful array of fresh vegetables, piled high on a golden crust with melted cheese, for a flavor-packed feast",
    category: "pizza",
    rating: 4.7,
    isVeg : true
  },
  {
    id: 24,
    img:"https://img.freepik.com/free-psd/delicious-cheese-pizza-isolated-transparent-background_84443-1207.jpg?t=st=1714300424~exp=1714304024~hmac=91a0a5c9ab8de71b8b7e91e20d0fdb341b46ed0961dca8c4112fe267d15135c7&w=740",
    name: "Mint Margherita Pizza",
    price: 220,
    desc: "A refreshing twist on the classic Margherita pizza, featuring aromatic mint leaves atop a bed of tomatoes, mozzarella, and basil.",
    category: "pizza",
    rating: 4.9,
    isVeg : true
  },
  {
    id: 25,
    img:"https://img.freepik.com/free-psd/blt-isolated-transparent-background_191095-23897.jpg?w=740&t=st=1714300618~exp=1714301218~hmac=4ca59af6e70f440ae4d3233c2d51b773e2c176a7c0d2cd9f51626e4f71abd579",
    name: "Vegetable Sandwich(Non-Grilled)",
    price: 130,
    desc: "A medley of fresh vegetables layered between slices of soft bread, delivering crisp textures and vibrant flavors in every bite.",
    category: "sandwich",
    rating: 4.1,
    isVeg : true
  },
  {
    id: 26,
    img:"https://img.freepik.com/free-psd/zigni-isolated-transparent-background_191095-25023.jpg?w=740&t=st=1714300681~exp=1714301281~hmac=50ae57ba213103c64a3967dadbaf690c20142dfacd8b44c2ecf0921ddf6dbb61",
    name: "Veg Monted Sub",
    price: 129,
    desc: "A delightful mix of fresh vegetables, nestled in a soft bun, creating a satisfyingly crunchy and nutritious sandwich experience.",
    category: "sandwich",
    rating: 3.9,
    isVeg : true
  },
  {
    id: 27,
    img:"https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?w=740&t=st=1714300786~exp=1714301386~hmac=6fee5209b47c63d81aa2f7d35ba7cca238b50cda782ef35223df07fab6d8ba4e",
    name: "Veg Club Sandwich",
    price: 269,
    desc: "Stacked layers of fresh veggies, cheese, and spreads between toasted bread, offering a satisfying crunch with every flavorful bite.",
    category: "sandwich",
    rating: 4.1,
    isVeg : true
  },
  {
    id: 28,
    img:"https://img.freepik.com/free-photo/panini-sandwich-with-ham-cheese-tomato-arugula-isolated-white-background_123827-26728.jpg?w=996&t=st=1714300851~exp=1714301451~hmac=14492698bf0adc3688d125834e210e5943d346e8475895935002967c0bc3919d",
    name: "Green Chutney Sandwich(Mumbai Special)",
    price: 99,
    desc: "A zesty fusion of spicy green chutney, crunchy veggies, and tangy sauces, sandwiched between soft bread for a burst of Mumbai flavor.",
    category: "sandwich",
    rating: 4.2,
    isVeg : true
  },
  {
    id: 29,
    img:"https://img.freepik.com/free-photo/delicious-sandwich_144627-15079.jpg?w=740&t=st=1714300920~exp=1714301520~hmac=c6d8ddf88d612c6ec248c80e45c874653f7f972f14907b858a5282097d59d82b",
    name: "Aloo Matar Grilled Sandwich",
    price: 129,
    desc: "Tender potatoes and peas cooked in aromatic spices, sandwiched between slices of bread and grilled to perfection for a comforting, flavorful treat.",
    category: "sandwich",
    rating: 3.8,
    isVeg : true
  },
  {
    id: 30,
    img:"https://img.freepik.com/free-psd/hamburger-isolated-transparent-background_191095-29336.jpg?w=740&t=st=1714301006~exp=1714301606~hmac=6deaabddf2a068f48965e0bb337f6437ce1d3c3c74f7859cd2d6ece76865a553",
    name: "Veg Loaded Burger",
    price: 120,
    desc: "A mouthwatering ensemble of hearty plant-based patties, fresh vegetables, and creamy sauces, all nestled within a soft bun for a satisfying bite.",
    category: "burger",
    rating: 4.0,
    isVeg : true
  },
  {
    id: 31,
    img:"https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?w=1060&t=st=1714301113~exp=1714301713~hmac=4991923a19eaa2b55f1303ce642b6ede03af2a1bdf6390148e9133d185823d58",
    name: "Aloo Paty Burger",
    price: 139,
    desc: "Soft bun encasing a flavorful potato patty, complemented by fresh veggies and zesty sauces for a satisfying vegetarian burger experience.",
    category: "burger",
    rating: 3.9,
    isVeg : true
  },
  {
    id: 32,
    img:"https://img.freepik.com/free-psd/latte-isolated-transparent-background_191095-32793.jpg?t=st=1714301211~exp=1714304811~hmac=b454f690be8411c07d694497fbdf0f7375e633e08e76221cb06f371d33fd6fe3&w=740",
    name: "Coffee Latte exotic",
    price: 199,
    desc: "Smooth espresso infused with steamed milk, creating a luxurious and comforting drink perfect for any time of day.",
    category: "coffee&mocktails",
    rating: 4.3,
    isVeg : true
  },
  {
    id: 33,
    img:"https://img.freepik.com/free-psd/latte-isolated-transparent-background_191095-40097.jpg?t=st=1714301266~exp=1714304866~hmac=36961e29bb074ab1bdfe8d52f44836c1d9ba38a98f02ebbc708a6fb8539abceb&w=740",
    name: "Coffee Mocha",
    price: 299,
    desc: "Rich espresso blended with velvety chocolate and creamy steamed milk, topped with frothy foam—a luscious coffee indulgence.",
    category: "coffee&mocktails",
    rating: 4.4,
    isVeg : true
  },
  {
    id: 34,
    img:"https://img.freepik.com/free-psd/tasty-indian-masala-chai-with-spices-isolated-transparent-background_191095-14265.jpg?t=st=1714301511~exp=1714305111~hmac=a8259d7e6a4a303c1613fedb5122e5876ec713d7ca453e360643c4431b90d509&w=740",
    name: "Macchiato 250ml",
    price: 349,
    desc: "Bold espresso stained with a dollop of steamed milk—a potent shot with a hint of creaminess in every sip.",
    category: "coffee&mocktails",
    rating: 4.1,
    isVeg : true
  },
  {
    id: 35,
    img:"https://img.freepik.com/free-psd/tasty-mint-julep-cocktail-glass-isolated-transparent-background_191095-14279.jpg?t=st=1714301591~exp=1714305191~hmac=700110425b959cff481dad03580e99498f79cebc57e1558956693278729a11b6&w=740",
    name: "Mint Julep Cocktail",
    price: 149,
    desc: "Refreshing mint cocktail: crisp mint leaves muddled with zesty lime, shaken with vodka and a splash of soda—cool, invigorating perfection.",
    category: "coffee&mocktails",
    rating: 3.8,
    isVeg : true
  },
  {
    id: 36,
    img:"https://img.freepik.com/free-psd/drinks-isolated-transparent-background_191095-17945.jpg?t=st=1714301684~exp=1714305284~hmac=30b465c7bd5da44f0c2a768b159116984e9e3ec844d7f01175e0b2c16a150d6b&w=740",
    name: "Cherry & Lime Fusetail",
    price: 169,
    desc: "Tangy lime juice paired with sweet cherry syrup, topped with soda and garnished with fresh lime—bright, non-alcoholic delight.",
    category: "coffee&mocktails",
    rating: 4.1,
    isVeg : true
  },
  {
    id: 37,
    img:"https://images.unsplash.com/photo-1455813870877-04a32045af63?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Americanno Espresso",
    price: 149,
    desc: "Bold espresso diluted with hot water—a robust, straightforward brew that awakens the senses with its intense flavor and smooth finish.",
    category: "coffee&mocktails",
    rating: 4.3,
    isVeg : true
  },
  {
    id: 38,
    img:"https://img.freepik.com/free-psd/spaghetti-with-meatballs-tomato-sauce-bowl-closeup-shot-isolated-transparent-background_84443-1458.jpg?t=st=1714386159~exp=1714389759~hmac=5f736e834ec22d8282f9cd942f595de3a566d992f5416a6ec74ff9f23a22c0d5&w=740",
    name: "Spaghetti with cheese balls",
    price: 349,
    desc: "Succulent spaghetti entwined with savory cheese balls—comforting pasta kissed with gooey cheese, a delightful fusion of flavors and textures.",
    category: "pasta&noodles",
    rating: 3.9,
    isVeg : true
  },
  {
    id: 39,
    img:"https://img.freepik.com/free-psd/lo-mein-isolated-transparent-background_191095-35038.jpg?t=st=1714386287~exp=1714389887~hmac=094b41a430a5a9d72b37d8a05be4bf3703adccfa7ac9bb25e2717bc7fa3f3ca9&w=740",
    name: "Veg Hakka Noodles",
    price: 199,
    desc: "Stir-fried with crisp vegetables, garlic, and soy sauce—a savory, aromatic delight embodying Asian culinary flair.",
    category: "pasta&noodles",
    rating: 4.3,
    isVeg : true
  },
  {
    id: 40,
    img:"https://img.freepik.com/free-psd/mac-cheese-isolated-transparent-background_191095-32411.jpg?t=st=1714386400~exp=1714390000~hmac=45263e3bb20d32914ece364c332bb1e653d4ff0156125eb82d9dc510e6b306c0&w=740",
    name: "Honey Cheese Macroni",
    price: 279,
    desc: "Creamy macaroni coated in a luscious blend of honey-infused cheese—a sweet and savory symphony that delights the palate with every bite.",
    category: "pasta&noodles",
    rating: 4.7,
    isVeg : true
  },
  {
    id: 41,
    img:"https://img.freepik.com/free-photo/delicious-pasta-plate_23-2150690687.jpg?t=st=1714386540~exp=1714390140~hmac=ff3d843a186076a6dc39955143a4dc0fe8ec38434124740e6a5427770709e5f3&w=1060",
    name: "Creamy White Sauce Pasta",
    price: 349,
    desc: "Creamy white sauce pasta: al dente noodles enveloped in a velvety blend of butter, cream, and Parmesan—decadent comfort in every forkful.",
    category: "pasta&noodles",
    rating: 4.6,
    isVeg : true
  },
  {
    id: 42,
    img:"https://img.freepik.com/free-photo/lifestyle-cocina-comida-foodie-gastronomy_1350-45.jpg?t=st=1714386613~exp=1714390213~hmac=b03deece0ea8fcf90f05a30f08e19abb4b215d29b23760414cd1ecc793077b7b&w=996",
    name: "Continental Red Sauce Pasta",
    price: 399,
    desc: "Indian-style spicy red sauce pasta: Tangy tomato sauce infused with aromatic spices, tossed with macrony, fiery, and utterly delicious.",
    category: "pasta&noodles",
    rating: 4.0,
    isVeg : true
  },
];
export default FoodData;
