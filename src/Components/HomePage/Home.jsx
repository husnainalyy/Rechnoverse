import React from 'react'
import Navbar from '../Universal/Navbar'
import WhatDo from './WhatDo'
import Stories from './Stories'
import Footer from '../Universal/Footer'
import GreenPicture from './GreenPicture'
import WhoWe from './WhoWe'
import Carousal from './Carousal'
function Home() {
    return (
        <>
           
            <Carousal/>
            <WhatDo />
            <Stories />
            <GreenPicture />
            <WhoWe />
            <Footer />
        </>
    )
}

export default Home