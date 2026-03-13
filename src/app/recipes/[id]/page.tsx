import SingleReceip from '@/components/layout/recipe/singleRecipe'

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    return (
        <div className='pt-20 pb-40'>
            <SingleReceip />
        </div>
    )
}
