'use client'
import Loading from '@/components/feature/loading'
import { RegisterType } from '@/lib/types/register-type'
import Link from 'next/link'
import { ChangeEvent, useActionState, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import Input from '@/components/UI/input'
import { register } from '@/actions/auth'

const initialState = { status: false, message: '' }

export default function Register() {
    const [state, formAction, pending] = useActionState(register, initialState)

    const [registerFormData, setRegisterFormData] = useState<RegisterType>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] =
        useState<boolean>(false)

    useEffect(() => {
        if (!state.status && state.message) {
            if (Array.isArray(state.message)) {
                state.message.forEach((mes) => toast.error(mes))
            } else {
                toast.error(state.message)
            }
        }
        if (state.status && state.message) toast.success(state.message)

        console.log(state)
    }, [state])

    const onChangeRegisterInputs = (
        e: ChangeEvent<HTMLInputElement, HTMLInputElement>
    ) => {
        setRegisterFormData({
            ...registerFormData,
            [e.target.name]: e.target.value,
        })
    }

    return pending ? (
        <Loading size={20} />
    ) : (
        <div className='w-full py-10 flex flex-col justify-center items-center gap-10'>
            <h2 className=''>Реєстрація</h2>
            <form
                className='w-100 px-16 py-8  shadow-2xl drop-shadow-card-bg  rounded-xl'
                action={formAction}
            >
                <div className='flex flex-col gap-10 *:flex *:flex-col *:gap-3 *:uppercase *:text-xs *:text-black/60 *:font-medium'>
                    <label>
                        ім&apos;я
                        <Input
                            value={registerFormData.name}
                            onChange={onChangeRegisterInputs}
                            type='text'
                            placeholder="Введіть ім'я"
                            name='name'
                        />
                    </label>
                    <label>
                        email
                        <Input
                            value={registerFormData.email}
                            onChange={onChangeRegisterInputs}
                            type='email'
                            placeholder='Введіть email'
                            name='email'
                        />
                    </label>
                    <label className='relative'>
                        пароль
                        <Input
                            value={registerFormData.password}
                            onChange={onChangeRegisterInputs}
                            type={isShowPassword ? 'text' : 'password'}
                            placeholder='Введіть пароль'
                            name='password'
                        />
                        {isShowPassword ? (
                            <VscEyeClosed
                                size={16}
                                className='absolute top-1/2 right-2 translate-y-1/2 cursor-pointer'
                                onClick={() =>
                                    setIsShowPassword(!isShowPassword)
                                }
                            />
                        ) : (
                            <VscEye
                                size={16}
                                className='absolute top-1/2 right-2 translate-y-1/2 cursor-pointer'
                                onClick={() =>
                                    setIsShowPassword(!isShowPassword)
                                }
                            />
                        )}
                    </label>
                    <label className='relative'>
                        підтвердіть пароль
                        <Input
                            value={registerFormData.confirmPassword}
                            onChange={onChangeRegisterInputs}
                            type={isShowConfirmPassword ? 'text' : 'password'}
                            placeholder='повторіть пароль'
                            name='confirmPassword'
                        />
                        {isShowConfirmPassword ? (
                            <VscEyeClosed
                                size={16}
                                className='absolute top-1/2 right-2 translate-y-1/2 cursor-pointer'
                                onClick={() =>
                                    setIsShowConfirmPassword(
                                        !isShowConfirmPassword
                                    )
                                }
                            />
                        ) : (
                            <VscEye
                                size={16}
                                className='absolute top-1/2 right-2 translate-y-1/2 cursor-pointer'
                                onClick={() =>
                                    setIsShowConfirmPassword(
                                        !isShowConfirmPassword
                                    )
                                }
                            />
                        )}
                    </label>
                </div>
                <div className='flex items-center pt-10'>
                    <button className='flex-1 py-4 bg-black text-white rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-110'>
                        Реєстрація
                    </button>
                </div>
                <div className='pt-2 flex items-center justify-center gap-2 text-xs'>
                    <p>Маєте акаунт?</p>
                    <Link
                        href='login'
                        className='text-blue-500 hover:underline'
                    >
                        Вхід
                    </Link>
                </div>
            </form>
        </div>
    )
}
