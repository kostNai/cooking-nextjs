'use server'

import { authFetch } from './auth-fetch'

export const getMe = async () => {
    const res = await authFetch('http://localhost:3001/auth/@me')
    if (!res.ok) return null

    const data = await res.json()

    return {
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role,
        image: data.image ?? null,
    }
}
