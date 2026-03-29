import { RecipeType } from './recipe-type'

export type CookingStepsType = {
    id?: string
    stepNumber: number
    desc: string
    recipeId: string
    createdAt: string
    recipe: RecipeType
}
