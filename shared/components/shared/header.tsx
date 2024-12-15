'use client'

import React from 'react'

import { cn } from '@/shared/lib/utils'

import Image from 'next/image'
import Link from 'next/link'

import { Container } from './container'

import { SearchInput } from './search-input'
import { CartButton } from './cart-button'
import { ProfileButton } from './profile-button'
import { AuthModal } from './modals'
import { useRouter, useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'

interface Props {
    hasSearch?: boolean
    hasCart?: boolean
    className?: string
}

export const Header: React.FC<Props> = ({ hasSearch = true, hasCart = true, className }) => {
    const router = useRouter()

    const [openAuthModal, setOpenAuthModal] = React.useState(false)

    const searchParams = useSearchParams()

    React.useEffect(() => {
        let toastMessage = ''

        if (searchParams.has('thank-you')) {
            toastMessage = 'Order successfully paid! Information sent to email.'
        }

        if (searchParams.has('verify')) {
            toastMessage = 'Email successfully verified'
        }

        if (toastMessage) {
            setTimeout(() => {
                router.replace('/')
                toast.success(toastMessage, {
                    duration: 3000
                })
            }, 1000)
        }
    }, [router, searchParams])

    return (
        <header className={cn('border-b ', className)}>
            <Container className='flex items-center justify-between py-8'>

                {/* Left Side */}
                <Link href={'/'}>
                    <div className='flex items-center gap-4'>
                        <Image src='/logo.png' alt='logo' width={35} height={35} />
                        <div >
                            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                            <p className="text-sm text-gray-400 leading-3">it couldn&apos;t be tastier</p>
                        </div>
                    </div>
                </Link>

                {hasSearch && (
                    <div className='mx-10 flex-1'>
                        <SearchInput />
                    </div>
                )}

                {/* Right Side */}
                <div className='flex items-center gap-3'>
                    <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />

                    <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

                    {hasCart && <CartButton />}
                </div>

            </Container>
        </header>
    )
}