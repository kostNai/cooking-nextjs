import Image from 'next/image'
import Link from 'next/link'

import HotReceip from '@/../public/icons/hot-receip.svg'
import Timer from '@/../public/icons/timer.svg'
import Fork from '@/../public/icons/fork.svg'
import Knife from '@/../public/icons/knife.svg'
import { BiSolidRightArrow } from 'react-icons/bi'

export default function MainBanner() {
    return (
        <section className='w-full relative flex pt-10 pb-20'>
            <div className='absolute top-22.5 left-1/2 -translate-x-1/2 z-10 '>
                <Image
                    src='/badge.png'
                    alt='Картинка з зображенням лайку'
                    width={150}
                    height={150}
                />
            </div>
            <div className='flex-1/2  p-12.5 bg-card-bg grow-0'>
                <div className='w-fit py-2.5 px-5 rounded-3xl flex items-center gap-3 bg-white'>
                    <Image src={HotReceip} alt='Іконка з зображенням рецепта' />
                    <p className='text-sm font-semibold'>Гарячі рецепти</p>
                </div>
                <div className='mt-8'>
                    <h1 className='text-[64px] font-semibold'>
                        Пікантні смачні курячі крильця
                    </h1>
                    <p className='mt-6 text-black/50'>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqut enim ad minim
                    </p>
                </div>
                <div className='mt-12.5 flex items-center gap-4'>
                    <div className='px-5 py-3 flex items-center gap-3 rounded-3xl bg-black/10'>
                        <Image src={Timer} alt='Іконка з зображенням таймеру' />
                        30 Хвилин
                    </div>
                    <div className='px-5 py-3 flex items-center gap-3 rounded-3xl bg-black/10'>
                        <div className='flex'>
                            <Image
                                src={Fork}
                                alt='Іконка з зображенням виделки'
                            />
                            <Image
                                src={Knife}
                                alt='Іконка з зображенням ножа'
                            />
                        </div>
                        Курча
                    </div>
                </div>
                <div className='mt-26 flex justify-between'>
                    <div className='flex gap-4 items-center'>
                        <div className='w-12.5 h-12.5 rounded-full bg-red-200'></div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Петро Петренко</p>
                            <p className='text-sm text-black/40'>
                                15 Березня 2025
                            </p>
                        </div>
                    </div>
                    <div>
                        <Link
                            href='/'
                            className='px-9 py-5 flex items-center gap-4 bg-black text-white text-sm font-semibold rounded-2xl'
                        >
                            Переглянути Рецепт
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
            <div className='w-1/2 shrink-0 relative'>
                <Image
                    fill
                    style={{ objectFit: 'cover' }}
                    src='/main-banner.png'
                    alt='Зображення з тарілкою зі смаженими курячами крильцями та соусом'
                />
            </div>
        </section>
    )
}
