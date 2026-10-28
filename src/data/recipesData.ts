import type { Recipe } from '../types/recipe'

const IMG = {
  noodle:
    'https://delightfulplate.com/wp-content/uploads/2017/05/Vietnamese-Bun-Thang-Hanoi-chicken-vermicelli-noodle-soup-with-eggs-and-pork-768x1152.jpg',
  mango: 'https://thefoodietakesflight.com/wp-content/uploads/2021/08/Thai-Mango-Sticky-Rice-1-of-7.jpg',
  salad: 'https://i.ytimg.com/vi/OBxqEE8y_vk/maxresdefault.jpg',
}

const noodleFull = [
  '1 package premium dried rice stick noodles',
  '300g poached chicken breast, finely shredded',
  '2 eggs, fried in a very thin sheet and shredded',
  '100g Vietnamese steamed pork sausage (Cha Lua), julienned',
  '1.5 liters simmered chicken bone broth infused with ginger and shallot',
  'Fresh coriander, scallions, and lime wedges for garnish',
]
const mangoFull = [
  '2 large ripe Thai Nam Dok Mai or honey mangoes',
  '1.5 cups premium glutinous sweet rice (soaked 2 hours)',
  '1 can (400ml) high-fat coconut milk',
  '1/3 cup palm sugar or cane sugar',
  '1/2 tsp sea salt',
  '1 tbsp roasted yellow mung beans or sesame seeds',
]
const saladFull = [
  '2 ears fresh sweet corn, steamed and cut from the cob',
  '8 fresh tiger prawns, peeled and gently blanched',
  '6 cherry tomatoes, halved',
  "3 fresh red bird's eye chilies and 2 garlic cloves",
  '2.5 tbsp freshly squeezed lime juice',
  '2 tbsp premium fish sauce and 1.5 tbsp palm sugar',
]

export const recipes: Recipe[] = [
  {
    id: 'thang-noodle',
    title: 'Thang Noodle',
    category: 'noodles',
    categoryLabel: 'Traditional Vietnamese Style Broth',
    tagline: 'Mild Spice â€¢ Soup',
    productTag: { label: 'Premium', name: 'Rice Stick', sub: 'Viet Noodle', theme: 'amber' },
    badge: 'BESTSELLER',
    image: IMG.noodle,
    prepTime: '10 mins',
    cookTime: '10 mins',
    totalMinutes: 20,
    servings: '4 servings',
    meta: '20 mins | 4 servings | Mild Broth',
    ingredients: noodleFull,
    summaryIngredients: [
      '1 pack Rice Stick Noodle',
      'Shredded chicken breast',
      'Thin sliced fried egg',
      'Spring onion, herbs & broth',
    ],
    directions: [
      'Cook rice noodles in boiling water for 4â€“5 minutes until soft, drain and divide into serving bowls.',
      'Artfully arrange shredded chicken, golden egg strips, pork sausage, and chopped herbs over noodles.',
      'Heat chicken broth until boiling, season with fish sauce, and ladle steaming broth over the bowl. Serve hot.',
    ],
  },
  {
    id: 'mango-sticky-rice',
    title: 'Mango Sticky Rice',
    category: 'desserts',
    categoryLabel: 'Authentic Thai Sweet Dessert',
    tagline: 'Sweet â€¢ Dessert',
    productTag: { label: 'Organic', name: 'Sweet Rice', sub: 'Thai Coconut', theme: 'brown' },
    badge: 'TRADITIONAL',
    image: IMG.mango,
    prepTime: '15 mins',
    cookTime: '10 mins',
    totalMinutes: 25,
    servings: '4 servings',
    meta: '25 mins | 4 servings | Sweet & Creamy',
    ingredients: mangoFull,
    summaryIngredients: [
      '2 Ripe Yellow Thai Mangoes',
      '1 cup Glutinous Sweet Rice',
      '1 can Rich Coconut Milk',
      'Roasted sesame / mung beans',
    ],
    directions: [
      'Steam soaked glutinous rice over high steam for 20 minutes until translucent and tender.',
      'Warm coconut milk, sugar, and salt until dissolved (do not boil). Pour 3/4 of the syrup into the hot rice; cover and rest for 15 minutes.',
      'Slice mangoes, plate with rice, drizzle remaining coconut sauce and sprinkle crispy mung beans.',
    ],
  },
  {
    id: 'corn-spicy-salad',
    title: 'Corn Spicy Salad',
    category: 'salads',
    categoryLabel: 'Zesty Isan Street Style Salad',
    tagline: 'Zesty â€¢ Salad',
    productTag: { label: 'Spice Mix', name: 'Som Tum', sub: 'Salad Dressing', theme: 'emerald' },
    badge: 'SPICY',
    image: IMG.salad,
    prepTime: '10 mins',
    cookTime: '5 mins',
    totalMinutes: 15,
    servings: '2 servings',
    meta: '15 mins | 2 servings | Spicy & Tangy',
    ingredients: saladFull,
    summaryIngredients: [
      'Sweet Golden Steamed Corn',
      'Fresh Prawns or Salted Egg',
      'Cherry tomatoes & string beans',
      'Lime, fish sauce, palm sugar, chili',
    ],
    directions: [
      'Lightly crush garlic and chilies in a clay mortar to release aromas without making a paste.',
      'Add palm sugar, fish sauce, and lime juice; stir until the sugar is dissolved.',
      'Add tomatoes, corn kernels, and blanched prawns. Toss lightly and serve immediately.',
    ],
  },
]

export const categories = [
  { value: 'all', label: 'All Dishes' },
  { value: 'noodles', label: 'Noodles' },
  { value: 'desserts', label: 'Desserts' },
  { value: 'salads', label: 'Salads' },
] as const

export type CategoryFilter = (typeof categories)[number]['value']
