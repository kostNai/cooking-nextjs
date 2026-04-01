'use client'

import { useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'

type Props = {
    open: boolean
    onClose: () => void
    children: ReactNode
}

export default function Modal({ open, onClose, children }: Props) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [open])

    if (!open) return null

    return createPortal(
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className='absolute inset-0 bg-black/50' onClick={onClose} />
            <div
                className='relative z-10 bg-white rounded-xl p-6 w-100 shadow-xl'
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.body
    )
}
