import { RecipeType } from './recipe-type'

export type CategoryType = {
    id?: string
    name: string
    image?: string
    createdAt?: string
    recipes?: RecipeType[]
}
