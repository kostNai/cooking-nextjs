'use client'

import { ChangeEvent, useActionState, useEffect, useState } from 'react'
import { addUser } from '@/actions/user'
import { toast } from 'react-toastify'
import Button from '@/components/UI/button'
import Input from '@/components/UI/input'
import Modal from '@/components/UI/modal'

type Props = {
    open: boolean
    onClose: () => void
}

const initialState = { status: false, message: '' }

export default function AddUserModal({ open, onClose }: Props) {
    const [newUserValues, setNewUserValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [state, action, pending] = useActionState(addUser, initialState)

    const onChangeNewUserInputs = (
        e: ChangeEvent<HTMLInputElement, HTMLInputElement>
    ) => {
        setNewUserValues({
            ...newUserValues,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        if (!state.status && state.message) {
            if (Array.isArray(state.message)) {
                state.message.map((m) => toast.error(m))
            } else {
                toast.error(state.message)
            }
        }
        if (state.status && state.message) toast.success(state.message)
    }, [state])

    return (
        <Modal open={open} onClose={onClose}>
            <h2 className='text-xl mb-4'>Новий користувач</h2>

            <form className='flex flex-col gap-3' action={action}>
                <Input
                    type='text'
                    placeholder="Ім'я"
                    value={newUserValues.name}
                    onChange={onChangeNewUserInputs}
                    name='name'
                />
                <Input
                    type='email'
                    placeholder='Email'
                    value={newUserValues.email}
                    onChange={onChangeNewUserInputs}
                    name='email'
                />
                <Input
                    type='password'
                    placeholder='Пароль'
                    value={newUserValues.password}
                    onChange={onChangeNewUserInputs}
                    name='password'
                />
                <Input
                    type='password'
                    placeholder='Повторіть пароль'
                    value={newUserValues.confirmPassword}
                    onChange={onChangeNewUserInputs}
                    name='confirmPassword'
                />

                <div className='flex  gap-2 mt-4'>
                    <Button type='submit' disabled={false}>
                        Зберегти
                    </Button>
                    <Button type='button' onClick={onClose} disabled={pending}>
                        Скасувати
                    </Button>
                </div>
            </form>
        </Modal>
    )
}
