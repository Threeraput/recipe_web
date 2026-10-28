export type RecipeCategory = 'noodles' | 'desserts' | 'salads' | 'soups'

export type RecipeBadgeType = 'BESTSELLER' | 'TRADITIONAL' | 'SPICY' | 'CHEF PICK' | 'POPULAR'

export type ProductTheme = 'amber' | 'brown' | 'emerald'

export interface Recipe {
  id: string
  title: string
  category: RecipeCategory
  categoryLabel: string
  tagline: string
  productTag: { label: string; name: string; sub: string; theme: ProductTheme }
  badge?: RecipeBadgeType
  image: string
  prepTime: string
  cookTime: string
  totalMinutes: number
  servings: string
  ingredients: string[]
  summaryIngredients: string[]
  directions: string[]
  meta: string
}
