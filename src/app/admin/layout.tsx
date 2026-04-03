import ProfileLayoutNav from '@/components/layout/profile/profile-layout-nav'

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className='py-16'>
            <div className='flex gap-4'>
                <ProfileLayoutNav />
                <section className='flex-3/4 rounded-xl shadow-2xl'>
                    {children}
                </section>
            </div>
        </div>
    )
}
