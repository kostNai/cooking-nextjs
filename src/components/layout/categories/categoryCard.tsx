import Image from 'next/image'

type Props = {
    img: string
    title: string
    bgColor: string
}

export default function CategoryCard({ img, title, bgColor }: Props) {
    return (
        <article
            className='px-10 pb-7.5 rounded-4xl'
            style={{
                backgroundImage: `linear-gradient(to bottom, transparent, ${bgColor})`,
            }}
        >
            <div>
                <Image
                    src={img}
                    alt={`Картинка з зображенням назви категорії - ${title}`}
                    width={100}
                    height={100}
                />
            </div>
            <div className='mt-12.5 flex justify-center'>
                <h3 className='text-lg font-semibold capitalize'>{title}</h3>
            </div>
        </article>
    )
}
