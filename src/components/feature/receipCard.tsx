import Image, { StaticImageData } from 'next/image'
import Fork from '@/../public/icons/fork.svg'
import Knife from '@/../public/icons/knife.svg'
import Timer from '@/../public/icons/timer.svg'

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
        <article className='px-4 pt-4 pb-8 bg-linear-to-b from-transparent to-card-bg w-100 rounded-4xl'>
            <div className='rounded-2xl'>
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
