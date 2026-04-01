'use server'

import { authFetch } from './auth-fetch'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function getUsers() {
    const res = await authFetch(`${apiUrl}/users`, {
        method: 'GET',
    })

    const json = await res.json()

    return json
}
