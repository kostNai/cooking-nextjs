import { TiHome } from 'react-icons/ti'
import { MdOutlineReceiptLong } from 'react-icons/md'
import { GrBlog } from 'react-icons/gr'
import { IoMdContacts } from 'react-icons/io'
import { FcAbout } from 'react-icons/fc'
import Link from 'next/link'
import { RxCross2 } from 'react-icons/rx'

type Props = {
    setIsMobileMenuOpen: (isMenuOpen: boolean) => void
    className: string
}

export default function MobileMenu({ setIsMobileMenuOpen, className }: Props) {
    return (
        <div
            className={`absolute right-2 top-8 px-8 py-4 z-10 flex flex-col gap-4 bg-gray-500 text-white rounded-lg transition-transform duratio *:flex *:gap-2 *:items-center ${
                className || ''
            }`}
        >
            <RxCross2
                className='absolute top-2 right-2'
                onClick={() => setIsMobileMenuOpen(false)}
            />
            <Link href='/'>
                <TiHome />
                Домашня
            </Link>
            <Link href='/'>
                <MdOutlineReceiptLong /> Рецепти
            </Link>
            <Link href='/'>
                <GrBlog />
                Блог
            </Link>
            <Link href='/'>
                <IoMdContacts />
                Контанкти
            </Link>
            <Link href='/'>
                <FcAbout />
                Про нас
            </Link>
        </div>
    )
}
