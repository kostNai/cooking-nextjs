import { BiLoaderCircle } from 'react-icons/bi'

type Props = {
    size: number
}

export default function Loading({ size }: Props) {
    return (
        <div className=' bg-white flex justify-center items-center'>
            <BiLoaderCircle
                className=' transition-transform duration-300 animate-spin'
                size={size}
            />
        </div>
    )
}
