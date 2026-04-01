'use client'

import { ChangeEvent, useActionState, useEffect, useState } from 'react'
import { useUserStore } from '@/lib/store/store'
import { editUser } from '@/actions/user'
import Avatar from '../feature/avatar'
import Input from '../UI/input'
import Loading from '../feature/loading'
import { getMe } from '@/api/(auth)/get-me'
import { toast } from 'react-toastify'
import Button from '../UI/button'

const initialState = { status: false, message: '' }

export default function Profile() {
    const user = useUserStore((s) => s.user)

    const [userInputValue, setUserInputValue] = useState({
        name: '',
        email: '',
    })
    const [isFileChange, setIsFileChange] = useState<boolean>(false)

    const onChangeUserInput = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInputValue((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const isUserDataChange =
        (userInputValue.name && userInputValue.name !== user?.name) ||
        (userInputValue.email && userInputValue.email !== user?.email) ||
        isFileChange

    const formAction = async (
        state: typeof initialState,
        formData: FormData
    ) => {
        if (!user) return Promise.resolve(initialState)
        const res = await editUser(user.id!, state, formData)
        if (res.status) {
            const updatedUser = await getMe()
            if (updatedUser) {
                useUserStore.setState({ user: updatedUser })
                setIsFileChange(false)
            }
        }
        return res
    }

    const [state, action, pending] = useActionState(formAction, initialState)

    useEffect(() => {
        if (state && state.message) toast.success(state.message)
    }, [state])

    if (!user) return <Loading size={50} />

    return pending ? (
        <Loading size={50} />
    ) : (
        <div className='p-10'>
            <form action={action} className=''>
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
