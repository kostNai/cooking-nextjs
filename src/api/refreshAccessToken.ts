'use client'

import { useAccessToken } from '@/lib/store/store'

export async function refreshAccessToken() {
    try {
        const res = await fetch('/api/auth/refresh', {
            method: 'POST',
            credentials: 'include', // обов’язково для httpOnly cookie
        })

        if (!res.ok) {
            useAccessToken.getState().removeToken()
            return null
        }

        const data = await res.json()
        useAccessToken.getState().setToken(data.access_token)
        return data.access_token
    } catch (err) {
        console.error('Refresh token failed', err)
        useAccessToken.getState().removeToken()
        return null
    }
}
