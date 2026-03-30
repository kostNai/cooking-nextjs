import Image from 'next/image'
import { FaUser } from 'react-icons/fa'
import { MdAddPhotoAlternate } from 'react-icons/md'

type Props = {
    image?: string
}

export default function Avatar({ image }: Props) {
    return (
        <div className='relative p-4 w-fit h-fit rounded-full flex justify-center items-center border border-solid border-black/20'>
            {image ? (
                <Image src={image} alt='Картинка з зображенням користувача' />
            ) : (
                <FaUser size={50} />
            )}
            <MdAddPhotoAlternate
                className='absolute bottom-2 -right-1 cursor-pointer transition-transform duration-300 hover:scale-115'
                size={24}
                color='#FF5656'
            />
        </div>
    )
}
