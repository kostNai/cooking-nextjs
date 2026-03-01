import Image from 'next/image'
import Link from 'next/link'

import HotReceip from '@/../public/icons/hot-receip.svg'
import Timer from '@/../public/icons/timer.svg'
import Fork from '@/../public/icons/fork.svg'
import Knife from '@/../public/icons/knife.svg'
import { BiSolidRightArrow } from 'react-icons/bi'

export default function MainBanner() {
    return (
        <section className='w-full relative flex pt-10 pb-20 max-xl:flex-col'>
            <div className='absolute w-fit top-22.5 left-1/2 -translate-x-1/2 z-10 max-xl:right-5 max-xl:top-5 max-lg:hidden'>
                <Image
                    src='/badge.png'
                    alt='Картинка з зображенням лайку'
                    width={150}
                    height={150}
                />
            </div>
            <div className='flex-1/2  p-12.5 bg-card-bg grow-0 rounded-tl-2xl rounded-bl-2xl max-xl:rounded-tr-2xl max-xl:rounded-bl-none max-sm:px-2 max-sm:py-8 max-sm:rounded-none'>
                <div className='w-fit py-2.5 px-5 rounded-3xl flex items-center gap-3 bg-white max-sm:justify-center max-sm:w-full'>
                    <Image src={HotReceip} alt='Іконка з зображенням рецепта' />
                    <p className='text-sm font-semibold'>Гарячі рецепти</p>
                </div>
                <div className='mt-8 max-sm:text-center'>
                    <h1 className='text-[64px] font-semibold max-lg:text-5xl '>
                        Пікантні смачні курячі крильця
                    </h1>
                    <p className='mt-6 text-black/50'>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqut enim ad minim
                    </p>
                </div>
                <div className='mt-12.5 flex items-center gap-4 '>
                    <div className='px-5 py-3 flex items-center gap-3 rounded-3xl bg-black/10 max-sm:flex-1 max-sm:justify-center'>
                        <Image
                            src={Timer}
                            alt='Іконка з зображенням таймеру'
                            className='max-sm:hidden'
                        />
                        30 Хвилин
                    </div>
                    <div className='px-5 py-3 flex items-center gap-3 rounded-3xl bg-black/10 max-sm:flex-1 max-sm:justify-center'>
                        <div className='flex'>
                            <Image
                                src={Fork}
                                alt='Іконка з зображенням виделки'
                                className='max-sm:hidden'
                            />
                            <Image
                                src={Knife}
                                alt='Іконка з зображенням ножа'
                                className='max-sm:hidden'
                            />
                        </div>
                        Курча
                    </div>
                </div>
                <div className='mt-26 flex justify-between max-lg:mt-12 max-sm:justify-start max-sm:gap-4'>
                    <div className='flex gap-4 items-center'>
                        <div className='w-12.5 h-12.5 rounded-full bg-red-200'></div>
                        <div className='flex flex-col gap-2 max-sm:hidden'>
                            <p className='font-bold'>Петро Петренко</p>
                            <p className='text-sm text-black/40'>
                                15 Березня 2025
                            </p>
                        </div>
                    </div>
                    <div>
                        <Link
                            href='/'
                            className='px-9 py-5 flex items-center gap-4 bg-black text-white text-sm font-semibold rounded-2xl max-sm:rounded-full max-sm:p-4 '
                        >
                            <span>Переглянути Рецепт</span>
                            <span className='p-1 flex items-center justify-between rounded-full bg-white'>
                                <BiSolidRightArrow
                                    size={16}
                                    color='black'
                                    className='ml-0.5'
                                />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-1/2 relative rounded-tr-2xl rounded-br-2xl max-xl:h-60 max-xl:w-full max-xl:rounded-tr-none max-xl:rounded-b-2xl max-sm:rounded-none'>
                <Image
                    fill
                    style={{ objectFit: 'cover' }}
                    src='/main-banner.png'
                    alt='Зображення з тарілкою зі смаженими курячами крильцями та соусом'
                    className='rounded-tr-2xl rounded-br-2xl max-xl:rounded-tr-none max-xl:rounded-b-2xl max-sm:rounded-none'
                />
            </div>
        </section>
    )
}
