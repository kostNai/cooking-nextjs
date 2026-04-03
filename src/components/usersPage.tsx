'use client'

import { useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'
import Button from './UI/button'
import { UserType } from '@/lib/types/user-type'
import UsersTable from './layout/users/users-table'
import AddUserModal from './layout/users/addUserModal'

type Props = {
    users: UserType[]
}

export default function UsersPage({ users }: Props) {
    const [isAddUser, setIsAddUser] = useState(false)

    return (
        <div className='relative p-10'>
            <Button
                onClick={() => setIsAddUser(true)}
                type='button'
                disabled={false}
            >
                Додати нового
                <FaUserPlus />
            </Button>

            <UsersTable users={users} />

            <AddUserModal
                open={isAddUser}
                onClose={() => setIsAddUser(false)}
            />
        </div>
    )
}
