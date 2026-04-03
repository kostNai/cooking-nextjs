import { PostType } from './post-type'
import { RecipeType } from './recipe-type'

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MODERATOR = 'MODERATOR',
}

export type UserType = {
    id?: string
    name: string
    email: string
    role: UserRole
    password?: string
    image?: string
    createdAt?: string
    posts?: PostType[]
    recipes?: RecipeType[]
}
