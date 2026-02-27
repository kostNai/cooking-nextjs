import CategoriesList from '@/components/layout/categories/categoriesList'
import ChefBanner from '@/components/layout/chefBanner'
import MainBanner from '@/components/layout/mainBanner'
import SimpleReceips from '@/components/layout/simpleReceips'

export default function Home() {
    return (
        <div>
            <MainBanner />
            <CategoriesList />
            <SimpleReceips />
            <ChefBanner />
        </div>
    )
}
