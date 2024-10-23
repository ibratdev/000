import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='flex'>
        <aside>
          <Sidebar />
        </aside>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  )
}

export default App
