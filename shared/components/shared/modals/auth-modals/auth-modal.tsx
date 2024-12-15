import { Button, Dialog, DialogContent } from '@/shared/components/ui'
import { signIn } from 'next-auth/react'
import React from 'react'
import { LoginForm } from './forms/login-form'
import { RegisterForm } from './forms/register-form'

interface Props {
    open?: boolean
    onClose: () => void
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
    const [type, setType] = React.useState<'login' | 'register'>('login')

    const onSwitchType = () => {
        setType(type === 'login' ? 'register' : 'login')
    }

    const handleClose = () => {
        onClose()
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className='w-[450px] bg-white p-10'>

                {
                    type === 'login' ? (<LoginForm onClose={handleClose} />
                    ) : (<RegisterForm onClose={handleClose} />)
                }

                <hr />

                <div className='flex gap-2'>
                    <Button
                        variant='secondary'
                        onClick={() => signIn('github', { callbackUrl: '/', redirect: true })}
                        type='button'
                        className='gap-2 h-12 p-2 flex-1'
                    >
                        <img className='size-6' src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' />
                        GitHub
                    </Button>
                </div>

                <div className='flex gap-2'>
                    <Button
                        variant='secondary'
                        onClick={() => signIn('google', { callbackUrl: '/', redirect: true })}
                        type='button'
                        className='gap-2 h-12 p-2 flex-1'
                    >
                        <img className='size-6' src='https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png' />
                        Google
                    </Button>
                </div>

                <Button variant='outline' onClick={onSwitchType} type='button' className='h-12'>
                    {type !== 'login' ? 'Login' : 'Register'}
                </Button>

            </DialogContent>
        </Dialog>
    )
}
