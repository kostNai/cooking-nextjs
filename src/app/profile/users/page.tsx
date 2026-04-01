import { getUsers } from '@/actions/users'
import UsersPage from '@/components/usersPage'

export default async function ProfileUsersPage() {
    const users = await getUsers()

    return <UsersPage users={users} />
}
