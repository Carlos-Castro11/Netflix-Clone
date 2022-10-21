import {React, useState} from 'react'
import './LoginScreen.css'

// COMPONENTS
import { SignUpScreen } from '../SignUpScreen'

export const LoginScreen = () => {

    const [ signIn, setSignIn ] = useState(false)

  return (
    <div className='loginScreen'>
        <div className="loginScreen-background">
            <img 
            className='loginScreen-logo'
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <button 
            onClick={() => setSignIn(true)} 
            className='loginScreen-button'
            >
                Sign In
            </button>

            <div className='loginScreen-gradient' />
        </div>

        <div className="loginScreen-body">
            {signIn ? (
                <SignUpScreen />
            ): (
                <>
                <h1>Filmes ilimitados, programas de TV e mais.</h1>
                <h2>
                    Assista de qualquer lugar. Cancele a qualquer hora.
                </h2>
                <h3>
                    Pronto para assistir? Insira seu e-mail para 
                    criar ou renovar uma assinatura.
                </h3>

                <div className="loginScreen-input">
                    <form>
                        <input type="email" 
                        placeholder='E-mail'/>
                        <button 
                        onClick={() => setSignIn(true)}
                        className='loginScreen-getStarted'
                        >
                            Começar Agora
                        </button>
                    </form>
                </div>
            </>
            )}
        </div>
    </div>
  )
}


