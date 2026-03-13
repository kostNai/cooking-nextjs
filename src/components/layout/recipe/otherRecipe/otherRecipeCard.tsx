import Image, { type StaticImageData } from 'next/image'

type Props = {
    image: StaticImageData
    title: string
    author: string
}

export default function OtherRecipeCard({ image, title, author }: Props) {
    return (
        <div className='flex gap-6 items-center'>
            <div className='min-w-45 min-h-30 relative aspect-video overflow-hidden rounded-[20px]'>
                <Image
                    src={image}
                    alt={`Картинка з зображенням${title}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='rounded-[20px] shrink-0 transition-transform duration-300 hover:scale-125'
                />
            </div>
            <div className='flex flex-col gap-4 grow-0'>
                <h3 className='text-xl font-semibold line-clamp-1'>{title}</h3>
                <p>{author}</p>
            </div>
        </div>
    )
}
