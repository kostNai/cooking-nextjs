import Image, { StaticImageData } from 'next/image'
import Fork from '@/../public/icons/fork.svg'
import Knife from '@/../public/icons/knife.svg'
import Timer from '@/../public/icons/timer.svg'
import { GoHeartFill } from 'react-icons/go'

type Props = {
    img: StaticImageData
    title: string
    isFavorite: boolean
    cookingTime: number
    category: string
}

export default function ReceipCard({
    img,
    title,
    isFavorite,
    cookingTime,
    category,
}: Props) {
    return (
        <article className='relative px-4 pt-4 pb-8 bg-linear-to-b from-transparent to-card-bg w-100 rounded-4xl'>
            <div className='rounded-2xl'>
                <div className='absolute top-10 right-10 rounded-full p-4 flex items-center justify-center bg-white'>
                    <GoHeartFill
                        size={20}
                        color={isFavorite ? '#FF6363' : '#DBE2E5'}
                        className='cursor-pointer transition-transform duration-300 hover:scale-120'
                    />
                </div>
                <Image
                    src={img}
                    alt={`Картинка з зображенням готової страви ${title}`}
                    height={250}
                    className='rounded-2xl'
                />
            </div>
            <div className='my-6'>
                <h3 className='text-2xl font-semibold line-clamp-2'>{title}</h3>
            </div>
            <div>
                <div className='flex items-center gap-6'>
                    <div className='flex gap-2.5'>
                        <Image src={Timer} alt='Іконка з зображенням таймеру' />
                        {cookingTime} хвилин
                    </div>
                    <div className='flex gap-2.5'>
                        <Image src={Fork} alt='Іконка з зображенням виделки' />
                        <Image src={Knife} alt='Іконка з зображенням ножа' />
                        {category}
                    </div>
                </div>
            </div>
        </article>
    )
}
