import React from 'react'
import errorPage from '../../assets/errorPage.png'

const ErrorPage = () => {
  return (
    <>
    <div className='container'>
        <div className='flex items-center justify-center'>
            <img src={errorPage} alt={errorPage} />
        </div>
    </div>
    </>
  )
}

export default ErrorPage