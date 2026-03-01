import Image from 'next/image'

type Props = {
    img: string
    title: string
    bgColor: string
}

export default function CategoryCard({ img, title, bgColor }: Props) {
    return (
        <article
            className='px-10 pb-7.5 rounded-4xl flex-1 w-45 max-w-45 min-w-45 shrink-0 max-xl-w-[300px] max-xl:max-w-75 max-xl:min-w-62.5 max-sm:flex-1 max-sm:max-w-full max-sm:rounded-none'
            style={{
                backgroundImage: `linear-gradient(to bottom, transparent, ${bgColor})`,
            }}
        >
            <div className='flex justify-center'>
                <Image
                    src={img}
                    alt={`Картинка з зображенням назви категорії - ${title}`}
                    width={100}
                    height={100}
                />
            </div>
            <div className='mt-12.5 flex justify-center'>
                <h3 className='text-lg font-semibold capitalize text-center'>
                    {title}
                </h3>
            </div>
        </article>
    )
}
