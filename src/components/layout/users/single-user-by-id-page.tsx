'use client'

import { toast } from 'react-toastify'
import { useActionState, useEffect, useState } from 'react'

import { editUser } from '@/actions/user'
import Avatar from '@/components/feature/avatar'
import Loading from '@/components/feature/loading'
import Button from '@/components/UI/button'
import Input from '@/components/UI/input'
import { UserType } from '@/lib/types/user-type'

type Props = {
    user: UserType
}
const initialState = { status: false, message: '' }

export default function SingleUserByIdPage({ user }: Props) {
    const [isFileChange, setIsFileChange] = useState<boolean>(false)
    const [isDirty, setIsDirty] = useState(false)

    const initialValues = {
        name: user?.name || '',
        email: user?.email || '',
        role: user?.role || 'USER',
    }

    const formAction = async (
        state: typeof initialState,
        formData: FormData
    ) => {
        if (!user) return Promise.resolve(initialState)
        const res = await editUser(user.id!, state, formData)
        if (res.status) {
            setIsFileChange(false)
            setIsDirty(false)
        }
        return res
    }
    const [state, action, pending] = useActionState(formAction, initialState)

    useEffect(() => {
        if (state.message) {
            if (state.status) {
                toast.success(state.message)
            } else {
                toast.error(state.message)
            }
        }
    }, [state])

    if (!user) return <Loading size={50} />

    const isUserDataChange = isDirty || isFileChange

    const handleChange = (form: HTMLFormElement) => {
        const formData = new FormData(form)

        const name = (formData.get('name') as string) || ''
        const email = (formData.get('email') as string) || ''
        const role = (formData.get('role') as string) || 'USER'

        const isChanged =
            name !== initialValues.name ||
            email !== initialValues.email ||
            role !== initialValues.role

        setIsDirty(isChanged)
    }

    return pending ? (
        <Loading size={50} />
    ) : (
        <div className='p-10'>
            <form
                action={action}
                onChange={(e) => handleChange(e.currentTarget)}
            >
                <div>
                    <Avatar
                        image={user.image}
                        setIsFileChange={setIsFileChange}
                    />
                </div>
                <div className='pt-4'>
                    <h3 className='text-2xl font-bold border-b border-b-solid border-b-black/20'>
                        Персональні дані
                    </h3>
                    <div className='flex gap-10 pt-10'>
                        <label className='text-black/60 flex-1 flex flex-col gap-2'>
                            ІМ&apos;Я
                            <Input
                                defaultValue={user.name || ''}
                                name='name'
                                type='text'
                                onChange={() => setIsDirty(true)}
                            />
                        </label>
                        <label className='text-black/60 flex-1 flex flex-col gap-2'>
                            EMAIL
                            <Input
                                defaultValue={user.email || ''}
                                name='email'
                                type='email'
                                onChange={() => setIsDirty(true)}
                            />
                        </label>
                        <label className='text-black/60 flex-1 flex flex-col gap-2'>
                            РОЛЬ
                            <select
                                name='role'
                                defaultValue={user.role}
                                onChange={() => setIsDirty(true)}
                                className='text-sm px-5 py-4.5 border border-solid border-black/10 rounded-2xl focus:outline-black/60 bg-white'
                            >
                                <option value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                                <option value='MODERATOR'>MODERATOR</option>
                            </select>
                        </label>
                    </div>
                    <div className='flex justify-between pt-10'>
                        <Button type='button' disabled={pending}>
                            Видалити
                        </Button>
                        {isUserDataChange && (
                            <Button type='submit' disabled={pending}>
                                Змінити
                            </Button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
}
