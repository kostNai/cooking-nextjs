import Logo from '@/../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='pt-40 pb-12 px-20 max-lg:px-5 max-sm:px-2 max-sm:pt-8'>
            <div className='flex justify-between items-center pb-12 border-b border-b-black/30 border-b-solid max-lg gap-4 max-md:flex-col max-sm:pb-4'>
                <div>
                    <Link
                        href='/'
                        className='max-md:flex max-md:justify-center'
                    >
                        <Image
                            src={Logo}
                            alt='Зображення з логотипом'
                            width={110}
                            height={30}
                        />
                    </Link>
                    <p className='mt-4 text-black/40 max-sm:text-center'>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit
                    </p>
                </div>
                <div>
                    <nav className='flex items-center gap-15 font-medium max-lg:gap-6'>
                        <Link href='/'>Рецепти</Link>
                        <Link href='/'>Блог</Link>
                        <Link href='/'>Контакти</Link>
                        <Link href='/'>Про нас</Link>
                    </nav>
                </div>
            </div>
            <div className='pt-12 flex max-sm:flex-col max-sm:gap-4 max-sm:items-center max-sm:pt-4'>
                <p className='w-full text-center text-lg text-black/50'>
                    &copy; 2026 Lorem ipsum dolor sit
                    <span className='text-[#FF7967]'> amet.</span>
                </p>
                <div className='ml-auto flex gap-10 items-center max-sm:m-0'>
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
            </div>
        </footer>
    )
}
