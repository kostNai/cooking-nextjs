// InitAuth.tsx
'use client'
import { useEffect } from 'react'
import { useAccessToken, useUserStore } from '@/lib/store/store'
import { getMe } from '@/api/(auth)/get-me'
import { authFetch } from '@/api/(auth)/auth-fetch'

export const InitAuth = () => {
    const setToken = useAccessToken((s) => s.setToken)
    const setUser = useUserStore((s) => s.setUser)
    const setInitialized = useUserStore((s) => s.setInitialized)

    useEffect(() => {
        const init = async () => {
            try {
                const res = await authFetch(
                    'http://localhost:3001/auth/refresh',
                    { method: 'POST' }
                )
                if (!res.ok) return setInitialized(true)

                const data = await res.json()
                const accessToken = data.access_token
                if (!accessToken) return setInitialized(true)

                setToken(accessToken)
                const userData = await getMe()
                if (userData) setUser(userData)
            } catch (err) {
                console.log('InitAuth error:', err)
            } finally {
                setInitialized(true)
            }
        }

        init()
    }, [setToken, setUser, setInitialized])

    return null
}
