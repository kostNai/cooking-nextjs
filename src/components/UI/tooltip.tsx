'use client'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
    text: string
    children: ReactNode
    delay?: number
}
type TooltipCoords = {
    top: number
    left: number
    placement: 'top' | 'bottom'
}

export default function Tooltip({ children, text, delay = 300 }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [isOverflow, setIsOverflow] = useState(false)
    const [visible, setVisible] = useState(false)
    const [coords, setCoords] = useState<TooltipCoords | null>(null)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const check = () => {
            setIsOverflow(el.scrollWidth > el.clientWidth)
        }

        check()

        const observer = new ResizeObserver(check)
        observer.observe(el)

        return () => observer.disconnect()
    }, [])

    const handleMouseEnter = () => {
        if (!isOverflow) return

        timeoutRef.current = setTimeout(() => {
            const rect = ref.current!.getBoundingClientRect()

            // const tooltipWidth = 200
            const spaceBelow = window.innerHeight - rect.bottom
            const showAbove = spaceBelow < 40

            setCoords({
                top: showAbove ? rect.top - 8 : rect.bottom + 8,
                left: rect.left + rect.width / 2,
                placement: showAbove ? 'top' : 'bottom',
            })

            setVisible(true)
        }, delay)
    }

    const handleMouseLeave = () => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current)
            setVisible(false)
        }
    }

    return (
        <>
            <div
                ref={ref}
                className='truncate'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>

            {visible &&
                coords &&
                createPortal(
                    <div
                        style={{
                            position: 'fixed',
                            top: coords.top,
                            left: coords.left,
                            transform: 'translateX(-50%)',
                        }}
                        className={`
                z-9999
                pointer-events-none
                transition-all duration-200
                ${
                    coords.placement === 'top'
                        ? '-translate-y-1'
                        : 'translate-y-1'
                }
                opacity-100 scale-100
              `}
                    >
                        <div className='bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap'>
                            {text}
                        </div>
                    </div>,
                    document.body
                )}
        </>
    )
}
