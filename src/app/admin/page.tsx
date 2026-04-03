import { getMe } from '@/actions/get-me'
import Profile from '@/components/layout/users/profile-page'

export default async function AdminPage() {
    const user = await getMe()

    if (!user) {
        throw new Error('Користувач не авторизований')
    }

    if (user.role !== 'ADMIN' && user.role !== 'MODERATOR') {
        throw new Error('У вас немає прав для перегляду цієї сторінки')
    }

    return (
        <div>
            <Profile user={user} />
        </div>
    )
}
