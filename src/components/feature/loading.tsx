import { BiLoaderCircle } from 'react-icons/bi'

type Props = {
    size: number
}

export default function Loading({ size }: Props) {
    return (
        <div className='absolute w-[calc(100vw-20px)] h-screen z-100 top-0 left-0 bg-white flex justify-center items-center'>
            <BiLoaderCircle
                className=' transition-transform duration-300 animate-spin'
                size={size}
            />
        </div>
    )
}
