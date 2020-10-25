import React from 'react'
import Main from '../Main'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const App = () => {
  return (
    <HelmetProvider>
      <React.StrictMode>
        <Helmet>
          <script src='https://developer.edamam.com/attribution/badge.js' />
          <body className='bg-gray-100' />
        </Helmet>
        <Main />
      </React.StrictMode>
    </HelmetProvider>
  )
}

export default App
