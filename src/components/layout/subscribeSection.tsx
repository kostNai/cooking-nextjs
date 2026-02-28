import Image from 'next/image'

export default function SubscribeSection() {
    return (
        <section className='py-20 relative flex justify-center bg-card-bg rounded-[60px]'>
            <div>
                <div className='w-155'>
                    <h2 className='text-5xl font-semibold text-center'>
                        Смакота у вашій поштовій скриньці
                    </h2>
                    <p className='text-black/40 text-center mt-6'>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqut enim ad minim{' '}
                    </p>
                    <div className='px-17.5 mt-16'>
                        <div className='relative w-full'>
                            <input
                                type='email'
                                placeholder='Введіть ваш email'
                                className='relative text-sm py-8 pl-8 w-full bg-white rounded-3xl'
                            />
                            <button className='absolute right-2.5 top-1/2 -translate-y-1/2 text-sm text-white bg-black py-5.5 px-10.5 rounded-2xl cursor-pointer transition-colors duration-300 hover:bg-black/50'>
                                Підписатися
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src='/subscribe/salad.png'
                alt='Картинка з зображенням тарілки з салатом'
                width={355}
                height={355}
                className='absolute right-0 bottom-0 rounded-br-[60px]'
            />
            <Image
                src='/subscribe/vegitables.png'
                alt='Картинка з зображенням овочів'
                width={355}
                height={355}
                className='absolute left-0 bottom-0 rounded-bl-[60px]'
            />
            <Image
                src='/subscribe/rucola.png'
                alt='Картинка з зображенням шматочка руколи'
                width={66}
                height={90}
                className='absolute bottom-20 right-81 -rotate-33'
            />
        </section>
    )
}
