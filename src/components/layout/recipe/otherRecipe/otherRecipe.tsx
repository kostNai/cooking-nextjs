import MeetBall from '@/../public/otherRecipe/meetball.png'
import Pasta from '@/../public/otherRecipe/pasta.png'
import Rice from '@/../public/otherRecipe/rice.png'
import OtherRecipeCard from './otherRecipeCard'

export default function OtherReceipe() {
    const otherRecipes = [
        {
            image: MeetBall,
            title: 'Курячі фрикадельки з вершковим сиром',
            author: 'Іван Захарченко',
        },
        {
            image: Pasta,
            title: 'Найкремовіша курка з вершковим соусом та базеліком',
            author: 'Іван Захарченко',
        },
        {
            image: Rice,
            title: 'Найкращий простий рецепт курки з рисом, приготований в одній каструлі',
            author: 'Іван Захарченко',
        },
    ]

    return (
        <div>
            <h2 className='text-[32px] font-semibold'>Інші рецепти</h2>
            <div className='pt-8 flex flex-col gap-8'>
                {otherRecipes.map((recipe) => (
                    <OtherRecipeCard
                        key={recipe.title}
                        image={recipe.image}
                        title={recipe.title}
                        author={recipe.author}
                    />
                ))}
            </div>
        </div>
    )
}
