'use client'

import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect, useState } from 'react'

import Input from '@/components/UI/input'
import { editUser } from '@/actions/user'
import Button from '@/components/UI/button'
import { getMe } from '@/api/(auth)/get-me'
import Avatar from '@/components/feature/avatar'
import { UserType } from '@/lib/types/user-type'
import { useUserStore } from '@/lib/store/store'
import Loading from '@/components/feature/loading'

type Props = {
    user: UserType
}

const initialState = { status: false, message: '' }

export default function Profile({ user }: Props) {
    const [isFileChange, setIsFileChange] = useState(false)
    const [isDirty, setIsDirty] = useState(false)

    const router = useRouter()

    const initialValues = {
        name: user?.name || '',
        email: user?.email || '',
    }

    const formAction = async (
        state: typeof initialState,
        formData: FormData
    ) => {
        if (!user) return initialState

        const res = await editUser(user.id!, state, formData)

        if (res.status) {
            const updatedUser = await getMe()
            if (updatedUser) {
                useUserStore.setState({ user: updatedUser })
                setIsFileChange(false)
                setIsDirty(false)
            }
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
    useEffect(() => {
        if (user && user.role !== 'ADMIN' && user.role !== 'MODERATOR') {
            router.push('/')
        }
    }, [user, router])

    if (!user || (user.role !== 'ADMIN' && user.role !== 'MODERATOR'))
        return <Loading size={50} />

    const isUserDataChange = isDirty || isFileChange

    const handleChange = (form: HTMLFormElement) => {
        const formData = new FormData(form)

        const name = (formData.get('name') as string) || ''
        const email = (formData.get('email') as string) || ''

        const isChanged =
            name !== initialValues.name || email !== initialValues.email

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
                <Avatar image={user.image} setIsFileChange={setIsFileChange} />

                <div className='pt-4'>
                    <h3 className='text-2xl font-bold border-b border-black/20'>
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
