'use client'
import { useAccessToken } from '@/lib/store/store'
import { refreshAccessToken } from './refreshAccessToken'

export async function authFetch(url: string, options: RequestInit = {}) {
    let token = useAccessToken.getState().token

    if (!token) {
        token = await refreshAccessToken()
    }

    const headers = {
        ...options.headers,
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }

    let response = await fetch(url, {
        ...options,
        headers,
        credentials: 'include',
    })

    if (response.status === 401) {
        const newToken = await refreshAccessToken()
        if (!newToken) return response

        response = await fetch(url, {
            ...options,
            headers: { ...headers, Authorization: `Bearer ${newToken}` },
            credentials: 'include',
        })
    }

    return response
}
