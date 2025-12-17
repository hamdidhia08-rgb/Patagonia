import LoginCard from '@/Components/Card/LoginCard'
import Navbar from '@/Components/Navbar/Nav'
import TopBar from '@/Components/TopBar/TopBar'
import React from 'react'

export default function page() {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <LoginCard/>
        
    </div>
  )
}
