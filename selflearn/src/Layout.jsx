import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-all duration-500">
      <Header />
      <main className="flex-1 flex justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
