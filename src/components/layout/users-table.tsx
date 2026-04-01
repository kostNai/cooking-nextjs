'use client'

import { deleteUser } from '@/api/(users)/delete-user'
import { UserType } from '@/lib/types/user-type'
import { useRouter } from 'next/navigation'
import { MouseEvent, useEffect, useState } from 'react'

import { MdDelete } from 'react-icons/md'
import { toast } from 'react-toastify'

type Props = {
    users: UserType[]
}

export default function UsersTable({ users }: Props) {
    const [deleteStatus, setDeleteStatus] = useState<{
        status: boolean
        message: string
    }>({
        status: false,
        message: '',
    })

    const router = useRouter()

    const onDeleteUserHandler = async (e: MouseEvent, userId: string) => {
        e.stopPropagation()

        deleteUser(userId).then((data) => setDeleteStatus(data))
    }

    useEffect(() => {
        if (deleteStatus.status && deleteStatus.message)
            toast.success(deleteStatus.message)
        if (!deleteStatus.status && deleteStatus.message)
            toast.error(deleteStatus.message)
    }, [deleteStatus])

    return (
        <div className='rounded-xl overflow-hidden mt-10'>
            <table className='border-collapse w-full'>
                <thead className='bg-black/60 text-white'>
                    <tr className='*:text-start *:p-4'>
                        <th scope='col'>Id</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr
                            key={u.id}
                            className='even:bg-black/10 transition-colors duration-300 hover:bg-black/50 cursor-pointer *:text-start *:p-4 '
                            onClick={() => router.push(`/users/${u.id}`)}
                        >
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>
                                <MdDelete
                                    onClick={(e) =>
                                        onDeleteUserHandler(e, u.id!)
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
