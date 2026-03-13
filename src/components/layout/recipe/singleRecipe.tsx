import Image from 'next/image'

import { LuPrinter, LuShare } from 'react-icons/lu'

import Avatar from '@/components/feature/avatar'
import Timer from '@/../public/icons/timer.svg'
import Fork from '@/../public/icons/fork.svg'
import Knife from '@/../public/icons/knife.svg'
import Example from '@/../public/recipe-examlple.png'
import SingleRecipeIngredients from './singleRecipeIngredients'
import SingleRecipeDirections from './singleRecipeDIrections'
import OtherReceipe from './otherRecipe/otherRecipe'

export default function SingleReceip() {
    return (
        <section>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-[64px] font-semibold'>
                        Здоровий японський смажений рис
                    </h1>
                    <ul className='flex items-center mt-12'>
                        <li className='flex items-center gap-4'>
                            <Avatar />
                            <div className='flex flex-col justify-between'>
                                <h5 className='font-bold'>Петро Петренко</h5>
                                <p className='text-sm text-black/60'>
                                    15 Березня 2025
                                </p>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 ml-16 px-8 border-x border-x-solid border-x-black/10'>
                            <Image
                                src={Timer}
                                alt='Іконка з зображенням годинника'
                                width={24}
                                height={24}
                            />
                            <div className='flex flex-col justify-between'>
                                <p className='font-bold'>Час підготовки</p>
                                <p className='text-sm text-black/60'>
                                    15 хвилин
                                </p>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 px-8 border-r border-r-solid border-r-black/10'>
                            <Image
                                src={Timer}
                                alt='Іконка з зображенням годинника'
                                width={24}
                                height={24}
                            />
                            <div className='flex flex-col justify-between'>
                                <p className='font-bold'>Час готування</p>
                                <p className='text-sm text-black/60'>
                                    15 хвилин
                                </p>
                            </div>
                        </li>
                        <li className='flex gap-2.5 items-center pl-8'>
                            <div className='flex'>
                                <Image
                                    src={Fork}
                                    alt='Іконка з зображенням вилки'
                                    width={24}
                                    height={24}
                                    className=' aspect-square'
                                />
                                <Image
                                    src={Knife}
                                    alt='Іконка з зображенням ножа'
                                    width={24}
                                    height={24}
                                    className=' aspect-square'
                                />
                            </div>
                            <div>
                                <p className='text-sm text-black/60'>Курка</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-8'>
                    <div className='w-20 h-20 rounded-full flex justify-center items-center bg-card-bg cursor-pointer'>
                        <LuPrinter size={24} />
                    </div>
                    <div className='w-20 h-20 rounded-full flex justify-center items-center bg-card-bg cursor-pointer'>
                        <LuShare size={24} />
                    </div>
                </div>
            </div>
            <div className='mt-13.5 flex items-center justify-between gap-10 h-150'>
                <div className='flex-2/3 shrink-0 w-full h-full'>
                    <div className='relative w-full h-full'>
                        <Image
                            src={Example}
                            alt='Картинка з зображенням їжі'
                            className='rounded-4xl'
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
                <div className='flex-1/3 h-full grow shrink-0 bg-card-bg px-8 pt-8 rounded-4xl'>
                    <div>
                        <h3 className='text-2xl font-semibold'>
                            Інформація про харчову цінність
                        </h3>
                        <ul className='mt-6 flex flex-col gap-4 text-lg *:flex *:justify-between *:items-center *:pb-4 *:border-b *:border-b-solid *:border-b-black/30'>
                            <li>
                                <p className=' text-black/60'>Калорії</p>
                                <p className=' font-medium'>219.9 кКал</p>
                            </li>
                            <li>
                                <p className=' text-black/60'>Жири</p>
                                <p className=' font-medium'>10.7г</p>
                            </li>
                            <li>
                                <p className=' text-black/60'>Білки</p>
                                <p className=' font-medium'>7.9г</p>
                            </li>
                            <li>
                                <p className=' text-black/60'>Вуглеводи</p>
                                <p className=' font-medium'>22.3г</p>
                            </li>
                            <li>
                                <p className=' text-black/60'>Холестерин</p>
                                <p className=' font-medium'>37.4мг</p>
                            </li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='mt-20'>
                <p className='text-black/60'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className='pt-20 flex gap-10'>
                <div className='flex-2/3'>
                    <SingleRecipeIngredients />
                    <SingleRecipeDirections />
                </div>
                <div className='flex-1/3'>
                    <OtherReceipe />
                </div>
            </div>
        </section>
    )
}
