import React, { useRef } from 'react'
import './SignUpScreen.css'
import { auth } from '../firebase'

export const SignUpScreen = () => {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)


  const register = (e) => {
    e.preventDefault()

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch(error => {
      alert(error.message)
    })
  }

  const signIn = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch(error => {
      alert(error.message)
    })
  }


  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Insira um email'/>
        <input ref={passwordRef} type="password" placeholder='Insira uma senha' />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>
          <span className='signUpScreen-gray'>Novo na Netflix? </span> 
          <span className='signUpScreen-link' onClick={register}>Inscrever-se agora.</span>
        </h4>
      </form>
    </div>
  )
}


