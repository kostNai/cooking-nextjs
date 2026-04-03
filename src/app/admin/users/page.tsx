import { getUsers } from '@/actions/users'
import UsersPage from '@/components/usersPage'

export default async function ProfileUsersPage() {
    try {
        const users = await getUsers()

        if (!Array.isArray(users)) {
            throw new Error(
                users?.message || 'Не вдалося завантажити користувачів'
            )
        }

        return <UsersPage users={users} />
    } catch (err: any) {
        throw new Error(err?.message || 'Помилка при завантаженні користувачів')
    }
}
