import Image from 'next/image'
import Link from 'next/link'

export default function ChefBanner() {
    return (
        <section className='pt-36 pb-40 flex gap-11'>
            <div className='flex-1/3 pt-42 flex flex-col gap-18'>
                <div>
                    <h2 className='text-5xl font-semibold'>
                        Кожен може бути шеф-кухарем у власній кухні
                    </h2>
                    <p className='mt-6 text-black/40'>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqut enim ad minim{' '}
                    </p>
                </div>
                <Link
                    href='/'
                    className='w-fit py-5.5 px-13 text-sm font-semibold text-white bg-black rounded-3xl'
                >
                    Дізнатися Більше
                </Link>
            </div>
            <div className='flex-2/3 shrink-0 bg-linear-to-b from-transparent to-card-bg rounded-3xl'>
                <Image
                    src='/chef.png'
                    alt='Картинка з зображенням усміхненого кухаря'
                    width={660}
                    height={600}
                    className='rounded-3xl'
                />
            </div>
        </section>
    )
}
