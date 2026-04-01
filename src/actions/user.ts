'use server'

import { revalidatePath } from 'next/cache'
import { authFetch } from './auth-fetch'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function editUser(
    id: string,
    initialState: { status: boolean; message: string[] | string },
    formData: FormData
) {
    const image = formData.get('image') as File
    if (!image || image.size === 0) {
        formData.delete('image')
    }
    const res = await authFetch(`${apiUrl}/users/${id}`, {
        method: 'PATCH',
        body: formData,
    })
    const json = await res.json()

    if (!json) {
        return { status: false, message: 'Помилка' }
    }

    return { status: true, message: 'Змінено успішно' }
}

export async function addUser(
    initialState: { status: boolean; message: string[] | string },
    formData: FormData
) {
    const { name, email, password, confirmPassword } =
        Object.fromEntries(formData)

    if (password !== confirmPassword)
        return { status: false, message: 'Паролі мають співпадати' }

    const res = await authFetch(`${apiUrl}/users`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            email,
            password,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const json = await res.json()

    if (res.status !== 201) {
        return { status: false, message: json.message }
    }
    revalidatePath('/profile')
    return { status: true, message: 'Додано успішно' }
}
