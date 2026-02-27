import Image from 'next/image'
import Link from 'next/link'

import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

import Logo from '@/../public/logo.svg'

export default function Header() {
    return (
        <header className='px-20 py-11 flex justify-between items-center border-b border-b-black/20 border-b-solid'>
            <div>
                <Link href='/'>
                    <Image
                        src={Logo}
                        alt='Зображення з логотипом'
                        width={110}
                        height={30}
                    />
                </Link>
            </div>
            <div>
                <nav className='flex items-center gap-15 *:hover:underline'>
                    <Link href='/'>Домашня</Link>
                    <Link href='/'>Рецепти</Link>
                    <Link href='/'>Блог</Link>
                    <Link href='/'>Контакти</Link>
                    <Link href='/'>Про нас</Link>
                </nav>
            </div>
            <div className='flex gap-10 items-center *:hover:transition-transform *:duration-300 *:hover:scale-120'>
                <Link href='/'>
                    <FaFacebookF />
                </Link>
                <Link href='/'>
                    <FaTwitter />
                </Link>
                <Link href='/'>
                    <FaInstagram />
                </Link>
            </div>
        </header>
    )
}
