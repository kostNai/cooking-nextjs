'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ProfileLayoutNav() {
    const pathName = usePathname()

    return (
        <nav className='bg-card-bg  flex-1/4 flex flex-col gap-10 pt-8 pb-32  rounded-xl *:py-2 *:text-center *:hover:bg-white/90 *:transition-colors *:duration-300'>
            <Link
                href='/admin/users'
                className={pathName === '/profile/users' ? `bg-white/90` : ''}
            >
                Користувачі
            </Link>
            <Link
                href='/admin/recipes'
                className={pathName === '/profile/recipes' ? `bg-white/90` : ''}
            >
                Рецепти
            </Link>
            <Link
                href='/admin'
                className={pathName === '/profile' ? `bg-white/90` : ''}
            >
                Персональні дані
            </Link>
            <Link
                href='/admin/posts'
                className={pathName === '/profile/posts' ? `bg-white/90` : ''}
            >
                Пости
            </Link>
            <Link href='/logout'>Вихід</Link>
        </nav>
    )
}
