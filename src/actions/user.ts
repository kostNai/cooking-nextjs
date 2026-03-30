'use server'

import { useUserStore } from '@/lib/store/store'
import { authFetch } from './auth-fetch'

export async function editUser(
    id: string,
    initialState: { status: boolean; message: string[] | string },
    formData: FormData
) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string

    await authFetch(`http://localhost:3001/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ name, email }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return { status: true, message: 'Змінено успішно' }
}
