'use server'
import { cookies } from 'next/headers'

export async function authFetch(url: string, options?: RequestInit) {
    const cookieStore = cookies()
    const token = (await cookieStore).get('refreshToken')?.value

    return fetch(url, {
        ...options,
        headers: {
            ...options?.headers,
            Authorization: `Bearer ${token}`,
        },
    })
}
