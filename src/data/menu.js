export const categories = [
  { key: 'all',      label: 'All' },
  { key: 'healthy',  label: 'Healthy Feast' },
  { key: 'maggi',    label: 'Maggi' },
  { key: 'sandwich', label: 'Sandwiches' },
  { key: 'burger',   label: 'Burgers' },
  { key: 'momos',    label: 'Momos' },
  { key: 'fried',    label: 'Fried' },
  { key: 'nacho',    label: 'Nachos' },
  { key: 'soup',     label: 'Soups' },
  { key: 'dessert',  label: 'Desserts' },
]

export const menuItems = [
  // HEALTHY FEAST
  { id: 1,  cat: 'healthy',  emoji: '🍇', name: 'Fruit Bowl',                veg: true,  price: 90,  desc: 'Fresh seasonal fruits, lightly dressed' },
  { id: 2,  cat: 'healthy',  emoji: '🍨', name: 'Fruit Bowl with Ice Cream', veg: true,  price: 95,  desc: 'Fresh fruits topped with a scoop of ice cream' },
  { id: 3,  cat: 'healthy',  emoji: '🥗', name: 'Veg Salad',                 veg: true,  price: 100, desc: 'Crisp fresh vegetables with seasoning' },
  { id: 4,  cat: 'healthy',  emoji: '🌱', name: 'Veg Sprouts',               veg: true,  price: 100, desc: 'Nutrient-packed sprouted beans, lightly spiced' },
  { id: 5,  cat: 'healthy',  emoji: '🥩', name: 'Chicken Sprouts',           veg: false, price: 150, desc: 'Sprouted beans with shredded chicken & spices' },
  { id: 6,  cat: 'healthy',  emoji: '🍳', name: 'Egg Bread Omlette',         veg: false, price: 60,  desc: 'Fluffy omelette on toasted bread — quick & filling' },
  // MAGGI EXPRESS
  { id: 7,  cat: 'maggi',    emoji: '🍜', name: 'Plain Maggi',               veg: true,  price: 40,  desc: 'Classic Maggi noodles, perfectly spiced' },
  { id: 8,  cat: 'maggi',    emoji: '🍜', name: 'Egg Maggi',                 veg: false, price: 70,  desc: 'Maggi noodles tossed with egg and masala' },
  { id: 9,  cat: 'maggi',    emoji: '🌽', name: 'Corn Maggi',                veg: true,  price: 70,  desc: 'Maggi with sweet corn kernels and seasoning' },
  // SANDWICH STOP
  { id: 10, cat: 'sandwich', emoji: '🥪', name: 'Veg Sandwich',              veg: true,  price: 95,  desc: 'Fresh veggies & chutney on toasted bread' },
  { id: 11, cat: 'sandwich', emoji: '🥪', name: 'Veg Loaded Sandwich',       veg: true,  price: 140, desc: 'Loaded with cheese, veggies & special sauce' },
  { id: 12, cat: 'sandwich', emoji: '🥚', name: 'Egg Sandwich',              veg: false, price: 110, desc: 'Egg omelette with veggies in toasted bread' },
  { id: 13, cat: 'sandwich', emoji: '🍗', name: 'Chicken Sandwich',          veg: false, price: 160, desc: 'Juicy chicken filling with sauces on toasted bread' },
  // BURGER JUNCTION
  { id: 14, cat: 'burger',   emoji: '🍔', name: 'Veg Burger',                veg: true,  price: 100, desc: 'Crispy veggie patty with lettuce, cheese & sauces' },
  { id: 15, cat: 'burger',   emoji: '🍔', name: 'Chicken Burger',            veg: false, price: 150, desc: 'Grilled chicken patty with fresh toppings' },
  // MOMOS HUB
  { id: 16, cat: 'momos',    emoji: '🥟', name: 'Veg Momos',                 veg: true,  price: 90,  desc: 'Steamed dumplings with spiced vegetable filling' },
  { id: 17, cat: 'momos',    emoji: '🥟', name: 'Paneer Momos',              veg: true,  price: 100, desc: 'Soft steamed momos stuffed with cottage cheese' },
  { id: 18, cat: 'momos',    emoji: '🥟', name: 'Corn Cheese Momos',         veg: true,  price: 110, desc: 'Sweet corn & melted cheese stuffed steamed momos' },
  { id: 19, cat: 'momos',    emoji: '🥟', name: 'Chicken Momos',             veg: false, price: 120, desc: 'Juicy minced chicken steamed in thin wrappers' },
  // POTATO SPIRAL
  { id: 20, cat: 'fried',    emoji: '🌀', name: 'Plain Twister',             veg: true,  price: 70,  desc: 'Spiral potato on a stick, crispy fried' },
  { id: 21, cat: 'fried',    emoji: '🌀', name: 'Tandoori Twister',          veg: true,  price: 90,  desc: 'Spiral potato with smoky tandoori seasoning' },
  // NACHO CRUNCH
  { id: 22, cat: 'nacho',    emoji: '🫔', name: 'Plain Nachos',              veg: true,  price: 70,  desc: 'Crispy tortilla chips with dips' },
  { id: 23, cat: 'nacho',    emoji: '🫔', name: 'Veg Loaded Nachos',         veg: true,  price: 110, desc: 'Nachos topped with salsa, cheese & vegetables' },
  { id: 24, cat: 'nacho',    emoji: '🫔', name: 'Chicken Loaded Nachos',     veg: false, price: 140, desc: 'Nachos loaded with chicken, jalapeños & cheese' },
  // FRIED STATION
  { id: 25, cat: 'fried',    emoji: '🍟', name: 'French Fries',              veg: true,  price: 90,  desc: 'Golden crispy fries with ketchup' },
  { id: 26, cat: 'fried',    emoji: '🍟', name: 'Peri Peri Fries',           veg: true,  price: 105, desc: 'Crispy fries tossed in fiery peri peri seasoning' },
  { id: 27, cat: 'fried',    emoji: '🔺', name: 'Corn Cheese Triangle',      veg: true,  price: 70,  desc: 'Crispy fried triangles with corn & melted cheese' },
  { id: 28, cat: 'fried',    emoji: '🥦', name: 'Veg Fingers',               veg: true,  price: 70,  desc: 'Crunchy breaded vegetable fingers with dip' },
  { id: 29, cat: 'fried',    emoji: '🧅', name: 'Onion Rings',               veg: true,  price: 90,  desc: 'Golden fried onion rings, light & crispy' },
  { id: 30, cat: 'fried',    emoji: '🍗', name: 'Chicken Nuggets',           veg: false, price: 100, desc: 'Bite-sized juicy chicken nuggets, golden fried' },
  { id: 31, cat: 'fried',    emoji: '🍿', name: 'Chicken Popcorn',           veg: false, price: 110, desc: 'Tiny crunchy chicken bites with seasoning' },
  { id: 32, cat: 'fried',    emoji: '🍗', name: 'Crispy Chicken Fries',      veg: false, price: 120, desc: 'Long strips of crispy fried chicken' },
  { id: 33, cat: 'fried',    emoji: '🍖', name: 'Chicken Wings',             veg: false, price: 150, desc: 'Juicy wings fried to perfection with dipping sauce' },
  // SOUP BOWLS
  { id: 34, cat: 'soup',     emoji: '🍲', name: 'Hot and Sour Soup',         veg: true,  price: 40,  desc: 'Classic tangy, spicy soup with vegetables' },
  { id: 35, cat: 'soup',     emoji: '🌽', name: 'Corn Soup',                 veg: true,  price: 60,  desc: 'Creamy sweet corn soup, warm and comforting' },
  { id: 36, cat: 'soup',     emoji: '🥦', name: 'Broccoli Soup',             veg: true,  price: 70,  desc: 'Smooth and healthy broccoli cream soup' },
  { id: 37, cat: 'soup',     emoji: '🍲', name: 'Chicken Soup',              veg: false, price: 100, desc: 'Rich and hearty chicken broth with herbs' },
  // DESSERT JOY
  { id: 38, cat: 'dessert',  emoji: '🍮', name: 'Gulab Jamun (2 pcs)',       veg: true,  price: 50,  desc: 'Soft golden jamuns soaked in rose sugar syrup' },
  { id: 39, cat: 'dessert',  emoji: '🍨', name: 'Jamun with Ice Cream',      veg: true,  price: 85,  desc: 'Warm gulab jamuns served with vanilla ice cream' },
  { id: 40, cat: 'dessert',  emoji: '🍦', name: 'Ice Cream Scoop',           veg: true,  price: 80,  desc: 'Choose your flavour — classic and indulgent' },
  { id: 41, cat: 'dessert',  emoji: '🍧', name: 'Triveni',                   veg: true,  price: 100, desc: 'Three-layered dessert delight — a house special' },
  // E STOP SPECIAL
  { id: 42, cat: 'all',      emoji: '⭐', name: 'E Stop Special',            veg: null,  price: 200, desc: "Chef's secret recipe, made fresh daily. A must-try!", special: true },
]
