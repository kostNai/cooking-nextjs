'use client'

import { useAccessToken } from '@/lib/store/store'

export async function refreshAccessToken(): Promise<string | null> {
    try {
        const res = await fetch('http://localhost:3001/auth/refresh', {
            method: 'POST',
            credentials: 'include',
        })

        if (!res.ok) {
            useAccessToken.getState().removeToken()
            return null
        }

        const data = await res.json()
        useAccessToken.getState().setToken(data.access_token)

        return data.access_token
    } catch (err) {
        useAccessToken.getState().removeToken()
        return null
    }
}
