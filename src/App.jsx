import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes, Link, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Create from './components/Create'

function App() {
  const { search, pathname } = useLocation();

  return (
    <div className='h-screen w-screen flex'>
      {(pathname != "/" || search.length > 0) &&(
        <Link to="/"
          className="text-red-400 absolute left-[17%] top-[3%]"
        >
          Home
        </Link>
      )}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/create' element={<Create/>} />
      </Routes>
    </div>
  )
}

export default App
