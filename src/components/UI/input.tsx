import { ChangeEvent } from 'react'

type Props = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void
    type: string
    placeholder: string
    name: string
}

export default function Input({
    value,
    onChange,
    type,
    placeholder,
    name,
}: Props) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className='text-sm px-5 py-4.5 border border-solid border-black/10 rounded-2xl focus:outline-black/60 '
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}
