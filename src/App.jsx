import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Universal/Navbar'
import Home from './Components/HomePage/Home'
import Contact from './Components/ContactPage/Contact'
import Community from './Components/Community/Community';
import Learn from './Components/Learn/Learn';
function App() {
    

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Learn' element={<Learn />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Community' element={<Community />} />
                </Routes>
            </BrowserRouter>
            
        </>
    )
}

export default App
