'use client'

import { ChangeEvent, useActionState, useState } from 'react'
import { useUserStore } from '@/lib/store/store'
import { editUser } from '@/actions/user'
import Avatar from '../feature/avatar'
import Input from '../UI/input'
import Loading from '../feature/loading'
import { getMe } from '@/api/get-me'

const initialState = { status: false, message: '' }

export default function Profile() {
    const user = useUserStore((s) => s.user)

    const [userInputValue, setUserInputValue] = useState({
        name: '',
        email: '',
    })

    const onChangeUserInput = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInputValue((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const isUserDataChange =
        (userInputValue.name && userInputValue.name !== user?.name) ||
        (userInputValue.email && userInputValue.email !== user?.email)

    const formAction = (state: typeof initialState, formData: FormData) => {
        if (!user) return Promise.resolve(initialState)
        return editUser(user.id!, state, formData).then(async (res) => {
            if (res.status) {
                const updatedUser = await getMe()
                if (updatedUser) {
                    useUserStore.setState({ user: updatedUser })
                }
            }
            return res
        })
    }

    const [state, action, pending] = useActionState(formAction, initialState)

    if (!user) return <Loading size={50} />

    return (
        <div className='p-10'>
            <div>
                <Avatar />
            </div>
            <div className='pt-4'>
                <h3 className='text-2xl font-bold border-b border-b-solid border-b-black/20'>
                    Персональні дані
                </h3>
                <form action={action} className='pt-10'>
                    <div className='flex gap-10'>
                        <label className='text-black/60 flex-1 flex flex-col gap-2'>
                            ІМ&apos;Я
                            <Input
                                value={userInputValue.name || user?.name || ''}
                                onChange={onChangeUserInput}
                                type='text'
                                placeholder=''
                                name='name'
                            />
                        </label>
                        <label className='text-black/60 flex-1 flex flex-col gap-2'>
                            EMAIL
                            <Input
                                value={
                                    userInputValue.email || user?.email || ''
                                }
                                onChange={onChangeUserInput}
                                type='email'
                                placeholder=''
                                name='email'
                            />
                        </label>
                    </div>
                    <div className='flex justify-end pt-10'>
                        {isUserDataChange && (
                            <button
                                type='submit'
                                disabled={pending}
                                className='px-8 py-4 bg-black text-white rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-110'
                            >
                                Змінити
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
