'use client'

import Image from 'next/image'
import { useRef, useState, ChangeEvent } from 'react'
import { FaUser } from 'react-icons/fa'
import { MdAddPhotoAlternate } from 'react-icons/md'

type Props = {
    image?: string
    setIsFileChange: (isFileChange: boolean) => void
}

export default function Avatar({ image, setIsFileChange }: Props) {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [preview, setPreview] = useState<string | null>(null)

    const handleButtonClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const url = URL.createObjectURL(file)
            setPreview(url)
            setIsFileChange(true)
        }
    }

    console.log(image)

    return (
        <div className='relative w-fit h-fit'>
            <div
                className={`${
                    image ? '' : 'p-4'
                }  rounded-full flex justify-center items-center border border-solid border-black/20 overflow-hidden`}
            >
                {preview ? (
                    <Image
                        src={preview}
                        alt='preview'
                        width={100}
                        height={100}
                        className='object-cover'
                        unoptimized
                    />
                ) : image ? (
                    <Image
                        src={image}
                        alt='Картинка з зображенням користувача'
                        width={100}
                        height={100}
                        className='object-cover'
                        unoptimized
                    />
                ) : (
                    <FaUser size={50} />
                )}
            </div>
            <input
                type='file'
                ref={fileInputRef}
                className='hidden'
                name='image'
                accept='image/*'
                onChange={handleFileChange}
            />

            <MdAddPhotoAlternate
                className='absolute z-100 bottom-2 -right-1 cursor-pointer transition-transform duration-300 hover:scale-115'
                size={24}
                color='#FF5656'
                onClick={handleButtonClick}
            />
        </div>
    )
}
