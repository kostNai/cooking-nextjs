'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'

import Logo from '@/../public/logo.svg'
import { useState } from 'react'
import MobileMenu from '../feature/mobileMenu'

export default function Header() {
    const [isMobieleMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    return (
        <header className='relative px-20 py-11 flex justify-between items-center border-b border-b-black/20 border-b-solid max-md:px-5 '>
            {isMobieleMenuOpen && (
                <MobileMenu
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    className=''
                />
            )}
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
                <nav className='flex items-center gap-15 *:hover:underline max-lg:gap-4 max-sm:hidden'>
                    <Link href='/'>Домашня</Link>
                    <Link href='/'>Рецепти</Link>
                    <Link href='/'>Блог</Link>
                    <Link href='/'>Контакти</Link>
                    <Link href='/'>Про нас</Link>
                </nav>
            </div>
            <div className='flex gap-10 items-center *:hover:transition-transform *:duration-300 *:hover:scale-120 max-lg:gap-4 max-md:gap-2 max-sm:gap-4'>
                <Link href='/'>
                    <FaFacebookF size={22} />
                </Link>
                <Link href='/'>
                    <FaTwitter size={22} />
                </Link>
                <Link href='/'>
                    <FaInstagram size={22} />
                </Link>
            </div>
            <div className='sm:hidden '>
                <RxHamburgerMenu
                    size={22}
                    onClick={() => setIsMobileMenuOpen(true)}
                />
            </div>
        </header>
    )
}
