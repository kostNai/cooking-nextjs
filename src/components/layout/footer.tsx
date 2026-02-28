import Logo from '@/../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='pt-40 pb-12 px-20'>
            <div className='flex justify-between items-center pb-12 border-b border-b-black/30 border-b-solid'>
                <div>
                    <Link href='/'>
                        <Image
                            src={Logo}
                            alt='Зображення з логотипом'
                            width={110}
                            height={30}
                        />
                    </Link>
                    <p className='mt-4 text-black/40'>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit,{' '}
                    </p>
                </div>
                <div>
                    <nav className='flex items-center gap-15 font-medium'>
                        <Link href='/'>Рецепти</Link>
                        <Link href='/'>Блог</Link>
                        <Link href='/'>Контакти</Link>
                        <Link href='/'>Про нас</Link>
                    </nav>
                </div>
            </div>
            <div className='pt-12 flex'>
                <p className='w-full text-center text-lg text-black/50'>
                    &copy; 2026 Lorem ipsum dolor sit{' '}
                    <span className='text-[#FF7967]'>amet.</span>
                </p>
                <div className='ml-auto flex gap-10'>
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
