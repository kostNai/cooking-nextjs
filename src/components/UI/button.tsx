type Props = {
    type: 'submit' | 'reset' | 'button'
    disabled: boolean
    children: React.ReactNode
    onClick?: () => void
}

export default function Button({ type, disabled, children, onClick }: Props) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className='px-8 py-4 bg-black text-white rounded-2xl cursor-pointer flex gap-2 items-center transition-transform duration-300 hover:scale-110'
        >
            {children}
        </button>
    )
}
