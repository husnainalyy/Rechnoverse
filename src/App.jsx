import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Universal/Navbar'
import Home from './Components/HomePage/Home'
import Contact from './Components/ContactPage/Contact'
import Community from './Components/Community/Community';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Community' element={<Community />} />
                </Routes>
            </BrowserRouter>
            
        </>
    )
}

export default App
