import { UserType } from './user-type'

export type PostType = {
    is?: string
    title: string
    text: string
    image: string
    userId: string
    createdAt?: string
    user?: UserType
}
