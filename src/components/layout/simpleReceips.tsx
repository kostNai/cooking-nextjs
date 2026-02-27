import Burger from '@/../public/simple-receips/burger.png'
import Chicken from '@/../public/simple-receips/chicken.png'
import Pancakes from '@/../public/simple-receips/pancakes.png'
import Fish from '@/../public/simple-receips/fish.png'
import Salad from '@/../public/simple-receips/salad.png'
import MeetBalls from '@/../public/simple-receips/meetballs.png'
import Pancake from '@/../public/simple-receips/pancake.png'
import Pasta from '@/../public/simple-receips/pasta.png'
import ReceipCard from '../feature/receipCard'

const data = [
    {
        img: Burger,
        title: 'Великий і соковитий чізбургер з яловичиною вагю',
        cookingTime: 30,
        category: 'Снек',
        isFavorite: true,
    },
    {
        img: Fish,
        title: 'Свіжий лосось, запечений з лаймом та імбирним соусом',
        cookingTime: 30,
        category: 'Риба',
        isFavorite: false,
    },
    {
        img: Pancakes,
        title: 'Полуничні вівсяні млинці з медовим сиропом',
        cookingTime: 30,
        category: 'Сніданки',
        isFavorite: false,
    },
    {
        img: Salad,
        title: 'Свіжий і корисний салат із майонезом',
        cookingTime: 30,
        category: 'Корисні страви',
        isFavorite: true,
    },
    {
        img: MeetBalls,
        title: 'Курячі фрикадельки з вершковим сиром',
        cookingTime: 30,
        category: "М'ясні страви",
        isFavorite: false,
    },
    {
        img: Burger,
        title: 'Великий і соковитий чізбургер з яловичиною вагю',
        cookingTime: 30,
        category: 'Снек',
        isFavorite: true,
    },
    {
        img: Pancake,
        title: 'Фруктовий млинець з апельсином і чорницею',
        cookingTime: 30,
        category: 'Десерт',
        isFavorite: false,
    },
    {
        img: Chicken,
        title: 'Найкраща проста страва з куркою та рисом, приготована в одному казанку',
        cookingTime: 30,
        category: 'Корисні страви',
        isFavorite: false,
    },
    {
        img: Pasta,
        title: 'Найкремовіша паста з куркою та беконом',
        cookingTime: 30,
        category: 'Локшина',
        isFavorite: false,
    },
]

export default function SimpleReceips() {
    return (
        <section className='pt-46'>
            <div className='flex flex-col items-center gap-6'>
                <h2 className='text-5xl font-semibold'>
                    Прості та смачні рецепти
                </h2>
                <p className='text-center text-black/60 mx-92.5'>
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut
                    enim ad minim
                </p>
            </div>
            <div className='flex flex-wrap justify-between gap-10 mt-24'>
                {data.map((receip, indx) => (
                    <ReceipCard
                        key={indx}
                        img={receip.img}
                        title={receip.title}
                        isFavorite={receip.isFavorite}
                        cookingTime={receip.cookingTime}
                        category={receip.category}
                    />
                ))}
            </div>
        </section>
    )
}
