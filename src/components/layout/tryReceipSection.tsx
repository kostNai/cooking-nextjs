import Beef from '@/../public/try-receips/beef.png'
import ChickenSalad from '@/../public/try-receips/chicken-salad.png'
import FruitSalad from '@/../public/try-receips/fruit-salad.png'
import JapaneseRice from '@/../public/try-receips/japanese-rice.png'
import Ramen from '@/../public/try-receips/ramen.png'
import Sandwich from '@/../public/try-receips/sandwich.png'
import Taco from '@/../public/try-receips/taco.png'
import WeganWrap from '@/../public/try-receips/wegan-wrap.png'
import ReceipCard from '../feature/receipCard'

const data = [
    {
        img: FruitSalad,
        title: 'Салат із змішаних тропічних фруктів із суперпродуктами',
        isFavorite: true,
        cookingTime: 30,
        category: 'Здорова їжа',
    },
    {
        img: Beef,
        title: 'Великий і соковитий чізбургер з яловичиною вагю',
        isFavorite: false,
        cookingTime: 30,
        category: 'Western',
    },
    {
        img: JapaneseRice,
        title: 'Здоровий японський смажений рис з спаржею',
        isFavorite: true,
        cookingTime: 30,
        category: 'Здорова їжа',
    },
    {
        img: Taco,
        title: "Вегетаріанське м'ясо для тако з капустою та горіхами",
        isFavorite: true,
        cookingTime: 30,
        category: 'Eastern',
    },
    {
        img: ChickenSalad,
        title: 'Салат з куркою «Веселка» з мигдалево-медовим гірчичним соусом',
        isFavorite: true,
        cookingTime: 30,
        category: 'Здорова їжа',
    },
    {
        img: Sandwich,
        title: 'Пікантні сендвічі з барбекю та чіпсами ',
        isFavorite: false,
        cookingTime: 30,
        category: 'Снеки',
    },
    {
        img: WeganWrap,
        title: 'Веганські рулетики з салату з петардами - гострі!',
        isFavorite: false,
        cookingTime: 30,
        category: 'Морепродукти',
    },
    {
        img: FruitSalad,
        title: 'Курячий рамен з грибами',
        isFavorite: true,
        cookingTime: 30,
        category: 'Японська кухня',
    },
]

export default function TryReceipSection() {
    return (
        <section className='py-40'>
            <div className='flex gap-37.5 items-center'>
                <h2 className='text-5xl font-semibold w-200 leading-15'>
                    Спробуйте цей смачний рецепт, щоб зробити свій день кращим.
                </h2>
                <p className='text-black/40'>
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut
                    enim ad minim
                </p>
            </div>
            <div className='mt-20 flex flex-wrap justify-between gap-10 *:w-72.5 [&_h3]:text-lg'>
                {data.map((receip) => (
                    <ReceipCard
                        key={receip.title}
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
