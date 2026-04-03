'use client'

import { useRouter } from 'next/navigation'
import { MouseEvent, useEffect, useState } from 'react'

import { toast } from 'react-toastify'
import { MdDelete } from 'react-icons/md'

import Modal from '@/components/UI/modal'
import Button from '@/components/UI/button'
import Tooltip from '@/components/UI/tooltip'
import { UserType } from '@/lib/types/user-type'
import Loading from '@/components/feature/loading'
import { deleteUser } from '@/api/(users)/delete-user'
import { formatIsoToCustom } from '@/lib/helpers/format-iso-to-custom'

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
    const [isUserDelete, setIsUserDelete] = useState<boolean>(false)
    const [userId, setUserId] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const router = useRouter()

    const onDeleteUserHandler = async (e: MouseEvent, id: string) => {
        e.stopPropagation()
        setUserId(id)
        setIsUserDelete(true)
    }
    const onConfirmDeleteUser = async () => {
        setIsLoading(true)
        deleteUser(userId).then((data) => setDeleteStatus(data))
        setIsLoading(false)
        setIsUserDelete(false)
    }

    useEffect(() => {
        if (deleteStatus.status && deleteStatus.message)
            toast.success(deleteStatus.message)
        if (!deleteStatus.status && deleteStatus.message)
            toast.error(deleteStatus.message)
    }, [deleteStatus])

    return (
        <div className='rounded-xl overflow-hidden mt-10 z-0'>
            <table className='border-collapse w-full table-fixed'>
                <thead className='bg-black/60 text-white'>
                    <tr className='*:text-start *:p-4'>
                        <th scope='col'>Id</th>
                        <th scope='col' className='pl-12'>
                            Ім&apos;я
                        </th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Роль</th>
                        <th scope='col'>Додано</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr
                            key={u.id}
                            className='even:bg-black/10 transition-colors duration-300 hover:bg-black/50 cursor-pointer *:text-start *:p-4 '
                            onClick={() => router.push(`/admin/users/${u.id}`)}
                        >
                            <td>
                                <Tooltip text={u.id!}>{u.id}</Tooltip>
                            </td>
                            <td>
                                <Tooltip text={u.name}>{u.name}</Tooltip>
                            </td>
                            <td>
                                <Tooltip text={u.email}>{u.email}</Tooltip>
                            </td>
                            <td>
                                <Tooltip text={u.email}>{u.role}</Tooltip>
                            </td>
                            <td>
                                <Tooltip text={formatIsoToCustom(u.createdAt!)}>
                                    {formatIsoToCustom(u.createdAt!)}
                                </Tooltip>
                            </td>
                            <td className='flex justify-center'>
                                <MdDelete
                                    className='transition duration-300 hover:scale-110 hover:text-red-700'
                                    onClick={(e) =>
                                        onDeleteUserHandler(e, u.id!)
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isLoading ? (
                <Loading size={50} />
            ) : (
                <Modal
                    open={isUserDelete}
                    onClose={() => setIsUserDelete(false)}
                >
                    <div>
                        <h3>
                            Ви збираєтеся видалити данного користувача назавжди!
                            Ви впевнені?
                        </h3>
                        <div className='flex gap-4 pt-4'>
                            <Button
                                type='button'
                                disabled={false}
                                onClick={onConfirmDeleteUser}
                            >
                                Так
                            </Button>
                            <Button
                                type='button'
                                disabled={false}
                                onClick={() => setIsUserDelete(false)}
                            >
                                Ні
                            </Button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}
