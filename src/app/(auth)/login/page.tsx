'use client'

import Link from 'next/link'
import { ChangeEvent, SyntheticEvent, useState } from 'react'

import { toast } from 'react-toastify'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'

import { getMe } from '@/api/get-me'
import Input from '@/components/UI/input'
import { login as apiLogin } from '@/api/login'
import { LoginType } from '@/lib/types/login-type'
import { useAccessToken, useUserStore } from '@/lib/store/store'

export default function LoginPage() {
    const [loginFormData, setLoginFormData] = useState<LoginType>({
        email: '',
        password: '',
    })

    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

    const setToken = useAccessToken((state) => state.setToken)
    const setUser = useUserStore((state) => state.setUser)

    const onChangeLoginInputs = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const { access_token } = await apiLogin(
                loginFormData.email,
                loginFormData.password
            )

            setToken(access_token)

            const userData = await getMe()
            if (userData) setUser(userData)
        } catch (err: any) {
            toast.error(err.message || 'Помилка при вході')
        }
    }

    return (
        <div className='w-full py-10 flex flex-col justify-center items-center gap-10'>
            <h2 className=''>Вхід</h2>
            <form
                className='w-100 px-16 py-8 shadow-2xl drop-shadow-card-bg rounded-xl'
                onSubmit={onSubmit}
            >
                <div className='flex flex-col gap-10 *:flex *:flex-col *:gap-3 *:uppercase *:text-xs *:text-black/60 *:font-medium'>
                    <label>
                        email
                        <Input
                            value={loginFormData.email}
                            onChange={onChangeLoginInputs}
                            type='email'
                            placeholder='Введіть email'
                            name='email'
                        />
                    </label>
                    <label className='relative'>
                        пароль
                        <Input
                            value={loginFormData.password}
                            onChange={onChangeLoginInputs}
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
                </div>
                <div className='flex items-center pt-10'>
                    <button className='flex-1 py-4 bg-black text-white rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-110'>
                        Вхід
                    </button>
                </div>
                <div className='pt-2 flex items-center justify-center gap-2 text-xs'>
                    <p>Немає акаунту?</p>
                    <Link
                        href='register'
                        className='text-blue-500 hover:underline'
                    >
                        Реєстрація
                    </Link>
                </div>
            </form>
        </div>
    )
}
