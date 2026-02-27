import Link from 'next/link'
import CategoryCard from './categoryCard'

const categories = [
    {
        img: '/categories/breakfast.png',
        title: 'Сніданки',
        bgColor: '#70824620',
    },
    {
        img: '/categories/vegan.png',
        title: 'Для веганів',
        bgColor: '#6CC63F20',
    },
    {
        img: '/categories/meat.png',
        title: "М'ясні страви",
        bgColor: '#CC261B20',
    },
    {
        img: '/categories/dessert.png',
        title: 'Десерти',
        bgColor: '#F09E0020',
    },
    {
        img: '/categories/lunch.png',
        title: 'Обіди',
        bgColor: '#00000020',
    },
    {
        img: '/categories/chocolate.png',
        title: 'Шоколад',
        bgColor: '#00000020',
    },
]

export default function CategoriesList() {
    return (
        <section className='pt-40'>
            <div className='flex justify-between'>
                <h2 className='text-5xl font-semibold'>Категорії</h2>
                <Link
                    href='/'
                    className='font-semibold px-7 py-5 bg-card-bg rounded-2xl capitalize'
                >
                    Усі категорії
                </Link>
            </div>
            <div className='mt-20 flex justify-between'>
                {categories.map((category) => (
                    <CategoryCard
                        key={category.title}
                        img={category.img}
                        title={category.title}
                        bgColor={category.bgColor}
                    />
                ))}
            </div>
        </section>
    )
}
