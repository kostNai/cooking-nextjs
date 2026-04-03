import { getUserById } from '@/actions/user'
import SingleUserByIdPage from '@/components/layout/users/single-user-by-id-page'

export default async function userPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    const user = await getUserById(id)

    return (
        <section>
            <SingleUserByIdPage user={user} />
        </section>
    )
}
