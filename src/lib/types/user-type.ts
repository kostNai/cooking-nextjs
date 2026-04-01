import { PostType } from './post-type'
import { RecipeType } from './recipe-type'

export type UserType = {
    id?: string
    name: string
    email: string
    password?: string
    image?: string
    createdAt?: string
    posts?: PostType[]
    recipes?: RecipeType[]
}
