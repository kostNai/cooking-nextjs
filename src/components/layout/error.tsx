type Props = {
    message: string
    reset?: () => void
}

export default function Error({ message, reset }: Props) {
    return (
        <>
            Помилка: {message}
            <button onClick={() => reset}>Повторити</button>
        </>
    )
}
