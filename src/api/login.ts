'use client'
export type LoginResponse = { access_token: string; message?: string }

export async function login(
    email: string,
    password: string
): Promise<LoginResponse> {
    const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) throw new Error(data.message || 'Login failed')

    return data
}
