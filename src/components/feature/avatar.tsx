import Image from 'next/image'
import { FaUser } from 'react-icons/fa'
type Props = {
    image?: string
}

export default function Avatar({ image }: Props) {
    return (
        <div>
            {image ? (
                <Image src={image} alt='Картинка з зображенням користувача' />
            ) : (
                <FaUser size={50} />
            )}
        </div>
    )
}
