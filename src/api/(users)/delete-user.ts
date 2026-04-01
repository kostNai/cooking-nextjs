import { revalidateByPath } from '@/actions/cache-actions'
import { authFetch } from '../(auth)/auth-fetch'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function deleteUser(id: string) {
    const res = await authFetch(`${apiUrl}/users/${id}`, {
        method: 'DELETE',
    })

    const json = await res.json()
    revalidateByPath('/profile')

    return json
        ? { status: true, message: 'Видалено успішно' }
        : { status: false, message: 'Помилка' }
}
