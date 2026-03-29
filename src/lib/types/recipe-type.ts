import { UserType } from './user-type'

export type RecipeType = {
    id?: string
    title: string
    desc: string
    prepTime: number
    cookTime: number
    isFavorite: boolean
    image: string
    userId: string
    categoryId: string
    createdAt: string
    user?: UserType
}
