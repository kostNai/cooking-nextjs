import Link from 'next/link'

export default async function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className='py-16'>
            <div className='flex gap-4'>
                <nav className='bg-card-bg  flex-1/4 flex flex-col gap-10 pt-8 pb-32  rounded-xl *:py-2 *:text-center *:hover:bg-white/90 *:transition-colors *:duration-300'>
                    <Link href='profile/users'>Користувачі</Link>
                    <Link href='profile/recipes'>Рецепти</Link>
                    <Link href='profile'>Персональні дані</Link>
                    <Link href='profile/posts'>Пости</Link>
                    <Link href='logout'>Вихід</Link>
                </nav>
                <section className='flex-3/4 rounded-xl shadow-2xl'>
                    {children}
                </section>
            </div>
        </div>
    )
}
